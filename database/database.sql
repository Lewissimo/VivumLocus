CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40) NOT NULL,
    town VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    buildingNum INT NOT NULL,
    flatNum INT NOT NULL,
    phone VARCHAR(10) NOT NULL,
    secondPhone VARCHAR(10),
    date DATE
);

CREATE TABLE rights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    register BOOLEAN NOT NULL DEFAULT FALSE,
    news BOOLEAN NOT NULL DEFAULT FALSE,
    contact BOOLEAN NOT NULL DEFAULT FALSE,
    actualCases BOOLEAN NOT NULL DEFAULT FALSE,
    calendar BOOLEAN NOT NULL DEFAULT FALSE,
    payments BOOLEAN NOT NULL DEFAULT FALSE,
    flatINV BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    f_name VARCHAR(20) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    phone VARCHAR(20),
    age INT,
    address INT,
    description VARCHAR(255),
    rights INT NOT NULL,
    FOREIGN KEY (address) REFERENCES address(id),
    FOREIGN KEY (rights) REFERENCES rights(id)
);

CREATE TABLE accountData (
    login VARCHAR(20) NOT NULL,
    password varchar(50) NOT NULL,
    id INT PRIMARY KEY AUTO_INCREMENT,
    user INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(id)
);



CREATE TABLE admin_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    photoURL BLOB
);

CREATE TABLE news (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    owner INT NOT NULL,
    FOREIGN KEY (owner) REFERENCES users(id)
);

CREATE TABLE documentsFsystem (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type ENUM('document', 'folder'),
    filename VARCHAR(10) NOT NULL,
    content TEXT,
    parentID INT
);

CREATE TABLE acCases (
    id INT PRIMARY KEY AUTO_INCREMENT,
    accountID INT,
    status ENUM('created', 'inprogress', 'solved'),
    title VARCHAR(255) NOT NULL,
    date DATE,
    description TEXT,
    FOREIGN KEY (accountID) REFERENCES accountData(id)
);

CREATE TABLE acCasesPhotos(
    photo BLOB,
    id INT PRIMARY KEY AUTO_INCREMENT,
    acCasesId INT NOT NULL,
    FOREIGN KEY (acCasesId) REFERENCES acCases(id)
);

CREATE TABLE caseNotes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    content VARCHAR(250) NOT NULL,
    owner INT,
    acCases INT,
    FOREIGN KEY (owner) REFERENCES accountData(id),
    FOREIGN KEY (acCases) REFERENCES acCases(id)

);

CREATE TABLE inventory (
    name varchar(20),
    id INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE inventoryPhotos (
    photo BLOB,
    id INT PRIMARY KEY AUTO_INCREMENT,
    invId INT NOT NULL,
    FOREIGN KEY (invId) REFERENCES inventory(id)

);
