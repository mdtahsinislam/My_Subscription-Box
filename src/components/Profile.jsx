// // import React, { use } from 'react';
// // import Navbarr from './Navbarr';
// // import Footer from './Footer';
// // import { AuthContext } from '../provider/AuthProvider';

// // const Profile = () => {
// //     const {user}=use(AuthContext)
// //     return (
// //         <div>
// //             <Navbarr></Navbarr>
           
// //             <h1>Email:{user &&  user.email} </h1> it's output came 
// //             <h1>Name:{user &&  user.name}</h1>i want this 
// //             <h1>Photo URL: {}</h1>i want this 
// //             <Footer></Footer>
// //         </div>
// //     );
// // };

// // export default Profile;



// import React, { useContext } from 'react';
// import Navbarr from './Navbarr';
// import Footer from './Footer';
// import { AuthContext } from '../provider/AuthProvider';

// const Profile = () => {
//     const { user } = useContext(AuthContext);

//     return (
//         <div>
//             <Navbarr />
            
//             <div className="text-center p-4">
               




// <div className="flex justify-center items-center min-h-screen bg-gray-50">
//   <div className="card bg-base-100 max-w-sm shadow-lg w-full">
//     <div className="card-body">
//       <button className="btn btn-neutral mt-4">Profile Info</button>

//       <fieldset className="fieldset space-y-2">
//         {user?.photoURL && (
//           <div className="flex justify-center mt-4">
//             <img
//               src={user.photoURL}
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover"
//             />
//           </div>
//         )}

//         <label className="label">Email</label>
//         <input
//           type="email"
//           className="input input-bordered w-full"
//           placeholder={user?.email || 'No email'}
//         />

//         <label className="label">Name</label>
//         <input
//           type="text"
//           className="input input-bordered w-full"
//           placeholder={user?.displayName || 'No name'}
//         />

//         <label className="label">Photo URL</label>
//         <input
//           type="text"
//           className="input input-bordered w-full"
//           placeholder={user?.photoURL || 'No photo URL'}
//         />
//       </fieldset>
//     </div>
//   </div>
// </div>
//  Users can edit the name and photoURL and save the changes. This "saving" process uses Firebase's updateProfile() method to update the user's information stored securely in Firebase. 





//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Profile;















import React, { useContext, useState } from 'react';
import Navbarr from './Navbarr';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [message, setMessage] = useState('');

  const handleUpdateProfile = () => {
    if (user) {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          setMessage('Profile updated successfully!');
        })
        .catch((error) => {
          setMessage(`Error: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Navbarr />
      <div data-aos="zoom-out-down"  className="mt-3 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="card bg-base-100 max-w-sm shadow-lg w-full">
          <div className="card-body">
            <button data-aos="flip-right" className="btn btn-neutral mt-4">Profile Info</button>

            <fieldset className="fieldset space-y-2">
              {  photoURL && (
                <div data-aos="flip-left" className="flex justify-center mt-4">
                  <img
                    src={photoURL}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-green-800 object-cover"
                  />
                </div>
              )}

              {/* {photoURL && (
  <div data-aos="flip-left" className="flex justify-center mt-4">
    <img
      src={photoURL}
      alt="Profile"
      className="w-20 h-20 rounded-full border-4 border-green-800 object-cover"
    />
  </div>
)} */}

              <label className="label">Email:{}</label>
              <input
                type="email"
                className=" input input-bordered w-full"
                value={user?.email || ''}
                disabled
              />

              <label className=" label">Name: {}</label>
              <input
                type="text"
                className=" input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="label ">Photo URL : {}</label>
              <input
                type="text"
                className=" input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />

              <button className=" btn btn-success w-full mt-4" onClick={handleUpdateProfile}>
                Save Changes
              </button>

              {message && <p className="text-center text-sm text-green-600 mt-2">{message}</p>}
            </fieldset>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
