import React from "react";
import Header from "../../components/Header";
import ImageGenerator from "../../components/ImageGenerator/ImageGenerator";
import HomeImages from "../../components/HomeImages";

function Home() {
    return (
        <>
            <Header />
            <ImageGenerator />
            <HomeImages/>
        </>
    )
}
export default Home;