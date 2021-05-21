import React from 'react';
import Header from '../../Header/Header';
import ChooseUs from '../../ChooseUs/ChooseUs';
import Footer from '../../Footer/Footer';
import Review from '../../Review/Review';



import RoomSuit from '../../RoomSuit/RoomSuit';
import Home2 from '../../Home2/Home2';
import Services from '../../Services/Services';
import Chack from '../../Chack/Chack';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Home2></Home2>
            <Chack></Chack>
            <Services></Services>
            <RoomSuit></RoomSuit>
            <Review></Review>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;