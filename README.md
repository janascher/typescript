<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
		<img  src="https://user-images.githubusercontent.com/79182711/171509048-91800b54-de74-4dae-9924-3ce431a7cef2.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividades das Aulas de TypeScript 👨‍💻
          	<a  href="https://www.alphaedtech.org.br/">
			Alpha EdTech
		</a>
	</h4>
</div>  

## 🧐 Sobre as atividades
 
### Aula 01
Criar um projeto em Typescript seguindo estes passos:
1. Inicie um projeto em Typescript;
2. Crie uma classe chamando-a de “Validator”;
3. Crie um atributo dessa classe chamado de “data” que seja da união dos tipos nativos;
4. Compile seu código para Javascript (build).
---

### Aula 02
Criar uma nova branch do último projeto seguindo estes passos:
1. Crie uma nova branch chamada “features/v1”;
2. Crie um *constructor* para a classe `Validator` que recebe o parâmetro `data`(sendo `any`) e adiciona-o ao atributo “data” da classe;
3. Crie 3 classes herdando de “Validator”, chamando-as de “StringValidator”, “NumberValidator” e “BooleanValidator”;
4. Cada uma das classes deve implementar um `constructor` e chamar o `constructor` da classe `Validator`;
5. Em cada um dos `constructors` deve ser checado se `data` é do tipo esperado e chamar o `constructor` superior, caso contrário deve executar: `throw new Error("O tipo está errado")`.
---

### Aula 03
Usar o último projeto seguindo estes passos:
1. Crie uma nova branch do seu git chamada “features/frontend”;
2. Crie um Custom Element chamado `EmailInput` herdando de `HTMLElement`, nele nós criamos um shadow e dentro deste shadow um input e adicionamos uma definição  `customElements.define("email-input", EmailInput)`;
3. Crie um RegexValidator herdando de StringValidator e também checando se o regexp `/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim` existe no data recebido pelo construtor, caso não exista deve retornar `throw new Error("O formato está errado"`);
4. Adicione um evento “onchange” ao input dentro do Custom Element, instanciando o  regexValidator com o valor recebido pelo input;
5. Compile seu código Typescript para JavaScript;
6. Crie um index.html que chame o EmailInput e o vincule ao seu index.html.
---

### Aula 04 - Parte 1

Usar o último projeto em Typescript seguindo estes passos:
Os regex necessários serão:
- email:`/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim`;
- password: `/^\w{1,}$/gim`;
- name: `/^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim`.
1. Modifique o RegexValidator para uma classe abstrata e adicione uma propriedade “get” com o nome “regex” que retorne um RegExp vazio: new RegExp(‘’);
2. Crie um EmailValidator, PasswordValidator e NameValidator herdando de RegexValidator, estes devem sobrescrever a propriedade “regex” para retornar as respectivas expressões regulares;
3. Compile seu código typescript para JS.

### Aula 04 - Parte 2
Deve usar o projeto anterior seguindo estes passos:

1. Crie as classes EmailInput, NameInput e PasswordInput herdando de HTMLElements;
2. Valide as respostas no evento “onchange” de cada input e faça um try/catch e em caso de captura de erro limpe o input.value;
3. Crie as seguintes Interfaces com os atributos especificados:
    a. APIResponse<T>: data: T, errors: Array<strings>;
    b. UserData: id, email e name;
    c. LoginData: id
4. Crie um botão que quando clicado chame a função que chama cada requisição (não execute a função caso algum dos inputs necessários esteja vazio): Cadastrar, Logar e Atualizar;
5. Para cada botão faça uma função que execute as respectivas requisições para um servidor localhost:8000 com os seguintes dados:
    a. POST “/accounts/” => body: email, name e password;
        - response: Response<UserData>
    b. POST “/accounts/login” => body: email e password;
        - response: Response<LoginData>
    c. PATCH “/accounts/” => body: email, name e password;
        - response: Response<UserData>
6. Compile seu código typescript para JS.

## 🔗 Referências básicas 

- [TypeScript: JavaScript With Syntax For Types. (typescriptlang.org)](https://www.typescriptlang.org/)
- [TypeScript: Vantagens, mitos, dicas e conceitos fundamentais (rocketseat.com.br)](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)

## 🦸 Autor  

<div>
	<a  href="https://github.com/janascher">
		<img  src="https://avatars.githubusercontent.com/u/79182711?v=4"  width="100px;"  alt="Janaína Scher"/>
		<br />
		<sub>
			<b>Janaína Scher</b> 👩🏻‍💻
		</sub>
	</a>
</div>  

Feito com ❤️ por Janaína Scher 👋 Entre em contato! 

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/janainascher/) [![ProtonMail Badge](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:janainascher@protonmail.com)
