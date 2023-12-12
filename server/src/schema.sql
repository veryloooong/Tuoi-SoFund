CREATE OR REPLACE TABLE projects (
    id SERIAL PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    provider NVARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE DEFAULT current_date(),
    end_date DATE,
    current_fund INT8 UNSIGNED DEFAULT 0,
    goal_fund INT8 UNSIGNED DEFAULT 0
  );
CREATE OR REPLACE TABLE courses (
    id SERIAL PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    provider NVARCHAR(255) NOT NULL,
    description TEXT,
    price INT UNSIGNED DEFAULT 0
  );
CREATE OR REPLACE TABLE users (
    id SERIAL PRIMARY KEY,
    name NVARCHAR(255),
    email VARCHAR(255)
  );
CREATE OR REPLACE TABLE news (
    id SERIAL PRIMARY KEY,
    title NVARCHAR(255),
    content TEXT
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
CREATE OR REPLACE TABLE updates (
    id SERIAL PRIMARY KEY,
    project_id BIGINT UNSIGNED NOT NULL,
    content TEXT,
    update_time TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id)
  );
CREATE OR REPLACE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    content TEXT,
    post_time TIMESTAMP,
    likes INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )