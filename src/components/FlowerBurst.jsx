import { motion } from 'framer-motion';

function FlowerBurst({ x, y, colors }) {
  const flowers = Array(12).fill(null).map((_, i) => ({
    id: i,
    angle: (i * 30) + Math.random() * 30,
    distance: 100 + Math.random() * 50,
    scale: 0.5 + Math.random() * 0.5,
    opacity: 0.6 + Math.random() * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y }}>
      {flowers.map(flower => (
        <motion.div
          key={flower.id}
          className="absolute"
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos(flower.angle * Math.PI / 180) * flower.distance,
            y: Math.sin(flower.angle * Math.PI / 180) * flower.distance,
            scale: flower.scale,
            opacity: 0
          }}
          transition={{ duration: 1 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill={flower.color}>
            <path d="M12,1C8.13,1,5,4.13,5,8c0,2.38,1.19,4.47,3,5.74V15c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-1.26 c1.81-1.27,3-3.36,3-5.74C19,4.13,15.87,1,12,1z M14,13h-4v-1h4V13z M12,11c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S13.66,11,12,11z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default FlowerBurst;