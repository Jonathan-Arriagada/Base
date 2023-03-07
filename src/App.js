import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./store/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/name/:nameid" element={<ItemListContainer />}/>
          <Route path="/product/:productid" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
