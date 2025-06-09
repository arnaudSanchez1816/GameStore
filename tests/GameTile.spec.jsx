import { render, screen } from "@testing-library/react"
import {} from "@testing-library/jest-dom"
import { describe, expect, test } from "vitest"
import GameTile from "../src/components/GameTile/GameTile"
import testBackgroundImage from "../src/assets/game_tile_test_img.jpg"
import { MemoryRouter } from "react-router-dom"
import { NSFW_TAG_ID } from "../src/data/api"
import userEvent from "@testing-library/user-event"

describe("Game Tile", () => {
    test("Link to game page is present", () => {
        const gameData = {
            id: 50,
            name: "Game Name",
            price: 25.5,
            background_image: testBackgroundImage,
            tags: [
                {
                    id: 20,
                    name: "Casual",
                },
                {
                    id: 10,
                    name: "Strategy",
                },
            ],
        }
        const toRender = (
            <MemoryRouter>
                <GameTile game={gameData} />
            </MemoryRouter>
        )
        render(toRender)

        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            expect.stringContaining(`game/${gameData.id}`)
        )
    })

    test("Game information is displayed", () => {
        const gameData = {
            id: 50,
            name: "Game Name",
            price: 25.5,
            background_image: testBackgroundImage,
            tags: [
                {
                    id: 20,
                    name: "Casual",
                },
                {
                    id: 10,
                    name: "Strategy",
                },
            ],
        }
        const toRender = (
            <MemoryRouter>
                <GameTile game={gameData} />
            </MemoryRouter>
        )
        render(toRender)

        expect(screen.getByLabelText("Name")).toHaveTextContent(gameData.name)
        const priceRegex = new RegExp(`^.*(${gameData.price}).*$`)
        expect(screen.getByLabelText("Price")).toHaveTextContent(priceRegex)
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            expect.stringContaining(gameData.background_image)
        )
    })

    test("NSFW game content is hidden", async () => {
        const user = userEvent.setup()
        const gameData = {
            id: 50,
            name: "Game Name",
            price: 25.5,
            background_image: testBackgroundImage,
            tags: [
                {
                    id: 20,
                    name: "Casual",
                },
                {
                    id: 10,
                    name: "Strategy",
                },
                {
                    id: NSFW_TAG_ID,
                    name: "NSFW",
                },
            ],
        }

        const toRender = (
            <MemoryRouter>
                <GameTile game={gameData} />
            </MemoryRouter>
        )
        render(toRender)

        const showNsfwBtn = screen.getByRole("button", {
            name: "Show NSFW game",
        })
        expect(screen.queryByRole("link")).toBeNull()
        expect(showNsfwBtn).not.toBeNull()

        await user.click(showNsfwBtn)
        expect(screen.getByRole("link")).not.toBeNull()
        expect(
            screen.queryByRole("button", {
                name: "Show NSFW game",
            })
        ).toBeNull()
    })
})
