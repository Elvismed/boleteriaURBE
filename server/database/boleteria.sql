CREATE TABLE `usuario`(
    `iduser` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `email` VARCHAR(45) NOT NULL,
    `pass` VARCHAR(255) NOT NULL,
    `rol` TINYINT(1) NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `apellido` VARCHAR(45) NOT NULL,
    `identificacion` VARCHAR(20) NOT NULL,
    `sexo` CHAR(1) NOT NULL,
    `telefono` VARCHAR(45) NOT NULL,
    `edad` INT(11) NOT NULL,
    `municipio` VARCHAR(45) NOT NULL,
    `activo` TINYINT(1) NOT NULL DEFAULT 1,
    `image` VARCHAR(500) NOT NULL DEFAULT 1
);

CREATE TABLE `factura`(
    `idfactura` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `numero_factura` VARCHAR(45) NOT NULL,
    `fecha` DATE NOT NULL,
    `hora` TIMESTAMP,
    `subtotal` DOUBLE NOT NULL,
    `total` DOUBLE NOT NULL,
    `fkusuario` INT NOT NULL,
    FOREIGN KEY (`fkusuario`) REFERENCES `usuario`(`iduser`)
);

CREATE TABLE `lugar`(
    `idlugar` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `image` VARCHAR(500) NOT NULL DEFAULT 1,
    `activo` TINYINT(1) NOT NULL DEFAULT 1
);

CREATE TABLE `evento`(
    `idevento` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `fecha` DATE NOT NULL,
    `hora` VARCHAR(45) NOT NULL,
    `tipo_evento` VARCHAR(45) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `image` VARCHAR(500) NOT NULL,
    `fkusuario` INT NOT NULL,
    FOREIGN KEY (`fkusuario`) REFERENCES `usuario`(`iduser`),
    `fklugar` INT NOT NULL,
    FOREIGN KEY (`fklugar`) REFERENCES `lugar`(`idlugar`)
);

CREATE TABLE `zona`(
    `idzona` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `fklugar` INT NOT NULL,
    FOREIGN KEY (`fklugar`) REFERENCES `lugar`(`idlugar`)
);
CREATE TABLE `area`(
    `idarea` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `capacidad` INT(20) NOT NULL,
    `fkzona` INT NOT NULL,
    FOREIGN KEY (`fkzona`) REFERENCES `zona`(`idzona`)
);

CREATE TABLE `butaca`(
    `idbutaca` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `ubicacion` VARCHAR(45) NOT NULL,
    `codigo_butaca` VARCHAR(20) NOT NULL,
    `fkarea` INT NOT NULL,
    FOREIGN KEY (`fkarea`) REFERENCES `area`(`idarea`),
    `fkactura` INT NOT NULL,
    FOREIGN KEY (`fkusuario`) REFERENCES `usuario`(`iduser`)
);

CREATE TABLE `estado`(
    `idestado` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `estado` TINYINT(1) NOT NULL DEFAULT 1,
    `fkbutaca` INT NOT NULL,
    FOREIGN KEY (`fkbutaca`) REFERENCES `butaca`(`idbutaca`)
);