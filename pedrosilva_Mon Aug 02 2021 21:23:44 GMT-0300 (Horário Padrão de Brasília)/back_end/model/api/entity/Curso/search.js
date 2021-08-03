
/*

Entity: Curso
Layer: model
Module: search.js

Namespace --------------------/

idCurso
nome
idEscola
idPessoa
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
 idCurso
,nome
,idEscola
,idPessoa
,DataCad
,IsActive
FROM
Curso
WHERE 
  (nome like '%${params.pesq}%'
OR idEscola like '%${params.pesq}%'
OR idPessoa like '%${params.pesq}%'
OR DataCad like '%${params.pesq}%'
OR IsActive like '%${params.pesq}%')
AND idTenant = ${idTenant};

`};