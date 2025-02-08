import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import FlowerBurst from '../components/FlowerBurst';
import { pageColors } from '../utils/flowerColors';

function Welcome() {
  const navigate = useNavigate();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [bursts, setBursts] = useState([]);
  const colors = pageColors.welcome;

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const addBurst = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const newBurst = {
      id: Date.now(),
      x,
      y
    };
    setBursts(prev => [...prev, newBurst]);
    setTimeout(() => {
      setBursts(prev => prev.filter(burst => burst.id !== newBurst.id));
    }, 1000);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.background} flex items-center justify-center`}>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        colors={colors.flowers}
      />
      {bursts.map(burst => (
        <FlowerBurst key={burst.id} x={burst.x} y={burst.y} colors={colors.flowers} />
      ))}
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-6xl font-bold ${colors.primary} mb-8`}
        >
          Happy Birthday! 🎉
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            addBurst(e);
            setTimeout(() => navigate('/message'), 500);
          }}
          className={`${colors.button} text-white px-8 py-3 rounded-full text-xl font-semibold transition-colors`}
        >
          Click to Begin ✨
        </motion.button>
      </div>
    </div>
  );
}

export default Welcome;