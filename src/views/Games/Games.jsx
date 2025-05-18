import style from "./Games.module.css"
import { DEFAULT_ORDERING_METHOD, ORDERING_METHODS } from "../../data/api"
import {
    Await,
    Link,
    useLoaderData,
    useLocation,
    useNavigation,
    useSearchParams,
} from "react-router-dom"
import GameTile from "../../components/GameTile/GameTile"
import { Suspense, useEffect, useMemo, useState } from "react"
import Spinner from "../../components/Spinner/Spinner"
import clsx from "clsx"
import { debounce } from "lodash"

function GamesFetchingFallback() {
    return (
        <div className={style["spinner-wrapper"]}>
            <Spinner />
        </div>
    )
}

function GenreInput({ genre, checked, onChange }) {
    return (
        <div className={style["genre-item"]}>
            <input
                className={style["genre-input"]}
                type="checkbox"
                name="genres"
                id={`genre-${genre.slug}`}
                value={genre.slug}
                checked={checked}
                onChange={onChange}
            />
            <label
                className={style["genre-label"]}
                htmlFor={`genre-${genre.slug}`}
            >
                {genre.name}
            </label>
        </div>
    )
}

function Games() {
    const { gamesFetch, genres } = useLoaderData()
    const navigation = useNavigation()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get("page") || "1"
    const sortOrder = searchParams.get("sortBy") || ""
    const selectedGenres = searchParams.get("genres")?.split(",") || []
    const urlMinPrice = searchParams.get("minPrice") || ""
    const urlMaxPrice = searchParams.get("maxPrice") || ""

    const [minPrice, setMinPrice] = useState(urlMinPrice)
    const [maxPrice, setMaxPrice] = useState(urlMaxPrice)

    const onMinPriceChanged = useMemo(
        () =>
            debounce((value) => {
                setSearchParams(
                    (prevParams) => {
                        const newParams = new URLSearchParams(prevParams)
                        if (value) {
                            newParams.set("minPrice", value)
                        }
                        return newParams
                    },
                    { replace: true }
                )
            }, 300),
        [setSearchParams]
    )
    const onMaxPriceChanged = useMemo(
        () =>
            debounce((value) => {
                setSearchParams(
                    (prevParams) => {
                        const newParams = new URLSearchParams(prevParams)
                        if (value) {
                            newParams.set("maxPrice", value)
                        }
                        return newParams
                    },
                    { replace: true }
                )
            }, 300),
        [setSearchParams]
    )

    useEffect(() => {
        setMinPrice(urlMinPrice)
        setMaxPrice(urlMaxPrice)
    }, [urlMinPrice, urlMaxPrice])

    const onGenreChecked = (e) => {
        const checkbox = e.target

        if (checkbox.checked) {
            setSearchParams(
                (prevParams) => {
                    const newParams = new URLSearchParams(prevParams)
                    newParams.set("genres", [...selectedGenres, checkbox.value])
                    newParams.set("page", "1")
                    return newParams
                },
                { replace: true }
            )
        } else {
            setSearchParams(
                (prevParams) => {
                    const newParams = new URLSearchParams(prevParams)
                    const newGenres = selectedGenres.filter(
                        (g) => g !== checkbox.value
                    )

                    newParams.delete("genres")
                    if (newGenres && newGenres.length > 0) {
                        console.log(newGenres)

                        newParams.set("genres", newGenres)
                    }

                    newParams.set("page", "1")
                    return newParams
                },
                { replace: true }
            )
        }
    }

    const currentPage = page
    const previousPageParams = new URLSearchParams(searchParams)
    previousPageParams.set("page", +currentPage - 1)
    const previousPageUrl = `${location.pathname}?${previousPageParams}`

    const nextPageParams = new URLSearchParams(searchParams)
    nextPageParams.set("page", +currentPage + 1)
    const nextPageUrl = `${location.pathname}?${nextPageParams}`

    return (
        <div className={style["games"]}>
            <aside className={style["sidebar"]}>
                <div className={style["search-filters"]}>
                    <div className={style["filter-sort"]}>
                        <label className={style["filter-title"]} htmlFor="sort">
                            Sort by:
                        </label>
                        <select
                            name="sortBy"
                            id="sort"
                            onChange={(e) => {
                                setSearchParams((prevParams) => {
                                    const newParams = new URLSearchParams(
                                        prevParams
                                    )
                                    newParams.set("page", "1")
                                    newParams.set("sortBy", e.target.value)
                                    return newParams
                                })
                            }}
                            value={
                                sortOrder
                                    ? sortOrder
                                    : DEFAULT_ORDERING_METHOD.value
                            }
                        >
                            {Object.entries(ORDERING_METHODS).map(
                                (orderingMethod) => (
                                    <option
                                        key={orderingMethod[1].value}
                                        value={orderingMethod[1].value}
                                    >
                                        {orderingMethod[1].name}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                    <fieldset className={style["filter-prices"]}>
                        <legend className={style["filter-title"]}>
                            Filter by Price:
                        </legend>
                        <div className={style["filter-prices-inputs"]}>
                            <input
                                className={style["price-input"]}
                                type="number"
                                name="minPrice"
                                id="min-price"
                                placeholder="Min"
                                value={minPrice}
                                onChange={(e) => {
                                    setMinPrice(e.target.value)
                                    onMinPriceChanged(e.target.value)
                                }}
                            />
                            <span>-</span>
                            <input
                                className={style["price-input"]}
                                type="number"
                                name="maxPrice"
                                id="max-price"
                                placeholder="Max"
                                defaultValue={maxPrice}
                                onChange={(e) => {
                                    setMaxPrice(e.target.value)
                                    onMaxPriceChanged(e.target.value)
                                }}
                            />
                        </div>
                    </fieldset>
                    <fieldset className={style["filter-genres"]}>
                        <legend className={style["filter-title"]}>
                            Filter by Genre:
                        </legend>
                        <div className={style["genres"]}>
                            {genres.map((genre) => (
                                <GenreInput
                                    key={genre.id}
                                    genre={genre}
                                    checked={selectedGenres.includes(
                                        genre.slug
                                    )}
                                    onChange={onGenreChecked}
                                />
                            ))}
                        </div>
                        {selectedGenres.length > 0 && (
                            <button
                                className={style["clear-genres"]}
                                type="button"
                                onClick={() => {
                                    setSearchParams(
                                        (prevParams) => {
                                            const newParams =
                                                new URLSearchParams(prevParams)
                                            newParams.set("page", "1")
                                            newParams.delete("genres")
                                            return newParams
                                        },
                                        { replace: true }
                                    )
                                }}
                            >
                                Clear genres
                            </button>
                        )}
                    </fieldset>
                </div>
            </aside>
            <main className={style["games-content"]}>
                <Suspense
                    fallback={<GamesFetchingFallback />}
                    key={location.key}
                >
                    <Await
                        resolve={gamesFetch}
                        errorElement={
                            <div className={style["games-fetch-error"]}>
                                Something wrong happened!
                            </div>
                        }
                    >
                        {(games) => {
                            const hasNextPage = games.next
                            const hasPreviousPage = currentPage > 1

                            if (navigation.state === "loading") {
                                return <GamesFetchingFallback />
                            } else {
                                if (games.count <= 0) {
                                    return (
                                        <div className={style["no-results"]}>
                                            No results
                                        </div>
                                    )
                                }

                                return (
                                    <>
                                        <h1 className={style["results-count"]}>
                                            {games.count} results
                                        </h1>
                                        <div className={style["results-grid"]}>
                                            {games.results.map((game) => (
                                                <GameTile
                                                    key={game.id}
                                                    game={game}
                                                />
                                            ))}
                                        </div>
                                        <div className={style["page-controls"]}>
                                            {hasPreviousPage && (
                                                <Link
                                                    className={clsx(
                                                        style["page-link"],
                                                        "button",
                                                        style["previous"]
                                                    )}
                                                    to={previousPageUrl}
                                                >
                                                    Previous
                                                </Link>
                                            )}

                                            <div className={style["page-nb"]}>
                                                {currentPage}
                                            </div>

                                            {hasNextPage && (
                                                <Link
                                                    className={clsx(
                                                        style["page-link"],
                                                        "button",
                                                        style["next"]
                                                    )}
                                                    to={nextPageUrl}
                                                >
                                                    Next
                                                </Link>
                                            )}
                                        </div>
                                    </>
                                )
                            }
                        }}
                    </Await>
                </Suspense>
            </main>
        </div>
    )
}

export default Games
