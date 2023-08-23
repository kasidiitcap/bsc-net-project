-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 10:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_wallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `ID` int(11) NOT NULL,
  `Fullname` varchar(100) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Passwd` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `privateKey` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`ID`, `Fullname`, `Username`, `Passwd`, `Email`, `address`, `privateKey`) VALUES
(2, 'Kasidt Phosai', 'Kasidit', '1234', 'LosingET@gmail.com', '0x7c369cB3532b0287A213559AE1fB1E1701A7E47B', '0x6b34979812ede4d8f759794af5f86a364f39d475c57aa08c7d3d6594123570cf'),
(8, 'Cap Naja', 'Cap', '1234', 'losinget@gmail.com', '0x1a4934cf5203Fd3bEd18CfBb4460CDb95Ec737d8', '0xb778458bf38ce84123f61406db4cb99841fa4e62e01b1fd37c33147de0568f8b'),
(14, ' Cap Kabb', 'Capkab', '1234', 'Cap@gmail.com', '0xFe8062490F81dbc40d287f30463830A94D382c37', '0x6e16440937a61efe1841dc0fe97af9d75f375334d1526f332f5f382514536138'),
(15, '555', '555', '1234', '555@cmtc.com', '0x041856160be3296E4a60c866855F5f7232A8371b', '0xe8aa0ca3d2a253dbfe66cf27f0c4a23f5bcb16974d1e255daebcdaf7da236230'),
(16, 'Kasidit Phosai', 'Kasidit', '1234', 'cap@gmail.com', '0x2Ea0bc6a8B8B49Fc0C881F5d4eD8e03bC8ba0AA4', '0x82bc511a3eb2687a72d2f67226c727e835f057c8877af6cf5148aa1ceb9150c1'),
(17, '', '', '', '', '0x352202DD3558031cF7D98CB603aD913a75F80678', '0x853ff3ec27823e17f60cce37e933b136685dda9d0d1df7ea3dc86a7c28ed4c2a'),
(18, '', '', '', '', '0x30578e58086dA0639cb74548490654419E41b95B', '0x6ad6102a6629aeb3c4d8ae574ab77a45093c45647ca02add2aa69c5e6a7fc5b2'),
(19, '', '', '', '', '0x3E6d96785aC4b0bBB103f029B083471F94EB8CB0', '0x76c911c0c233c42265ce9828fc2354d9b0c8fe667fb68209eb587aed9bd9b1ab'),
(20, '', '', '', '', '0xdA097F969bf60c2287969c1dD9458bed9603a86A', '0xe803628ee9739b7821bf61429864f84553fce7a9cdbe60a98fb391db7732c2c9'),
(21, '', '', '', '', '0x087b951e481f17914123eeaCF63Fd780D19f5Db6', '0x6b5860a18f2f7af3e1c20f4f9da463d30286690bf0b124415f7a9f198c0dc8a2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
