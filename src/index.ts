class Validator {
    data: string | number | boolean | undefined | null;

    constructor(data: string | number | boolean | undefined | null) {
        this.data = data;
    }
}

let object = new Validator('Janaína');

console.log(object.data);
