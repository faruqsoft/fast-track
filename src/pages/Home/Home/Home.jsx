import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import BandsSlider from '../BrandsSlider/BrandsSlider';

const Home = () => {
    return (
        <div>
            
            <div >
                <Banner></Banner>
                <Services></Services>
                <BandsSlider></BandsSlider>
            </div>
        </div>
    );
};

export default Home;