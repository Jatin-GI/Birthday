import { useState, useEffect } from "react";

const PhotoThrow = () => {
  const [photos, setPhotos] = useState([]);
  const totalImages = 100; // Adjust based on how many images you want

  // 🔹 Generate filenames dynamically with the correct format
  const imageNames = Array.from(
    { length: totalImages },
    (_, i) => `/images/photo_${i + 1}_2025-02-07_18-53-${42}.jpg`
  );

  useEffect(() => {
    let index = 0;

    const addPhoto = () => {
      if (index < totalImages) {
        const newPhoto = {
          id: index + 1,
          src: imageNames[index], // Using correct public folder path
          left: Math.random() * 100, // Random horizontal position (0-100%)
          top: Math.random() * 100, // Random vertical position (0-100%)
          rotate: Math.random() * 45 - 22.5, // Random rotation from -22.5 to +22.5 degrees
          scale: 0.6 + Math.random() * 0.4, // Slightly larger scale to fill more space
        };

        setPhotos((prev) => [...prev, newPhoto]);
        index++;
      }
    };

    // Add a new photo every 300ms to fit more photos within the time
    const interval = setInterval(addPhoto, 300);

    // Stop after all images are added
    const timeout = setTimeout(
      () => clearInterval(interval),
      totalImages * 300
    );

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden absolute top-0 left-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="absolute transition-transform duration-1000 ease-out"
          style={{
            left: `${photo.left}%`,
            top: `${photo.top}%`,
            transform: `translate(-50%, -50%) rotate(${photo.rotate}deg) scale(${photo.scale})`,
          }}
        >
          <img
            src={photo.src}
            alt={`Photo ${photo.id}`}
            className="w-40 h-60 object-cover rounded-lg shadow-xl transition-opacity duration-500"
            style={{
              opacity: 0,
              animation: "appear 500ms forwards",
              border: "2px solid #fff", // White border
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
            }}
          />
        </div>
      ))}

      {/* Add custom animation */}
      <style jsx global>{`
        @keyframes appear {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoThrow;

// import { useState, useEffect } from "react";

// const PhotoThrow = () => {
//   const [photos, setPhotos] = useState([]);
//   const totalImages = 100; // Adjust based on how many images you have

//   // 🔹 Generate filenames dynamically with the correct format
//   const imageNames = Array.from(
//     { length: totalImages },
//     (_, i) => `/images/photo_${i + 1}_2025-02-07_18-53-${42}.jpg`
//   );

//   useEffect(() => {
//     let index = 0;

//     const addPhoto = () => {
//       if (index < totalImages) {
//         const newPhoto = {
//           id: index + 1,
//           src: imageNames[index], // Using correct public folder path
//           left: Math.random() * 100, // Random horizontal position (0-100%)
//           top: Math.random() * 100, // Random vertical position (0-100%)
//           rotate: Math.random() * 45 - 22.5, // Random rotation from -22.5 to +22.5 degrees
//           scale: 0.5 + Math.random() * 0.5, // Random scale between 0.5x and 1x
//         };

//         setPhotos((prev) => [...prev, newPhoto]);
//         index++;
//       }
//     };

//     // Add a new photo every 500ms
//     const interval = setInterval(addPhoto, 500);

//     // Stop after all images are added
//     const timeout = setTimeout(
//       () => clearInterval(interval),
//       totalImages * 500
//     );

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <div className="w-full h-full overflow-y-hidden overflow-x-hidden absolute top-0 left-0 bg-red-300">
//       {photos.map((photo) => (
//         <div
//           key={photo.id}
//           className="absolute transition-transform duration-1000 ease-out"
//           style={{
//             left: `${photo.left}%`,
//             top: `${photo.top}%`,
//             transform: `translate(-50%, -50%) rotate(${photo.rotate}deg) scale(${photo.scale})`,
//           }}
//         >
//           <img
//             src={photo.src}
//             alt={`Photo ${photo.id}`}
//             className="w-40 h-60 object-cover rounded-lg shadow-xl transition-opacity duration-500"
//             style={{
//               opacity: 0,
//               animation: "appear 500ms forwards",
//               border: "2px solid #fff", // White border
//               borderRadius: "10px", // Rounded corners
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
//             }}
//           />
//         </div>
//       ))}

//       {/* Add animation */}
//       <style jsx global>{`
//         @keyframes appear {
//           from {
//             opacity: 0;
//             transform: scale(0);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PhotoThrow;
