
/*

Entity: Conteudo
Layer: model
Module: create.js

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
    
module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
INSERT INTO Conteudo VALUES
(
${idTenant}
,'${params.tag}'
,'${params.titulo}'
,'${params.subTitulo}'
,'${params.imagem}'
,'${params.conteudo}'
,${params.comentar}
,${params.publicar}
,${params.privado}
,'${params.dataInicioPublicacao}'
,'${params.dataFinalPublicacao}'
,${params.idPessoa}
,${params.idEscola}
,${params.idCurso}
,'${params.DataCad}'
,${params.IsActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idConteudo
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idConteudo
ROLLBACK TRAN
END   

`;

};