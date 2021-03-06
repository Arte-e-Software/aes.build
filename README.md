![Image of persons360](https://persona360.com.br/img/arte-e-software.png)

# aes.build
##### Ferramenta para construir uma estrutura básica de MVC com NodeJs

## Stack - Node v14.17.4

### [Node](https://nodejs.org/en/) | [Express](https://expressjs.com/pt-br/) | [SockeIO](https://socket.io/) | [Crypto](https://github.com/brix/crypto-js) | [EJS](https://ejs.co/) | [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) | [MSSQL](https://www.npmjs.com/package/mssql)

1. Crie uma pasta para o projeto
```bash
mkdir aes.build
cd aes.build
```
2. Clone o projeto na pasta
```git
git clone https://github.com/Arte-e-Software/aes.build.git
```
3. Configure as entidades de acordo com suas necessidades. Vide entity.json como exemplo
```file
˜/github/aes.build/entity.json
```
4. Instale as dependências
```npm
npm install
```
5. Rode o script de build passando o parâmetro do DB_PROFILE
```npm
DB_PROFILE=mssql npm rum build
```
6. Confira as pastas e arquivos criado (abra no Visual Studio Code)
```bash
ls
```
7. Você pode usar acoplando a um sistema que já use esse stack
8. OU, aguardar a versão 2.0 que virá com todo o sistema Persona360

###### Exemplo de build [build-sample](https://github.com/Arte-e-Software/aes.build/tree/main/build-sample)

#index.js

```javascript
/**
 * 
 * erro e sucesso 
 * deverão ser mais inteligentes, 
 * registrando um arquivo de log
 * 
 * */

function error(err) { console.log(err); };
function success(msg) { };

// ---------------------------------------- //

const config = require('./config')
    , build = require('./lib/build/builder')
    ;

((entity) => {

    console.log('\nBuilding @ ˜/' + process.env.USER + '_' + Date() + '\n\n');

    for (let i in entity) {

        build(config(entity[i]), success, error);

    }

})(require('./entity.json').entity);

```

#entity.json

```json
{
    "entity": [
        {
            "name": "Pessoa",
            "namespace": [
                
                "idPessoa", 
                "idTenant",
                "nome", 
                "email", 
                "senha", 
                "DataCad", 
                "isActive"
            
            ],
            "fields": [
                {
                    "name": "nome",
                    "type": "String",
                    "lenght": "300",
                    "null": false,
                    "default": false,
                    "searchable": true,
                    "form": {
                        "label": "Nome",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Informe seu nome"
                    }
                },
                {
                    "name": "email",
                    "type": "String",
                    "lenght": "300",
                    "null": false,
                    "default": false,
                    "searchable": true,
                    "form": {
                        "label": "E-mail",
                        "type": "email",
                        "value": "",
                        "required": true,
                        "placeholder": "Informe seu melhor e-mail"
                    }
                },
                {
                    "name": "senha",
                    "type": "String",
                    "lenght": "62",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Senha",
                        "type": "password",
                        "value": "",
                        "required": true,
                        "placeholder": "Crie uma senha forte"
                    }
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "searchable": false,
                    "form": false
                }
            ]
        },
        {
            "name": "Escola",
            "namespace": [
                
                "idEscola", 
                "idTenant",
                "nome", 
                "idPessoa", 
                "DataCad", 
                "isActive"
            
            ],
            "fields": [
                {
                    "name": "nome",
                    "type": "String",
                    "lenght": "300",
                    "null": false,
                    "default": false,
                    "searchable": true,
                    "form": {
                        "label": "Nome",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Informe o nome da sua Escola"
                    }
                },
                {
                    "name": "idPessoa",
                    "type": "Number",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "searchable": true,
                    "form": false
                }
            ]
        },
        {
            "name": "Curso",
            "namespace": [
                
                "idCurso", 
                "idTenant",
                "nome", 
                "idEscola", 
                "idPessoa", 
                "DataCad", 
                "isActive"
            
            ],
            "fields": [
                {
                    "name": "nome",
                    "type": "String",
                    "lenght": "300",
                    "null": false,
                    "default": false,
                    "searchable": true,
                    "form": {
                        "label": "Nome",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Informe o nome do Curso"
                    }
                },
                {
                    "name": "idEscola",
                    "type": "Number",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "idPessoa",
                    "type": "Number",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "searchable": true,
                    "form": false
                }
            ]
        },
        {
            "name": "Conteudo",
            "namespace": [

                "idConteudo", 
                "idTenant",
                "nome", 
                "titulo", 
                "subtitulo", 
                "imagem", 
                "conteudo", 
                "comentar", 
                "publicar", 
                "privado", 
                "dataInicioPublicacao", 
                "dataFinalPublicacao",
                "idPessoa", 
                "idEscola", 
                "idCurso", 
                "DataCad", 
                "isActive"

            ],
            "fields": [
                {
                    "name": "tag",
                    "type": "String",
                    "lenght": "1000",
                    "null": false,
                    "default": false,
                    "searchable": true,
                    "form": {
                        "label": "Tag",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Escreva as tags no formato #noticia #home #cursos"
                    }
                },
                {
                    "name": "titulo",
                    "searchable": true,
                    "type": "String",
                    "lenght": "300",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Título",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Digite o título do seu conteúdo (máximo 300 caracteres)"
                    }
                },
                {
                    "name": "subTitulo",
                    "searchable": true,
                    "type": "String",
                    "lenght": "1200",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Subtítulo",
                        "type": "text",
                        "value": "",
                        "required": true,
                        "placeholder": "Digite um subtítulo para o seu conteúdo (máximo 1200 caracteres)"
                    }
                },
                {
                    "name": "imagem",
                    "type": "String",
                    "lenght": "1000",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Endereço da Imagem Principal",
                        "type": "url",
                        "value": "",
                        "required": true,
                        "placeholder": "Exemplo: https://persona360.com.br/img/logopersona.png"
                    }
                },
                {
                    "name": "conteudo",
                    "searchable": true,
                    "type": "String",
                    "lenght": "5000",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Digite o conteudo do seu conteúdo",
                        "type": "text-area",
                        "value": "",
                        "required": true,
                        "placeholder": "Digite seu conteúdo. Máximo de 5000 caracteres"
                    }
                },
                {
                    "name": "comentar",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "form": {
                        "label": "Ativar comentários",
                        "type": "check-box",
                        "value": "1",
                        "required": true,
                        "placeholder": false
                    }
                },
                {
                    "name": "publicar",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": {
                        "label": "Ativar publicação",
                        "type": "check-box",
                        "value": "1",
                        "required": true,
                        "placeholder": false
                    }
                },
                {
                    "name": "privado",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": {
                        "label": "Privado (somente usuários autenticados podem ler)",
                        "type": "check-box",
                        "value": "1",
                        "required": true,
                        "placeholder": false
                    }
                },
                {
                    "name": "dataInicioPublicacao",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "searchable": false,
                    "form": {
                        "label": "Data início da publicação (dia que entra no ar a partir das 00:00)",
                        "type": "Date",
                        "value": "",
                        "required": true,
                        "placeholder": false
                    }
                },
                {
                    "name": "dataFinalPublicacao",
                    "type": "Date",
                    "lenght": "",
                    "null": true,
                    "default": false,
                    "searchable": false,
                    "form": {
                        "label": "Data final da publicação (dia que sai no ar a partir das 00:00) - Vazio deixa a publicação eterna",
                        "type": "Date",
                        "value": "",
                        "required": true,
                        "placeholder": false
                    }
                },
                {
                    "name": "idPessoa",
                    "type": "Number",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "idEscola",
                    "type": "Number",
                    "lenght": "",
                    "null": true,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "idCurso",
                    "type": "Number",
                    "lenght": "",
                    "null": true,
                    "default": false,
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "searchable": false,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "searchable": false,
                    "form": false
                }
            ]
        }
    ]
}
```