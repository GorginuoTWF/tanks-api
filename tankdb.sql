CREATE DATABASE IF NOT EXISTS TankDB;
USE TankDB;

-- Drop old tables if they exist
DROP TABLE IF EXISTS favourite_tanks;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tanks;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS vehicle_types;

-- === COUNTRIES TABLE ===
CREATE TABLE countries (
    country_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- === VEHICLE TYPES TABLE ===
CREATE TABLE vehicle_types (
    type_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

-- === TANKS TABLE ===
CREATE TABLE tanks (
    tank_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    country_id INT,
    type_id INT,
    weight_kg INT,
    crew INT,
    engine_power_hp INT,
    top_speed_kmh DECIMAL(5,2),
    armor_front_mm INT,
    armor_side_mm INT,
    armor_rear_mm INT,
    gun_caliber_mm DECIMAL(5,1),
    year_introduced YEAR,
    notes TEXT,
    FOREIGN KEY (country_id) REFERENCES countries(country_id),
    FOREIGN KEY (type_id) REFERENCES vehicle_types(type_id)
    
);

-- === USERS TABLE ===
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    avatar_url VARCHAR(255) DEFAULT ''
);
CREATE TABLE photos (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    filepath VARCHAR(255) NOT NULL
);

-- Связь танк → фото
CREATE TABLE tank_photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tank_id INT NOT NULL,
    photo_id INT NOT NULL,
    FOREIGN KEY (tank_id) REFERENCES tanks(tank_id) ON DELETE CASCADE,
    FOREIGN KEY (photo_id) REFERENCES photos(photo_id) ON DELETE CASCADE
);
-- === FAVOURITE TANKS TABLE ===
CREATE TABLE favourite_tanks (
    fav_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,       -- уникально, чтобы один пользователь имел только один любимый танк
    tank_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (tank_id) REFERENCES tanks(tank_id) ON DELETE CASCADE
);
CREATE TABLE battlelocation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    description TEXT
);
CREATE TABLE battlelocation_country (
    battlelocation_id INT REFERENCES battlelocation(id) ON DELETE CASCADE,
    country_id INT REFERENCES country(id) ON DELETE CASCADE,
    PRIMARY KEY (battlelocation_id, country_id)
);
CREATE TABLE battlelocation_tank (
    battlelocation_id INT REFERENCES battlelocation(id) ON DELETE CASCADE,
    tank_id INT REFERENCES tanks(id) ON DELETE CASCADE,
    PRIMARY KEY (battlelocation_id, tank_id)
);
CREATE TABLE battlelocation_photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    battlelocation_id INT NOT NULL,
    photo_id INT NOT NULL,
    FOREIGN KEY (battlelocation_id) REFERENCES battlelocation(id) ON DELETE CASCADE,
    FOREIGN KEY (photo_id) REFERENCES photos(photo_id) ON DELETE CASCADE
);
INSERT INTO battlelocation (id, name, latitude, longitude, description)
VALUES
(1, 'El Alamein', 30.817, 28.955, 'One of the most decisive battles of North Africa.'),
(2, 'Kursk', 51.214, 36.146, 'The largest tank battle in human history.'),
(3, 'Prokhorovka', 51.037, 35.688, 'Key engagement of the Battle of Kursk; one of the largest armored clashes.'),
(4, 'Villers-Bocage', 49.094, -0.652, 'Famous ambush battle in Normandy, marked by close-quarters fighting in bocage terrain.');

INSERT INTO battlelocation_country (battlelocation_id, country_id)
VALUES
-- El Alamein
(1, 2), (1, 4),(1, 7),

-- Kursk
(2, 2), (2, 1),

-- Prokhorovka
(3, 2), (3, 1),

-- Villers-Bocage
(4, 2), (4, 4);

INSERT INTO battlelocation_tank (battlelocation_id, tank_id)
VALUES
-- El Alamein
(1, 3), (1, 5), (1, 8), (1, 9), (1, 11),(1,12),(1,4),    

-- Kursk
(2, 1), (2, 5), (2, 7), (2, 6), (2, 3),(2, 10),(2,11),(2,2),

-- Prokhorovka
(3, 3), (3, 5),(3,1),(3,6),(3,11),

-- Villers-Bocage
(4, 5), (4, 9), (4, 6),(4,4),(4,17);

-- === INSERT COUNTRIES ===
INSERT INTO countries (name) VALUES
('USSR'),
('Germany'),
('USA'),
('UK'),
('Japan'),
('France'),
('Italy');

-- === INSERT VEHICLE TYPES ===
INSERT INTO vehicle_types (name) VALUES
('light'),
('medium'),
('heavy'),
('tank destroyer'),
('self-propelled gun');


-- === INSERT WWII TANKS ===
INSERT INTO tanks (name, country_id, type_id, weight_kg, crew, engine_power_hp, top_speed_kmh,
                   armor_front_mm, armor_side_mm, armor_rear_mm, gun_caliber_mm, year_introduced, notes)
VALUES
('T-34-76', 1, 2, 26800, 4, 500, 53.0, 45, 40, 40, 76.2, 1940,
 'Revolutionary Soviet medium tank — well-balanced and mass-produced.'),
('KV-1', 1, 3, 47000, 5, 600, 35.0, 90, 75, 70, 76.2, 1939,
 'Heavy Soviet tank that was nearly invulnerable early in the war.'),
('Panzer 3', 2, 2, 23000, 5, 300, 40.0, 50, 30, 20, 50.0, 1937,
 'German medium tank used in Blitzkrieg campaigns.'),
 ('M3 Stuart', 3, 1, 14300, 4, 250, 58.0, 38, 25, 25, 37.0, 1941,
 'Light American reconnaissance tank, fast but lightly armored.'),
('Panzer 4', 2, 2, 25000, 5, 300, 42.0, 80, 30, 20, 75.0, 1937,
 'Versatile German medium tank, widely used across all fronts.'),
('Tiger 1', 2, 3, 57000, 5, 700, 38.0, 100, 80, 80, 88.0, 1942,
 'Iconic German heavy tank with formidable armor and gun.'),
 ('Panther', 2, 2, 44500, 5, 700, 55.0, 80, 50, 45, 75.0, 1943,
 'German medium tank with strong frontal armor and powerful 75mm gun, widely used from 1943.'),
('Fiat M14/41', 7, 2, 14000, 4, 125, 42.0, 42, 30, 20, 47.0, 1941,
 'Italian medium tank (improved M13/40) used in North Africa and on other fronts; moderate armor and a 47 mm gun.'),
('M4 Sherman', 3, 2, 30300, 5, 450, 48.0, 63, 38, 38, 75.0, 1942,
 'Reliable Allied tank, mass-produced and easily maintained.'),
 ('SU-152', 1, 5, 45600, 5, 520, 43.0, 75, 60, 60, 152.4, 1943,
 'Soviet heavy self-propelled gun, used for assaulting fortified positions and destroying heavy tanks.'),
('Churchill Mk 4', 4, 3, 40000, 5, 350, 25.0, 102, 76, 50, 75.0, 1941,
 'Heavily armored British infantry tank, slow but tough.'),
('Crusader', 4, 2, 20500, 4, 340, 42.0, 40, 30, 20, 40.0, 1941,
 'British cruiser tank used in North Africa, fast and maneuverable.'),
('Type 97 Chi-Ha', 5, 2, 15500, 4, 170, 38.0, 33, 25, 20, 57.0, 1938,
 'Japanese medium tank with weak armor but high production numbers.'),
('Renault FT', 6, 1, 6000, 2, 35, 7.0, 22, 8, 8, 37.0, 1917,
 'Iconic WWI French light tank, revolutionary rotating turret design.'),
('Char B1', 6, 3, 28000, 4, 105, 28.0, 60, 45, 40, 75.0, 1935,
 'Heavily armored French heavy tank with strong frontal armor and 75mm hull gun.'),
('Somua S35', 6, 2, 19500, 3, 190, 40.0, 47, 40, 40, 47.0, 1936,
 'Well-armored French cavalry tank, fast and mobile, good balance between firepower and speed.'),
 ('Cromwell', 4, 2, 28000, 5, 600, 64.0, 76, 40, 25, 75.0, 1943,
 'British cruiser tank known for its excellent speed, maneuverability, and reliable Meteor engine. Used in Normandy and Western Europe.');
-- === INSERT USERS ===
INSERT INTO users (nickname, password, email) VALUES
('RedComrade', 'pass123', 'redcomrade@example.com'),
('PanzerKurt', 'tigerAce', 'panzekurt@example.com'),
('YankeeSteel', 'sherman4life', 'yanksteelex@example.com'),
('BritTeaTank', 'churchillFan', 'britteatank@example.com');

-- === FAVOURITE TANKS ===
-- Каждый пользователь имеет только один любимый танк
INSERT INTO favourite_tanks (user_id, tank_id) VALUES
(1, 1),  -- RedComrade → T-34/76
(2, 5),  -- PanzerKurt → Tiger I
(3, 6),  -- YankeeSteel → M4 Sherman
(4, 7);  -- BritTeaTank → Churchill Mk IV
INSERT INTO photos (filename, filepath)

VALUES 
  ('KV_1.jpg', 'uploads/tankphoto/KV_1.jpg'),
  ('KV_1_2.jpg', 'uploads/tankphoto/KV_1_2.jpg'),
  ('KV_1_3.jpg', 'uploads/tankphoto/KV_1_3.jpg'),
  ('KV_1_4.jpg', 'uploads/tankphoto/KV_1_4.jpg'),
    ('T_34_76.jpg', 'uploads/tankphoto/T_34_76.jpg'),
    ('T_34_76_2.jpg', 'uploads/tankphoto/T_34_76_2.jpg'),
    ('T_34_76_3.jpg', 'uploads/tankphoto/T_34_76_3.jpg'),
    ('T_34_76_4.jpg', 'uploads/tankphoto/T_34_76_4.jpg'),
    ('Panzer_3.jpg', 'uploads/tankphoto/Panzer_3.jpg'),
    ('Panzer_3_2.jpg', 'uploads/tankphoto/Panzer_3_2.jpg'),
    ('Panzer_3_3.jpg', 'uploads/tankphoto/Panzer_3_3.jpg'),
    ('Panzer_3_4.jpg', 'uploads/tankphoto/Panzer_3_4.jpg'),
    ('M3_Stuart.jpg', 'uploads/tankphoto/M3_Stuart.jpg'),
    ('M3_Stuart_2.jpg', 'uploads/tankphoto/M3_Stuart_2.jpg'),
    ('M3_Stuart_3.jpg', 'uploads/tankphoto/M3_Stuart_3.jpg'),
    ('M3_Stuart_4.jpg', 'uploads/tankphoto/M3_Stuart_4.jpg'),
    ('Panzer_4.jpg', 'uploads/tankphoto/Panzer_4.jpg'),
    ('Panzer_4_2.jpg', 'uploads/tankphoto/Panzer_4_2.jpg'),
    ('Panzer_4_3.webp', 'uploads/tankphoto/Panzer_4_3.webp'),
    ('Panzer_4_4.jpg', 'uploads/tankphoto/Panzer_4_4.jpg'),
    ('Tiger_1.png', 'uploads/tankphoto/Tiger_1.png'),
    ('Tiger_1_2.jpg', 'uploads/tankphoto/Tiger_1_2.jpg'),
    ('Tiger_1_3.jpg', 'uploads/tankphoto/Tiger_1_3.jpg'),
    ('Tiger_1_4.jpg', 'uploads/tankphoto/Tiger_1_4.jpg'),
    ('Panther.png', 'uploads/tankphoto/Panther.png'),
    ('Panther_2.jpg', 'uploads/tankphoto/Panther_2.jpg'),
    ('Panther_3.webp', 'uploads/tankphoto/Panther_3.webp'),
    ('Panther_4.jpg', 'uploads/tankphoto/Panther_4.jpg'),
    ('M14_41.webp', 'uploads/tankphoto/M14_41.webp'),
    ('M14_41_2.jpg', 'uploads/tankphoto/M14_41_2.jpg'),
    ('M14_41_3.jpg', 'uploads/tankphoto/M14_41_3.jpg'),
    ('M14_41_4.jpg', 'uploads/tankphoto/M14_41_4.jpg'),
    ('M4_Sherman.jpg', 'uploads/tankphoto/M4_Sherman.jpg'),
    ('M4_Sherman_2.jpg', 'uploads/tankphoto/M4_Sherman_2.jpg'),
    ('M4_Sherman_3.jpg', 'uploads/tankphoto/M4_Sherman_3.jpg'),
    ('M4_Sherman_4.jpg', 'uploads/tankphoto/M4_Sherman_4.jpg'),
    ('SU_152.png', 'uploads/tankphoto/SU_152.png'),
    ('SU_152_2.jpg', 'uploads/tankphoto/SU_152_2.jpg'),
    ('SU_152_3.jpg', 'uploads/tankphoto/SU_152_3.jpg'),
    ('SU_152_4.jpg', 'uploads/tankphoto/SU_152_4.jpg'),
    ('Churchill_Mk_4.webp', 'uploads/tankphoto/Churchill_Mk_4.webp'),
    ('Churchill_Mk_4_2.jpg', 'uploads/tankphoto/Churchill_Mk_4_2.jpg'),
    ('Churchill_Mk_4_3.jpg', 'uploads/tankphoto/Churchill_Mk_4_3.jpg'),
    ('Churchill_Mk_4_4.jpg', 'uploads/tankphoto/Churchill_Mk_4_4.jpg'),
    ('Crusader.jpg', 'uploads/tankphoto/Crusader.jpg'),
    ('Crusader_2.jpg', 'uploads/tankphoto/Crusader_2.jpg'),
    ('Crusader_3.jpg', 'uploads/tankphoto/Crusader_3.jpg'),
    ('Crusader_4.jpg', 'uploads/tankphoto/Crusader_4.jpg'),
    ('Type_97_Chi_Ha.png', 'uploads/tankphoto/Type_97_Chi_Ha.png'),
    ('Type_97_Chi_Ha_2.jpg', 'uploads/tankphoto/Type_97_Chi_Ha_2.jpg'),
    ('Type_97_Chi_Ha_3.jpg', 'uploads/tankphoto/Type_97_Chi_Ha_3.jpg'),
    ('Type_97_Chi_Ha_4.jpg', 'uploads/tankphoto/Type_97_Chi_Ha_4.jpg'),
    ('Renault_FT.jpg', 'uploads/tankphoto/Renault_FT.jpg'),
    ('Renault_FT_2.jpg', 'uploads/tankphoto/Renault_FT_2.jpg'),
    ('Renault_FT_3.jpg', 'uploads/tankphoto/Renault_FT_3.jpg'),
    ('Renault_FT_4.jpg', 'uploads/tankphoto/Renault_FT_4.jpg'),
    ('Char_B1.webp', 'uploads/tankphoto/Char_B1.webp'),
    ('Char_B1_2.jpg', 'uploads/tankphoto/Char_B1_2.jpg'),
    ('Char_B1_3.jpg', 'uploads/tankphoto/Char_B1_3.jpg'),
    ('Char_B1_4.jpg', 'uploads/tankphoto/Char_B1_4.jpg'),
    ('Somua_S35.jpg', 'uploads/tankphoto/Somua_S35.jpg'),
    ('Somua_S35_2.jpg', 'uploads/tankphoto/Somua_S35_2.jpg'),
    ('Somua_S35_3.jpg', 'uploads/tankphoto/Somua_S35_3.jpg'),
    ('Somua_S35_4.jpg', 'uploads/tankphoto/Somua_S35_4.jpg'),
    ('Cromwell.jpg', 'uploads/tankphoto/Cromwell.jpg'),
    ('Cromwell_2.jpg', 'uploads/tankphoto/Cromwell_2.jpg'),
    ('Cromwell_3.jpg', 'uploads/tankphoto/Cromwell_3.jpg'),
    ('Cromwell_4.jpg', 'uploads/tankphoto/Cromwell_4.jpg'),
  ('El_Alamein_1.jpg', 'uploads/locationphoto/el_alamein_1.jpg'),
  ('El_Alamein_2.jpg', 'uploads/locationphoto/el_alamein_2.jpg'),
    ('El_Alamein_3.jpg', 'uploads/locationphoto/el_alamein_3.jpg'),
    ('El_Alamein_4.jpg', 'uploads/locationphoto/el_alamein_4.jpg'),
  ('Kursk_1.jpg','uploads/locationphoto/kursk_1.jpg'),
  ('Kursk_2.jpg','uploads/locationphoto/kursk_2.jpg'),
  ('Kursk_1.jpg','uploads/locationphoto/kursk_3.jpg'),
  ('Kursk_2.jpg','uploads/locationphoto/kursk_4.jpg'),
  ('Prokhorovka_1.jpg','uploads/location/prokhorovka_1.jpg'),
  ('Prokhorovka_2.jpg','uploads/location/prokhorovka_2.jpg'),
  ('Prokhorovka_3.jpg','uploads/location/prokhorovka_3.jpg'),
  ('Prokhorovka_4.jpg','uploads/location/prokhorovka_4.jpg'),
  ('Villers_1.jpg','uploads/locationphoto/villers_bocage_1.jpg'),
  ('Villers_2.jpg','uploads/locationphoto/villers_bocage_2.jpg'),
  ('Villers_3.jpg','uploads/locationphoto/villers_bocage_3.jpg'),
  ('Villers_4.jpg','uploads/locationphoto/villers_bocage_4.jpg');

-- Связываем с танком
INSERT INTO tank_photos (tank_id, photo_id)
VALUES
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (3, 9),
    (3, 10),
    (3, 11),
    (3, 12),
    (4, 13),
    (4, 14),
    (4, 15),
    (4, 16),
    (5, 17),
    (5, 18),
    (5, 19),
    (5, 20),
    (6, 21),
    (6, 22),
    (6, 23),
    (6, 24),
    (7, 25),
    (7, 26),
    (7, 27),
    (7, 28),
    (8, 29),
    (8, 30),
    (8, 31),
    (8, 32),
    (9, 33),
    (9, 34),
    (9, 35),
    (9, 36),
    (10, 37),
    (10, 38),
    (10, 39),
    (10, 40),
    (11, 41),
    (11, 42),
    (11, 43),
    (11, 44),
    (12, 45),
    (12, 46),
    (12, 47),
    (12, 48),
    (13, 49),
    (13, 50),
    (13, 51),
    (13, 52),
    (14, 53),
    (14, 54),
    (14, 55),
    (14, 56),
    (15, 57),
    (15, 58),
    (15, 59),
    (15, 60),
    (16, 61),
    (16, 62),
    (16, 63),
    (16, 64),
    (17, 65),
    (17, 66),
    (17, 67),
    (17, 68);
INSERT INTO battlelocation_photos (battlelocation_id, photo_id)
VALUES
  (1, 69), (1, 70),(1,71) ,(1,72), -- alamain
  (2, 73), (2, 74),(2, 75),(2, 76), -- kursk
    (3, 77), (3, 78),(3, 79),(3, 80), -- prohorovks
    (4, 81), (4, 82),(4, 83),(4, 84); -- village