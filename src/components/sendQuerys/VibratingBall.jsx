import { motion } from "framer-motion";

const  VibratingBall  = () =>  {
  return (
    <div className="flex w-max bg-gray-100">
      {/* Outer Wave Effect */}
      <div className="relative pb-3">
        <motion.div
          className="absolute inset-0 w-3 h-3 bg-green-900 rounded-full opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute inset-0 w-3 h-3 bg-green-700 rounded-full opacity-20"
          animate={{
            scale: [1, 1, 1],
            opacity: [0.2, 0.4 ,0.7, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
      </div>
    </div>
  );
};


export default VibratingBall