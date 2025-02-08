import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import NavigationButtons from "../components/NavigationButtons";

const Gallery = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const emojis = ["🎈", "🎁", "🎉", "🥳", "✨", "❤️", "🍰", "🎂"];
  const cardPairs = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

  useEffect(() => {
    setCards(cardPairs.map((emoji, id) => ({ id, emoji, flipped: false })));
  }, []);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Confetti for 5 seconds
    }
  }, [solved]);

  const handleClick = (id) => {
    if (disabled || flipped.includes(id) || solved.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      setTimeout(() => checkMatch(newFlipped), 1000);
    }
  };

  const checkMatch = (ids) => {
    const [first, second] = ids;
    if (cards[first].emoji === cards[second].emoji) {
      setSolved([...solved, first, second]);
    }
    setFlipped([]);
    setDisabled(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, rotate: 180 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-100 to-emerald-100"
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}

      <h1 className="text-4xl font-bold text-green-800 mb-8">Memory Game 🧠</h1>
      <motion.div
        className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => handleClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`w-20 h-20 flex items-center justify-center text-4xl rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
              flipped.includes(card.id) || solved.includes(card.id)
                ? "bg-white"
                : "bg-green-200"
            }`}
          >
            {flipped.includes(card.id) || solved.includes(card.id)
              ? card.emoji
              : "❓"}
          </motion.div>
        ))}
      </motion.div>

      {solved.length === cards.length && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-8 p-6 bg-white rounded-xl shadow-lg text-center"
        >
          <motion.h2
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-2xl font-bold text-green-800"
          >
            You Win! 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600"
          >
            Great memory skills!
          </motion.p>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mt-4"
          >
            🎊
          </motion.div>
        </motion.div>
      )}

      <NavigationButtons />
    </motion.div>
  );
};

export default Gallery;
