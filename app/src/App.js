import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Discord from "./components/Discord";
import DisplayWeather from "./components/DisplayWeather";
import store from "./redux/store";
import { getWeather } from "./redux/rsaa";

const keys = process.env.KEY_TO_API

function App() {
  store.dispatch(getWeather("Warsaw")) // inital load
  return (
    <div className="App">      
      <Navbar />
      <DisplayWeather/>
      <Footer />
    </div>
  );
}

export default App;
