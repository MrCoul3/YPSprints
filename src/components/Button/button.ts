import Block from 'core/Block';

import './button.css';

interface ButtonProps {
    text: string;
    classes: string;
    onClick: () => void;
}

export class Button extends Block {
    constructor({text, classes, onClick}: ButtonProps) {
        super({text, classes, events: {click: onClick}});
    }

    protected render() {
        // language=hbs
        return `
             <div class="button">
                 <button class="{{classes}}" >{{text}}</button>
             </div>
    `;
    }
}