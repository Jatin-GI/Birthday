import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-purple-600 hover:text-pink-600 transition-colors"
        >
          🎉 Happy Birthday!
        </Link>
        <div className="space-x-6">
          {["/", "/about", "/gallery", "/contact"].map((path, idx) => (
            <Link
              key={path}
              to={path}
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
            >
              {["Home", "About", "Gallery", "Contact"][idx]}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
