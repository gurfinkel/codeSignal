CREATE PROCEDURE countriesInfo()
BEGIN
	SELECT COUNT(name) AS number, (SUM(population) / COUNT(name))average, SUM(population) AS total
    FROM countries;
END
