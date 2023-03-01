import React from "react";
import Carousel from "../components/Carousel";
import Whatsapp from "../components/Whatsapp";
import ItemListContainer from "../components/ItemListContainer"
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
      <Carousel />
      <Whatsapp />
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default Index;
