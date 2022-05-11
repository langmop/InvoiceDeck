import React from 'react';
import { useDispatch } from 'react-redux'
import { createProject } from '../../actions/projectActions'
import { useState } from "react";
import style from "./EstimateAdd.module.css"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { useSnackbar } from 'react-simple-snackbar'
const LoginForm = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar()
  const dispatch = useDispatch()
  const defaultValues = {
  projectName: "",
  KLOC:'',
  a:"",
  b:"",
  c:""
};

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(createProject(formValues, openSnackbar))
  console.log(formValues);
  setFormValues({
  projectName: "",
  KLOC:'',
  a:"",
  b:"",
  c:""
})
};

  const [formValues, setFormValues] = useState(defaultValues)
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
};
  return(
    <form onSubmit={handleSubmit} className={style.form}>
    <div><TextField
  id="name-input"
  name="projectName"
  label="Project Name"
  type="text"
  value={formValues.projectName}
  onChange={handleInputChange}
/></div>
  <div>
  <TextField 
  
  id="KLOC-input"
  name="KLOC"
  label="KLOC"
  type="number"
  value={formValues.KLOC}
  onChange={handleInputChange}
/></div>  
  <div>
  <TextField 
  
  id="a-input"
  name="a"
  label="a"
  type="number"
  value={formValues.a}
  onChange={handleInputChange}
/></div>  
  <div>
  <TextField 
  
  id="b-input"
  name="b"
  label="b"
  type="number"
  value={formValues.b}
  onChange={handleInputChange}
/></div>  
  <div>
  <TextField 
  
  id="c-input"
  name="c"
  label="c"
  type="number"
  value={formValues.c}
  onChange={handleInputChange}
/></div>  
<div>
<Button className={style.formButton} variant="contained" color="primary" type="submit">
  Submit
</Button>
</div>
    </form>

)   
};

export default LoginForm;