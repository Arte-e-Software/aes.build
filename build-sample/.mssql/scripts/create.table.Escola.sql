
    
-- Cria uma tabela chamada 'Escola'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('Escola', 'U') IS NOT NULL
SELECT * INTO Escola_aes_build_backup FROM Escola

IF OBJECT_ID('Escola', 'U') IS NOT NULL
DROP TABLE Escola
GO

-- Cria a tabela
CREATE TABLE Escola
(
 idEscola INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,nome [VARCHAR](300) NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL

);
GO
