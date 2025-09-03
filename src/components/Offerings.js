

import {
  CakeIcon,
  FireIcon,
  CalendarIcon,
} from '@heroicons/react/24/solid';

export default function Offerings() {
  return (
    <section className=" pb-20 mb-10 border-b border-pink-300 py-[50px] px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-black mb-10">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {/* Cakes */}
        <div className="border p-6 rounded-xl shadow hover:shadow-lg bg-gradient-to-br from-white via-red-50 to-white transition-all">
          <div className="flex justify-center mb-4">
            <CakeIcon className="h-10 w-10 text-red-500" />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-2">Cakes</h3>
          <p className="text-gray-700">
            Custom birthday cakes, wedding cakes, cupcakes and more.
          </p>
        </div>

        {/* Chops & Grills */}
        <div className="border p-6 rounded-xl shadow hover:shadow-lg bg-gradient-to-br from-white via-red-50 to-white transition-all">
          <div className="flex justify-center mb-4">
            <FireIcon className="h-10 w-10 text-red-500" />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-2">Chops & Grills</h3>
          <p className="text-gray-700">
            Small chops, grilled chicken, snacks and party packs.
          </p>
        </div>

        {/* Event Catering */}
        <div className="border p-6 rounded-xl shadow hover:shadow-lg bg-gradient-to-br from-white via-red-50 to-white transition-all">
          <div className="flex justify-center mb-4">
            <CalendarIcon className="h-10 w-10 text-red-500" />
          </div>
          <h3 className="text-2xl font-semibold text-black mb-2">Event Catering</h3>
          <p className="text-gray-700">
            Book us for your events — birthdays, weddings, corporate parties.
          </p>
        </div>
      </div>
    </section>
  );
}

