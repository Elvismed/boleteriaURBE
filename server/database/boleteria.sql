<<<<<<< HEAD
CREATE TABLE `usuario`(
    `iduser` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `email` INT(45) NOT NULL,
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
    FOREIGN KEY (`fkarea`) REFERENCES `area`(`idarea`)
);
=======
-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-10-2019 a las 17:28:03
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `boleteria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area`
--

CREATE TABLE `area` (
  `idarea` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(45) NOT NULL,
  `capacidad` varchar(45) NOT NULL,
  `zonas_bucata_idzona_bucata` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `butaca`
--

CREATE TABLE `butaca` (
  `idbutacas` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ubicacion` varchar(45) NOT NULL,
  `cod_butaca` varchar(10) NOT NULL,
  `area_idarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `idestado` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `APROBADO` int(11) NOT NULL,
  `RECHAZADO` int(11) NOT NULL,
  `PENDIENTE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `ideventos` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `descrip` text NOT NULL,
  `tipos_evento_idtipos_eventos` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  `idlugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `idfactura` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `numero_fact` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `subtotal` double NOT NULL,
  `total` double NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar`
--

CREATE TABLE `lugar` (
  `idLugar` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(45) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `lugar`
--

INSERT INTO `lugar` (`idLugar`, `nombre`, `image`) VALUES
(1, 'usos multiples', 'server/public/uploads/1c979ecc-6cc3-48df-9f07-043dfb2ccc4f.jpg'),
(2, 'usos multiples', 'server/public/uploads/b932be9c-763e-4fcc-82ef-15d972d1bad5.jpg'),
(3, 'usos multiples', 'server/public/uploads/5d6dadf6-80e7-47cf-8f54-e52c449aab2a.jpg'),
(4, 'usos multiples', 'server/public/uploads/e7451f87-ca79-4257-8c3d-5c65657f660a.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_evento`
--

CREATE TABLE `tipos_evento` (
  `idtipos_eventos` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `email` varchar(45) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `rol` tinyint(1) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `ci` varchar(20) NOT NULL,
  `sexo` char(1) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `edad` int(11) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `email`, `pass`, `rol`, `nombre`, `apellido`, `ci`, `sexo`, `telefono`, `edad`, `ciudad`, `municipio`, `activo`, `image`) VALUES
(1, 'luigi@gmail.com', '$2a$10$NMLuF0tt9g3MbW/SlI/67uHzNYEHo5Ldqn1A5zjryiDIdHC4XSfIO', 1, 'Luis', 'Huerta', '25667793', 'H', '25', 2147483647, 'maracaibo', 'maracaibo', 1, ''),
(3, 'thaymerapv@gmail.com', '$2a$10$cQF.bPP4B1OFV8MQgARnOuGGjslCTT/Vo8YgjyApQdKCyQN3X0tYK', 1, 'thaymer', 'portillo', '', 'H', '25', 2147483647, 'maracaibo', 'maracaibo', 1, ''),
(8, 'luigidicarlo888@gmail.com', '$2a$10$S2Eo2SWsFoBDP8VFDlUnfu/lh6vS1OZRSfKCRYuPUdnq5uix3FqGy', 1, 'Luis', 'Huerta', '25189975', 'M', '04124722052', 24, 'Maracaibo', 'Maracaibo', 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `idzona_bucata` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `Lugar_idLugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD KEY `fk_area_zonas_bucata1` (`zonas_bucata_idzona_bucata`);
  

--
-- Indices de la tabla `butaca`
--
ALTER TABLE `butaca`

  ADD KEY `fk_butaca_area1` (`area_idarea`);
--
-- Indices de la tabla `estado`
--


--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD KEY `fk_evento_tipos_evento1` (`tipos_evento_idtipos_eventos`),
  ADD KEY `fk_evento_usuarios1` (`usuarios_idusuarios`),
  ADD KEY `fk_idlugar` (`idlugar`);
 

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`

  ADD KEY `fk_factura_usuarios1` (`usuarios_idusuarios`);
  

--
-- Indices de la tabla `lugar`
--


--
-- Indices de la tabla `tipos_evento`
--

--
-- Indices de la tabla `usuarios`
--


--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD KEY `fk_zonas_Lugar1` (`Lugar_idLugar`);
    

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lugar`
--


--
-- AUTO_INCREMENT de la tabla `usuarios`
--

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `fk_area_zonas_bucata1` FOREIGN KEY (`zonas_bucata_idzona_bucata`) REFERENCES `zonas` (`idzona_bucata`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `butaca`
--
ALTER TABLE `butaca`
  ADD CONSTRAINT `butaca_ibfk_1` FOREIGN KEY (`idbutacas`) REFERENCES `factura` (`idfactura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_butaca_area1` FOREIGN KEY (`area_idarea`) REFERENCES `area` (`idarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estado`
--
ALTER TABLE `estado`
  ADD CONSTRAINT `estado_ibfk_1` FOREIGN KEY (`idestado`) REFERENCES `butaca` (`idbutacas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`idlugar`) REFERENCES `lugar` (`idLugar`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_evento_tipos_evento1` FOREIGN KEY (`tipos_evento_idtipos_eventos`) REFERENCES `tipos_evento` (`idtipos_eventos`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_evento_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD CONSTRAINT `fk_zonas_Lugar1` FOREIGN KEY (`Lugar_idLugar`) REFERENCES `lugar` (`idLugar`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
>>>>>>> 96c13f718027a1441286905b982db62fbe6e2825

CREATE TABLE `estado`(
    `idestado` INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    `estado` TINYINT(1) NOT NULL DEFAULT 1,
    `fkbutaca` INT NOT NULL,
    FOREIGN KEY (`fkbutaca`) REFERENCES `butaca`(`idbutaca`)
);