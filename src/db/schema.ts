import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
});

export const sessionsTable = sqliteTable("sessions_table", {
  id: text().primaryKey().references(() => usersTable.id),
  userId: int().notNull(),
  token: text().notNull().unique(),
  createdAt: int("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

