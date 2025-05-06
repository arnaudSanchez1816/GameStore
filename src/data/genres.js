export const ACTION_GENRE = 4
export const INDIE_GENRE = 51
export const ADVENTURE_GENRE = 3
export const RPG_GENRE = 5
export const STRATEGY_GENRE = 10
export const SHOOTER_GENRE = 2
export const CASUAL_GENRE = 40
export const RACING_GENRE = 1
export const SPORTS_GENRE = 15
export const FIGHTING_GENRE = 6

export const genres = [
    {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 187055,
        image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        icon: "mdi:lightning-bolt-outline",
        games: [
            {
                id: 3498,
                slug: "grand-theft-auto-v",
                name: "Grand Theft Auto V",
                added: 21991,
            },
            {
                id: 3328,
                slug: "the-witcher-3-wild-hunt",
                name: "The Witcher 3: Wild Hunt",
                added: 21633,
            },
            {
                id: 5286,
                slug: "tomb-raider",
                name: "Tomb Raider (2013)",
                added: 17567,
            },
            {
                id: 13536,
                slug: "portal",
                name: "Portal",
                added: 17491,
            },
            {
                id: 12020,
                slug: "left-4-dead-2",
                name: "Left 4 Dead 2",
                added: 17359,
            },
            {
                id: 5679,
                slug: "the-elder-scrolls-v-skyrim",
                name: "The Elder Scrolls V: Skyrim",
                added: 16510,
            },
        ],
    },
    {
        id: 51,
        name: "Indie",
        slug: "indie",
        games_count: 77790,
        image_background:
            "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
        icon: "mdi:lightbulb-outline",
        games: [
            {
                id: 1030,
                slug: "limbo",
                name: "Limbo",
                added: 13949,
            },
            {
                id: 422,
                slug: "terraria",
                name: "Terraria",
                added: 13363,
            },
            {
                id: 3272,
                slug: "rocket-league",
                name: "Rocket League",
                added: 12761,
            },
            {
                id: 9767,
                slug: "hollow-knight",
                name: "Hollow Knight",
                added: 11531,
            },
            {
                id: 3612,
                slug: "hotline-miami",
                name: "Hotline Miami",
                added: 10794,
            },
            {
                id: 654,
                slug: "stardew-valley",
                name: "Stardew Valley",
                added: 10785,
            },
        ],
    },
    {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 146962,
        image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        icon: "mdi:sail-boat",
        games: [
            {
                id: 3439,
                slug: "life-is-strange-episode-1-2",
                name: "Life is Strange",
                added: 15747,
            },
            {
                id: 1030,
                slug: "limbo",
                name: "Limbo",
                added: 13949,
            },
            {
                id: 23027,
                slug: "the-walking-dead",
                name: "The Walking Dead: Season 1",
                added: 11563,
            },
            {
                id: 41,
                slug: "little-nightmares",
                name: "Little Nightmares",
                added: 11518,
            },
            {
                id: 9721,
                slug: "garrys-mod",
                name: "Garry's Mod",
                added: 10388,
            },
            {
                id: 13668,
                slug: "amnesia-the-dark-descent",
                name: "Amnesia: The Dark Descent",
                added: 10379,
            },
        ],
    },
    {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 59578,
        image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        icon: "mdi:sword",
        games: [
            {
                id: 3328,
                slug: "the-witcher-3-wild-hunt",
                name: "The Witcher 3: Wild Hunt",
                added: 21633,
            },
            {
                id: 5679,
                slug: "the-elder-scrolls-v-skyrim",
                name: "The Elder Scrolls V: Skyrim",
                added: 16510,
            },
            {
                id: 802,
                slug: "borderlands-2",
                name: "Borderlands 2",
                added: 15776,
            },
            {
                id: 3070,
                slug: "fallout-4",
                name: "Fallout 4",
                added: 14072,
            },
            {
                id: 41494,
                slug: "cyberpunk-2077",
                name: "Cyberpunk 2077",
                added: 13536,
            },
            {
                id: 766,
                slug: "warframe",
                name: "Warframe",
                added: 13067,
            },
        ],
    },
    {
        id: 10,
        name: "Strategy",
        slug: "strategy",
        games_count: 59922,
        image_background:
            "https://media.rawg.io/media/games/d1e/d1e70ce3762efcfc170c6bd067d7e9e3.jpg",
        icon: "mdi:tank",
        games: [
            {
                id: 10243,
                slug: "company-of-heroes-2",
                name: "Company of Heroes 2",
                added: 9861,
            },
            {
                id: 13633,
                slug: "civilization-v",
                name: "Sid Meier's Civilization V",
                added: 9712,
            },
            {
                id: 11147,
                slug: "ark-survival-of-the-fittest",
                name: "ARK: Survival Of The Fittest",
                added: 8918,
            },
            {
                id: 10065,
                slug: "cities-skylines",
                name: "Cities: Skylines",
                added: 8594,
            },
            {
                id: 13910,
                slug: "xcom-enemy-unknown",
                name: "XCOM: Enemy Unknown",
                added: 8467,
            },
            {
                id: 5525,
                slug: "brutal-legend",
                name: "Brutal Legend",
                added: 8385,
            },
        ],
    },
    {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59562,
        image_background:
            "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        icon: "ant-design:aim-outlined",
        games: [
            {
                id: 4200,
                slug: "portal-2",
                name: "Portal 2",
                added: 20527,
            },
            {
                id: 4291,
                slug: "counter-strike-global-offensive",
                name: "Counter-Strike: Global Offensive",
                added: 18243,
            },
            {
                id: 12020,
                slug: "left-4-dead-2",
                name: "Left 4 Dead 2",
                added: 17359,
            },
            {
                id: 4062,
                slug: "bioshock-infinite",
                name: "BioShock Infinite",
                added: 15905,
            },
            {
                id: 13537,
                slug: "half-life-2",
                name: "Half-Life 2",
                added: 15823,
            },
            {
                id: 802,
                slug: "borderlands-2",
                name: "Borderlands 2",
                added: 15776,
            },
        ],
    },
    {
        id: 40,
        name: "Casual",
        slug: "casual",
        games_count: 61887,
        image_background:
            "https://media.rawg.io/media/games/d11/d11470677a829e34562e95a4002c2c7f.jpg",
        icon: "mdi:coffee-outline",
        games: [
            {
                id: 9721,
                slug: "garrys-mod",
                name: "Garry's Mod",
                added: 10388,
            },
            {
                id: 326292,
                slug: "fall-guys",
                name: "Fall Guys: Ultimate Knockout",
                added: 8869,
            },
            {
                id: 9830,
                slug: "brawlhalla",
                name: "Brawlhalla",
                added: 8244,
            },
            {
                id: 356714,
                slug: "among-us",
                name: "Among Us",
                added: 7841,
            },
            {
                id: 817974,
                slug: "wallpaper-engine",
                name: "Wallpaper Engine",
                added: 6532,
            },
            {
                id: 42187,
                slug: "the-sims-4",
                name: "The Sims 4",
                added: 6484,
            },
        ],
    },
    {
        id: 14,
        name: "Simulation",
        slug: "simulation",
        games_count: 73763,
        image_background:
            "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
        icon: "lucide:plane",
        games: [
            {
                id: 10035,
                slug: "hitman",
                name: "Hitman",
                added: 10800,
            },
            {
                id: 654,
                slug: "stardew-valley",
                name: "Stardew Valley",
                added: 10785,
            },
            {
                id: 9721,
                slug: "garrys-mod",
                name: "Garry's Mod",
                added: 10388,
            },
            {
                id: 9882,
                slug: "dont-starve-together",
                name: "Don't Starve Together",
                added: 9887,
            },
            {
                id: 22509,
                slug: "minecraft",
                name: "Minecraft",
                added: 8638,
            },
            {
                id: 10065,
                slug: "cities-skylines",
                name: "Cities: Skylines",
                added: 8594,
            },
        ],
    },
    {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 97335,
        image_background:
            "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg",
        icon: "mdi:puzzle-outline",
        games: [
            {
                id: 4200,
                slug: "portal-2",
                name: "Portal 2",
                added: 20527,
            },
            {
                id: 13536,
                slug: "portal",
                name: "Portal",
                added: 17491,
            },
            {
                id: 1030,
                slug: "limbo",
                name: "Limbo",
                added: 13949,
            },
            {
                id: 19709,
                slug: "half-life-2-episode-two",
                name: "Half-Life 2: Episode Two",
                added: 11208,
            },
            {
                id: 1450,
                slug: "inside",
                name: "INSIDE",
                added: 8236,
            },
            {
                id: 3853,
                slug: "trine-2-complete-story",
                name: "Trine 2: Complete Story",
                added: 7412,
            },
        ],
    },
    {
        id: 11,
        name: "Arcade",
        slug: "arcade",
        games_count: 22661,
        image_background:
            "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg",
        icon: "material-symbols:joystick-outline",
        games: [
            {
                id: 3612,
                slug: "hotline-miami",
                name: "Hotline Miami",
                added: 10794,
            },
            {
                id: 17540,
                slug: "injustice-gods-among-us-ultimate-edition",
                name: "Injustice: Gods Among Us Ultimate Edition",
                added: 9832,
            },
            {
                id: 22509,
                slug: "minecraft",
                name: "Minecraft",
                added: 8638,
            },
            {
                id: 4003,
                slug: "grid-2",
                name: "GRID 2",
                added: 7707,
            },
            {
                id: 3408,
                slug: "hotline-miami-2-wrong-number",
                name: "Hotline Miami 2: Wrong Number",
                added: 6380,
            },
            {
                id: 58753,
                slug: "forza-horizon-4",
                name: "Forza Horizon 4",
                added: 6244,
            },
        ],
    },
    {
        id: 83,
        name: "Platformer",
        slug: "platformer",
        games_count: 100873,
        image_background:
            "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
        icon: "game-icons:ladders-platform",
        games: [
            {
                id: 1030,
                slug: "limbo",
                name: "Limbo",
                added: 13949,
            },
            {
                id: 422,
                slug: "terraria",
                name: "Terraria",
                added: 13363,
            },
            {
                id: 9767,
                slug: "hollow-knight",
                name: "Hollow Knight",
                added: 11531,
            },
            {
                id: 41,
                slug: "little-nightmares",
                name: "Little Nightmares",
                added: 11518,
            },
            {
                id: 3144,
                slug: "super-meat-boy",
                name: "Super Meat Boy",
                added: 9647,
            },
            {
                id: 17572,
                slug: "batman-aa-goty",
                name: "Batman: Arkham Asylum Game of the Year Edition",
                added: 8526,
            },
        ],
    },
    {
        id: 59,
        name: "Massively Multiplayer",
        slug: "massively-multiplayer",
        games_count: 4048,
        image_background:
            "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg",
        icon: "mdi:internet",
        games: [
            {
                id: 10213,
                slug: "dota-2",
                name: "Dota 2",
                added: 13069,
            },
            {
                id: 766,
                slug: "warframe",
                name: "Warframe",
                added: 13067,
            },
            {
                id: 10142,
                slug: "playerunknowns-battlegrounds",
                name: "PlayerUnknown’s Battlegrounds",
                added: 10618,
            },
            {
                id: 10533,
                slug: "path-of-exile",
                name: "Path of Exile",
                added: 10584,
            },
            {
                id: 362,
                slug: "for-honor",
                name: "For Honor",
                added: 9642,
            },
            {
                id: 11147,
                slug: "ark-survival-of-the-fittest",
                name: "ARK: Survival Of The Fittest",
                added: 8918,
            },
        ],
    },
    {
        id: 1,
        name: "Racing",
        slug: "racing",
        games_count: 25399,
        image_background:
            "https://media.rawg.io/media/games/0c1/0c1c9965ba59166ab986a663ab2252dc.jpg",
        icon: "mdi:racing-helmet",
        games: [
            {
                id: 3272,
                slug: "rocket-league",
                name: "Rocket League",
                added: 12761,
            },
            {
                id: 4003,
                slug: "grid-2",
                name: "GRID 2",
                added: 7707,
            },
            {
                id: 2572,
                slug: "dirt-rally",
                name: "DiRT Rally",
                added: 7001,
            },
            {
                id: 58753,
                slug: "forza-horizon-4",
                name: "Forza Horizon 4",
                added: 6244,
            },
            {
                id: 5578,
                slug: "grid",
                name: "GRID (2008)",
                added: 5412,
            },
            {
                id: 19491,
                slug: "burnout-paradise-the-ultimate-box",
                name: "Burnout Paradise: The Ultimate Box",
                added: 4840,
            },
        ],
    },
    {
        id: 15,
        name: "Sports",
        slug: "sports",
        games_count: 22165,
        image_background:
            "https://media.rawg.io/media/games/fd7/fd794a9f0ffe816038d981b3acc3eec9.jpg",
        icon: "mdi:soccer",
        games: [
            {
                id: 3272,
                slug: "rocket-league",
                name: "Rocket League",
                added: 12761,
            },
            {
                id: 326292,
                slug: "fall-guys",
                name: "Fall Guys: Ultimate Knockout",
                added: 8869,
            },
            {
                id: 2572,
                slug: "dirt-rally",
                name: "DiRT Rally",
                added: 7001,
            },
            {
                id: 53341,
                slug: "jet-set-radio-2012",
                name: "Jet Set Radio",
                added: 5297,
            },
            {
                id: 9575,
                slug: "vrchat",
                name: "VRChat",
                added: 5117,
            },
            {
                id: 36,
                slug: "tekken-7",
                name: "TEKKEN 7",
                added: 4173,
            },
        ],
    },
    {
        id: 6,
        name: "Fighting",
        slug: "fighting",
        games_count: 11765,
        image_background:
            "https://media.rawg.io/media/screenshots/ad1/ad15e71b0a3d431ce0a59bcd783efa88.jpg",
        icon: "mdi:glove",
        games: [
            {
                id: 17540,
                slug: "injustice-gods-among-us-ultimate-edition",
                name: "Injustice: Gods Among Us Ultimate Edition",
                added: 9832,
            },
            {
                id: 108,
                slug: "mortal-kombat-x",
                name: "Mortal Kombat X",
                added: 8956,
            },
            {
                id: 28179,
                slug: "sega-mega-drive-and-genesis-classics",
                name: "SEGA Mega Drive and Genesis Classics",
                added: 8414,
            },
            {
                id: 9830,
                slug: "brawlhalla",
                name: "Brawlhalla",
                added: 8244,
            },
            {
                id: 274480,
                slug: "mortal-kombat-11",
                name: "Mortal Kombat 11",
                added: 5668,
            },
            {
                id: 44525,
                slug: "yakuza-kiwami",
                name: "Yakuza Kiwami",
                added: 4683,
            },
        ],
    },
    {
        id: 19,
        name: "Family",
        slug: "family",
        games_count: 5406,
        image_background:
            "https://media.rawg.io/media/screenshots/656/65654f69256420c0126eb506c1a72d7f.jpg",
        icon: "mdi:family",
        games: [
            {
                id: 3254,
                slug: "journey",
                name: "Journey",
                added: 8532,
            },
            {
                id: 3729,
                slug: "lego-the-hobbit",
                name: "LEGO The Hobbit",
                added: 5458,
            },
            {
                id: 3350,
                slug: "broken-age",
                name: "Broken Age",
                added: 5125,
            },
            {
                id: 1259,
                slug: "machinarium",
                name: "Machinarium",
                added: 4691,
            },
            {
                id: 1140,
                slug: "world-of-goo",
                name: "World of Goo",
                added: 4565,
            },
            {
                id: 4331,
                slug: "sonic-generations",
                name: "Sonic Generations",
                added: 4304,
            },
        ],
    },
    {
        id: 28,
        name: "Board Games",
        slug: "board-games",
        games_count: 8385,
        image_background:
            "https://media.rawg.io/media/screenshots/bfc/bfcdbc0a64ce19da4ce4cac8b7d2d985.jpg",
        icon: "fluent:chess-20-regular",
        games: [
            {
                id: 23557,
                slug: "gwent-the-witcher-card-game",
                name: "Gwent: The Witcher Card Game",
                added: 5046,
            },
            {
                id: 327999,
                slug: "dota-underlords",
                name: "Dota Underlords",
                added: 4250,
            },
            {
                id: 2055,
                slug: "adventure-capitalist",
                name: "AdVenture Capitalist",
                added: 3567,
            },
            {
                id: 758,
                slug: "hue",
                name: "Hue",
                added: 2796,
            },
            {
                id: 3187,
                slug: "armello",
                name: "Armello",
                added: 2123,
            },
            {
                id: 2306,
                slug: "poker-night-2",
                name: "Poker Night 2",
                added: 2114,
            },
        ],
    },
    {
        id: 17,
        name: "Card",
        slug: "card",
        games_count: 4537,
        image_background:
            "https://media.rawg.io/media/games/f64/f6429c7e6e66c178fde186977ea1af75.jpg",
        icon: "mdi:cards-outline",
        games: [
            {
                id: 28121,
                slug: "slay-the-spire",
                name: "Slay the Spire",
                added: 5184,
            },
            {
                id: 23557,
                slug: "gwent-the-witcher-card-game",
                name: "Gwent: The Witcher Card Game",
                added: 5046,
            },
            {
                id: 18852,
                slug: "poker-night-at-the-inventory",
                name: "Poker Night at the Inventory",
                added: 2816,
            },
            {
                id: 332,
                slug: "the-elder-scrolls-legends",
                name: "The Elder Scrolls: Legends",
                added: 2282,
            },
            {
                id: 8923,
                slug: "faeria",
                name: "Faeria",
                added: 2230,
            },
            {
                id: 2306,
                slug: "poker-night-2",
                name: "Poker Night 2",
                added: 2114,
            },
        ],
    },
    {
        id: 34,
        name: "Educational",
        slug: "educational",
        games_count: 15690,
        image_background:
            "https://media.rawg.io/media/screenshots/49d/49dae660a0fc843b23d63af8ce34e33c.jpg",
        icon: "mdi:brain",
        games: [
            {
                id: 1358,
                slug: "papers-please",
                name: "Papers, Please",
                added: 7154,
            },
            {
                id: 1140,
                slug: "world-of-goo",
                name: "World of Goo",
                added: 4565,
            },
            {
                id: 2778,
                slug: "surgeon-simulator-cpr",
                name: "Surgeon Simulator",
                added: 4070,
            },
            {
                id: 9768,
                slug: "gameguru",
                name: "GameGuru",
                added: 2676,
            },
            {
                id: 13777,
                slug: "sid-meiers-civilization-iv-colonization",
                name: "Sid Meier's Civilization IV: Colonization",
                added: 2420,
            },
            {
                id: 6885,
                slug: "pirates-3",
                name: "Sid Meier's Pirates!",
                added: 2349,
            },
        ],
    },
]
