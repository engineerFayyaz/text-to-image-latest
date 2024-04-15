import React from "react";
import Header from "../../components/Header";
import ImageGenerator from "../../components/ImageGenerator/ImageGenerator";
import HomeImages from "../../components/HomeImages";
import Footer from "../../components/Footer";
import TrustedUser from "../../components/TrustedUser";

function Home() {
    return (
        <>
            <Header />
            <ImageGenerator />
            <HomeImages/>
            <TrustedUser/>
            <Footer/>
        </>
    )
}
export default Home;