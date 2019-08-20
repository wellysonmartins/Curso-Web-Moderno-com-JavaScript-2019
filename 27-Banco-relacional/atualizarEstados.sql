UPDATE estados 
   SET nome = 'Maranhão' 
 WHERE sigla = 'MA';

SELECT nome AS nome
  FROM estados 
 WHERE sigla = 'MA'


UPDATE estados 
   SET nome = 'Paraná', populacao = 11.32 
 WHERE sigla = 'PR'

select * from estados;