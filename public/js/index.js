var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EmailValidator, PasswordValidator, NameValidator, } from './validator/index.js';
class Form extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' }); // Criado um shadow DOM
        this.form = document.createElement('form');
        this.nameInput = document.createElement('input');
        this.nameInput.placeholder = 'Nome';
        this.nameInput.onchange = (e) => this.onChangeN(e);
        shadow.appendChild(this.nameInput);
        this.emailInput = document.createElement('input');
        this.emailInput.placeholder = 'E-mail';
        this.emailInput.onchange = (e) => this.onChangeE(e);
        shadow.appendChild(this.emailInput);
        this.pwInput = document.createElement('input');
        this.pwInput.placeholder = 'Senha';
        this.pwInput.onchange = (e) => this.onChangeP(e);
        shadow.appendChild(this.pwInput);
        this.registerButton = document.createElement('button');
        this.registerButton.textContent = 'Cadastrar';
        this.registerButton.setAttribute('type', 'button');
        this.registerButton.onclick = () => this.onCreate();
        shadow.appendChild(this.registerButton);
        this.logButton = document.createElement('button');
        this.logButton.textContent = 'Entrar';
        this.logButton.setAttribute('type', 'button');
        this.logButton.onclick = () => this.onLogin();
        shadow.appendChild(this.logButton);
        this.updateButton = document.createElement('button');
        this.updateButton.textContent = 'Atualizar';
        this.updateButton.setAttribute('type', 'button');
        this.updateButton.onclick = () => this.onUpdate();
        shadow.appendChild(this.updateButton);
        this.onsubmit = (e) => this.onSubmit(e);
    }
    onChangeN(e) {
        try {
            const objName = new NameValidator(this.nameInput.value);
            console.log(`O nome inserido é: ${objName.data}`);
        }
        catch (error) {
            this.nameInput.value = '';
            console.log(error.message);
        }
    }
    onChangeE(e) {
        try {
            const objEmail = new EmailValidator(this.emailInput.value);
            console.log(`O e-mail inserido é: ${objEmail.data}`);
        }
        catch (error) {
            this.emailInput.value = '';
            console.log(error.message);
        }
    }
    onChangeP(e) {
        try {
            const objPw = new PasswordValidator(this.pwInput.value);
            console.log(`A senha inserida é: ${objPw.data}`);
        }
        catch (error) {
            this.pwInput.value = '';
            console.log(error.message);
        }
    }
    onSubmit(e) {
        e.preventDefault;
        e.stopPropagation;
    }
    onCreate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.nameInput.value) {
                return;
            }
            if (!this.emailInput.value) {
                return;
            }
            if (!this.pwInput.value) {
                return;
            }
            const userData = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                password: this.pwInput.value,
            };
            const response = yield (fetch('http://127.0.0.1:5500/account/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData),
            }).then(res => res.json()));
            console.log(response.data);
        });
    }
    onLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.emailInput.value) {
                return;
            }
            if (!this.pwInput.value) {
                return;
            }
            const userData = {
                email: this.emailInput.value,
                password: this.pwInput.value,
            };
            const response = yield (fetch('http://localhost:8000/account/login/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData),
            }).then(res => res.json()));
            console.log(response.data);
        });
    }
    onUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.nameInput.value) {
                return;
            }
            if (!this.emailInput.value) {
                return;
            }
            if (!this.pwInput.value) {
                return;
            }
            const userData = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                password: this.pwInput.value,
            };
            const response = yield (fetch('http://localhost:8000/account/', {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(userData),
            }).then(res => res.json()));
            console.log(response.data);
        });
    }
}
customElements.define('form-input', Form);
