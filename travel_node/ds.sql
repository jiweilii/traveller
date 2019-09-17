SET NAMES UTF8;
DROP DATABASE IF EXISTS ds;
CREATE DATABASE ds CHARSET=UTF8;
USE ds;

CREATE TABLE ds_users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) UNIQUE,
    upwd VARCHAR(32),
    phone CHAR(11),
    email VARCHAR(60),
    username VARCHAR(6),
    ucard CHAR(18)
);
INSERT INTO ds_users VALUES(null,'曹宝利','123456');
INSERT INTO ds_users (phone,upwd)VALUES('15110800953','123456');
INSERT INTO ds_users (uname,upwd)VALUES('曹宝利','123456');
SELECT * FROM ds_users;