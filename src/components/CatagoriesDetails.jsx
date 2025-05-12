// import React, { useEffect, useState } from 'react';
// import { IoMdStarOutline } from 'react-icons/io';
// import { Link, useParams } from 'react-router';

// const CatagoriesDetails = () => {
//     const { id } = useParams();
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     fetch('/data.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const matchedItem = data.find((item) => item.id.toString() === id);
//         setService(matchedItem);
//       })
//       .catch((err) => console.error('Error loading JSON:', err));
//   }, [id]);

//   if (!service) {
//     return <p className="p-4 text-center text-red-500">Loading or no item found for ID: {id}</p>;
//   }
//     return (
//         <div className="p-4 max-w-3xl mx-auto">
//       <img  src={service.thumbnail} alt={service.name} className="w-full h-full object-cover rounded-xl mb-4" />
//       <h2 className="text-2xl font-bold text-green-800 mb-2">{service.name}</h2>
//       <p className="text-sm text-gray-500 mb-1">{service.techCategory}</p>
//       <p className="text-xl font-semibold text-green-600 mb-3">${service.price}</p>
//       <p className="text-gray-700 mb-3">{service.details}</p>

    
//       <p>{service.moreDetails}</p>

      


//   <div className="flex items-center text-yellow-500">
//     <h1>High Reating:<span className="ml-2 text-sm text-gray-600">{service.rating}</span></h1>
//         {Array.from({ length: Math.floor(service.rating) }).map((_, index) => (
//           <IoMdStarOutline key={index} />
//         ))}
      
//       </div>
// <div className='flex mt-3 gap-2'> i want to add any review and reating(number) than Review button click it show that textarea    please don't change my add functionality
//       <input type="text" placeholder="Review:" className="input input-accent" />
//        <input type="text" placeholder="Rating:" className="input input-accent" />
//        <button className="btn btn-neutral">Review button</button>
//        </div>
//       <div className='flex mt-3 gap-2 mb-2'>
//          <textarea type="text" placeholder="Review:" className="textarea textarea-accent"></textarea>
//        <textarea type="text" placeholder="Rating:" className="textarea textarea-accent"></textarea>
//       </div>

//       <Link  to="/ccatagories"><button  className=" mt-2 btn btn-soft btn-accent">Main Catagories</button></Link>
     
//     </div>
//     );
// };

// export default CatagoriesDetails;














import React, { useEffect, useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

const CatagoriesDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false); // To toggle the review form visibility

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedItem = data.find((item) => item.id.toString() === id);
        setService(matchedItem);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, [id]);

  if (!service) {
    return <p className="p-4 text-center text-red-500">Loading or no item found for ID: {id}</p>;
  }

  // Function to handle the "Review button" click
  const handleReviewButtonClick = () => {
    setShowReviewForm(true); // Show review form when the button is clicked
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img
        src={service.thumbnail}
        alt={service.name}
        className="w-full h-full object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-green-800 mb-2">{service.name}</h2>
      <p className="text-sm text-gray-500 mb-1">{service.techCategory}</p>
      <p className="text-xl font-semibold text-green-600 mb-3">${service.price}</p>
      <p className="text-gray-700 mb-3">{service.details}</p>
      <p>{service.moreDetails}</p>

      <div className="flex items-center text-yellow-500">
        <h1>
          High Rating:
          <span className="ml-2 text-sm text-gray-600">{service.rating}</span>
        </h1>
        {Array.from({ length: Math.floor(service.rating) }).map((_, index) => (
          <IoMdStarOutline key={index} />
        ))}
      </div>

      {/* Review and Rating input fields */}
      <div className="flex mt-3 gap-2">
        <input
          type="text"
          placeholder="Review:"
          className="input input-accent"
          value={review}
          onChange={(e) => setReview(e.target.value)} // Save the review text
        />
        <input
          type="number"
          placeholder="Rating:"
          className="input input-accent"
          value={rating}
          onChange={(e) => setRating(e.target.value)} // Save the rating
        />
        <button
          className="btn btn-neutral"
          onClick={handleReviewButtonClick} // Show review form when clicked
        >
          Review button
        </button>
      </div>

      {/* Review Form (shows when 'Review button' is clicked) */}
      {showReviewForm && (
        <div className="flex mt-3 gap-2 mb-2">
          <textarea
            placeholder="Review:"
            className="textarea textarea-accent"
            value={review}
            onChange={(e) => setReview(e.target.value)} // Handle review input
          />
          <textarea
            placeholder="Rating:"
            className="textarea textarea-accent"
            value={rating}
            onChange={(e) => setRating(e.target.value)} // Handle rating input
          />
        </div>
      )}

      <Link to="/ccatagories">
        <button className="mt-2 btn btn-soft btn-accent">Main Categories</button>
      </Link>
    </div>
  );
};

export default CatagoriesDetails;




