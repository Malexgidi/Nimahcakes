// components/Footer.tsx

// export default function Footer() {
//   return (
//     <footer id="Footer" className="bg-gray-100 text-gray-800 py-12 px-6 md:px-20">
//       <div className="grid md:grid-cols-3 gap-10">

//         {/* Contact Info & Socials */}
//         <div>
//           <h4 className="text-xl font-bold mb-4 text-red-500">Contact Us</h4>
//           <p className="mb-2">📍 21, idowu mabadeje street valley view estate opposite waec office,Ikorodu Lagos. Or type Nimah Cakes and Cuisine on the map for easy direction.</p>
//           <p className="mb-2">📞 +23481 </p>
//           <p className="mb-4">📧 nimahcakesandcuisine@gmail.com</p>
//           <div className="flex space-x-4">
//           <a 
//     href="https://www.instagram.com/nimahhub/" 
//     target="_blank" 
//     rel="noopener noreferrer" 
//     className="hover:text-red-500"
//   >
//     Instagram
//   </a>
//             {/* <a href="#" className="hover:text-red-500">Facebook</a> */}
//             <a 
//     href="https://wa.me/2348027698132" 
//     target="_blank" 
//     rel="noopener noreferrer" 
//     className="hover:text-red-500"
//   >
//     WhatsApp
//   </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xl font-bold mb-4 text-red-500">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-red-500">Home</a></li>
//             <li><a href="#" className="hover:text-red-500">Cakes</a></li>
//             <li><a href="#" className="hover:text-red-500">Chops</a></li>
//             <li><a href="#" className="hover:text-red-500">Bookings</a></li>
//             <li><a href="#" className="hover:text-red-500">Contact</a></li>
//           </ul>
//         </div>

//         {/* Instagram Feed (Mocked as Images) */}
//         {/* <div>
//           <h4 className="text-xl font-bold mb-4 text-red-500">Instagram Feed</h4>
//           <div className="grid grid-cols-3 gap-2">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="w-full h-20 bg-red-100 rounded-md animate-pulse"></div>
//               // Replace with actual images later:
//               // <img src={`/images/insta${i}.jpg`} alt={`Insta ${i}`} className="w-full h-20 object-cover rounded" />
//             ))}
//           </div>
//         </div> */}
//         {/* <!-- SnapWidget --> */}
//         {/* <iframe  class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:765px; height:510px" title="Posts from Instagram"></iframe> */}
//         {/* <iframe
  
//      className="snapwidget-widget w-full h-[500px]"
//      allowTransparency={true}
//      frameBorder="0"
//      scrolling="no"
//      style={{ border: "none", overflow: "hidden" }}
//    ></iframe> */}
// {/* 
//      <iframe
//        src="https://snapwidget.com/embed/1108131" // replace with your SnapWidget link
//          className="snapwidget-widget w-full h-[500px]"
//          allowtransparency="true"
//          frameBorder="0"
//          scrolling="no"
//          style={{ border: "none", overflow: "hidden" }}
//      ></iframe> */}


//       </div>

//       <p className="text-center text-sm text-gray-500 mt-10">© {new Date().getFullYear()} Nimah Cakes & Cuisine. All rights reserved.</p>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-b from-white to-red-50 text-gray-800 py-16 px-6 md:px-20 border-t border-gray-200"
    >
      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-red-600">Contact Us</h4>
          <p className="text-lg font-medium leading-relaxed mb-4">
            📍 <span className="font-semibold">21, Idowu Mabadeje Street, Valley View Estate</span>  
            <br />
            Opposite WAEC Office, Ikorodu, Lagos.  
            <br />
            <span className="text-gray-600 italic">
              Or type “Nimah Cakes and Cuisine” on the map for easy direction.
            </span>
          </p>

          <p className="text-base mb-2">📞 <span className="font-semibold">+234 817 952 8822</span></p>
          <p className="text-base mb-6">📧 nimahcakesandcuisine@gmail.com</p>

          <h5 className="text-lg font-semibold mb-3 text-red-600">Our Socials</h5>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/nimahhub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/2348027698132"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-red-600">Quick Links</h4>
          <ul className="space-y-3 text-base">
            <li>
              <a href="/" className="hover:text-red-500 transition duration-300">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#productfilter" className="hover:text-red-500 transition duration-300">
                Cakes
              </a>
            </li>
            <li>
              <a href="#productfilter" className="hover:text-red-500 transition duration-300">
                Chops & Grills
              </a>
            </li> */}
            <li>
              <a href="#booking" className="hover:text-red-500 transition duration-300">
                Event Bookings
              </a>
            </li>
            <li>
              <a href="#Footer" className="hover:text-red-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* About Section / Extra */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-red-600">About Nimah’s Hub</h4>
          <p className="text-base leading-relaxed text-gray-700">
            At <span className="font-semibold text-red-500">Nimahhub</span>, 
            we bring a delightful blend of sweet and savory goodness — from handcrafted 
            cakes to mouthwatering small chops and premium event catering. 
            <br />
            <br />
            Every bite tells a story of flavor, love, and excellence.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="font-semibold">Nimah Cakes & Cuisine</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
