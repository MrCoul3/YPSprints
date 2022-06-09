import { renderDOM, registerComponent }  from './core';
import Login from './pages/login';


registerComponent(Login);


document.addEventListener("DOMContentLoaded", () => {
    // DEV: Расскоментировать нужно страницу для отображения

    const App = new Login({});

    renderDOM(App);
});
