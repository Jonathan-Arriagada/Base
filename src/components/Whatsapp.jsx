import React from "react";
import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
return(
<a href="https://api.whatsapp.com/send?phone=+5491121687041&text=hola!" className="float" target="_blank">
    <FaWhatsapp/>
</a>)
}

export default Whatsapp;