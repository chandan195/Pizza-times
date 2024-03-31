//import './App.css
import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Landing from "./landing/Landing";
import LoginPage from "./routes/loginPage/LoginPage";
import About from "./routes/about/About";
import Blog from "./routes/blog/Blog";
import Content from "./routes/content/Content";
import Menu from "./routes/menu/Menu";
import PageNotFound from "./components/page404/PageNotFound";
import ProductDetails from "./routes/productDetails/ProductDetails";
import CardProduct from "./routes/addToCard/CardProduct";
const Header = React.lazy(() => import("./landing/Header"));
const Footer = React.lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <BrowserRouter>
      {/* {location.pathname === "*" && <Header />} */}
      <Suspense
        fallback={
          <div className="flex items-center justify-between p-6 ">
            Loading page.........
          </div>
        }
      >
        <Header />
        {/* </Suspense> */}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/CardProduct"   element={<CardProduct/>}/>
          <Route path="/contact" element={<Content />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path ="/login" element={<LoginPage />} />
        </Routes>
      
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;