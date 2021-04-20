import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Discord from "./components/Discord";
import DisplayWeather from "./components/DisplayWeather";
import store from "./redux/store";
import { getWeather } from "./redux/rsaa";

function App() {
  store.dispatch(getWeather("Warsaw"))
  return (
    <div className="App">
      <Navbar />
      <DisplayWeather/>
      <Discord/>
      <Footer />
    </div>
  );
}

export default App;
