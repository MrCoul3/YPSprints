import {Block} from "../../core";
import './styledInput.css';

interface IInputProps {
    label: string;
    name: string;
    alert: string;
    value: string;
    placeholder: string;
    onChange?: () => void;
    type?: 'text' | 'password' | 'email';
}

export class Input extends Block {
    constructor({onChange = () => {}, label, name, alert, placeholder, type, value}: IInputProps) {
        super({label, name, alert, placeholder, type, value, events: {input: onChange }});
    }

    protected render() {
        // language=hbs
        return `
            <div class="styled-input">
                <span class="styled-input__label">{{label}}</span>
                <input class="styled-input__input"
                       name="{{name}}" 
                       type="{{type}}" 
                       placeholder="{{placeholder}}" 
                       value="{{value}}"
                >
                <span class="styled-input__alert">{{alert}}</span>
            </div>
        `
    }
}