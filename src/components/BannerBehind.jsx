// import React from 'react';
// import { IoAirplaneSharp } from 'react-icons/io5';
// import { TbCertificate } from 'react-icons/tb';

// const BannerBehind = () => {
//     return (
//        <div>
//                  <div className="  bg-white rounded-full  py-4 flex justify-around items-center shadow-sm rounded-b-md w-[800px] mx-auto -mt-8">
//   <div className="flex flex-col items-center ">
   
//     <img className='w-10' src="https://i.ibb.co.com/Q7fcXN1g/peat-food.jpg" alt="" />
//     <h3 className="text-sm font-semibold text-gray-700 mt-1">100% Natural</h3>
//     <p class="text-xs text-gray-500">Eco-friendly products</p>
//   </div>
//   <div class="flex flex-col items-center">
   
//     <IoAirplaneSharp />
//     <h3 class="text-sm font-semibold text-gray-700 mt-1">Free Shipping</h3>
//     <p class="text-xs text-gray-500">Free shipping on all order</p>
//   </div>
//   <div class="flex flex-col items-center">
//   <TbCertificate/>
    
//     <h3 class="text-sm font-semibold text-gray-700 mt-1">Special Sale</h3>
//     <p class="text-xs text-gray-500">Extra $9 off all items</p>
//   </div>
// </div> 
//         </div>
//     );
// };

// export default BannerBehind; //wrap for responsive any device  please dont change my style 











import React from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { TbCertificate } from 'react-icons/tb';

const BannerBehind = () => {
    return (
        <div className="container mx-auto"> {/* Wrap for responsive design */}
            <div className="bg-white rounded-full py-4 flex justify-around items-center shadow-sm rounded-b-md md:w-[800px] w-full mx-auto -mt-8">
                <div className="flex flex-col items-center ">

                    <img className='w-10' src="https://i.ibb.co.com/Q7fcXN1g/peat-food.jpg" alt="" />
                    <h3 className="text-sm font-semibold text-gray-700 mt-1">100% Natural</h3>
                    <p className="text-xs text-gray-500">Eco-friendly products</p>
                </div>
                <div className="flex flex-col items-center">

                    <IoAirplaneSharp size={24} /> {/* Added size for better visibility */}
                    <h3 className="text-sm font-semibold text-gray-700 mt-1">Free Shipping</h3>
                    <p className="text-xs text-gray-500">Free shipping on all order</p>
                </div>
                <div className="flex flex-col items-center">
                    <TbCertificate size={24} /> {/* Added size for better visibility */}

                    <h3 className="text-sm font-semibold text-gray-700 mt-1">Special Sale</h3>
                    <p className="text-xs text-gray-500">Extra $9 off all items</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBehind;