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


import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { customerName, customerEmail, orderDetails } = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your mail provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // 👈 your Nimah Cakes email
      subject: `New Order from ${customerName}`,
      text: `
        New Order Details:

        Name: ${customerName}
        Email: ${customerEmail}
        Type: ${orderDetails.type}
        Address: ${orderDetails.address}
        Date: ${orderDetails.date}
        Time: ${orderDetails.time}
        Total: ₦${orderDetails.total}

        Items:
        ${orderDetails.items.map(i => `${i.name} (x${i.quantity})`).join("\n")}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
