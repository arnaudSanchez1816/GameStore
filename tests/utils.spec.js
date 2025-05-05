import { test, expect, describe } from "vitest"
import { getThumbnailLink } from "../src/utils"

describe("Thumbnail links", () => {
    test("to be https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg", () => {
        const gameData = {
            background_image:
                "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        }
        expect(getThumbnailLink(gameData)).toBe(
            "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        )
    })

    test("to be https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg", () => {
        const gameData = {
            background_image:
                "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        }
        expect(getThumbnailLink(gameData)).toBe(
            "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        )
    })

    test("to be https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg", () => {
        const gameData = {
            background_image:
                "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        }
        expect(getThumbnailLink(gameData)).toBe(
            "https://media.rawg.io/media/crop/600/400/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
        )
    })
})
