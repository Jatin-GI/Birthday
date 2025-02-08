import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";

const Contact = () => (
  <motion.div
    initial={{ rotate: 180, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: -180, opacity: 0 }}
    className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-orange-100"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
    >
      <h2 className="text-4xl font-bold text-orange-600 mb-6">Send Love 💌</h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder="Your Sweet Message"
          className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-orange-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium"
        >
          Send Heart ❤️
        </motion.button>
      </motion.form>
    </motion.div>
    <NavigationButtons />
  </motion.div>
);

export default Contact;
