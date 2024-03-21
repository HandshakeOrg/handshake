-- Create a test database
-- This script prepares a dev database for the Handshake classified ad web application
CREATE DATABASE IF NOT EXISTS handshake_test_db;
CREATE USER IF NOT EXISTS 'handshake_test'@'localhost' IDENTIFIED BY 'handshake_test_pwd';
GRANT ALL PRIVILEGES ON handshake_test_db.* TO 'handshake_test'@'localhost';
GRANT SELECT ON performance_schema.* TO 'handshake_test'@'localhost';
