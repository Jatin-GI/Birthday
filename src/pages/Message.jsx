import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FlowerBurst from "../components/FlowerBurst";
import { pageColors } from "../utils/flowerColors";
import Confetti from "react-confetti";

function Message() {
  const navigate = useNavigate();
  const [bursts, setBursts] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [gifIndex, setGifIndex] = useState(0);
  const gifUrls = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXgzcXg3YXBtdnM3MTYzZGt3ZXcyNmh3cmp5OHh5cHdjam11NWZnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/depezUGsaffMgzHUyP/giphy.gif",
  ];

  const colors = pageColors.message;

  const fullText =
    "Happy birthday ji! 🎂🎁 Enjoy kriyo ajj kaa din! College lecture liyo tere badle kaa fun mae krr luga 🤭. Prr aek baat toh h, tu jhooti h! 🤥 Hostel promise bhool gyi apne 🤨. Prr khaer, bhool toh bht cheeze gyi 😆. Jaldi aa Delhi aur bkl, piche time jaise behave krra toh mae nhi ayuga 😂. Chll, bakki call krr liya krr time prr ☎️. Enjoy krr apna aek saal kaa memory page 📖 aur tere chutiya mood swings nhi hue toh hopefully agae aur memory create krege! Love you ❤️.";

  useEffect(() => {
    let i = 0;
    const textInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(textInterval);
      }
    }, 50);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const gifInterval = setInterval(() => {
      setGifIndex((prevIndex) => (prevIndex + 1) % gifUrls.length);
    }, 3000);
    return () => clearInterval(gifInterval);
  }, []);

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
      className={`min-h-screen bg-gradient-to-br ${colors.background} flex flex-col items-center text-center justify-center p-4`}
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
      <motion.img
        src={gifUrls[gifIndex]}
        alt="Cute Cat"
        className="mx-auto w-40 h-40 mb-4 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white rounded-2xl shadow-xl p-8 text-center mt-4"
      >
        <h2 className={`text-3xl font-bold ${colors.primary} mb-6`}>
          🎉 On Your Special Day 🌟
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {displayedText}
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
