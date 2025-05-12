// import React, { useEffect, useState } from 'react';
// import { IoMdStarOutline } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// const CCatagories = () => {
//     const [services, setServices,id] = useState([]); // ✅ only 2 values

//   useEffect(() => {
//     fetch('/data.json') // Make sure data.json is in the public folder
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error('Error loading JSON:', err));
//   }, []);

//     return (
//         <div className="p-4">
//       <p className="font-serif text-secondary text-center">For your pets!</p>
//       <h1 className="font-thin text-green-700 text-3xl mb-4 text-center">Our Favorite Categories</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((item) => (
//           <div
//             key={item.id}
//             className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.name}
//               className="w-full h-48 object-cover rounded-xl mb-3"
//             />
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-sm text-gray-600">{item.techCategory}</p>
//             <p className="text-base font-medium text-green-800">${item.price}</p>

        

// <Link to={`/ccatagories/${item.id}`}>
//   <p className="text-sm text-gray-700 mt-2">
//     {item.details}...
//     <button className="text-blue-500 underline ml-1">View More</button>
//   </p>
// </Link>

//             <p className="flex items-center mt-2 text-yellow-600">
//               {Array.from({ length: Math.floor(item.rating) }).map((_, index) => (
//                 <IoMdStarOutline key={index} />
//               ))}
//               <span className="text-sm ml-1 text-gray-600">{item.rating}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     );
// };

// export default CCatagories;



// if user click View More  user must be full fill ((two method) one user go to login with google or user full fill email,password  ) than a user enter this path  to={`/ccatagories/${item.id}`

















import React, { useEffect, useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const CCatagories = () => {
    const [services, setServices] = useState([]);
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('/data.json') // Make sure data.json is in the public folder
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error('Error loading JSON:', err));
    }, []);

    const handleViewMoreClick = (itemId) => {
        if (user && user.email) {
            // User is logged in, navigate directly
            navigate(`/ccatagories/${itemId}`);
        } else {
            // User is not logged in, redirect to login with the target path as state
            navigate('/auth/login', { state: `/ccatagories/${itemId}` });
        }
    };

    return (
        <div className="p-4">
            <p className="font-serif text-secondary text-center">For your pets!</p>
            <h1 className="font-thin text-green-700 text-3xl mb-4 text-center">Our Favorite Categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item) => (
                    <div
                        key={item.id}
                        className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-xl mb-3"
                        />
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.techCategory}</p>
                        <p className="text-base font-medium text-green-800">${item.price}</p>


                        <p className="text-sm text-gray-700 mt-2">
                            {item.details.slice(0, 50)}...
                            <button
                                onClick={() => handleViewMoreClick(item.id)}
                                className="text-blue-500 underline ml-1"
                            >
                                View More
                            </button>
                        </p>


                        <p className="flex items-center mt-2 text-yellow-600">
                            {Array.from({ length: Math.floor(item.rating) }).map((_, index) => (
                                <IoMdStarOutline key={index} />
                            ))}
                            <span className="text-sm ml-1 text-gray-600">{item.rating}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CCatagories;

