CREATE TABLE Users (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(70) NOT NULL
);

CREATE TABLE Categories (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE Expenses (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Amount INT,
    Description VARCHAR(200),
    UserId INT,
    CategoryId INT,
    FOREIGN KEY (UserId) REFERENCES Users(Id),
    FOREIGN KEY (CategoryId) REFERENCES Categories(Id)
);

CREATE TABLE Budgets (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Amount INT,
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);




INSERT INTO Categories (Name)
VALUES ('Food'), ('Transport'), ('Entertainment');

INSERT INTO Users (Email)
VALUES ('saadallalij2001@gmail.com');