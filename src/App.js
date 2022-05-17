import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Select from "react-select"
import People from "./Componentes/People";
import Planets from "./Componentes/Planets";
import Starships from "./Componentes/Starships";

const opciones = [
  { value: "people", label: "People"},
  { value: "planets", label:"Planets"},
  { value: "starships", label:"Starships"}
]


const App = () => {

  const[url, setUrl] = useState("");
  const[opcion, setOpcion]= useState("");
  const[identificador, setIdentificador]= useState("");

  const SelectChange = ({value}) => {
    setOpcion(value);
  }

  const limpiarCampo = () => {
    setIdentificador("")
  }


  return (
    <div className="container margin">
      <BrowserRouter>
        <div className="row">
          <div className="col-6">
            <div className="mb-3 row">
              <label className="col-sm-3 col-form-label">Search for:</label>
              <div className="col-sm-9">
                <Select options={opciones} onChange = {SelectChange}/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row d-flex align-items-center">
              <div className="col-auto"> 
                <label className="visually-hidden">id</label>
              </div>
              <div className="col-auto">
                <input className="form-control" type="number" onChange = {(e)=> {setIdentificador(e.target.value);
                setUrl("/"+opcion+"/"+e.target.value)}} value={identificador}/>
              </div>
              <div className="col-auto">
                <Link to= {url} className="btn btn-secondary" onClick={limpiarCampo}>Search</Link>
              </div>
            </div>
          </div>      
        </div>
        <Switch>
          <Route path="/people/:idPeople" render = {(routerProps) => <People {... routerProps}/>}/>
          <Route path="/planets/:idPlanets" render = {(routerProps) => <Planets {... routerProps}/>}/>
          <Route path="/starships/:idStarship" render = {(routerProps) => <Starships {... routerProps}/>}/> 
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
