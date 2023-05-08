-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2023 at 12:38 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apicontact`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `username`, `password`) VALUES
(1, 'niko123', '123'),
(2, 'niko2021', '2021'),
(3, 'cuario', '123'),
(4, 'natori', '123');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `form_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_number` int(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`form_id`, `contact_name`, `contact_number`, `contact_email`, `contact_address`) VALUES
(7, 'Niko', 933534534, 'nicosejohnsoriano@gmail.com', 'Panabo City'),
(8, 'Niko', 933534534, 'nicosejohnsoriano@gmail.com', 'Panabo City'),
(9, 'efwefwefwef', 0, 'wfwefwe', 'fwefwef'),
(10, 'ewfwefwef', 0, 'fwefwefwe', 'fwefwefw'),
(11, 'ewfwwfgwgh34y346436', 0, 'fwefwefwegerwg35', 'fwefwefw345345'),
(12, 'rgsrgssf', 0, 'qdqwdq', 'dqwdqwdq'),
(13, 'rgsrgssf', 3, '34534543543', '534fg3g3rg'),
(14, 'Nikosfgsefs', 2, 'egergerg', 'egegergerg'),
(15, 'Nikosfgsefs', 2, 'egergerg', 'egegergerg'),
(16, 'John Christopher', 933534534, 'johnaugis@yahoo.com', 'Panabo City'),
(17, 'Niko', 933534534, 'nicosejohn.soriano@hcdc.edu.ph', 'wefwefwe'),
(18, 'rgsrgssf', 0, 'qwdqwdqw', 'dqwdqwdq'),
(19, 'Niko', 3, 'nicosejohn.soriano@hcdc.edu.ph', 'awdwad'),
(20, 'James Piastro', 933534534, 'jamesanthony.piastro@hcdc.edu.ph', 'Jerome, Davao City');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`form_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `form_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
