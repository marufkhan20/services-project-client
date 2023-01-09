import "./App.css";
import FooterArea from "./components/common/FooterArea";
import Navigation from "./components/common/Navigation";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <div>
      <Navigation />
      {/* <Home /> */}
      <ServiceDetails />
      <FooterArea />
    </div>
  );
}

export default App;
