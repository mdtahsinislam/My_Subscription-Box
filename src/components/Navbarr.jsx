// // import React, { use } from 'react';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../provider/AuthProvider';
// // import userIcon from"../assets/user.png";
// // const Navbarr = () => {

// //     const {user,logOut}=use(AuthContext);

// // const handleLogOut=()=>{
// //     console.log("User trying to  Logout");
// //     logOut().then (()=>{

// // alert("You Logged out successful");

// //     }).catch((error)=>{
// // console.log(error);
// //     })
// // }
// //     return (
// //          < div className='navbar bg-base-300 shadow-lg mb-7 '>
// //            <div className='container mx-auto w-full flex justify-between items-center'>
// //              <div className='flex items-end'>
// //               <img className='w-25'
// //         src="https://i.ibb.co.com/gZjTfqty/Pet-Care-removebg-preview.png"
// //         alt="Logo"
// //       /> <br /> <small className='-ml-24 -text-5xl font-serif text-green-800'>Subscription-Box </small>
    
         
// //             </div>
            
         
// //             <div className='flex gap-3'> 
// //                 <Link to="/"><h1>Home</h1></Link>
// //                <Link to="/ccatagories"> <h1>Categories</h1></Link>
// //               <Link to="/*">  <h1>#404</h1></Link>
// //                  <Link to="/profile"><h1>Profile</h1></Link>
// //             </div>
         

// //          <div >
// //                <div className='flex items-center space-x-4'>
                


// //  <img
// //             className="w-10 h-10 rounded-full"
// //             src={user ? user.photoURL : userIcon}
// //             alt="User"
// //             title={user?.displayName || "MD. Tahsin"} 
// //           />




// // {
// //     user  ? <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button> :  <Link to="/auth/login" className='btn btn-outline btn-sm'>Login</Link>
// // }



                  
               
// //             </div>
            
// //   <div className=''>{user &&  user.email}</div>
// //          </div>




// //            </div>
           
// //         </div>












             
 
// //     );
// // };

// // export default Navbarr;







// // please do responsive for any device no change code 
















// // import React, { useState, useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../provider/AuthProvider';
// // import userIcon from "../assets/user.png";

// // const Navbarr = () => {
// //   const { user, logOut } = useContext(AuthContext);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const handleLogOut = () => {
// //     logOut()
// //       .then(() => {
// //         alert("You Logged out successfully");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   return (
// //     <nav className='bg-base-300 shadow-lg'>
// //       <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
// //         {/* Logo + Title */}
// //         <div className='flex items-center space-x-2'>
// //           <img
// //             className='w-14 h-auto'
// //             src='https://i.ibb.co.com/gZjTfqty/Pet-Care-removebg-preview.png'
// //             alt='Logo'
// //           />
// //           <small className='text-green-800 text-lg font-serif'>Subscription-Box</small>

// //         </div>

// //         {/* Desktop Menu */}
// //         <div className='hidden md:flex items-center gap-5'>
// //           <Link to='/' className='hover:text-green-700'>Home</Link>
// //           <Link to='/ccatagories' className='hover:text-green-700'>Categories</Link>
// //           <Link to='/*' className='hover:text-green-700'>#404</Link>
// //           <Link to='/profile' className='hover:text-green-700'>Profile</Link>
// //         </div>

// //         {/* User Info + Auth */}
// //         <div className='hidden md:flex items-center gap-3'>
// //           <img
// //             className='w-10 h-10 rounded-full'
// //             src={user ? user.photoURL : userIcon}
// //             alt='User'
// //             title={user?.displayName || "MD. Tahsin"}
// //           />
// //           {user ? (
// //             <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button>
// //           ) : (
// //             <Link to='/auth/login' className='btn btn-outline btn-sm'>Login</Link>
// //           )}
          
// //         </div>
// //          <div className=''>{user &&  user.email}</div> please add this line code in all responsive under logout and image section  

// //         {/* Mobile Menu Toggle */}
// //         <button
// //           className='md:hidden text-gray-800 focus:outline-none'
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
// //             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
// //               d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className='md:hidden px-4 pb-4'>
// //           <div className='flex flex-col space-y-2'>
// //             <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
// //             <Link to='/ccatagories' onClick={() => setIsMenuOpen(false)}>Categories</Link>
// //             <Link to='/*' onClick={() => setIsMenuOpen(false)}>#404</Link>
// //             <Link to='/profile' onClick={() => setIsMenuOpen(false)}>Profile</Link>

// //             <div className=' items-center gap-3 mt-2'>
// //               <img
// //                 className='w-10 h-10 rounded-full'
// //                 src={user ? user.photoURL : userIcon}
// //                 alt='User'
// //                 title={user?.displayName || "MD. Tahsin"}
// //               />
// //               {user ? (
// //                 <button className="" onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button>
// //               ) : (
// //                 <Link to='/auth/login' className='btn btn-outline btn-sm'>Login</Link>
// //               )}
// //                <div className=''>{user &&  user.email}</div>
// //             </div>

// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbarr;



// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import userIcon from "../assets/user.png";

// const Navbarr = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         alert("You Logged out successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <nav className=''>
//       <div className='container mx-auto px-4 py-3 flex justify-between items-center shadow-gray-500 shadow-lg'>

//         {/* Logo + Title */}
//         <div className='flex items-center space-x-2 '>
//           <img
//             className='w-14 h-auto'
//             src='https://i.ibb.co.com/gZjTfqty/Pet-Care-removebg-preview.png'
//             alt='Logo'
//           />
//           <small className='text-green-800 text-lg font-serif'>Subscription-Box</small>
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden md:flex items-center gap-5 '>
//           <Link to='/' className='hover:text-green-700'>Home</Link>
//           <Link to='/ccatagories' className='hover:text-green-700'>Categories</Link>
//           <Link to='/*' className='hover:text-green-700'>#404</Link>
//           <Link to='/profile' className='hover:text-green-700'>Profile</Link>
//         </div>

//         {/* User Info + Auth (Desktop) */}
//         <div className='hidden md:flex flex-col items-center gap-2 '>
//          <div className='flex gap-2'>
//              <img
//             className='w-10 h-10 rounded-full'
//             src={user ? user.photoURL : userIcon}
//             alt='User'
//             title={user?.displayName || "MD. Tahsin"}
//           />
//           {user ? (
//             <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button>
//           ) : (
//             <Link to='/auth/login' className='btn btn-outline btn-sm'>Login</Link>
//           )}
//          </div>
//           {user && <div className='text-xs text-gray-600'>{user.email}</div>}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className='md:hidden text-gray-800 focus:outline-none'
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
//               d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className='md:hidden px-4 pb-4'>
//           <div className='flex flex-col space-y-2'>

//             {/* Links */}
//             <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <Link to='/ccatagories' onClick={() => setIsMenuOpen(false)}>Categories</Link>
//             <Link to='/*' onClick={() => setIsMenuOpen(false)}>#404</Link>
//             <Link to='/profile' onClick={() => setIsMenuOpen(false)}>Profile</Link>

//             {/* Auth & User Info */}
//             <div className='flex flex-col items-start gap-2 mt-3'>
//               <img
//                 className='w-10 h-10 rounded-full'
//                 src={user ? user.photoURL : userIcon}
//                 alt='User'
//                 title={user?.displayName || "MD. Tahsin"}
//               />
//               {user ? (
//                 <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button>
//               ) : (
//                 <Link to='/auth/login' className='btn btn-outline btn-sm'>Login</Link>
//               )}
//               {user && <div className='text-xs text-gray-600'>{user.email}</div>}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbarr;





import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from "../assets/user.png";

const Navbarr = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className='bg-base-300 shadow-lg'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo + Title */}
        <div className='flex items-center space-x-2'>
          <img
            className='w-14 h-auto'
            src='https://i.ibb.co.com/gZjTfqty/Pet-Care-removebg-preview.png'
            alt='Logo'
          />
          <small className='text-green-800 text-lg font-serif'>Pet's Subscription-Box</small>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-5'>
          <Link to='/' className='hover:text-green-700'>Home</Link>
          <Link to='/ccatagories' className='hover:text-green-700'>Categories</Link>
          <Link to='/*' className='hover:text-green-700'>#404</Link>
          <Link to='/profile' className='hover:text-green-700'>Profile</Link>
        </div>

        {/* User Info + Auth (Desktop) */}
        <div className='hidden md:flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2'>
            <img
              className='w-10 h-10 rounded-full'
              src={user?.photoURL || userIcon}
              alt='User'
              title={user?.displayName || "MD. Tahsin"}
            />
            {user ? (
              <button onClick={handleLogOut} className='btn btn-outline btn-sm'>Logout</button>
            ) : (
              <Link to='/auth/login' className='btn btn-outline btn-sm'>Login</Link>
            )}
          </div>
          {user?.email && <div className='text-xs text-gray-600'>{user.email}</div>}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-gray-800 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <div className='flex flex-col space-y-2'>
            {/* Links */}
            <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to='/ccatagories' onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to='/*' onClick={() => setIsMenuOpen(false)}>#404</Link>
            <Link to='/profile' onClick={() => setIsMenuOpen(false)}>Profile</Link>

            {/* Auth & User Info */}
            <div className='md:hidden  pb-4 flex flex-col  gap-2 '>
              <img
                className='w-10 h-10 rounded-full'
                src={user?.photoURL || userIcon}
                alt='User'
                title={user?.displayName || "MD. Tahsin"}
              />
              {user ? (
                <button onClick={handleLogOut} className='btn btn-outline btn-sm w-16'>Logout</button> //i want Logout button small 
              ) : (
                <Link to='/auth/login' className='btn btn-outline btn-sm w-16'>Login</Link>
              )}
              {user?.email && <div className='text-xs text-gray-600'>{user.email}</div>}
            </div>
          </div>
        </div>
      )}






      
    </nav>
  );
};

export default Navbarr;