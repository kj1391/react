import React, { Component } from 'react'
//import {Button} from 'antd'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
import { Switch,Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Admin/>
      <Login/>
      </div>
    )
  }
}
