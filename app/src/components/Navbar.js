import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <nav id="mainnavbar">
      <div id="navbar_content">
        <div id="logo_and_text">
          <a href="start" title="Free Weather API">
            <img src={logo} alt="WeatherIO+" border="0" id="navbar_logo" />
          </a>
          <div id="navbar_text_logo">
            {" "}
            <a href="#" title="Free Weather API">
              WeatherIO+
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
