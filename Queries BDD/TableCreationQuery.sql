CREATE TABLE [USERS] (
  [user_id] int PRIMARY KEY IDENTITY(1, 1),
  [email] nvarchar(255),
  [password] nvarchar(255),
  [isAdmin] BIT
)
GO

CREATE TABLE [PRODUCTS] (
  [product_id] int PRIMARY KEY IDENTITY(1, 1),
  [name] nvarchar(255),
  [short_description] nvarchar(255),
  [long_description] nvarchar(255),
  [price] int,
)
GO

CREATE TABLE [ORDERS] (
  [order_id] int PRIMARY KEY IDENTITY(1, 1),
  [user_id] int,
  [location_to_deliver] nvarchar(255),
  [status] nvarchar(255)
)
GO

CREATE TABLE [PRODUCTS_BY_ORDERS] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [order_id] int,
  [product_id] int
)
GO

ALTER TABLE [ORDERS] ADD FOREIGN KEY ([user_id]) REFERENCES [USERS] ([user_id])
GO

ALTER TABLE [PRODUCTS_BY_ORDERS] ADD FOREIGN KEY ([order_id]) REFERENCES [ORDERS] ([order_id])
GO

ALTER TABLE [PRODUCTS_BY_ORDERS] ADD FOREIGN KEY ([product_id]) REFERENCES [PRODUCTS] ([product_id])
GO
