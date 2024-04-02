import React from "react";
import Header from "../../components/Header";
import ImageGenerator from "../../components/ImageGenerator/ImageGenerator";
import HomeImages from "../../components/HomeImages";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <ImageGenerator />
            <HomeImages/>

            <Footer/>
        </>
    )
}
export default Home;