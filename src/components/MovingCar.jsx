import { motion } from "framer-motion";

export function MovingCar() {
  return (
    <motion.img
      src="https://cdn-icons-png.flaticon.com/512/2555/2555023.png"
      alt="car"
      className="absolute bottom-10 w-24 md:w-32 z-20"
      initial={{ x: "-20%" }}
      animate={{ x: "120%" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}