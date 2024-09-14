import { creat } from "@paralleldrive/cuid2"
import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"

export const goals = pgTable("goals", {
    id: text("id")
    .primaryKey()
    .$defaultFn(() =>createdId()),
    title: text("title").notNull(),
    desireWeekflyFrequency: integer("desire_weekfly_frequency").notNull(),
    created_at: timeStamp("created_at, {withTimezone:true})
    .notNull()
    .defaultNow(),
})

export type goalCompletions = pgtable ('goal-completions', {
    
    
    goalId: text("goal_id")
    .references(() => goals.id)
    .notNull(),
    createdAt: timeStamp("created_at", {withTimezone:true})
    .notNull(),
    .defaultNow(),
})