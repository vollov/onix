CREATE DATABASE onix;

USE onix;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(80) NOT NULL,
  email varchar(80) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
