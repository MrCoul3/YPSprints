import Block from 'core/Block';

import './registration.css';

interface IProps {
    inputs: Array<{label: string; type: string, name: string, placeholder: string, alert?: string}>
}

export class Registration extends Block {
    constructor({inputs}: IProps ) {
        super({inputs})
    }

    protected validation = (event: any) => {
        const loginData = {
            login: (this.refs.login.children[1] as HTMLInputElement).value,
            password: (this.refs.password.children[1] as HTMLInputElement).value
        };
        const errors = {
            login: (this.refs.login.children[2] as HTMLInputElement),
            password: (this.refs.password.children[2] as HTMLInputElement),
        }
        const nextState = {
            errors: {
                login: '',
                password: '',
            },
            values: {...loginData},
        };
        if (!loginData.login) {
            nextState.errors.login = 'Обязательное поле';
            errors.login.innerHTML = nextState.errors.login;
        }
        else if (loginData.login.length < 4 || loginData.login.length > 20) {
            nextState.errors.login = 'Должен содержать от 3х до 20 символов';
        }
        else if (loginData.login[0] !== loginData.login[0].toUpperCase()) {
            nextState.errors.login = 'Первая буква должна быть заглавной';
        }
        else if (loginData.login.indexOf(' ') > -1) {
            nextState.errors.login = 'Не должно быть пробелов';
        }
        else if (loginData.login.match(/^[a-z0-9_-]+$/)) {
            nextState.errors.login = 'Не должно быть спецсимволов кроме дефиса и нижнего подчеркивания';
        }
        else if (!loginData.login.match(/^[a-zA-Z0-9_-]+$/)) {
            nextState.errors.login = 'Можно использовать только латиницу';
        }
        else {
            nextState.errors.login = ''
        }

        if (!loginData.password) {
            nextState.errors.password = 'Обязательное поле';
        }
        else if (loginData.password.length < 8 || loginData.password.length > 40) {
            nextState.errors.password = 'Должен содержать от 8 до 40 символов';
        }
        else if (!loginData.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            nextState.errors.password = 'Обязательна хотя бы одна заглавная буква и цифра';
        }
        else {
            nextState.errors.password = ''
        }

        errors.login.innerHTML = nextState.errors.login;
        errors.password.innerHTML = nextState.errors.password;

        if (event.type === 'click') {
            this.setState(nextState);
        }


        console.log({loginData})
    }

    protected getStateFromProps() {
        this.state = {
            values: {
                login: '',
                password: '',
            },
            errors: {
                login: '',
                password: '',
            },
            onLogin: (event: any) => {
                console.log('aas')
                // this.validation(event);
                if (Object.values(this.state.errors).every(err => err === '')) {
                    console.log('register request')
                }
            },
            onInput: (event: any) => {
                console.log('aas')
                // this.validation(event);
            }
        }
    }


    render() {
        const {errors, values} = this.state;
        // language=hbs
        return `
           
            {{#Layout name="Registration" }}
                <form class="form-wrap__form form">
                    <div class="form__title">Регистрация</div>
                    <div class="form__inputs-container">
                        {{#each inputs}}
                                {{{Input
                                    name="{{name}}"
                                    ref="{{name}}"
                                    label="{{label}}"
                                    type="{{type}}"
                                    placeholder="{{placeholder}}"
                                    onChange=onInput
                                 }}}
                        {{/each}}
                    </div>
                    <div class="form__plug form__plug--signin"></div>
                    <div class="form__submit-container">
                        {{{Button onClick=onLogin classes="btn btn__blue btn__login link" text="Регистрация"}}}
                        <a href="login.html" onclick="" class="link">Нет аккаунта?</a>
                    </div>
                </form>
            {{/Layout}}
        `;
    }
}