class Validator {
    data: string | number | boolean | undefined | null | void;

    constructor(data: any) {
        this.data = data;
    }
}

class StringValidator extends Validator {
    constructor(data: any) {
        if (typeof data === 'string') {
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}

class NumberValidator extends Validator {
    constructor(data: any) {
        if (typeof data === 'number') {
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}

class BooleanValidator extends Validator {
    constructor(data: any) {
        if (typeof data === 'boolean') {
            super(data);
        } else {
            throw new Error('O tipo está errado');
        }
    }
}
class EmailInput extends HTMLElement {
    emailInput: HTMLInputElement;
    pwInput: HTMLInputElement;
    nameInput: HTMLInputElement;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' }); // Criado um shadow DOM
        this.emailInput = document.createElement('input');
        this.pwInput = document.createElement('input');
        this.nameInput = document.createElement('input');
        this.emailInput.placeholder = 'E-mail';
        this.pwInput.placeholder = 'Senha';
        this.nameInput.placeholder = 'Nome';
        this.emailInput.onchange = (e) => this.onChange(e);
        this.pwInput.onchange = (e) => this.onChange(e);
        this.nameInput.onchange = (e) => this.onChange(e);
        shadow.appendChild(this.emailInput);
        shadow.appendChild(this.pwInput);
        shadow.appendChild(this.nameInput);
    }

    onChange(e: Event) {
        const objEmail = new EmailValidator(this.emailInput.value);
        console.log(`O e-mail inserido é: ${objEmail.data}`);

        const objPw = new PasswordValidator(this.pwInput.value);
        console.log(`A senha inserida é: ${objPw.data}`);

        const objName = new NameValidator(this.nameInput.value);
        console.log(`O nome inserido é: ${objName.data}`);
    }
}

abstract class RegexValidator extends StringValidator {
    regexp: RegExp = new RegExp('');
    constructor(data: any) {
        super(data);
    }

    get regex() {
        return this.regexp;
    }
}

class EmailValidator extends RegexValidator {
    constructor(data: any) {
        super(data);
        this.regexp = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        const result: boolean = this.regexp.test(data);

        if (result === true) {
            console.log(`O e-mail ${data} está correto.`);
        } else {
            throw new Error('O formato está errado');
        }
    }
}

class PasswordValidator extends RegexValidator {
    constructor(data: any) {
        super(data);
        this.regexp = /^\w{1,}$/gim;
        const result: boolean = this.regexp.test(data);

        if (result === true) {
            console.log(`A senha ${data} está correta.`);
        } else {
            throw new Error('O formato está errado');
        }
    }
}

class NameValidator extends RegexValidator {
    constructor(data: any) {
        super(data);
        this.regexp = /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim;
        const result: boolean = this.regexp.test(data);

        if (result === true) {
            console.log(`O nome ${data} está correto.`);
        } else {
            throw new Error('O formato está errado');
        }
    }
}

customElements.define('email-input', EmailInput);
