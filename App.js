import "./App.css";
import Hero from "./Components/Hero/hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/programs";
import Reasons from "./Components/Reasons/Reasons";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
