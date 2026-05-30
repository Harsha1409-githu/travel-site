import { motion } from "framer-motion";

export function RouteText() {
  return (
    <div className="flex items-center gap-3 text-yellow-400 text-lg md:text-2xl font-semibold mt-4">
      <span>Kavali/Kandukur</span>

      <motion.span
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        🚗
      </motion.span>

      <span>South India</span>
    </div>
  );
}