

export default function BookingSection() {
    return (
      <section id="booking" className=" pb-20 mb-10 border-b border-pink-300 py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl text-black font-bold mb-6">Book Us for Your Next Event</h2>
        <p className="mb-6 text-black">Need a special meal or catering for your next celebration? We’ve got you.</p>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border rounded" required />
          <input type="email" placeholder="Email Address" className="p-3 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="p-3 border rounded" required />
          <textarea placeholder="What do you need?" rows={4} className="p-3 border rounded" required />
          <button type="submit" className="bg-red-500 text-white py-3 px-6 rounded">Submit Booking</button>
        </form>
      </section>
    );
  }