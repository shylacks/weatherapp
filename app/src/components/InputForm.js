import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const _ = require("lodash");
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch",
      padding: "10px",
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
        }}
      >
        <Form id="searchform" key="FORM123" className={classes.root}>
          <div className="formContent" key="FORM13">
            <div className="formContentAdd" key="FORM12">
              <Field
                name="location"
                key="location"
                label="Search"
                type="input"
                className="input"
                as={TextField}
              />
            </div>
            <Button type="submit" variant="contained" color="primary" style = {{height: "50px"}}>
              Search
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
