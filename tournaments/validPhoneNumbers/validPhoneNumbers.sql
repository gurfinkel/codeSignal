CREATE PROCEDURE validPhoneNumbers()
BEGIN
	SELECT name, surname, phone_number
    FROM phone_numbers
    where phone_number regexp '^((1\-)|\\(1\\))[0-9]{3}\-[0-9]{3}\-[0-9]{4}$'
    order by surname;
END
