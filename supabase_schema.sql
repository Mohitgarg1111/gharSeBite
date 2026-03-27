-- ================================================================
-- GharSeBite — Supabase Database Schema
-- ================================================================
-- HOW TO RUN:
--   1. Open your Supabase project dashboard
--   2. Go to SQL Editor → New Query
--   3. Paste this entire file and click Run ▶
-- ================================================================


-- 1. Create the orders table
CREATE TABLE IF NOT EXISTS orders (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name        TEXT        NOT NULL,
  phone                TEXT        NOT NULL,
  address              TEXT        NOT NULL,
  selected_meal        TEXT        NOT NULL,
  quantity             INTEGER     NOT NULL CHECK (quantity >= 1 AND quantity <= 20),
  delivery_time        TEXT        NOT NULL,
  special_instructions TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- 2. Helpful comment on the table
COMMENT ON TABLE orders
  IS 'Customer orders placed via the GharSeBite website order form';


-- 3. Enable Row Level Security
--    Without this, Supabase will block all inserts from the browser
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;


-- 4. Allow anonymous visitors to INSERT orders
--    (needed so the public order form can submit without any login)
CREATE POLICY "Allow public order inserts"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);


-- 5. Allow authenticated users (i.e., you as the business owner)
--    to SELECT / view all orders in the Table Editor or via API
CREATE POLICY "Allow authenticated users to view orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);


-- ================================================================
-- DONE! Your database is ready.
-- ================================================================
-- To verify: go to Table Editor → you should see the 'orders' table.
-- To view incoming orders: Table Editor → click orders → browse rows.
-- ================================================================