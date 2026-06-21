CREATE TABLE IF NOT EXISTS timers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL DEFAULT 'Timer',

  type TEXT NOT NULL,

  total_ms INTEGER NOT NULL DEFAULT 0, -- 'countdown', 'recurring', 'alarm'

  alarm_hour INTEGER, -- 0-23
  alarm_minute INTEGER, -- 0-59

  alarm_daily INTEGER NOT NULL DEFAULT 0

  started_at_ms INTEGER NOT NULL,

  paused INTEGER NOT NULL DEFAULT 0,
  completed INTEGER NOT NULL DEFAULT 0
);