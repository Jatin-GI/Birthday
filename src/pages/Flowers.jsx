import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import FlowerBurst from '../components/FlowerBurst';
import { pageColors } from '../utils/flowerColors';

function Flowers() {
  const navigate = useNavigate();
  const [bursts, setBursts] = useState([]);
  const colors = pageColors.flowers;

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

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: colors.flowers
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: colors.flowers[0]
        }
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.background} flex items-center justify-center relative overflow-hidden`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      {bursts.map(burst => (
        <FlowerBurst key={burst.id} x={burst.x} y={burst.y} colors={colors.flowers} />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h2 className={`text-4xl font-bold ${colors.primary} mb-8 bg-white bg-opacity-80 p-4 rounded-xl`}>
          Flowers for You! 🌸
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            addBurst(e);
            setTimeout(() => navigate('/final'), 500);
          }}
          className={`${colors.button} text-white px-8 py-3 rounded-full text-xl font-semibold transition-colors`}
        >
          Continue to Surprise ✨
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Flowers;