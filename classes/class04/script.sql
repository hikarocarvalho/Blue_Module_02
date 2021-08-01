create table tbl_Store(
ID_Store int not null generated always as identity,
Enterprise_Name varchar(50) not null,
City varchar(50) not null,
primary key (ID_Store)
)

create table tbl_Seller(
ID_Seller int not null generated always as identity,
First_Name varchar(50) not null,
Middle_Name varchar(50),
Last_Name varchar(50),
Document_Number int not null,
Tell_Phone int not null,
Email_Adress varchar(250) not null,
State varchar(50) not null,
City varchar(50) not null,
Complement varchar(250) not null,
Post_Code int not null,
ID_Store int not null,
ID_User int not null,
Discout_Limit int NOT null,
primary key (ID_Seller),
foreign key (ID_Store) references tbl_Store (ID_Store),
FOREIGN KEY (ID_User) REFERENCES tbl_User (ID_User)
);

create table tbl_Client(
ID_Client int not null generated always as identity,
First_Name varchar(50) not null,
Middle_Name varchar(50),
Last_Name varchar(50),
Document_Number int not null,
Tell_Phone int not null,
Email_Adress varchar(250) not null,
State varchar(50) not null,
City varchar(50) not null,
Complement varchar(250) not null,
Post_Code int not null,
ID_Store int not null,
primary key (ID_Client),
foreign key (ID_Store) references tbl_Store (ID_Store)
);

create table tbl_Supplier(
ID_Supplier int not null generated always as identity,
Supplier_Name varchar(50) not null,
Description varchar(50) not null,
Document_Number int not null,
Tell_Phone int not null,
Email_Adress varchar(250) not null,
Web_Site varchar(250) not null,
State varchar(50) not null,
City varchar(50) not null,
Complement varchar(250) not null,
Post_Code int not null,
ID_Store int not null,
primary key (ID_Supplier),
foreign key (ID_Store) references tbl_Store (ID_Store)
)

create table tbl_Product(
ID_Product int not null generated always as identity,
Product_Name varchar(50) not null,
Description varchar(50),
Brand varchar(50),
Product_code int not null,
Type_product int not null,
ID_Supplier int not null,
ID_Store int not null,
quantity int NOT null,
primary key (Product_code),
foreign key (ID_Store) references tbl_Store (ID_Store),
foreign key (ID_Supplier) references tbl_Supplier (ID_Supplier)
);

create table tbl_Sell(
ID_Sell int not null generated always as identity,
Product_Code int not null,
ID_Seller int not null,
ID_Client int not null,
Discount float not null,
Total_value float not null,
ID_Store int not null,
primary key (ID_Sell),
foreign key (ID_Store) references tbl_Store (ID_Store),
foreign key (ID_Seller) references tbl_Seller (ID_Seller),
foreign key (Product_Code) references tbl_Product (Product_Code)
);

create table tbl_User(
ID_User int not null generated always as identity,
Priority_Level int not null,
ID_Store int not null,
Login varchar(50) not null,
Pass varchar(50) not null,
PRIMARY KEY (ID_User),
FOREIGN KEY (ID_Store) REFERENCES tbl_Store (ID_Store)
);
/*
ALTER TABLE tbl_Sell
ADD Date_Sell date NOT NULL;

ALTER TABLE 
DROP COLUMN 

UPDATE tbl_product
SET column1 = value1, column2 = value2
WHERE id_product = 1;

delete from tbl_product
where id_product = 2

select # from livro
inner join autor
on livro.ID_autor = autor.id_autor

select distinct date_sell from tbl_sell

ALTER TABLE tbl_Seller
ADD CONSTRAINT tbl_Seller FOREIGN KEY (ID_User) REFERENCES tbl_User (ID_User);
*/
