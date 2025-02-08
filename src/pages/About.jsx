import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";

const About = () => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 to-cyan-100"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-2xl"
    >
      <motion.h2
        whileHover={{ skew: 10 }}
        className="text-4xl font-bold text-blue-600 mb-6"
      >
        Why You're Amazing! 🌟
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4 text-lg text-gray-600"
      >
        {[
          "Kind Heart",
          "Great Smile",
          "Awesome Personality",
          "Wonderful Friend",
        ].map((item, i) => (
          <motion.li
            key={item}
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-3 bg-blue-50 rounded-lg"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
    <NavigationButtons />
  </motion.div>
);

export default About;
