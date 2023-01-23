import "./style/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/products";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./components/home-page";
import { Product } from "./components/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path=":id" element={<Product />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
