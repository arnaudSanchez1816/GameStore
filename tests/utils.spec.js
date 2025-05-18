import { test, expect, describe } from "vitest"
import { generateRandomPrice, getThumbnailLink } from "../src/utils"

describe("Thumbnail links", () => {
    test("to be https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg", () => {
        expect(
            getThumbnailLink(
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
            )
        ).toBe(
            "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        )
    })

    test("to be https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg", () => {
        expect(
            getThumbnailLink(
                "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            )
        ).toBe(
            "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        )
    })

    test("to be https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg", () => {
        expect(
            getThumbnailLink(
                "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            )
        ).toBe(
            "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        )
    })

    test("to return original link", () => {
        const link =
            "https://media.rawg.io/media/others/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        expect(getThumbnailLink(link)).toBe(link)
    })
})

describe("Price generation", () => {
    test("to be between 5 and 100", () => {
        const randomPrice = generateRandomPrice(12345, 5, 100)
        expect(randomPrice).toBeLessThanOrEqual(100)
        expect(randomPrice).toBeGreaterThanOrEqual(5)
    })

    test("to be identical for a given id", () => {
        const randomPrice = generateRandomPrice(585, 5, 100)
        expect(randomPrice).toBe(generateRandomPrice(585, 5, 100))
    })
})
