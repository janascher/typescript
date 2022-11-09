export class Validator {
    constructor(data) {
        this.data = data;
    }
}
export class StringValidator extends Validator {
    constructor(data) {
        if (typeof data === 'string') {
            super(data);
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
export class NumberValidator extends Validator {
    constructor(data) {
        if (typeof data === 'number') {
            super(data);
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
export class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof data === 'boolean') {
            super(data);
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
export class RegexValidator extends StringValidator {
    constructor(data) {
        super(data);
        this.regexp = new RegExp('');
    }
    get regex() {
        return this.regexp;
    }
}
export class EmailValidator extends RegexValidator {
    constructor(data) {
        super(data);
        this.regexp = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        const result = this.regexp.test(data);
        if (result === true) {
            console.log(`O e-mail ${data} está correto.`);
        }
        else {
            throw new Error('O formato está errado');
        }
    }
}
export class PasswordValidator extends RegexValidator {
    constructor(data) {
        super(data);
        this.regexp = /^\w{1,}$/gim;
        const result = this.regexp.test(data);
        if (result === true) {
            console.log(`A senha ${data} está correta.`);
        }
        else {
            throw new Error('O formato está errado');
        }
    }
}
export class NameValidator extends RegexValidator {
    constructor(data) {
        super(data);
        this.regexp = /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim;
        const result = this.regexp.test(data);
        if (result === true) {
            console.log(`O nome ${data} está correto.`);
        }
        else {
            throw new Error('O formato está errado');
        }
    }
}
