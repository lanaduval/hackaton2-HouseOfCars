DROP TABLE IF EXISTS resa;

CREATE TABLE resa (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR (255) NOT NULL,
  lastname VARCHAR (255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  start DATE NOT NULL,
  end DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

DROP TABLE IF EXISTS compagny;

CREATE TABLE compagny (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR (255) NOT NULL,
  siret VARCHAR (255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;
DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  img VARCHAR(255) DEFAULT NULL,
  make VARCHAR (255) NOT NULL,
  model VARCHAR (255) NOT NULL,
  autonomy VARCHAR (255) NOT NULL,
  city VARCHAR (255) NOT NULL,
  miles INT NOT NULL,
  year INT NOT NULL,
  seats INT NOT NULL,
  available BOOLEAN NOT NULL,
  type ENUM('confort', 'casual') NOT NULL,
  resa_id INT DEFAULT NULL,
compagny_id INT DEFAULT NULL,
  CONSTRAINT fk_resa FOREIGN KEY (resa_id) REFERENCES resa(id),
  CONSTRAINT fk_compagny FOREIGN KEY (compagny_id) REFERENCES compagny(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;


INSERT into compagny (name, email, password, siret) 
VALUES ("Fly","fly@fly.com","$argon2id$v=19$m=65536,t=5,p=1$2tyHzTqzwVk1kHVa/iNdXA$zH/9YxMB166yoM2AVJfGhDJ1UxXhIMqED3LCW1h5ELw","123 568 941 00056"),
("Septa","septa@septa.com","$argon2id$v=19$m=65536,t=5,p=1$hUrWsPz/JkKrUY2nZ6WgAA$+G/roQ8GGH3afGVqvMww/q0V/HtKfDj4z3jd+oSgHkY","124 666 941 00088"),
("Rent and Drive","rent@drive.com","$argon2id$v=19$m=65536,t=5,p=1$TIttNN/GMIJiiaPkGcxI0A$bjjezkW9/f09CxslK8RSmwGL9Gr4XO/ihPmVGC4/evY","234 666 941 00477")
;

INSERT into cars (make, model, autonomy, city, miles, year, seats, available, type, compagny_id) 
VALUES ('Renault','Twizy E-tech','60 miles','Paris','150','2019','2','0','casual','1'),
('Renault','Twingo E-tech','110 miles','Paris','290','2019','4','0','casual','1'),
('Renault','Zoe E-tech','234 miles','Paris','230','2021','4','0','casual','1'),
('Tesla','Model 3','254 miles','Paris','255','2022','4','0','confort','1'),
('Renault','Twizy E-tech','60 miles','Lyon','170','2019','2','0','casual','2'),
('Renault','Twizy E-tech','115 miles','Lyon','190','2019','4','0','casual','2'), 
('Renault','Zoe E-tech','234 miles','Lyon','110','2021','4','0','confort','2'),
('Tesla','Model Y','507 miles','Lyon','280','2020','4','0','confort','2'),
('Renault','Twizy E-tech','115 miles','Bordeaux','150','2019','4','0','casual','3'), 
('Tesla','Model Y','507 miles','Bordeaux','425','2020','4','0','confort','1'),
('Renault','Twizy E-tech','60 miles','Marseille','150','2019','2','0','casual','3'),
('Renault','Twizy E-tech','60 miles','Toulouse','150','2019','2','0','casual','1'),
('Renault','Zoe E-tech','234 miles','Toulouse','230','2021','4','0','casual','3'),
('Tesla','Model 3','254 miles','Reims','255','2022','4','0','confort','3')
;
