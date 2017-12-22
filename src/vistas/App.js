import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Global/css/App.css';

//Componentes//
import Header from './Global/Header';
import Content from './Global/Content'


import items from '../data/menu'
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title="Gimnasio III-V:1.0" items = {items}/>
        <Content body={children}/>

      </div>
    );
  }
}

export default App;
