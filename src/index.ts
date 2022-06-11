
require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import './app.css';

import Login from './pages/login';

import Button from './components/button';
import Layout from './components/layout';
import Input from "./components/Input";


registerComponent(Button);
registerComponent(Layout);
registerComponent(Input);

document.addEventListener("DOMContentLoaded", () => {

    const App = new Login();

    renderDOM(App);

});
