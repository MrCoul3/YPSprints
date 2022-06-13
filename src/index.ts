require("babel-core/register");

import { renderDOM, registerComponent }  from './core';
import './app.css';

import Login from './pages/login';
import Registration from "./pages/registration";

import Button from './components/button';
import Layout from './components/layout';
import Input from "./components/Input";

registerComponent(Button);
registerComponent(Layout);
registerComponent(Input);

document.addEventListener("DOMContentLoaded", () => {

    const App = new Registration({
        inputs: [
            {placeholder: "Почта",label: "Почта", type: "email", name: "email"},
            {placeholder: "Логин",label: "Логин", type: "text", name: "login"},
            {placeholder: "Имя",label: "Имя", type: "text", name: "first_name"},
            {placeholder: "Фамилия",label: "Фамилия", type: "text",  name: "second_name"},
            {placeholder: "Телефон",label: "Телефон", type: "tel",  name: "phone"},
            {placeholder: "Пароль",label: "Пароль", type: "password", name: "password"},
            {placeholder: "Пароль (еще раз)",label: "Пароль (еще раз)", type: "password", name: "password"},
        ]
    });
    // const App = new Login();

    renderDOM(App);

});
