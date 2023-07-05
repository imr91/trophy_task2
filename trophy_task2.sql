CREATE DATABASE  IF NOT EXISTS `trophy_task2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trophy_task2`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: trophy_task2
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game_config`
--

DROP TABLE IF EXISTS `game_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_config` (
  `config_id` int NOT NULL,
  `startLat` varchar(45) DEFAULT NULL,
  `startLon` varchar(45) DEFAULT NULL,
  `finishLat` varchar(45) DEFAULT NULL,
  `finishLon` varchar(45) DEFAULT NULL,
  `speed` varchar(45) DEFAULT NULL,
  `speed_turbo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_config`
--

LOCK TABLES `game_config` WRITE;
/*!40000 ALTER TABLE `game_config` DISABLE KEYS */;
INSERT INTO `game_config` VALUES (1,'55.68344327','12.5717693','55.232816','11.767130','500','1000');
/*!40000 ALTER TABLE `game_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_scores`
--

DROP TABLE IF EXISTS `game_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_scores` (
  `score_id` int NOT NULL AUTO_INCREMENT,
  `session_id` varchar(45) DEFAULT NULL,
  `player_name` varchar(45) DEFAULT NULL,
  `score` int DEFAULT NULL,
  `score_date` datetime DEFAULT NULL,
  PRIMARY KEY (`score_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_scores`
--

LOCK TABLES `game_scores` WRITE;
/*!40000 ALTER TABLE `game_scores` DISABLE KEYS */;
INSERT INTO `game_scores` VALUES (1,NULL,'Dummy',1000,'2023-07-01 16:00:00'),(2,'tnr7t6g11nqhbe7re93lkatpm9','Slowpoke',609,'2023-07-04 16:56:01'),(3,'tnr7t6g11nqhbe7re93lkatpm9','Player1',297,'2023-07-04 18:09:20'),(19,'tnr7t6g11nqhbe7re93lkatpm9','Player2',277,'2023-07-05 16:43:23'),(20,'3ndjock7ahb9ucas3c7e50oknh','Player3',312,'2023-07-05 16:49:50');
/*!40000 ALTER TABLE `game_scores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-05 16:55:33
