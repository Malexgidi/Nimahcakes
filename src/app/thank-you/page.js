import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm p-4 flex justify-center">
        <img
          src="/Nimahhub.jpg"
          alt="Nimah Logo"
          className="h-12 object-contain"
        />
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">🎉 Thank You for Your Order!</h1>
        <p className="text-lg mb-6">
          Your order has been placed successfully. We will contact you soon with
          confirmation details.
        </p>

        <Link
          href="/"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12 mb-4">
        &copy; {new Date().getFullYear()} Nimah&apos;s Cakes & Cuisine. All rights reserved.
      </footer>
    </div>
  );
}
