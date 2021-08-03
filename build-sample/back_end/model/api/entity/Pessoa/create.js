
/*

Entity: Pessoa
Layer: model
Module: create.js

Namespace --------------------/

idPessoa
idTenant
nome
email
senha
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
INSERT INTO Pessoa VALUES
(
${idTenant}
,'${params.nome}'
,'${params.email}'
,'${params.senha}'
,'${params.DataCad}'
,${params.isActive}
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