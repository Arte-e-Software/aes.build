
/*

Entity: Conteudo
Layer: model
Module: delete.js

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
    
//idPessoa chega em params.idPessoa, mas ainda não estou usando** desconsidere esse comentário para Entity = Pessoa

module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
UPDATE Conteudo SET
isActive=0 
WHERE idTenant = ${idTenant} AND idConteudo = ${params.idConteudo};

IF @@ERROR = 0
BEGIN
SELECT 0 AS error
COMMIT TRAN
END

ELSE

BEGIN
SELECT @@ERROR AS error
ROLLBACK TRAN
END   

`;

};