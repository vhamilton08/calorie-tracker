CREATE TABLE breakfast (
    breakfast_id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    calories INTEGER,
    protein INTEGER,
    carbs INTEGER,
    fat INTEGER,
    weight INTEGER
);

CREATE TABLE lunch (
    lunch_id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    calories INTEGER,
    protein INTEGER,
    carbs INTEGER,
    fat INTEGER,
    weight INTEGER
);

CREATE TABLE dinner (
    dinner_id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    calories INTEGER,
    protein INTEGER,
    carbs INTEGER,
    fat INTEGER,
    weight INTEGER
);

CREATE TABLE snacks (
    snacks_id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    calories INTEGER,
    protein INTEGER,
    carbs INTEGER,
    fat INTEGER,
    weight INTEGER
);

-- CREATE TABLE daily (
--     daily_id SERIAL PRIMARY KEY,
--     name VARCHAR(250),
--     calories INTEGER,
--     protein INTEGER,
--     carbs INTEGER,
--     fat INTEGER
-- );