import React, {useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialDatatable from "material-datatable";
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Persona() {
  const classes = useStyles();

  const initialValues = {

    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    id_persona:null
  }

  const [values,setValues] = useState(initialValues);
  const [accion,setAccion] = useState("Guardar");

  const [data,setData] = useState([]);

//metodos
  const handleInputChange = (e)=>{

    const {name,value} = e.target;
    setValues({...values,[name]: value});
  }

  const handleSubmit = (e) =>{

    addUser(values,accion);
    setValues(...initialValues);

  }

//axios

const addUser = (LinkObject, copiaAccion) => {

  if(copiaAccion==="Guardar"){
      axios
      .post(
          `http://localhost:8000/api/persona`, {
          nombre: LinkObject.nombre,
          apellido_paterno: LinkObject.apellido_paterno,
          apellido_materno: LinkObject.apellido_materno,

      }
      )
      .then(
          (response) => {
              if (response.status === 200) {
                  alert("Registro Correcto")
                /*  Swal.fire({
                      title: 'Perfecto!',
                      text: 'Registro Correcto',
                      icon: 'success',
                      confirmButtonText: 'ok'
                    })*/
                //  Listar();
                //  Limpiar();
              }

          },
          (error) => {

              alert("Error al registrar")
          }



      );
  }

  /*if(copiaAccion==="Modificar"){


  axios
  .put(
      `http://192.99.144.232:8080/api/usuario/${LinkObject.id}`, {
      usuario: LinkObject.usuario,
      password: LinkObject.password
  }
  )
  .then(
      (response) => {
          if (response.status === 200) {
              alert("Modificacion correcta")
            //  Listar();
            //  Limpiar();
          }

      },
      (error) => {

          alert("Error al Modificar")
      }



  );
}*/
}

//Listar

const columns = [

  {
      name: 'Nombre',
      field: 'nombre'
  },
  {
      name: 'Apellido Paterno',
      field: 'apellido_paterno'
  },
  {
    name: 'Apellido Materno',
    field: 'apellido_materno'
  }

];

const Listar = () =>{

      axios
          .get(
              `http://localhost:8000/api/persona`
          )
          .then(
              (response) => {
                  setData(response.data)
                  Listar()
              },
              (error) => {
                alert("Error al listar")
              }



          );
  }

  const options = {
    selectableRows: false
  };
  useEffect(() => {

  Listar();
},[]);


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleInputChange}
            //  autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="apellido_paterno"
              label="Apellido Paterno"
              type="text"
              id="apellido_paterno"
              value={values.apellido_paterno}
              onChange={handleInputChange}
              //autoComplete="ingrese autor"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="apellido_materno"
              label="Apellido Materno"
              type="text"
              id="apellido_materno"
              values={values.apellido_materno}
              onChange={handleInputChange}

              //autoComplete="ingrese autor"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {accion}
            </Button>

            <Grid container>
            </Grid>
          </form>
        </div>

      {/*  <CustomizedTables />*/}
      </Container>
      <Grid
        container
        direction="center"
        justifyContent="center"
        alignItems="center"
        >
        <Grid item xs={6}>
          <MaterialDatatable
            title={"Lista Usuarios"}
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </div>

  );
}
