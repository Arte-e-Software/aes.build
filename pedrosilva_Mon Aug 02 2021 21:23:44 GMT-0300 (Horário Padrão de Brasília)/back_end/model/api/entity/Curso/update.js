
/*

Entity: Curso
Layer: model
Module: update.js

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
    
module.exports = (idTenant, params) => {

return `
    
BEGIN TRAN
UPDATE Curso SET
 nome = '${params.nome}'
,idEscola = ${params.idEscola}
,idPessoa = ${params.idPessoa}
,DataCad = '${params.DataCad}'
,IsActive = ${params.IsActive}
WHERE
    idTenant = ${idTenant}
AND idCurso = ${params.idCurso}

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