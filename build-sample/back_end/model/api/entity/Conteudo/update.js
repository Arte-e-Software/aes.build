
/*

Entity: Conteudo
Layer: model
Module: update.js

Namespace --------------------/

idConteudo
idTenant
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
Author Pedro Silva aes.tec.br@gmail.com

2021 @ SP-Brasil

Building with aes.build v1
Path: pedrosilva_Tue Aug 03 2021 18:07:42 GMT-0300 (Horário Padrão de Brasília)

*/
    
module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
UPDATE Conteudo SET
 tag = '${params.tag}'
,titulo = '${params.titulo}'
,subTitulo = '${params.subTitulo}'
,imagem = '${params.imagem}'
,conteudo = '${params.conteudo}'
,comentar = ${params.comentar}
,publicar = ${params.publicar}
,privado = ${params.privado}
,dataInicioPublicacao = '${params.dataInicioPublicacao}'
,dataFinalPublicacao = '${params.dataFinalPublicacao}'
,idPessoa = ${params.idPessoa}
,idEscola = ${params.idEscola}
,idCurso = ${params.idCurso}
,DataCad = '${params.DataCad}'
,isActive = ${params.isActive}
WHERE
    idTenant = ${idTenant}
AND idConteudo = ${params.idConteudo}

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR as error
ROLLBACK TRAN
END   

`;

};