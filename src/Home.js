import React from "react";

import "./Home.css";
import AmazonImage from "./images/amazon_banner_uk.jpg";

import TheLeanSturtup from "./images/the_lean_startup.jpg";
import Pool from "./images/pool.jpg";
import Chandellier from "./images/chandellier.jpg";
import PatioFurniture from "./images/patio_furniture.jpg";
import SolarSecurityCam from "./images/solar_security_cam.jpg";
import SamsungMonitor from "./images/samsung_monitor.jpg";

import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src={AmazonImage} alt="" />
      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Succesfull Business Paperback"
          price={11.96}
          rating={5}
          image={TheLeanSturtup}
        />
        <Product
          id="186563"
          title="Intex 26701EH 10ft x 30in Prism Metal Frame Above Ground Swimming Pool with 330 GPH Filter Pump and Easy Set-Up and fits up to 4 People"
          price={377.95}
          rating={5}
          image={Pool}
        />
      </div>

      <div className="home_row">
        <Product
          id="176897"
          title="Saint Mossi Chandelier Modern K9 Crystal Raindrop Chandelier"
          price={119.99}
          rating={4}
          image={Chandellier}
        />
        <Product
          id="12321341"
          title="SUNLEI Outdoor 3-Piece Bistro Set Black Wicker Furniture-Two Chairs with Glass Coffee Table (Beige Cushion)"
          price={11.96}
          rating={5}
          image={PatioFurniture}
        />

        <Product
          id="197472"
          title="ViewZone Solar Powered Security Camera L4, With 6400Mah"
          price={88.99}
          rating={3}
          image={SolarSecurityCam}
        />
      </div>

      <div className="home_row">
        <Product
          id="963784"
          title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
          price={1040.62}
          rating={4}
          image={SamsungMonitor}
        />
      </div>
    </div>
  );
}

export default Home;
