// components/Footer.tsx

export default function Footer() {
  return (
    <footer id="Footer" className="bg-gray-100 text-gray-800 py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">

        {/* Contact Info & Socials */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-red-500">Contact Us</h4>
          <p className="mb-2">📍 Lagos, Nigeria</p>
          <p className="mb-2">📞 +234 800 123 4567</p>
          <p className="mb-4">📧 hello@nimahcakes.com</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500">Instagram</a>
            <a href="#" className="hover:text-red-500">Facebook</a>
            <a href="#" className="hover:text-red-500">WhatsApp</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-red-500">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Cakes</a></li>
            <li><a href="#" className="hover:text-red-500">Chops</a></li>
            <li><a href="#" className="hover:text-red-500">Bookings</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Instagram Feed (Mocked as Images) */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-red-500">Instagram Feed</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-full h-20 bg-red-100 rounded-md animate-pulse"></div>
              // Replace with actual images later:
              // <img src={`/images/insta${i}.jpg`} alt={`Insta ${i}`} className="w-full h-20 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">© {new Date().getFullYear()} Nimah Cakes & Cuisine. All rights reserved.</p>
    </footer>
  );
}
