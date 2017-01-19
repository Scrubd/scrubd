-- run with mysql -u root < path/to/schema.sql

CREATE DATABASE scrubd;

use scrubd;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name CHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Videos (
  id INTEGER NOT NULL AUTO_INCREMENT,
  url CHAR(255) NOT NULL,
  views INTEGER DEFAULT 0,
  user_id integer NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Comments (
  id INTEGER NOT NULL AUTO_INCREMENT,
  time_stamp timestamp NOT NULL,
  user_id integer NOT NULL,
  video_id integer NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE Videos ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Comments ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Comments ADD FOREIGN KEY (video_id) REFERENCES Videos (id);