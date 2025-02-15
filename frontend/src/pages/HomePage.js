import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Button from "../components/Button";

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
};

export default HomePage;