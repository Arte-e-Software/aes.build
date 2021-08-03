![Image of persons360](https://persona360.com.br/img/aesLogoBranco.svg)

# aes.build
##### Ferramenta para construir uma estrutura básica de MVC baseado em Node Express SockeIO Crypto EJS Bootstrap e MSSQ

1. Clone o projeto numa pasta
2. Vá até a pasta pelo terminal
3. Instale as dependências
```npm
npm install
```
4. Rode o script de build
```npm
npm rum build
```
5. Confira as pastas e arquivos criado (abra no Visual Studio Code)
```bash
ls
```
6. Você pode usar acoplando a um sistema que já use esse stack
7. OU, aguardar a versão 2.0 que virá com todo o sistema Persona360

#### Crie um .json no nosso padrão, salve como entity.json, ou como preferir, só lembre de alterar o require da index.js
##### a pasta onde o sistema será criado é o nome do usuário logado na máquina mais a data
##### exemplo: ./pedrosilva_Mon Aug 02 2021 21:37:02 GMT-0300 (Horário Padrão de Brasília)

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

const Entity = require('./entity/entity')
    , Make = require('./lib/make/make')
    ;

((entity) => {

    console.log('\n\n##########################################\n');
    console.log('Building on dir ./' + process.env.USER+'_'+Date());
    console.log('\n############################################\n');
    console.log('\nhttps://aes.tec.br');

    for (let i in entity) {

        Make(Entity(entity[i]), success, error);

    }

})(require('./entity/entity.json').entity);
```

#entity.json

```json
{
    "entity": [
        {
            "name": "Pessoa",
            "namespace": [
                
                "idPessoa", 
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "search": true,
                    "form": false
                }
            ]
        },
        {
            "name": "Escola",
            "namespace": [
                
                "idEscola", 
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
                    "search": true,
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
                    "search": true,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "search": true,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "search": true,
                    "form": false
                }
            ]
        },
        {
            "name": "Curso",
            "namespace": [
                
                "idCurso", 
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
                    "search": true,
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
                    "search": true,
                    "form": false
                },
                {
                    "name": "idPessoa",
                    "type": "Number",
                    "lenght": "",
                    "null": false,
                    "default": false,
                    "search": true,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "search": true,
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "search": true,
                    "form": false
                }
            ]
        },
        {
            "name": "Conteudo",
            "namespace": [

                "idConteudo", 
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "search": true,
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
                    "form": false
                },
                {
                    "name": "idEscola",
                    "type": "Number",
                    "lenght": "",
                    "null": true,
                    "default": false,
                    "form": false
                },
                {
                    "name": "idCurso",
                    "type": "Number",
                    "lenght": "",
                    "null": true,
                    "default": false,
                    "form": false
                },
                {
                    "name": "DataCad",
                    "type": "Date",
                    "lenght": "",
                    "null": false,
                    "default": "Date()",
                    "form": false
                },
                {
                    "name": "IsActive",
                    "type": "Boolean",
                    "lenght": "",
                    "null": false,
                    "default": "1",
                    "form": false
                }
            ]
        }
    ]
}
```