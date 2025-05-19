import { test, expect, describe, vi, beforeAll, afterAll } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HeroCarousel from "../src/components/HeroCarousel/HeroCarousel"
import { act } from "react"

describe("Hero Carousel", () => {
    // Mock native animate function
    let originalAnimateFunction
    beforeAll(() => {
        originalAnimateFunction = HTMLDivElement.prototype.animate

        const obj = {
            onfinish: () => {},
            cancel: () => {},
        }

        const animationFunction = function () {
            Promise.resolve().then(async () => {
                act(() => obj.onfinish())
            })

            return obj
        }

        HTMLDivElement.prototype.animate = animationFunction
    })

    afterAll(() => {
        HTMLDivElement.prototype.animate = originalAnimateFunction
    })

    test("to render items", () => {
        const { container } = render(
            <HeroCarousel>
                {[...Array(10)].map((item, index) => (
                    <div key={index}>Game {index}</div>
                ))}
            </HeroCarousel>
        )

        expect(container).toMatchSnapshot()
    })

    test("Only 1 active item", async () => {
        const toRender = (
            <HeroCarousel options={{ autoScroll: false }}>
                {[...Array(10)].map((item, index) => (
                    <div>Game {index}</div>
                ))}
            </HeroCarousel>
        )
        const { container } = render(toRender)

        const gameItems = screen.getAllByText("Game", { exact: false })
        expect(
            gameItems.filter((item) =>
                item.parentElement.classList.contains("active")
            ).length
        ).toBe(1)
    })

    test("the active item change after 500 ms", async () => {
        const toRender = (
            <HeroCarousel options={{ autoScroll: true, scrollDelay: 500 }}>
                {[...Array(10)].map((item, index) => (
                    <div>Game {index}</div>
                ))}
            </HeroCarousel>
        )
        const { container } = render(toRender)

        expect(
            screen
                .getByText("Game 0")
                .parentElement.classList.contains("active")
        ).toBe(true)
        expect(
            screen
                .getByText("Game 1")
                .parentElement.classList.contains("active")
        ).toBe(false)

        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 600)
            })
        })
        expect(
            screen
                .getByText("Game 0")
                .parentElement.classList.contains("active")
        ).toBe(false)
        expect(
            screen
                .getByText("Game 1")
                .parentElement.classList.contains("active")
        ).toBe(true)
    })

    test("the active to not change", async () => {
        const toRender = (
            <HeroCarousel options={{ autoScroll: false, scrollDelay: 500 }}>
                {[...Array(10)].map((item, index) => (
                    <div>Game {index}</div>
                ))}
            </HeroCarousel>
        )
        const { container } = render(toRender)

        expect(
            screen
                .getByText("Game 0")
                .parentElement.classList.contains("active")
        ).toBe(true)
        expect(
            screen
                .getByText("Game 1")
                .parentElement.classList.contains("active")
        ).toBe(false)

        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 600)
            })
        })
        expect(
            screen
                .getByText("Game 0")
                .parentElement.classList.contains("active")
        ).toBe(true)
        expect(
            screen
                .getByText("Game 1")
                .parentElement.classList.contains("active")
        ).toBe(false)
    })

    test("Right/Left buttons click to change the active item", async () => {
        const user = userEvent.setup()
        const toRender = (
            <HeroCarousel options={{ autoScroll: false }}>
                {[...Array(10)].map((item, index) => (
                    <div>Game {index}</div>
                ))}
            </HeroCarousel>
        )
        const { container } = render(toRender)

        const game0Item = screen.getByText("Game 0")
        const game1Item = screen.getByText("Game 1")

        expect(game0Item.parentElement.classList.contains("active")).toBe(true)
        expect(game1Item.parentElement.classList.contains("active")).toBe(false)

        const rightButton = screen.getByRole("button", { name: "Right" })
        await user.click(rightButton)

        expect(game0Item.parentElement.classList.contains("active")).toBe(false)
        expect(game1Item.parentElement.classList.contains("active")).toBe(true)

        const leftButton = screen.getByRole("button", { name: "Left" })
        await user.click(leftButton)

        expect(game0Item.parentElement.classList.contains("active")).toBe(true)
        expect(game1Item.parentElement.classList.contains("active")).toBe(false)
    })

    test("Nav dots buttons click to change the active item", async () => {
        const user = userEvent.setup()
        const toRender = (
            <HeroCarousel options={{ autoScroll: false }}>
                {[...Array(10)].map((item, index) => (
                    <div>Game {index + 1}</div>
                ))}
            </HeroCarousel>
        )
        const { container } = render(toRender)

        const game1Item = screen.getByText("Game 1")
        const game10Item = screen.getByText("Game 10")

        expect(game1Item.parentElement.classList.contains("active")).toBe(true)
        expect(game10Item.parentElement.classList.contains("active")).toBe(
            false
        )

        const item10NavDot = screen.getByRole("button", { name: "Item 10" })
        await user.click(item10NavDot)

        expect(game1Item.parentElement.classList.contains("active")).toBe(false)
        expect(game10Item.parentElement.classList.contains("active")).toBe(true)

        const item1NavDot = screen.getByRole("button", { name: "Item 1" })
        await user.click(item1NavDot)

        expect(game1Item.parentElement.classList.contains("active")).toBe(true)
        expect(game10Item.parentElement.classList.contains("active")).toBe(
            false
        )
    })
})
