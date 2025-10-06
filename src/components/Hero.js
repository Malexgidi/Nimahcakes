

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';


// export default function Hero() {
//   const [isMounted, setIsMounted] = useState(false);
//   const images = ['/cake1.jpg', '/grill1.jpg', '/Platter15.jpg', '/'];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, 4000); // change image every 4 seconds

//   return () => clearInterval(interval);
// }, []);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <section className="bg-red-100 rounded-b-[60px] h-full w-full md:py-10 py-4  px-6 md:px-20">
//       <div className="grid md:grid-cols-2 items-center gap-2 md:gap-12">
//         {/* Left: Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={isMounted ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
//             Made with Love – <br className="hidden md:block" />
//             From Cakes to Grills
//           </h1>
//           <p className="text-lg text-gray-700 mb-8">
//             Discover the best of sweet and savory — handcrafted just for you.
//           </p>
//           <div className="flex space-x-4">
//             {/* <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium">
//               Order Now
//             </button> */}
//             <Link href="/menu">
//            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">
//            Explore Menu
//            </button>
//          </Link>
//           </div>
//         </motion.div>

//        <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         animate={isMounted ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="relative w-full  h-[300px] md:h-[400px]  flex items-center justify-center overflow-hidden rounded-xl shadow-lg"
//          >
//      {/* '/Nimahhub.jpg', '/Cake2.jpg', '/Chops5.jpg', '/Dessert.jpg' */}
//      {[ '/Nimahhub.jpg' , '/Cake2.jpg', '/Platter15.jpg', '/Drinks.jpg' ].map((src, index) => (
//        <motion.img
//         key={index}
//         src={src}
//         alt={`Slide ${index + 1}`}
//         className="absolute w-full py-10 object-cover  rounded-xl"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
//       transition={{ duration: 1 }}
//     />
//   ))}
// </motion.div>
//       </div>
//     </section>
//   );
// }

  
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const images = ['/cake1.jpg', '/grill1.jpg', '/Platter15.jpg', '/29-5.jpg','/29-20.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-red-100 rounded-b-[60px] h-full w-full md:py-10 py-4 px-6 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-2 md:gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            Where Every Bite <br className="hidden md:block" />
            Feels Like a Celebration 
          </h1>

          {/* <p className="text-lg text-gray-700 mb-8 max-w-md">
            From delicious handcrafted cakes to sizzling grills and tasty chops — 
            <span className="font-semibold text-red-600"> Nimah's Hub </span> 
            brings flavor, passion, and love to every moment that matters.
          </p> */}
          <p className="text-lg text-gray-700 mb-8 max-w-md">
  From delicious handcrafted cakes to sizzling grills, tasty chops, refreshing cocktails, 
  and seamless event bookings — 
  <span className="font-semibold text-red-600"> Nimah's Hub </span> 
  brings flavor, passion, and love to every moment that matters.
</p>


          <div className="flex space-x-4">
            {/* <Link href="/menu">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
                Explore Our Menu 🍰
              </button>
            </Link> */}
            <a
              href="https://wa.me/2347089487772?text=Hi%20Nimah!%20I%27d%20love%20to%20place%20an%20order%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
                Chat on WhatsApp 💬
              </button> */}
            </a>
          </div>
        </motion.div>

        {/* Right: Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg"
        >
          {[ '/Nimahhub.jpg', '/Cake2.jpg', '/Platter15.jpg', '/Drinks.jpg', '/29-5.jpg','/29-20.jpg' ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute w-full py-10 object-cover rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
