import { motion } from "framer-motion";
import { useState } from "react";
import FlowerBurst from "../components/FlowerBurst";
import { pageColors } from "../utils/flowerColors";

function Final() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [bursts, setBursts] = useState([]);
  const colors = pageColors.final;

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 40);
    setNoButtonPosition({ x, y });
  };

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
      {bursts.map((burst) => (
        <FlowerBurst
          key={burst.id}
          x={burst.x}
          y={burst.y}
          colors={colors.flowers}
        />
      ))}
      <div className="text-center">
        <motion.img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Cute Cat"
          className="mx-auto w-40 h-40 mb-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.primary} mb-8`}
        >
          Will you be my Valentine? 💝
        </motion.h2>
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              addBurst(e);
              alert("Yay! I knew you'd say yes! 🎉");
            }}
            className={`${colors.button} text-white px-8 py-3 rounded-full text-xl font-semibold transition-colors`}
          >
            Yes! 💖
          </motion.button>
          <motion.button
            initial={{ x: 0, y: 0 }}
            animate={{
              x: noButtonPosition.x - window.innerWidth / 2 + 50,
              y: noButtonPosition.y - window.innerHeight / 2 + 20,
            }}
            onHoverStart={moveButton}
            className="bg-gray-500 text-white px-8 py-3 rounded-full text-xl font-semibold absolute"
          >
            No
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Final;
