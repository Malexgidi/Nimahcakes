// "use client";

// import { useState } from "react";

// export default function BookingSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Nimah’s WhatsApp number (no "+" sign)
//     const phoneNumber = "2348027698132";

//     // Pre-fill WhatsApp message
//     const whatsappMessage = `Hello Nimah Cakes 👋, I would like to make a booking:
    
// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}
// 📝 Details: ${formData.message}`;

//     // Encode message for URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     // Redirect to WhatsApp
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
//   };

//   return (
//     <section
//       id="booking"
//       className="pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center"
//     >
//       <h2 className="text-3xl text-black font-bold mb-6">
//         Book Us for Your Next Event
//       </h2>
//       <p className="mb-6 text-black">
//         Need a special meal or catering for your next celebration? We’ve got you.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto grid grid-cols-1 gap-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         {/* <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         /> */}
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="What do you need?"
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
//         >
//           Submit Booking
//         </button>
//       </form>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function BookingSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     service: "",
//     date: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Nimah’s WhatsApp number (no "+" sign)
//     const phoneNumber = "2348027698132";

//     // Pre-fill WhatsApp message
//     const whatsappMessage = `Hello Nimah Cakes 👋, I would like to make a booking:

// 👤 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 🍴 Service Required: ${formData.service}
// 📅 Date of Event: ${formData.date}
// 📍 Event Location: ${formData.location}`;

//     // Encode message for URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     // Redirect to WhatsApp
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
//   };

//   return (
//     <section
//       id="booking"
//       className="pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center"
//     >
//       <h2 className="text-3xl text-black font-bold mb-6">
//         Book Us for Your Next Event
//       </h2>
//       <p className="mb-6 text-black">
//         Need a special meal or catering for your next celebration? We’ve got you.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto grid grid-cols-1 gap-4 text-left"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         <select
//           name="service"
//           value={formData.service}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         >
//           <option value="">Select Service Required</option>
//           <option value="Cakes">Cakes</option>
//           <option value="Small Chops">Small Chops</option>
//           <option value="Grills">Grills</option>
//           <option value="Cocktails">Cocktails</option>
//           <option value="Desserts">Desserts</option>
//           <option value="Catering">Catering</option>
//         </select>
        
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Event Location"
//           value={formData.location}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-red-500 text-white py-3 px-6 rounded hover:bg-green-600 transition"
//         >
//           📲 Send Booking via WhatsApp
//         </button>
//       </form>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function BookingSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     services: [], // now an array
//     date: "",
//     location: "",
//   });

//   const [flavors, setFlavors] = useState([]);

//   const handleChange = (e) => {
//     const { name, value, options, type } = e.target;

//     if (type === "select-multiple") {
//       // collect all selected values
//       const selected = Array.from(options)
//         .filter((opt) => opt.selected)
//         .map((opt) => opt.value);
//       setFormData({ ...formData, [name]: selected });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const phoneNumber = "2348027698132";

//     const whatsappMessage = `Hello Nimah Cakes 👋, I would like to make a booking:

// 👤 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 🍴 Services Required: ${formData.services.join(", ")}
// 📅 Date of Event: ${formData.date}
// 📍 Event Location: ${formData.location}`;

//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
//   };

//   const toggleFlavor = (flavor) => {
//     setFlavors((prev) =>
//       prev.includes(flavor)
//         ? prev.filter((f) => f !== flavor)
//         : [...prev, flavor]
//     );
//   };

//   return (
//     <section
//       id="booking"
//       className="pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center"
//     >
//       <h2 className="text-3xl text-black font-bold mb-6">
//         Book Us for Your Next Event
//       </h2>
//       <p className="mb-6 text-black">
//         Need a special meal or catering for your next celebration? We’ve got you.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto grid grid-cols-1 gap-4 text-left"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         {/* <select
//           name="services"
//           multiple
//           value={formData.services}
//           onChange={handleChange}
//           className="p-3 border rounded h-32"
//           required
//         >
//           <option value="Cakes">Cakes</option>
//           <option value="Small Chops">Small Chops</option>
//           <option value="Grills">Grills</option>
//           <option value="Cocktails">Cocktails</option>
//           <option value="Desserts">Desserts</option>
//           <option value="Catering">Catering</option>
//         </select> */}

// <div>
//         <label className="block mb-1 font-medium">Service Required</label>
//         <div className="grid grid-cols-2 gap-2">
//           {['Cakes', 'Smallchops', 'Grills', 'Cocktails', 'Desserts', 'Catering'].map((flavor) => (
//             <label key={flavor} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={flavors.includes(flavor)}
//                 onChange={() => toggleFlavor(flavor)}
//               />
//               {flavor}
//             </label>
//           ))}
//         </div>
//       </div>


//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Event Location"
//           value={formData.location}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
//         >
//           📲 Send Booking via WhatsApp
//         </button>
//       </form>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function BookingSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     services: [], // array for selected services
//     date: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // ✅ toggle services with checkboxes
//   const toggleService = (service) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter((s) => s !== service) // remove if already selected
//         : [...prev.services, service], // add if not selected
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const phoneNumber = "2348027698132";

//     const whatsappMessage = `Hello Nimah Cakes 👋, I would like to make a booking:

// 👤 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 🍴 Services Required: ${formData.services.join(", ")}
// 📅 Date of Event: ${formData.date}
// 📍 Event Location: ${formData.location}`;

//     const encodedMessage = encodeURIComponent(whatsappMessage);
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
//   };

//   return (
//     <section
//       id="booking"
//       className="pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center"
//     >
//       <h2 className="text-3xl text-black font-bold mb-6">
//         Book Us for Your Next Event
//       </h2>
//       <p className="mb-6 text-black">
//         Need a special meal or catering for your next celebration? We’ve got you.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto grid grid-cols-1 gap-4 text-left"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         {/* ✅ Checkboxes for services */}
//         <div>
//           <label className="block mb-1 font-medium">Service Required</label>
//           <div className="grid grid-cols-2 gap-2">
//             {["Cakes", "Small Chops", "Grills", "Cocktails", "Desserts", "Catering"].map(
//               (service) => (
//                 <label key={service} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={formData.services.includes(service)}
//                     onChange={() => toggleService(service)}
//                   />
//                   {service}
//                 </label>
//               )
//             )}
//           </div>
//         </div>

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Event Location"
//           value={formData.location}
//           onChange={handleChange}
//           className="p-3 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
//         >
//           📲 Send Booking via WhatsApp
//         </button>
//       </form>
//     </section>
//   );
// }


"use client";

import { useState } from "react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [], // stores selected services
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ update formData.services directly when checkbox toggled
  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service) // remove
        : [...prev.services, service], // add
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348179528822";

    const whatsappMessage = `Hello Nimah 👋, I would like to make a booking:

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🍴 Services Required: ${formData.services.length > 0 ? formData.services.join(", ") : "Not specified"}
📅 Date of Event: ${formData.date}
📍 Event Location: ${formData.location}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="booking"
      className="pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center"
    >
      <h2 className="text-3xl text-black font-bold mb-6">
        Book Us for Your Next Event
      </h2>
      <p className="mb-6 text-black">
        Need a special meal or catering for your next celebration? We’ve got you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid grid-cols-1 gap-4 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />

        {/* ✅ Services checkboxes */}
        <div>
          <label className="block mb-1 font-medium">Service Required</label>
          <div className="grid grid-cols-2 gap-2">
            {["Cakes", "Small Chops", "Grills", "Cocktails", "Desserts", "Catering"].map(
              (service) => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              )
            )}
          </div>
        </div>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600 transition"
        >
          📲 Send Booking via WhatsApp
        </button>
      </form>
    </section>
  );
}
