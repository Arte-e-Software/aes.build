
/*

Entity: Pessoa
Layer: model
Module: update.js

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
UPDATE Pessoa SET
 nome = '${params.nome}'
,email = '${params.email}'
,senha = '${params.senha}'
,DataCad = '${params.DataCad}'
,isActive = ${params.isActive}
WHERE
    idTenant = ${idTenant}
AND idPessoa = ${params.idPessoa}

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