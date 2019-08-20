SELECT * FROM estados;

SELECT sigla, nome as 'Nome do Estado' from estados;

SELECT sigla, nome as 'Nome do Estado' from estados
WHERE regiao = 'Sul';

SELECT nome, regiao FROM estados
WHERE populacao >= 10;

SELECT nome, regiao FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC;

SELECT nome   AS nome,
       regiao AS regiao
  FROM estados 
 WHERE populacao >= 10;