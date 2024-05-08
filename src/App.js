import Navbar from "./component/navbar/Navbar";
import Contact from "./component/contact/contactus"
import './App.css'
import Card from "./component/card/Card";
import Slide from "./component/slider/slide"
import Ideas from "./component/ideas/Ideas";
import Products from "./component/products/Products";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Slide/>
      <Ideas/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
