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
import { Suspense, useEffect, useRef, useState } from "react"
import Spinner from "../../components/Spinner/Spinner"
import clsx from "clsx"

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

    const pageRef = useRef(searchParams.get("page"))

    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
    const [sortOrder, setSortOrder] = useState(searchParams.get("sortBy") || "")
    const [selectedGenres, setSelectedGenres] = useState(
        searchParams.get("genres")?.split(",") || []
    )
    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "")
    const [debouncedMinPrice, setDebouncedMinPrice] = useState(minPrice)
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "")
    const [debouncedMaxPrice, setDebouncedMaxPrice] = useState(maxPrice)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        pageRef.current = params.get("page") || ""
    }, [location.search])

    useEffect(() => {
        const params = new URLSearchParams()
        if (pageRef) params.set("page", pageRef.current)
        if (sortOrder) params.set("sortBy", sortOrder)
        if (selectedGenres && selectedGenres.length > 0)
            params.set("genres", selectedGenres.join(","))
        if (debouncedMinPrice) params.set("minPrice", debouncedMinPrice)
        if (debouncedMaxPrice) params.set("maxPrice", debouncedMaxPrice)
        if (searchQuery) params.set("q", searchQuery)
        setSearchParams(params, { replace: true })
    }, [
        pageRef,
        searchQuery,
        sortOrder,
        selectedGenres,
        debouncedMinPrice,
        debouncedMaxPrice,
        setSearchParams,
    ])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            pageRef.current = "1"
            setDebouncedMinPrice(minPrice)
            setDebouncedMaxPrice(maxPrice)
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [minPrice, maxPrice])

    const onGenreChecked = (e) => {
        const checkbox = e.target

        pageRef.current = "1"
        if (checkbox.checked) {
            setSelectedGenres([...selectedGenres, checkbox.value])
        } else {
            setSelectedGenres(
                selectedGenres.filter((g) => g !== checkbox.value)
            )
        }
    }

    const currentPage = pageRef.current || "1"
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
                                pageRef.current = "1"
                                setSortOrder(e.target.value)
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
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span>-</span>
                            <input
                                className={style["price-input"]}
                                type="number"
                                name="maxPrice"
                                id="max-price"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
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
                                    pageRef.current = "1"
                                    setSelectedGenres([])
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
