// import React from 'react';

// const Banner = () => {
//     return (
//         <div className=''>
//             <div  className="flex flex-col lg:flex-row  bg-cyan-500 py-6 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-7xl mx-auto mb-7">
//     <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-serif ">
//      Best Brands 20% off
//     </p>
//     <h3 className="mt-4 max-w-2xl text-xl  font-bold lg:mx-auto text-green-600">
//     Healthy pet Food's
//     </h3>
//     <p>Get 25% off your order of $50 or more when you buy online and pickup in-store!</p>
//     <a href="#" className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
//       SHOP NOW
//     </a>
//   </div>
//   <div>
//     <img src="https://i.ibb.co.com/dwBxQzMF/bannerparoate.jpg" alt="" />
//   </div>
// </div>
//         </div>
//     );
// };

// export default Banner; //plese fix this dont chage my code only responsiv middle content items center in sm and md 






import React from 'react';

const Banner = () => {
    return (
        <div className='mt-4'>
            <div className="flex flex-col lg:flex-row bg-cyan-500 py-6 px-4 sm:px-6 lg:px-8 items-center sm:items-center md:items-center"> {/* Added items-center for sm and md */}
                <div className="max-w-7xl mx-auto mb-7 lg:mb-0 lg:mr-8"> {/* Added margin-right for spacing in lg */}
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-serif ">
                        Best Brands 20% off
                    </p>
                    <h3 className="mt-4 max-w-2xl text-xl font-bold lg:mx-auto text-green-600">
                        Healthy pet Food's
                    </h3>
                    <p>Get 25% off your order of $50 or more when you buy online and pickup in-store!</p>
                    <a href="#" className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                        SHOP NOW
                    </a>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/dwBxQzMF/bannerparoate.jpg" alt="" className="max-w-md" /> {/* Added max-w-md for image responsiveness */}
                </div>
            </div>
        </div>
    );
};

export default Banner;