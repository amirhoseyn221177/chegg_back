CREATE TABLE visitor (
    username VARCHAR(40),
    passwordHash bytea UNIQUE NOT NULL,
    ip VARCHAR(40),
    PRIMARY KEY (username)
);

