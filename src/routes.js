//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//vistas
import App from './vistas/App';
import Login from './vistas/Login';
import Reserva from './vistas/Reserva';
import Horario from './vistas/Horario';
import Home from './vistas/Home';
import Page404 from './vistas/Page404';
import Perfil from './vistas/Perfil';
import Asistencia from './vistas/Asistencia'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/horario" component={Horario}/>
      <Route exact path="/reserva" component={Reserva}/>
      <Route exact path="/perfil" component={Perfil}/>
      <Route exact path="/asistencia" component={Asistencia}/>
      <Route exact path="/home" component={Home}/>
      <Route component={Page404}/>

    </Switch>
  </App>
export default AppRoutes;
