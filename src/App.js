import Navbar from "./component/navbar/Navbar";
import Contact from "./component/contact/contactus"
import './App.css'
import Card from "./component/card/Card";
import Slide from "./component/slider/slide"
import Ideas from "./component/ideas/Ideas";
import Products from "./component/products/Products";
import About from "./component/about/aboutus"
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Slide />
      <About/>
      {/* <Product/> */}

      <Ideas/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
