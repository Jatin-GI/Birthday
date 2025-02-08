import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FlowerBurst from "../components/FlowerBurst";
import { pageColors } from "../utils/flowerColors";
import Confetti from "react-confetti";

function Message() {
  const navigate = useNavigate();
  const [bursts, setBursts] = useState([]);
  const colors = pageColors.message;

  const addBurst = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const newBurst = {
      id: Date.now(),
      x,
      y,
    };
    setBursts((prev) => [...prev, newBurst]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((burst) => burst.id !== newBurst.id));
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${colors.background} flex items-center justify-center p-4`}
    >
      {Confetti && <Confetti recycle={false} numberOfPieces={400} />}
      {bursts.map((burst) => (
        <FlowerBurst
          key={burst.id}
          x={burst.x}
          y={burst.y}
          colors={colors.flowers}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <h2 className={`text-3xl font-bold ${colors.primary} mb-6`}>
          On Your Special Day 🌟
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          May your day be filled with joy, laughter, and all the love in the
          world. You deserve nothing but the best, and I hope this year brings
          you endless happiness and beautiful moments to cherish forever.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            addBurst(e);
            setTimeout(() => navigate("/gallery"), 500);
          }}
          className={`${colors.button} text-white px-8 py-3 rounded-full text-xl font-semibold transition-colors`}
        >
          Continue ➡️
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Message;
