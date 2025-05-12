// import React from 'react';

// const Cloth = () => {
//     return (
//         <div className='flex flex-col lg:flex-row gap-5 w-[1000px] mx-auto mt-5'>
            







//             <div className="bg-[#CCFFE5] w-[400px] flex flex-col items-center p-4 rounded-lg">
//   <img className="bg-secondary  mb-4" src="https://i.ibb.co.com/bgNqxPBz/cloth2.jpg" alt="" />
//   <p className="text-lg font-medium text-center mb-2">Save <span className='text-pink-800'>10% </span>  on pets clothing</p>
//   <button className="btn btn-accent">SHOP NOW</button>
// </div>



//             {/* <div className='bg-sky-800 text-white items-center'>
//                 <p className='text-center'>About Our Store
//           We Can Keep

//          Them Happy</p>

//          <div className='items-center text-center flex gap-3 '>
//         <p >Cat Food</p>
//          <p >Dog Medicine</p>
//          <p >Dry Kibbles</p>
//          <p>Accessories</p></div>
//          <p >Everything 100% complete and balanced, Range of wet and dry foods is prepared with delicious high quality ingredients, containing all the essential nutrients. your cat needs.</p>
//             </div> */}



// <div className= 'w-[600px] flex-wrap  bg-sky-800 text-white py-6 px-4 rounded-lg'>
//   <p className='text-center text-xl font-semibold mb-4'>
//     About Our Store<br />
//     We Can Keep Them Happy
//   </p>

//   <div className='flex flex-wrap justify-center gap-4 text-center mb-4 text-orange-400'>
//     <p>Cat Food</p>
//     <p>Dog Medicine</p>
//     <p>Dry Kibbles</p>
//     <p>Accessories</p>
//   </div>

//   <p className='text-center   mx-auto'>
//     Everything 100% complete and balanced. Range of wet and dry foods is prepared with delicious high-quality ingredients, containing all the essential nutrients your cat needs.
//   </p>
// </div>






//         </div>
//     );
// };

// export default Cloth;




//please do responsive my provided code is correct for lg          please responsive for any device





import React from 'react';

const Cloth = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 w-full max-w-6xl mx-auto mt-5 px-4 sm:px-6 lg:px-0'>
            {/* Left Section */}
            <div className="bg-[#CCFFE5] w-full lg:w-[400px] flex flex-col items-center p-4 rounded-lg shadow-md">
                <img className="bg-secondary mb-4 w-32 h-32 object-contain" src="https://i.ibb.co.com/bgNqxPBz/cloth2.jpg" alt="Pet Clothing" />
                <p className="text-lg font-medium text-center mb-2">Save <span className='text-pink-800'>10%</span> on pets clothing</p>
                <button className="btn btn-accent btn-sm md:btn-md">SHOP NOW</button>
            </div>

            {/* Right Section */}
            <div className= 'w-full lg:w-[600px] flex flex-wrap justify-center lg:justify-start bg-sky-800 text-white py-6 px-4 rounded-lg shadow-md'>
                <p className='text-center w-full text-xl font-semibold mb-4'>
                    About Our Store<br className='hidden lg:block' />
                    We Can Keep Them Happy
                </p>

                <div className='flex flex-wrap justify-center lg:justify-start gap-4 text-center mb-4 text-orange-400'>
                    <p className='text-sm md:text-base'>Cat Food</p>
                    <p className='text-sm md:text-base'>Dog Medicine</p>
                    <p className='text-sm md:text-base'>Dry Kibbles</p>
                    <p className='text-sm md:text-base'>Accessories</p>
                </div>

                <p className='text-center lg:text-left mx-auto lg:mx-0 text-sm md:text-base'>
                    Everything 100% complete and balanced. Range of wet and dry foods is prepared with delicious high-quality ingredients, containing all the essential nutrients your cat needs.
                </p>
            </div>
        </div>
    );
};

export default Cloth;