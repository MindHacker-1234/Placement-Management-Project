-- MySQL Script generated by MySQL Workbench
-- Tue Mar 14 11:20:25 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema placementmanagement
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema placementmanagement
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `placementmanagement` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `placementmanagement` ;

-- -----------------------------------------------------
-- Table `placementmanagement`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placementmanagement`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyname` VARCHAR(100) NULL DEFAULT NULL,
  `companydescription` VARCHAR(1000) NULL DEFAULT NULL,
  `applicablebranches` VARCHAR(100) NULL DEFAULT NULL,
  `placementOfficer` VARCHAR(30) NULL DEFAULT NULL,
  `contact` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `companyname` (`companyname` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `placementmanagement`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placementmanagement`.`student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `studentname` VARCHAR(30) NULL DEFAULT NULL,
  `rollnumber` INT NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `presentsemester` INT NULL DEFAULT NULL,
  `cgpa` INT NULL DEFAULT NULL,
  `Is_placed` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `rollnumber` (`rollnumber` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `email_2` (`email` ASC) VISIBLE,
  UNIQUE INDEX `email_3` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `placementmanagement`.`visit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placementmanagement`.`visit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `driveid` INT NOT NULL,
  `ctc` INT NULL DEFAULT NULL,
  `jobprofile` VARCHAR(30) NULL DEFAULT NULL,
  `companyid` INT NULL DEFAULT NULL,
  `drivename` VARCHAR(30) NULL DEFAULT NULL,
  `scheduledate` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `driveid` (`driveid` ASC) VISIBLE,
  UNIQUE INDEX `drivename` (`drivename` ASC, `jobprofile` ASC) VISIBLE,
  UNIQUE INDEX `scheduledate` (`scheduledate` ASC) VISIBLE,
  INDEX `companyid` (`companyid` ASC) VISIBLE,
  CONSTRAINT `visit_ibfk_1`
    FOREIGN KEY (`companyid`)
    REFERENCES `placementmanagement`.`company` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `placementmanagement`.`placements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `placementmanagement`.`placements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `referenceid` INT NULL DEFAULT NULL,
  `studentid` INT NULL DEFAULT NULL,
  `visitid` INT NULL DEFAULT NULL,
  `companyid` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `referenceid` (`referenceid` ASC) VISIBLE,
  UNIQUE INDEX `studentid` (`studentid` ASC, `visitid` ASC) VISIBLE,
  INDEX `visitid` (`visitid` ASC) VISIBLE,
  INDEX `companyid` (`companyid` ASC) VISIBLE,
  CONSTRAINT `placements_ibfk_1`
    FOREIGN KEY (`studentid`)
    REFERENCES `placementmanagement`.`student` (`id`),
  CONSTRAINT `placements_ibfk_2`
    FOREIGN KEY (`visitid`)
    REFERENCES `placementmanagement`.`visit` (`id`),
  CONSTRAINT `placements_ibfk_3`
    FOREIGN KEY (`companyid`)
    REFERENCES `placementmanagement`.`company` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;