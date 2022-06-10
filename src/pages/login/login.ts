import Block from 'core/Block';

import './login.css';

interface IProps {

}

export class Login extends Block {
    constructor() {
        super();
    }

    render() {
        // language=hbs
        return `
            {{#Layout name="Onboarding" }}
                {{{Button classes="btn btn__blue btn__login link" text="Login"}}}
            {{/Layout}}

        `;
    }
}