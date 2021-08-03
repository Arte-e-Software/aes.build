
/*

Entity: Conteudo
Layer: model
Module: read.js

Namespace --------------------/

idConteudo
nome
titulo
subtitulo
imagem
conteudo
comentar
publicar
privado
dataInicioPublicacao
dataFinalPublicacao
idPessoa
idEscola
idCurso
DataCad
isActive

/------------------------------

Visit https://aes.tec.br 
GitHub https://github.com/Arte-e-Software/aes.build.git
Author Pedro Silva pedro@aes.tec.br

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Mon Aug 02 2021 21:23:44 GMT-0300 (Horário Padrão de Brasília)

*/
    
//idPessoa chega em params.idPessoa, mas ainda não estou usandom//** desconsidere esse comentário para Entity = Pessoa

module.exports = (idTenant, params) => {

return `

SELECT
 idConteudo
,tag
,titulo
,subTitulo
,imagem
,conteudo
,comentar
,publicar
,privado
,dataInicioPublicacao
,dataFinalPublicacao
,idPessoa
,idEscola
,idCurso
,DataCad
,IsActive
FROM
Conteudo
WHERE 
    idConteudo = ${params.idConteudo}
AND idTenant = ${idTenant};

`};