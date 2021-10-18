import Banner from "./components/Banner/Banner.js";
import { DesktopNav } from "./components/Navbar/Nav.js";
import Footer from "./components/Footer/Footer.js";
import Marketplace from "./components/Marketplace/Marketplace.js";
import React from "react";
import Shop from "./components/Shop/Shop.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DesktopNav />
      </header>
      <main>
        <Banner />
        <Shop />
        
      </main>
      <footer>
       <Footer />
      </footer>
    </div>
  );
}

export default App;
