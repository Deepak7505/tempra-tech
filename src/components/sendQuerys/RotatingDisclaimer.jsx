import { motion } from "framer-motion";

export default function ScrollingDisclaimer({colour}) {
  return (
    <div className="relative overflow-hidden w-full  py-2 mb-2">
      <motion.div
        className="flex space-x-16 whitespace-nowrap text-white font-poppins"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // Adjust speed (higher = slower)
          ease: "linear",
        }}
      >
        <span className="text-sm md:text-base lg:text-lg">
          We have special offers for bulk orders! Connect via WhatsApp and get your desired price.
        </span>
        <span className="text-sm md:text-base lg:text-lg">
          Need assistance? Our executive is just a message away! Chat with us on WhatsApp now.
        </span>
        <span className="text-sm md:text-base lg:text-lg">
          Your satisfaction is our priority! Contact us today for exclusive deals.
        </span>
      </motion.div>
    </div>
  );
}
