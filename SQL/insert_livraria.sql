INSERT INTO GENERO (nome_genero)
VALUES ('Fantasia'),
       ('Distopia');

INSERT INTO EDITORA (nome)
VALUES ('Bloomsbury Publishing'),
       ('Miramax Books'),
       ('George Allen & Unwin'),
       ('Martins Fontes');
       
INSERT INTO AUTOR (nome)
VALUES ('J.K.Rowling'),
       ('Rick Riorda'),
       ('J.J.R Tolkien');

INSERT INTO LIVRO (titulo,id_genero,id_editora,id_autor,ano_publicacao,valor)
VALUES ('Harry Potter e a Pedra Filosofal',1,1,1,'1997/06/26',48.12),
       ('Harry Potter e a Camara Secreta',1,1,1,'1998/07/02',50.40),
       ('Pearcy Jackson O Ladrao de Raios',1,2,2,'01/07/2005',20.00),
       ('O Hobbit',1,1,3,'1937/09/21',53.80);


INSERT INTO GENERO (nome_genero)
VALUES ('Fantasia'),
       ('Distopia');

INSERT INTO EDITORA (nome)
VALUES ('Bloomsbury Publishing'),
       ('Miramax Books'),
       ('George Allen & Unwin'),
       ('Martins Fontes');
       
INSERT INTO AUTOR (nome)
VALUES ('J.K.Rowling'),
       ('Rick Riorda'),
       ('J.J.R Tolkien');

INSERT INTO LIVRO (titulo,id_genero,id_editora,id_autor,ano_publicacao,valor)
VALUES ('Harry Potter e a Pedra Filosofal',1,1,1,'1997/06/26',48.12),
       ('Harry Potter e a Camara Secreta',1,1,1,'1998/07/02',50.40),
       ('Percy Jackson O Ladrao de Raios',1,2,2,'2005/07/01',20.00),
       ('O Hobbit',1,1,3,'1937/09/21',53.80);

INSERT INTO ESTOQUE (quantidade_livro,id_livro)
VALUES ('20',1),
       ('30',2),
       ('30',3),
       ('10',4);

INSERT INTO CLIENTE (nome,aniversario,numero,gmail,cpf,endereco)
VALUES ('Sarah Heloisa Taborda','2006/07/24','41 992598665','sarahtaborda229@gmail.com','00000000000','Campo Largo'),
       ('Arthur De Souza Alves','2006/10/28','41 988337710','arthurdesouzalves06@gmail.com','00000000000','Pinheirinho');

INSERT INTO VENDEDOR(nome,contato)
VALUES ('Arthur De Souza Alves','41 988337710'),
       ('Sarah Heloisa Taborda','41 992598665');

INSERT INTO VENDA (data_de_venda,quantidade,valor_total,ID_cliente,ID_vendedor)
VALUES ('2024/03/10','3',118.52,1,2);
