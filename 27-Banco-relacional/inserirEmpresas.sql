insert into empresas
   (nome, cnpj)
values
   ('Bradesco', 123456789),
   ('Vale', 987654321),
   ('Cielo', 012456789);

alter table empresas modify cnpj varchar(14);

desc empresas;

select * from empresas;

insert into empresas_unidades
   (empresa_id, cidade_id, sede)
values
   (1, 1, 1),
   (1, 2, 0),
   (2, 1, 0),
   (2, 2, 1);

select * from empresas_unidades