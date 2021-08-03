
    
-- Cria uma tabela chamada 'Conteudo'

-- Se existir, DROP na tabela (perde todos os dados)
IF OBJECT_ID('Conteudo', 'U') IS NOT NULL
SELECT * INTO Conteudo_aes_build_backup FROM Conteudo

IF OBJECT_ID('Conteudo', 'U') IS NOT NULL
DROP TABLE Conteudo
GO

-- Cria a tabela
CREATE TABLE Conteudo
(
 idConteudo INT IDENTITY(1,1) NOT NULL PRIMARY KEY
,idTenant INT NOT NULL
,tag [VARCHAR](1000) NOT NULL
,titulo [VARCHAR](300) NOT NULL
,subTitulo [VARCHAR](1200) NOT NULL
,imagem [VARCHAR](1000) NOT NULL
,conteudo [VARCHAR](5000) NOT NULL
,comentar [BIT] NOT NULL
,publicar [BIT] NOT NULL
,privado [BIT] NOT NULL
,dataInicioPublicacao [DATETIME] NOT NULL
,dataFinalPublicacao [DATETIME] NULL
,idPessoa [INT] NOT NULL
,idEscola [INT] NULL
,idCurso [INT] NULL
,DataCad [DATETIME] NOT NULL
,isActive [BIT] NOT NULL

);
GO
