
/*

Entity: Escola
Layer: model
Module: create.js

Namespace --------------------/

idEscola
idTenant
nome
idPessoa
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
INSERT INTO Escola VALUES
(
${idTenant}
,'${params.nome}'
,${params.idPessoa}
,'${params.DataCad}'
,${params.isActive}
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