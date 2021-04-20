import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { getWeather } from "../redux/rsaa";
import store from "../redux/store";
// const _ = require("lodash");
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      padding: "15px",
      backgroundColor: "white",
      borderRadius: "10px",
      textDecoration: "none",
    },
    "& #input": {
      height: 50,
      width: 200,
      outline: "none",
      borderRadius: "5px",
      paddingLeft: "10px",
      margin: 10,
      fontSize: "20px",
      fontWeight: 500,
    },
    "& #search": {
      height: 54,
      outline: "none",
      backgroundColor: "#0169a7",
    },
    "& #search:hover": {
      backgroundColor: "#0169a7",
      textUnderline: "none",
    },
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={{
          location: "Warsaw",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 100));
          console.log(values);
          console.log(store.dispatch(getWeather(values.location)));
        }}
      >
        <Form id="searchform" key="FORM123" className={classes.root}>
          <div className="formContent" key="FORM13">
            <div className="formContentAdd" key="FORM12" >
              <Field
                name="location"
                key="location"
                type="input"
                id="input"
                spellcheck="false"
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ minWidth: "120px" }}
              id="search"
            >
              SEARCH
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputForm;
