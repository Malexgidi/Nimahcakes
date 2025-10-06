// src/app/api/sendOrderEmail/route.js
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, orderDetails } = await req.json();

//     // configure transporter (use your real SMTP or service like SendGrid / Resend / Gmail)
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or your SMTP service
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Nimah Cakes" <${process.env.EMAIL_USER}>`,
//       to: "nimah@example.com", // Nimah’s email address
//       subject: "🛒 New Order Received",
//       text: `
//         New Order from ${customerName} (${customerEmail})
        
//         Order Type: ${orderDetails.type}
//         Address: ${orderDetails.address}
//         Date: ${orderDetails.date} @ ${orderDetails.time}
//         Total: ₦${orderDetails.total.toLocaleString()}
        
//         Items:
//         ${orderDetails.items.map(i => `${i.name} (x${i.quantity}) - ₦${i.unitTotal}`).join("\n")}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("Email send error:", err);
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, orderDetails } = await req.json();

//     // Setup transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or your mail provider
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL, // 👈 your Nimah Cakes email
//       subject: `New Order from ${customerName}`,
//       text: `
//         New Order Details:

//         Name: ${customerName}
//         Email: ${customerEmail}
//         Type: ${orderDetails.type}
//         Address: ${orderDetails.address}
//         Date: ${orderDetails.date}
//         Time: ${orderDetails.time}
//         Total: ₦${orderDetails.total}

//         Items:
//         ${orderDetails.items.map(i => `${i.name} (x${i.quantity})`).join("\n")}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
//   }
// }

// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, orderDetails } = await req.json();

//     // Setup transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // or your mail provider
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Build items section
//     const itemsList = orderDetails.items
//       .map(
//         (i) =>
//           `${i.product?.name || "Unknown Item"} (x${i.quantity}) - ₦${i.unitTotal?.toLocaleString() || 0}`
//       )
//       .join("\n");

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL, // 👈 Nimah Cakes email
//       subject: `New Order from ${customerName || "Customer"}`,
//       text: `
// New Order Details:

// Name: ${customerName || "N/A"}
// Email: ${customerEmail || "N/A"}
// Type: ${orderDetails.type}
// Address: ${orderDetails.address}
// Date: ${orderDetails.date}
// Time: ${orderDetails.time}
// Total: ₦${orderDetails.total?.toLocaleString()}

// Items:
// ${itemsList}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(JSON.stringify({ success: false, error: error.message }), {
//       status: 500,
//     });
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, orderDetails } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Build items list with customizations
//     const itemsList = orderDetails.items
//       .map((i) => {
//         const name = i.product?.name || i.name || "Unknown Item";
//         const opts = i.options || {};
//         return `
// ${name} (x${i.quantity})
// - Size: ${opts.size || "N/A"}
// - Layers: ${opts.layers || "N/A"}
// - Flavors: ${opts.flavors?.join(", ") || "N/A"}
// - Color: ${opts.color || "N/A"}
// - Message: ${opts.message || "N/A"}
// - Topper: ${opts.customTopper ? "Yes (+₦3,000)" : "No"}
// - Picture Added: ${opts.pictureAdded ? "Yes (+₦1,000)" : "No"}
// - Unit Price: ₦${opts.unitTotal?.toLocaleString() || 0}
// - Line Total: ₦${(opts.unitTotal * i.quantity)?.toLocaleString() || 0}
//         `;
//       })
//       .join("\n\n");

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Order from ${customerName || "Customer"}`,
//       text: `
// New Order Details:

// Name: ${customerName || "N/A"}
// Email: ${customerEmail || "N/A"}
// Type: ${orderDetails.type}
// Address: ${orderDetails.address}
// Date: ${orderDetails.date}
// Time: ${orderDetails.time}
// Total: ₦${orderDetails.total?.toLocaleString()}

// Items:
// ${itemsList}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, orderDetails } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Build items list from flat cart structure
// //     const itemsList = orderDetails.items
// //       .map((i) => {
// //         return `
// // ${i.name || "Unknown Item"} (x${i.quantity})
// // - Size: ${i.size || "N/A"}
// // - Layers: ${i.layers || "N/A"}
// // - Flavors: ${i.flavors?.join(", ") || "N/A"}
// // - Color: ${i.color || "N/A"}
// // - Message: ${i.message || "N/A"}
// // - Topper: ${i.customTopper ? "Yes (+₦3,000)" : "No"}
// // - Picture Added: ${i.pictureAdded ? "Yes (+₦1,000)" : "No"}
// // - Unit Price: ₦${i.unitPrice?.toLocaleString() || 0}
// // - Line Total: ₦${(i.unitTotal * i.quantity)?.toLocaleString() || 0}
// //         `;
// //       })
// //       .join("\n\n");

// const itemsList = orderDetails.items
//   .map((i) => {
//     return `
// ${i.name || "Unknown Item"} (x${i.quantity})
// - Size: ${i.size || "N/A"}
// - Layers: ${i.layers || "N/A"}
// - Flavors: ${i.flavors?.join(", ") || "N/A"}
// - Color: ${i.color || "N/A"}
// - Message: ${i.message || "N/A"}
// - Topper: ${i.customTopper ? "Yes (+₦3,000)" : "No"}
// - Picture Added: ${i.pictureAdded ? "Yes (+₦1,000)" : "No"}
// - Unit Price: ₦${i.unitPrice?.toLocaleString() || 0}
// - Line Total: ₦${(i.unitPrice * i.quantity)?.toLocaleString() || 0}
//     `;
//   })
//   .join("\n\n");


//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Order from ${customerName || "Customer"}`,
//       text: `
// New Order Details:

// Name: ${customerName || "N/A"}
// Email: ${customerEmail || "N/A"}
// Type: ${orderDetails.type}
// Address: ${orderDetails.address}
// Date: ${orderDetails.date}
// Time: ${orderDetails.time}
// Total: ₦${orderDetails.total?.toLocaleString()}

// Items:
// ${itemsList}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, customerPhone, orderDetails } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Build items list with safe fallbacks
//     const itemsList = orderDetails.items
//       .map((i) => {
//         const unitPrice = i.unitPrice ?? i.price ?? 0; // ✅ fallback fix
//         const lineTotal = unitPrice * (i.quantity || 1);

//         return `
// ${i.name || "Unknown Item"} (x${i.quantity || 1})
// - Size: ${i.size || "N/A"}
// - Layers: ${i.layers || "N/A"}
// - Flavors: ${i.flavors?.join(", ") || "N/A"}
// - Color: ${i.color || "N/A"}
// - Message: ${i.message || "N/A"}
// - Topper: ${i.customTopper ? "Yes (+₦3,000)" : "No"}
// - Picture Added: ${i.pictureAdded ? "Yes (+₦1,000)" : "No"}
// - Unit Price: ₦${unitPrice.toLocaleString()}
// - Line Total: ₦${lineTotal.toLocaleString()}
//         `;
//       })
//       .join("\n\n");

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Order from ${customerName || "Customer"}`,
//       text: `
// New Order Details:

// Name: ${customerName || "N/A"}
// Email: ${customerEmail || "N/A"}
// Phone: ${orderDetails.customerPhone || "N/A"}
// Type: ${orderDetails.type}
// Address: ${orderDetails.address}
// Date: ${orderDetails.date}
// Time: ${orderDetails.time}
// Total: ₦${orderDetails.total?.toLocaleString()}

// Items:
// ${itemsList}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }


// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { customerName, customerEmail, customerPhone, orderDetails } =
//       await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const itemsList = orderDetails.items
//       .map((i) => {
//         const unitPrice = i.unitPrice ?? i.price ?? 0;
//         const lineTotal = unitPrice * (i.quantity || 1);

//         return `
// ${i.name || "Unknown Item"} (x${i.quantity || 1})
// - Size: ${i.options?.size || "N/A"}
// - Layers: ${i.options?.layers || "N/A"}
// - Flavors: ${i.options?.flavors?.join(", ") || "N/A"}
// - Color: ${i.options?.color || "N/A"}
// - Message: ${i.options?.message || "N/A"}
// - Topper: ${i.options?.customTopper ? "Yes (+₦3,000)" : "No"}
// - Picture Added: ${i.options?.pictureAdded ? "Yes (+₦1,000)" : "No"}
// - Unit Price: ₦${unitPrice.toLocaleString()}
// - Line Total: ₦${lineTotal.toLocaleString()}
//         `;
//       })
//       .join("\n\n");

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Order from ${customerName || "Customer"}`,
//       text: `
// New Order Details:

// Name: ${customerName || "N/A"}
// Email: ${customerEmail || "N/A"}
// Phone: ${customerPhone || "N/A"}
// Type: ${orderDetails.type}
// Address: ${orderDetails.address}
// Date: ${orderDetails.date}
// Time: ${orderDetails.time}
// Total: ₦${orderDetails.total?.toLocaleString()}

// Items:
// ${itemsList}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500 }
//     );
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { customerName, customerPhone, orderDetails } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsList = orderDetails.items
      .map((i) => {
        const unitPrice = i.unitPrice ?? i.price ?? 0;
        const lineTotal = unitPrice * (i.quantity || 1);
        return `
${i.name || "Unknown Item"} (x${i.quantity || 1})
- Size: ${i.options?.size || "N/A"}
- Layers: ${i.options?.layers || "N/A"}
- Flavors: ${i.options?.flavors?.join(", ") || "N/A"}
- Color: ${i.options?.color || "N/A"}
- Message: ${i.options?.message || "N/A"}
- Topper: ${i.options?.customTopper ? "Yes (+₦3,000)" : "No"}
- Picture Added: ${i.options?.pictureAdded ? "Yes (+₦1,000)" : "No"}
- Unit Price: ₦${unitPrice.toLocaleString()}
- Line Total: ₦${lineTotal.toLocaleString()}
        `;
      })
      .join("\n\n");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `🧁 New Order from ${customerName || "Customer"}`,
      text: `
New Order Details:

Name: ${customerName || "N/A"}
Phone: ${customerPhone || "N/A"}
Type: ${orderDetails.type}
Address: ${orderDetails.address}
Date: ${orderDetails.date}
Time: ${orderDetails.time}
Total: ₦${orderDetails.total?.toLocaleString()}

Items:
${itemsList}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
