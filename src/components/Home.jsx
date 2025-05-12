import React from 'react';
import Navbarr from './Navbarr';
import Banner from './Banner';
import BannerBehind from './BannerBehind';
import Cloth from './Cloth';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location=useLocation();
    const isCatagoriesPage=location.pathname.startsWith("/ccatagories");
    return (
        <div>
            <header>
             <Navbarr></Navbarr>
             {import.meta.env.VITE_name}
            </header>
            <main>
                {!isCatagoriesPage &&(
                    <>
                    <Banner></Banner> 
               <BannerBehind></BannerBehind>
               <Cloth></Cloth>
                    </>
                )}
               
                <section>
                <Outlet></Outlet>
            </section>
            </main>

           
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home; 