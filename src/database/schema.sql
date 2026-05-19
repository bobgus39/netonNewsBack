-- ============================================
-- NetonNews - Esquema de base de datos
-- ============================================

CREATE DATABASE IF NOT EXISTS netonnews
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE netonnews;

-- Categorías
CREATE TABLE IF NOT EXISTS categories (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  slug        VARCHAR(120) NOT NULL UNIQUE,
  description TEXT,
  color       VARCHAR(20) DEFAULT 'gray',
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Artículos
CREATE TABLE IF NOT EXISTS articles (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  title         VARCHAR(300) NOT NULL,
  subtitle      VARCHAR(500),
  slug          VARCHAR(320) NOT NULL UNIQUE,
  summary       TEXT,
  content       LONGTEXT NOT NULL,
  image_url     VARCHAR(500),
  image_caption VARCHAR(300),
  author        VARCHAR(150) DEFAULT 'Redacción',
  category_id   INT,
  is_featured   TINYINT(1) DEFAULT 0,
  reading_time  SMALLINT,
  views         INT DEFAULT 0,
  published_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
  INDEX idx_slug (slug),
  INDEX idx_category (category_id),
  INDEX idx_published (published_at),
  FULLTEXT INDEX ft_search (title, subtitle, summary, content)
) ENGINE=InnoDB;

-- Etiquetas
CREATE TABLE IF NOT EXISTS tags (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL UNIQUE
) ENGINE=InnoDB;

-- Relación artículos-etiquetas
CREATE TABLE IF NOT EXISTS article_tags (
  article_id INT NOT NULL,
  tag_id     INT NOT NULL,
  PRIMARY KEY (article_id, tag_id),
  FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id)     REFERENCES tags(id)     ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================
-- Datos de ejemplo
-- ============================================

INSERT IGNORE INTO categories (name, slug, description, color) VALUES
  ('España',        'espana',        'Noticias nacionales de España',              'red'),
  ('Internacional', 'internacional', 'Noticias del mundo',                          'blue'),
  ('Economía',      'economia',      'Mercados, empresas y finanzas',               'green'),
  ('Deportes',      'deportes',      'Fútbol, tenis, motor y más',                  'orange'),
  ('Tecnología',    'tecnologia',    'Innovación, IA y tendencias digitales',        'purple'),
  ('Cultura',       'cultura',       'Cine, música, arte y ocio',                   'pink'),
  ('Ciencia',       'ciencia',       'Descubrimientos y avances científicos',        'blue'),
  ('Opinión',       'opinion',       'Editoriales y análisis',                      'gray');
