import { db } from "./index"
import { goalCompletions, goals} from "./schema"

async function seed() {
    await db.delete(goalCompletions)
    await db. delete(goals)

    await db.insert(goals).values([
        {title: "Acordar cedo", desireWeekflyFrequency: 5},
        {title: "Me exercitar", desireWeekflyFrequency: 3},
        {title: "Meditar", desireWeekflyFrequency: 1},
    ])
}

seed().finally(() => {
    client.end()
}) 