INSERT INTO GENERO (nome_genero)
VALUES ('Fantasia'),
    ('Distopia');

INSERT INTO EDITORA (nome_editora)
VALUES ('Bloomsbury Publishing'),
       ('Miramax Books'),
       ('George Allen & Unwin'),
       ('Martins Fontes'),
	   ('Éditions Gallimard');       
INSERT INTO AUTOR (nome)
VALUES ('J.K.Rowling'),
       ('Rick Riorda'),
       ('J.J.R Tolkien'),
       ('Antoine de Saint-Exupéry ');
       
INSERT INTO LIVRO (titulo,id_genero,id_editora,id_autor,ano_publicacao,valor)
VALUES ('Harry Potter e a Pedra Filosofal',1,1,1,'1997/06/26',48.12),
       ('Harry Potter e a Camara Secreta',1,1,1,'1998/07/02',50.40),
       ('Percy Jackson O Ladrao de Raios',1,2,2,'2005/07/01',20.00),
       ('O Hobbit',1,1,3,'1937/09/21',53.80),
       ('O Pequeno Principe',1,1,4,'1943/04/06','14.67'),
       ('O Senhor dos Anéis- A Sociedade do Anél',1,1,3,'1954/06/29','30,90');
       

INSERT INTO ESTOQUE (quantidade_livro,id_livro)
VALUES ('20',1),
       ('30',3),
       ('10',4),
       ('15',5),
       ('8',6);

INSERT INTO CLIENTE (nome,aniversario,numero,gmail,cpf,endereco)
VALUES ('Sarah Heloisa Taborda','2006/07/24','41 992598665','sarahtaborda229@gmail.com','00000000000','Campo Largo'),
       ('Arthur De Souza Alves','2006/10/28','41 988337710','arthurdesouzalves06@gmail.com','00000000000','Pinheirinho'),
	   ('Maurilio Cruz','2003/01/13','41 983785590','mauriliocruz@gmal.com','00000000000','Pinheirinhho'),
       ('Alice Harumi','2014/12/14','41 999999999', 'aliceharumi@gmail.com','00000000000','Pinheirinho'),
       ('Sara Alves','2011/04/16','41 988888888', 'saraalves@gmal.com','00000000000','Pinheirinho'),
       ('Laura Gritten','2006/01/04','41 977777777','lauragritten@gmail.com','00000000000','Pinheirinho'),
       ('luiza Costa' ,'1990/05/05','41 966666666','LuizaCosta1@gmal.com','00000000000','Pinhais'),
       ('Felipe Henrique','1995/08/17','41 955555555','FelipeHenrique@gmail.com','00000000000','Boqueirao'),
       ('Rodinei Silva','1989/11/10','41 944444444','Rodineilindo@gmail.com','00000000000','Piraquara');
       
INSERT INTO VENDEDOR(nome,contato)
VALUES ('Arthur De Souza Alves','41 988337710'),
       ('Sarah Heloisa Taborda','41 992598665');

INSERT INTO VENDA (data_de_venda,quantidade,valor_total,ID_cliente,ID_vendedor)
VALUES ('2024/03/10','3',118.52,1,2),
	   ('2024/03/11','1',20.00,4,2),
       ('2024/03/11','2',68.12,1,2),
       ('2024/03/25','2',45.57,1,2),
       ('2024/03/25','1',30.90,1,2),
       ('2024/03/28','1',14.67,1,2),     
       ('2024/04/01','6',217.89,1,2),
       ('2024/04/05','4',149.42,2,2),
       ('2024/04/05','3',93.69,3,2);
INSERT INTO MAIS_VENDIDO (nome,ID_LIVRO)
VALUES ('Harry Potter e a Pedra Filosofal',1),
	   ('Harry Potter e a Camara Secreta',2),
       ('Percy Jackson O Ladrao de Raios',3),
	   ('O Hobbit',4),
       (' O Pequeno Principe',5),
       ('O Senhor dos Anéis- A Sociedade do Anél',6);