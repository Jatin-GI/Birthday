import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ["/", "/about", "/gallery"];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="fixed bottom-8 flex space-x-4">
      <motion.button
        onClick={() =>
          navigate(pages[(currentIndex - 1 + pages.length) % pages.length])
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-white rounded-full shadow-lg"
        disabled={currentIndex === 0}
      >
        ← Previous
      </motion.button>
      <motion.button
        onClick={() => navigate(pages[(currentIndex + 1) % pages.length])}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 bg-pink-600 text-white rounded-full shadow-lg"
      >
        Next →
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
