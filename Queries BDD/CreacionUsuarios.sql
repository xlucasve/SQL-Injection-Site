INSERT INTO USERS VALUES
    ('juanperez@yahoo.com', 'migatitoesmuylindo!5', 0),
    ('alberto.fern.andez@gmail.com', 'Aut0G3neR4TedPasSw0Rd', 0),
    ('Kazuo.Hirai@sony.com', 'MeHackearonOtraVez', 1),
    ('omar@gmail.com', 't3rmin4tor', 0)
;
GO

INSERT INTO PRODUCTS VALUES
    ('Mantel de tela XL', 'Un mantel de tela XL', 'Un mantel de tela Extra Largo diseñado para uso familiar', 45),
    ('NVIDIA RTX 4090 12GB', 'Placa de video', 'Placa de video gamer de alto rendimiento diseñado para los mejores de 6kg', 1200),
    ('Iphone 14', 'Celular Iphone', 'Nuevo celular Iphone 14 de ultra alta gama muy caro y portable', 1500),
    ('Impresora Xerox Phaser 3260', 'Impresora', 'Impresora que 1 de cada dos veces te imprime infinitas hojas bugueadas', 140)
;
GO

Insert INTO ORDERS VALUES
    (1, 'Lima 757, C1073 CABA', 'Shipping To Storage'),
    (1, 'Lima 757, C1073 CABA', 'In Storage'),
    (1, 'Lima 757, C1073 CABA', 'In Delivery'),
    (2, 'Balcarce 50', 'In Delivery'),
    (2, 'Balcarce 50', 'In Storage'),
    (2, 'Balcarce 50', 'In Storage'),
    (2, 'Balcarce 50', 'In Delivery'),
    (3, 'Italia 1448', 'In Delivery'),
    (3, 'Italia 1448', 'Shipping To Storage')
;
GO

INSERT INTO PRODUCTS_BY_ORDERS VALUES
    (1, 1),
    (2, 1),
    (3, 4),
    (4, 3),
    (5, 2),
    (6, 2),
    (7, 3),
    (8, 4)
;
GO