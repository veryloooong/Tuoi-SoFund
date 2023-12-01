CREATE OR REPLACE TABLE projects (
  id SERIAL PRIMARY KEY,
  title NVARCHAR(300) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  current_fund INT8 UNSIGNED DEFAULT 0,
  goal_fund INT8 UNSIGNED DEFAULT 0
);
CREATE OR REPLACE TABLE courses (
  id SERIAL PRIMARY KEY,
  title NVARCHAR(300) NOT NULL,
  description TEXT,
  price INT UNSIGNED DEFAULT 0
);
CREATE OR REPLACE TABLE users (
  id SERIAL PRIMARY KEY,
  name NVARCHAR(255),
  username VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL,
  creation_time TIMESTAMP NOT NULL DEFAULT current_timestamp(),
  deleted BOOLEAN
);
CREATE OR REPLACE TABLE donations (
  id SERIAL PRIMARY KEY,
  amount INT UNSIGNED DEFAULT 0,
  donation_time DATETIME NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  project_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
CREATE OR REPLACE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  project_id BIGINT UNSIGNED NOT NULL,
  content TEXT NOT NULL,
  comment_time TIMESTAMP NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);