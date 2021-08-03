
/*

Entity: Escola
Layer: model
Module: create.js

Namespace --------------------/

idEscola
nome
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
INSERT INTO Escola VALUES
(
${idTenant}
,'${params.nome}'
,${params.idPessoa}
,'${params.DataCad}'
,${params.IsActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idEscola
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idEscola
ROLLBACK TRAN
END   

`;

};