-- Creazione della tabella Customers
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

-- Creazione della tabella Rooms
CREATE TABLE Rooms (
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_number INT,
    room_type VARCHAR(50),
    price_per_night DECIMAL(10, 2)
);

-- Creazione della tabella Bookings
CREATE TABLE Bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    room_id INT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id)
);

-- Creazione della tabella Payments
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT,
    payment_date DATE,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id)
);

INSERT INTO Customers (first_name, last_name, email, phone) VALUES
('Mario', 'Rossi', 'mario.rossi@example.com', '1234567890'),
('Giulia', 'Bianchi', 'giulia.bianchi@example.com', '0987654321'),
('Luca', 'Verdi', 'luca.verdi@example.com', '3344556677'),
('Elisa', 'Neri', 'elisa.neri@example.com', '2233445566'),
('Alessandro', 'Romano', 'alessandro.romano@example.com', '6677889900');

INSERT INTO Rooms (room_number, room_type, price_per_night) VALUES
(101, 'Single', 50.00),
(102, 'Double', 80.00),
(103, 'Suite', 150.00),
(104, 'Double', 90.00),
(105, 'Triple', 120.00);

INSERT INTO Bookings (customer_id, room_id, start_date, end_date, status) VALUES
(1, 101, '2024-10-01', '2024-10-05', 'Confirmed'),
(2, 102, '2024-10-10', '2024-10-15', 'Confirmed'),
(3, 103, '2024-10-20', '2024-10-22', 'Confirmed'),
(4, 104, '2024-10-25', '2024-10-30', 'Cancelled'),
(5, 105, '2024-11-01', '2024-11-05', 'Confirmed');

INSERT INTO Payments (booking_id, payment_date, amount, payment_method) VALUES
(1, '2024-10-01', 200.00, 'Credit Card'),
(2, '2024-10-10', 400.00, 'Bank Transfer'),
(3, '2024-10-20', 300.00, 'Credit Card'),
(4, '2024-10-25', 0.00, 'None'), -- Prenotazione annullata
(5, '2024-11-01', 600.00, 'Cash');
