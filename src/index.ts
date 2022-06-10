require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import './app.css';

import Login from './pages/login';

// @ts-ignore
import Button from './components/button';
import Layout from './components/layout';

registerComponent(Button);
registerComponent(Layout);

document.addEventListener("DOMContentLoaded", () => {

    const App = new Login();

    renderDOM(App);

});
