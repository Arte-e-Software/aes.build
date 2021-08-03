
    
-- Cria uma tabela chamada 'Pessoa'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('Pessoa', 'U') IS NOT NULL
SELECT * INTO Pessoa_aes_build_backup FROM Pessoa

IF OBJECT_ID('Pessoa', 'U') IS NOT NULL
DROP TABLE Pessoa
GO

-- Cria a tabela
CREATE TABLE Pessoa
(
 idPessoa INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,nome [VARCHAR](300) NOT NULL
,email [VARCHAR](300) NOT NULL
,senha [VARCHAR](62) NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL

);
GO
