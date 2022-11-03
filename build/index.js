"use strict";
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
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        if (typeof data === 'number') {
            console.log(`${data} é number`);
            super(data);
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof data === 'boolean') {
            console.log(`${data} é boolean`);
            super(data);
        }
        else {
            throw new Error('O tipo está errado');
        }
    }
}
const object1 = new StringValidator('Hello');
console.log(`${object1.data}`);
const object2 = new NumberValidator(1);
console.log(`${object2.data}`);
const object3 = new BooleanValidator(true);
console.log(`${object3.data}`);
