CREATE TABLE IF NOT EXISTS project (
  id SERIAL PRIMARY KEY,
  title NVARCHAR(300) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  current_fund INT8 UNSIGNED DEFAULT 0,
  goal_fund INT8 UNSIGNED DEFAULT 0
);
CREATE TABLE IF NOT EXISTS course (
  id SERIAL PRIMARY KEY,
  title NVARCHAR(300) NOT NULL,
  description TEXT,
  price INT UNSIGNED DEFAULT 0
);
CREATE TABLE IF NOT EXISTS user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  email VARCHAR(100)
);
CREATE TABLE IF NOT EXISTS donation (
  donation_id SERIAL PRIMARY KEY,
  amount INT UNSIGNED DEFAULT 0,
  donation_time DATETIME NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  project_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(id)
)