UPDATE totalCals
SET calories = $1
WHERE id = 1;
SELECT calories FROM totalCals;