-- show users who signed-up within the last 7 days but haven’t made any purchase yet.

SELECT
  p.id,
  p.user_id,
  c.name as customer_name,
  c.email,
  p.total_amount,
  p.purchased_at
FROM
  customer as c
LEFT JOIN
  purchase as p
  ON c.id = p.user_id
WHERE
  c.created_at >= NOW() - INTERVAL 7 DAY
  AND p.id IS NULL;

-- Show all last month’s purchase transaction records with 50 records per page query (i.e. total is 1000 and 50 records should be displayed on front-end at a time).

SELECT
  p.id,
  p.user_id,
  c.name as customer_name,
  p.total_amount,
  p.purchased_at
FROM
  purchase as P
JOIN
  customer as c
  ON c.id = p.user_id
WHERE
  p.purchased_at >= DATE_FORMAT(CURDATE() - INTERVAL 1 MONTH, '%Y-%m-01')
  AND p.purchased_at < DATE_FORMAT(CURDATE(), '%Y-%m-01')
ORDER BY
  p.purchased_at DESC
LIMIT 50 OFFSET 0;

-- Set “Strawberry Ice Cream” product to be the 2nd item on the product highlight.

UPDATE hot_product
  SET position = 2
WHERE product_id = (
  SELECT id FROM product WHERE name = 'Strawberry Ice Cream' LIMIT 1
);