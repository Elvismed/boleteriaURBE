-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2019 a las 20:58:55
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

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
  `idarea` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `capacidad` varchar(45) NOT NULL,
  `zonas_bucata_idzona_bucata` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `butaca`
--

CREATE TABLE `butaca` (
  `idbutacas` int(11) NOT NULL,
  `ubicacion` varchar(45) NOT NULL,
  `cod_butaca` varchar(10) NOT NULL,
  `area_idarea` int(11) NOT NULL,
  `ticket_idticket` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `idestado` int(11) NOT NULL,
  `APROBADO` int(11) NOT NULL,
  `RECHAZADO` int(11) NOT NULL,
  `PENDIENTE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `ideventos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `descrip` text NOT NULL,
  `tipos_evento_idtipos_eventos` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  `idlugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `idfactura` int(11) NOT NULL,
  `numero_fact` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `subtotal` double NOT NULL,
  `total` double NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar`
--

CREATE TABLE `lugar` (
  `idLugar` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `idticket` int(11) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `estado_idestado` int(11) NOT NULL,
  `factura_idfactura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_evento`
--

CREATE TABLE `tipos_evento` (
  `idtipos_eventos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
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
  `municipio` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `email`, `pass`, `rol`, `nombre`, `apellido`, `ci`, `sexo`, `telefono`, `edad`, `ciudad`, `municipio`) VALUES
(1, 'luigi@gmail.com', '$2a$10$NMLuF0tt9g3MbW/SlI/67uHzNYEHo5Ldqn1A5zjryiDIdHC4XSfIO', 1, 'Luis', 'Huerta', '25667793', 'H', '25', 2147483647, 'maracaibo', 'maracaibo'),
(3, 'thaymerapv@gmail.com', '$2a$10$tov8b0nkfPWQ4F/LRB41puolT01foBk8iuoaLhIW61i0mctvZyUi6', 1, 'thaymer', 'portillo', '', 'H', '25', 2147483647, 'maracaibo', 'maracaibo'),
(4, 'thaymerapv@gmail.com', '$2a$10$7l0xLUkp7GZcTXmoU/jfkOr8kcF.8Eq6UrxlW5xrvdcga108K2ikK', 1, 'thaymer', 'portillo', '', 'H', '22', 2147483647, 'maracaibo', 'maracaibo'),
(5, 'thaymerapv@gmail.com', '$2a$10$yT3pZu31ElKkxExk9vpng.9h5ccbIXz825kMWMGES88dVS1/Qo96u', 1, 'thaymer', 'portillo', '', 'H', '26', 2147483647, 'maracaibo', 'maracaibo'),
(6, 'thaymerapv@gmail.com', '$2a$10$Vo.PDGlugRPKFcVpG2T1U.NemcM0PS7rWahHzc.3GoeazroO8V.06', 1, 'thaymer', 'portillo', '', 'H', '04126717747', 26, 'maracaibo', 'maracaibo'),
(7, 'thaymerapv@gmail.com', '$2a$10$Bhm9EP4t2pM4Dpe9WDxSROkT1U46Fj/HbcuOMOXEEslOGs0ydZ9Hq', 1, 'thaymer', 'portillo', '25667793', 'H', '04126717747', 26, 'maracaibo', 'maracaibo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `idzona_bucata` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `Lugar_idLugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`idarea`),
  ADD KEY `fk_area_zonas_bucata1` (`zonas_bucata_idzona_bucata`);

--
-- Indices de la tabla `butaca`
--
ALTER TABLE `butaca`
  ADD PRIMARY KEY (`idbutacas`),
  ADD KEY `fk_butaca_area1` (`area_idarea`),
  ADD KEY `fk_butaca_ticket1` (`ticket_idticket`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`idestado`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`ideventos`),
  ADD KEY `fk_evento_tipos_evento1` (`tipos_evento_idtipos_eventos`),
  ADD KEY `fk_evento_usuarios1` (`usuarios_idusuarios`),
  ADD KEY `fk_idlugar` (`idlugar`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`idfactura`),
  ADD KEY `fk_factura_usuarios1` (`usuarios_idusuarios`);

--
-- Indices de la tabla `lugar`
--
ALTER TABLE `lugar`
  ADD PRIMARY KEY (`idLugar`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`idticket`),
  ADD KEY `fk_ticket_estado1` (`estado_idestado`),
  ADD KEY `fk_ticket_factura1` (`factura_idfactura`);

--
-- Indices de la tabla `tipos_evento`
--
ALTER TABLE `tipos_evento`
  ADD PRIMARY KEY (`idtipos_eventos`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuarios`);

--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`idzona_bucata`),
  ADD KEY `fk_zonas_Lugar1` (`Lugar_idLugar`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `fk_area_zonas_bucata1` FOREIGN KEY (`zonas_bucata_idzona_bucata`) REFERENCES `zonas` (`idzona_bucata`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `butaca`
--
ALTER TABLE `butaca`
  ADD CONSTRAINT `fk_butaca_area1` FOREIGN KEY (`area_idarea`) REFERENCES `area` (`idarea`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_butaca_ticket1` FOREIGN KEY (`ticket_idticket`) REFERENCES `ticket` (`idticket`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`idlugar`) REFERENCES `lugar` (`idLugar`),
  ADD CONSTRAINT `fk_evento_tipos_evento1` FOREIGN KEY (`tipos_evento_idtipos_eventos`) REFERENCES `tipos_evento` (`idtipos_eventos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_evento_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_ticket_estado1` FOREIGN KEY (`estado_idestado`) REFERENCES `estado` (`idestado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ticket_factura1` FOREIGN KEY (`factura_idfactura`) REFERENCES `factura` (`idfactura`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD CONSTRAINT `fk_zonas_Lugar1` FOREIGN KEY (`Lugar_idLugar`) REFERENCES `lugar` (`idLugar`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;