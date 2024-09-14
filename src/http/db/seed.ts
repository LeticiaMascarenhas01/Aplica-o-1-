import { db } from "./index"
import { goalCompletions, goals} from "./schema"
import daysjs from "dayjs" 

async function seed() {
    await db.delete(goalCompletions)
    await db. delete(goals)

    const result = await db
    .insert(goals)
    .values([
        {title: "Acordar cedo", desireWeekflyFrequency: 5},
        {title: "Me exercitar", desireWeekflyFrequency: 3},
        {title: "Meditar", desireWeekflyFrequency: 1},
    ])
    .returning()

    const startOfweeK = daysjs().startOf("week")

    await db.insert(goalCompletions).values([
        {goalId: result[0].id, createdAt: startOfweek.toDate()},
        {goalId: result[1].id, createdAt: startOfweek.add(1."day").toDate()},
    ])
}

seed().finally(() => {
    client.end()
}) 