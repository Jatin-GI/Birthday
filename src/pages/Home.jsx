import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import NavigationButtons from "../components/NavigationButtons";

const Home = () => {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-pink-100"
    >
      {confetti && <Confetti recycle={false} numberOfPieces={400} />}
      <motion.h1
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8"
      >
        Happy Birthday! 🎉
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-4"
        >
          🎂
        </motion.div>
        <p className="text-xl text-gray-600 mb-6">
          Wishing you an amazing day filled with joy and laughter!
        </p>
      </motion.div>
      <NavigationButtons />
    </motion.div>
  );
};

export default Home;
