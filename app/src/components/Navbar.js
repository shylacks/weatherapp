import logo from "../images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import InputForm from "./InputForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      height: 50,
      backgroundColor: "#0169a7",
    },
    "& > *:hover": {
      backgroundColor: "#0169a7",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <nav id="navbar_content">
        <div id="logo_and_text">
          <a href="start" title="Free Weather API">
            <img src={logo} alt="WeatherIO+" border="0" id="navbar_logo" />
          </a>
          <div id="navbar_text_logo">
            <a href="#" title="Free Weather API">
              WeatherIOX
            </a>
          </div>
        </div>
        <InputForm/>
        <div className={classes.root} id="buttons">
          <Button variant="contained" color="primary">
            Contact <MailOutlineIcon style={{ marginLeft: "10px" }} />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ minWidth: "120px" }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ minWidth: "120px" }}
          >
            Login
          </Button>
        </div>
    </nav>
  );
};

export default Navbar;
