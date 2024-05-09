// import React, { useState, useEffect, useRef } from "react";
// import "./product.css";
// // import image1 from "./images/img-1.jpg";
// // import image2 from "./images/img-2.jpg";
// // // import image3 from "./images/img-3.jpg";
// // import image4 from "./images/img-4.jpg";
// // import image5 from "./images/img-5.jpg";
// // import image6 from "./images/img-6.jpg";
// // import image7 from "./images/img-7.jpg";
// // import image8 from "./images/img-8.jpg";
// // import image9 from "./images/img-9.jpg";
// // import image10 from "./images/img-10.jpg";

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const imageListRef = useRef(null);

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? imageListRef.current.children.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === imageListRef.current.children.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNextSlide();
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="container">
//       <div className="slider-wrapper">
//         <button
//           id="prev-slide"
//           className="slide-button material-symbols-rounded"
//           onClick={handlePrevSlide}
//         >
//           chevron_left
//         </button>
//         <ul
//           className="image-list"
//           ref={imageListRef}
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           <li className="image-item">
//             <img src={image1} alt="img-1" />
//           </li>
//           <li className="image-item">
//             <img src={image2} alt="img-2" />
//           </li>
//           <li className="image-item">
//             <img src={image3} alt="img-3" />
//           </li>
//           <li className="image-item">
//             <img src={image4} alt="img-4" />
//           </li>
//           <li className="image-item">
//             <img src={image5} alt="img-5" />
//           </li>
//           <li className="image-item">
//             <img src={image6} alt="img-6" />
//           </li>
//           <li className="image-item">
//             <img src={image7} alt="img-7" />
//           </li>
//           <li className="image-item">
//             <img src={image8} alt="img-8" />
//           </li>
//           <li className="image-item">
//             <img src={image9} alt="img-9" />
//           </li>
//           <li className="image-item">
//             <img src={image10} alt="img-10" />
//           </li>
//         </ul>
//         <button
//           id="next-slide"
//           className="slide-button material-symbols-rounded"
//           onClick={handleNextSlide}
//         >
//           chevron_right
//         </button>
//       </div>
//       <div className="slider-scrollbar">
//         <div className="scrollbar-track">
//           <div className="scrollbar-thumb"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
