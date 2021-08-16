/* eslint-disable no-use-before-define */
import React, {useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Prestamo() {

  const initialValues ={
    fecha_prestamo: "",
    id_libro_libro: "",
    id_persona_personas: ""
  }

  const [data,setData] = useState([]);
  const [dataLibro,setDataLibro] = useState([]);

  const [persona,setPersona] = useState();
  const [libro,setLibro] = useState();
  const [fecha,setFecha] = useState();
  const [values,setValues] = useState(initialValues);
  const [accion,setAccion] = useState("Guardar");

  const handleInputChange = (e)=>{

    const {name,value} = e.target;
    setValues({...values,[name]: value});
  }

  const handleSubmit = (e) =>{
    values.id_libro_libro = libro;
    values.id_persona_personas = persona;
    addRegistro(values,accion);
    //console.log(values);
    //console.log(fecha);

  }
  const Listar = () =>{

        axios
            .get(
                `http://localhost:8000/api/persona`
            )
            .then(
                (response) => {
                    setData(response.data)
                    /*data.forEach((e) => {
                      console.log(e);
                      //filtro.push(e.nombre);
                      //console.log(filtro);
                    })*/

                    //Listar()
                  //  console.log(persona);
                },
                (error) => {
                  alert("Error al listar")
                }



            );
    }

    const Listar_libros = () =>{

          axios
              .get(
                  `http://localhost:8000/api/libro`
              )
              .then(
                  (response) => {
                      setDataLibro(response.data)
                      //console.log(dataLibro);
                      //console.log(libro);
                      //Listar()
                  },
                  (error) => {
                    alert("Error al listar")
                  }



              );
      }

  const addRegistro = (LinkObject, copiaAccion) =>{

    if(copiaAccion==="Guardar"){
        axios
        .post(
            `http://localhost:8000/api/prestamo`, {
            fecha: LinkObject.fecha,
            id_libro_libro: LinkObject.id_libro_libro,
            id_persona_personas: LinkObject.id_persona_personas
        }
        )
        .then(
            (response) => {
                if (response.status === 200) {
                    alert("Registro Correcto")
                  //  Listar();
                  //  Limpiar();
                }

            },
            (error) => {

                alert("Error al registrar")
            }



        );
    }
  }
  useEffect(() => {

  Listar();
  Listar_libros();
},[]);
  return (

  <div>
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center">
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={data}
            getOptionLabel={(option) => option.nombre}
            style={{ width: 300 }}
            onChange={(event,value) => setPersona(value.id_persona)}
            renderInput={(params) => <TextField {...params}
            label="Persona"
            variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={dataLibro}
            getOptionLabel={(option) => option.titulo}
            style={{ width: 300 }}
            onChange={(event,value) => setLibro(value.id_libro)}
            renderInput={(params) => <TextField {...params} label="Libro" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={5}>
        {/*  <TextField
            id="date"
            label="Fecha prestamo"
            type="text"
            value="fecha2"
            onChange={(event,value) => setFecha(value)}

          /> */} //fracaso de Date

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="fecha_prestamo"
            label="fecha prestamo"
            type="text"
            id="fecha_prestamo"
            value={values.fecha_prestamo}
            onChange={handleInputChange}
            //autoComplete="ingrese autor"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {accion}
          </Button>
        </Grid>
      {/*  <Button variant="contained" color="primary" onClick={Listar}>
          Primary
        </Button>
        <Button variant="contained" color="primary" onClick={Listar_libros}>
          libros
        </Button> */}


      </Grid>
    </div>

  );
}
