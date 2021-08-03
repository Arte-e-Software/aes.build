
/*

Entity: Pessoa
Layer: model
Module: create.js

Namespace --------------------/

idPessoa
nome
email
senha
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
INSERT INTO Pessoa VALUES
(
${idTenant}
,'${params.nome}'
,'${params.email}'
,'${params.senha}'
,'${params.DataCad}'
,${params.IsActive}
);

IF @@ERROR = 0
BEGIN
SELECT @@IDENTITY AS idPessoa
COMMIT TRAN
END

ELSE

BEGIN
SELECT NULL AS idPessoa
ROLLBACK TRAN
END   

`;

};