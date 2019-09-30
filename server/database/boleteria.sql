-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 13, 2019 at 03:33 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boleteria`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `idarea` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `capacidad` varchar(45) NOT NULL,
  `zonas_bucata_idzona_bucata` int(11) NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `butaca`
--

CREATE TABLE `butaca` (
  `idbutacas` int(11) NOT NULL,
  `ubicacion` varchar(45) NOT NULL,
  `cod_butaca` varchar(10) NOT NULL,
  `area_idarea` int(11) NOT NULL,
  `ticket_idticket` int(11) NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE `estado` (
  `idestado` int(11) NOT NULL,
  `APROBADO` int(11) NOT NULL,
  `RECHAZADO` int(11) NOT NULL,
  `PENDIENTE` int(11) NOT NULL
);
-- --------------------------------------------------------

--
-- Table structure for table `evento`
--

CREATE TABLE `evento` (
  `ideventos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `descrip` text NOT NULL,
  `image` varchar(500) NOT NULL,
  `tipos_evento_idtipos_eventos` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  `idlugar` int(11) NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `factura`
--

CREATE TABLE `factura` (
  `idfactura` int(11) NOT NULL,
  `numero_fact` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `subtotal` double NOT NULL,
  `total` double NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL
);
-- --------------------------------------------------------

--
-- Table structure for table `lugar`
--

CREATE TABLE `lugar` (
  `idLugar` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `idticket` int(11) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `estado_idestado` int(11) NOT NULL,
  `factura_idfactura` int(11) NOT NULL
);
-- --------------------------------------------------------

--
-- Table structure for table `tipos_evento`
--

CREATE TABLE `tipos_evento` (
  `idtipos_eventos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
);
-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL,
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
);
--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `email`, `pass`, `rol`, `nombre`, `apellido`, `ci`, `sexo`, `telefono`, `edad`, `ciudad`, `municipio`, `activo`) VALUES
(1, 'luigi@gmail.com', '$2a$10$NMLuF0tt9g3MbW/SlI/67uHzNYEHo5Ldqn1A5zjryiDIdHC4XSfIO', 1, 'Luis', 'Huerta', '25667793', 'H', '25', 2147483647, 'maracaibo', 'maracaibo', 1),
(3, 'thaymerapv@gmail.com', '$2a$10$cQF.bPP4B1OFV8MQgARnOuGGjslCTT/Vo8YgjyApQdKCyQN3X0tYK', 0, 'thaymer', 'portillo', '', 'H', '25', 2147483647, 'maracaibo', 'maracaibo', 1),
(8, 'luigidicarlo888@gmail.com', '$2a$10$S2Eo2SWsFoBDP8VFDlUnfu/lh6vS1OZRSfKCRYuPUdnq5uix3FqGy', 1, 'Luis', 'Huerta', '25189975', 'M', '04124722052', 24, 'Maracaibo', 'Maracaibo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `zonas`
--

CREATE TABLE `zonas` (
  `idzona_bucata` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `Lugar_idLugar` int(11) NOT NULL
);
--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`idarea`),
  ADD KEY `fk_area_zonas_bucata1` (`zonas_bucata_idzona_bucata`);

--
-- Indexes for table `butaca`
--
ALTER TABLE `butaca`
  ADD PRIMARY KEY (`idbutacas`),
  ADD KEY `fk_butaca_area1` (`area_idarea`),
  ADD KEY `fk_butaca_ticket1` (`ticket_idticket`);

--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`idestado`);

--
-- Indexes for table `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`ideventos`),
  ADD KEY `fk_evento_tipos_evento1` (`tipos_evento_idtipos_eventos`),
  ADD KEY `fk_evento_usuarios1` (`usuarios_idusuarios`),
  ADD KEY `fk_idlugar` (`idlugar`);

--
-- Indexes for table `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`idfactura`),
  ADD KEY `fk_factura_usuarios1` (`usuarios_idusuarios`);

--
-- Indexes for table `lugar`
--
ALTER TABLE `lugar`
  ADD PRIMARY KEY (`idLugar`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`idticket`),
  ADD KEY `fk_ticket_estado1` (`estado_idestado`),
  ADD KEY `fk_ticket_factura1` (`factura_idfactura`);

--
-- Indexes for table `tipos_evento`
--
ALTER TABLE `tipos_evento`
  ADD PRIMARY KEY (`idtipos_eventos`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuarios`);

--
-- Indexes for table `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`idzona_bucata`),
  ADD KEY `fk_zonas_Lugar1` (`Lugar_idLugar`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `lugar`
  MODIFY `idLugar` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `butaca`
  MODIFY `idbutacas` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `estado`
  MODIFY `idestado` int(11) NOT NULL AUTO_INCREMENT;
  
ALTER TABLE `evento`
  MODIFY `ideventos` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `factura`
  MODIFY `idfactura` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `ticket`
  MODIFY `idticket` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tipos_evento`
  MODIFY `idtipos_eventos` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuarios`
  MODIFY `idusuarios` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `zonas`
  MODIFY `idzona_bucata` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `fk_area_zonas_bucata1` FOREIGN KEY (`zonas_bucata_idzona_bucata`) REFERENCES `zonas` (`idzona_bucata`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `butaca`
--
ALTER TABLE `butaca`
  ADD CONSTRAINT `fk_butaca_area1` FOREIGN KEY (`area_idarea`) REFERENCES `area` (`idarea`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_butaca_ticket1` FOREIGN KEY (`ticket_idticket`) REFERENCES `ticket` (`idticket`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`idlugar`) REFERENCES `lugar` (`idLugar`),
  ADD CONSTRAINT `fk_evento_tipos_evento1` FOREIGN KEY (`tipos_evento_idtipos_eventos`) REFERENCES `tipos_evento` (`idtipos_eventos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_evento_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_ticket_estado1` FOREIGN KEY (`estado_idestado`) REFERENCES `estado` (`idestado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ticket_factura1` FOREIGN KEY (`factura_idfactura`) REFERENCES `factura` (`idfactura`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `zonas`
--
ALTER TABLE `zonas`
  ADD CONSTRAINT `fk_zonas_Lugar1` FOREIGN KEY (`Lugar_idLugar`) REFERENCES `lugar` (`idLugar`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
