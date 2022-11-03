'use strict';
class Validator {
    constructor(data) {
        this.data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        if (typeof data === 'string') {
            console.log(`${data} é string.`);
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        if (typeof data === 'number') {
            console.log(`${data} é number`);
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof data === 'boolean') {
            console.log(`${data} é boolean`);
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}
const object1 = new StringValidator('Hello');
/* console.log(`${object1.data}`); */
const object2 = new NumberValidator(1);
/* console.log(`${object2.data}`); */
const object3 = new BooleanValidator(true);
/* console.log(`${object3.data}`); */
class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' }); // Criado um shadow DOM
        this.emailInput = document.createElement('input');
        this.emailInput.onchange = (e) => this.onChange(e);
        shadow.appendChild(this.emailInput);
    }
    onChange(e) {
        const object4 = new RegexValidator(this.emailInput.value);
        console.log(`O e-mail é: ${object4.data}`);
    }
}
class RegexValidator extends StringValidator {
    constructor(data) {
        const regexp = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        const result = regexp.test(data);
        if (result === true) {
            super(data);
            console.log(`O e-mail ${data} está correto.`);
        } else {
            throw new Error('O formato está errado');
        }
    }
}
customElements.define('email-input', EmailInput);
