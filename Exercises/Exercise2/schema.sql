-- Creazione della tabella Customers
CREATE TABLE Customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT
);

-- Creazione della tabella Rooms
CREATE TABLE Rooms (
    room_id INTEGER PRIMARY KEY,
    room_number INTEGER NOT NULL UNIQUE,
    room_type TEXT NOT NULL,
    price_per_night REAL NOT NULL
);

-- Creazione della tabella Bookings
CREATE TABLE Bookings (
    booking_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    room_id INTEGER NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Confirmed', 'Cancelled'))
);

-- Creazione della tabella Payments
CREATE TABLE Payments (
    payment_id INTEGER PRIMARY KEY,
    booking_id INTEGER NOT NULL,
    payment_date TEXT NOT NULL,
    amount REAL NOT NULL,
    payment_method TEXT NOT NULL
);

-- Inserimento dati nella tabella Customers
INSERT INTO Customers (first_name, last_name, email, phone) VALUES
('Mario', 'Rossi', 'mario.rossi@example.com', '1234567890'),
('Giulia', 'Bianchi', 'giulia.bianchi@example.com', '0987654321'),
('Luca', 'Verdi', 'luca.verdi@example.com', '3344556677'),
('Elisa', 'Neri', 'elisa.neri@example.com', '2233445566'),
('Alessandro', 'Romano', 'alessandro.romano@example.com', '6677889900');

-- Inserimento dati nella tabella Rooms
INSERT INTO Rooms (room_number, room_type, price_per_night) VALUES
(101, 'Single', 50.00),
(102, 'Double', 80.00),
(103, 'Suite', 150.00),
(104, 'Double', 90.00),
(105, 'Triple', 120.00);

-- Inserimento dati nella tabella Bookings
INSERT INTO Bookings (customer_id, room_id, start_date, end_date, status) VALUES
(1, 101, '2024-10-01', '2024-10-05', 'Confirmed'),
(2, 102, '2024-10-10', '2024-10-15', 'Confirmed'),
(3, 103, '2024-10-20', '2024-10-22', 'Confirmed'),
(4, 104, '2024-10-25', '2024-10-30', 'Cancelled'),
(5, 105, '2024-11-01', '2024-11-05', 'Confirmed');

-- Inserimento dati nella tabella Payments
INSERT INTO Payments (booking_id, payment_date, amount, payment_method) VALUES
(1, '2024-10-01', 200.00, 'Credit Card'),
(2, '2024-10-10', 400.00, 'Bank Transfer'),
(3, '2024-10-20', 300.00, 'Credit Card'),
(4, '2024-10-25', 0.00, 'None'), -- Prenotazione annullata
(5, '2024-11-01', 600.00, 'Cash');
