
    
-- Cria uma tabela chamada 'Curso'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('Curso', 'U') IS NOT NULL
SELECT * INTO Curso_aes_build_backup FROM Curso

IF OBJECT_ID('Curso', 'U') IS NOT NULL
DROP TABLE Curso
GO

-- Cria a tabela
CREATE TABLE Curso
(
 idCurso INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,nome [VARCHAR](300) NOT NULL
,idEscola [INT] NOT NULL
,idPessoa [INT] NOT NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL

);
GO
