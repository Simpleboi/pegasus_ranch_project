import React from "react";
import { Nav } from "../components/nav";
import { Banner, BannerButtons } from "../components/home";
import "../styles/homepage.scss";


const HomePage: React.FC = () => {
    return(
    <main>
        <Nav />
        <Banner />
        <BannerButtons />
    </main>
)
};

export default HomePage;