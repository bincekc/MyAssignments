create database CollectionDB
--1 create tables customers and Orders
create table Customers(CustomerId char(5) not null,
                        CompanyName varchar(40) not null,
						contactName char(30) null,
						[Address] varchar(60) null,
						City char(15) null,
						Phone char(24) null,
						Fax char(24) null)
create table Orders(OrderId int not null,
                        CustomerId char(5) not null,
						Orderdate datetime null,
						Shippeddate datetime null,
						Freight money null,
						Shipname varchar(40) null,
						Shipaddress varchar(60) null,
						Quantity int null)

select * from Customers
select * from Orders

--2  alter table Orders

ALTER TABLE ORDERS ADD shipregion integer null;


--3 change datatype of column shipregion

ALTER TABLE ORDERS ALTER COLUMN shipregion char(8) null
--4Delete the column Shipregion
ALTER TABLE ORDERS DROP COLUMN  shipregion 

---5. Using the SQL Server Management Studio, try to instert a new row into the Orders table with the following values:


INSERT INTO ORDERS VALUES(10, 'ord01', getdate(), getdate(), 100.0, 'Windstar', 'Ocean' ,1)


--6. Using the ALTER TABLE statement, add the current system date and time as the default value to the orderdate column of the Orders table.

ALTER TABLE ORDERS ADD DEFAULT getdate() for [Orderdate];

--7. Rename the city column of the Customers table. The new name is Town.

sp_rename 'Customers.City','Town'
