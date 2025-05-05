import style from "./Footer.module.css"
import { Icon } from "@iconify-icon/react"
import storeLogo from "../../assets/gameStore_white_noBg.png"

function Footer() {
    return (
        <footer className={style["footer"]}>
            <div className={style["content"]}>
                <div className={style["links"]}>
                    <img
                        className={style["logo"]}
                        src={storeLogo}
                        alt="Game Store logo"
                    />
                    <div className={style["info"]}>
                        <a className={style["info-link"]} href="#">
                            About
                        </a>
                        <a className={style["info-link"]} href="#">
                            Contact
                        </a>
                        <a className={style["info-link"]} href="#">
                            FAQ
                        </a>
                        <a className={style["info-link"]} href="#">
                            Privacy
                        </a>
                        <a className={style["info-link"]} href="#">
                            Terms
                        </a>
                        <a className={style["info-link"]} href="#">
                            Team
                        </a>
                    </div>
                    <div className={style["socials"]}>
                        <div className={style["icons"]}>
                            <a
                                className={style["social-link"]}
                                href="https://x.com/"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:x"
                                />
                            </a>
                            <a
                                className={style["social-link"]}
                                href="https://www.facebook.com"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:facebook"
                                />
                            </a>
                            <a
                                className={style["social-link"]}
                                href="https://www.instagram.com"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:instagram"
                                />
                            </a>
                            <a
                                className={style["social-link"]}
                                href="https://bsky.app/"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:bluesky"
                                />
                            </a>
                            <a
                                className={style["social-link"]}
                                href="https://www.tiktok.com"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:tiktok"
                                />
                            </a>
                            <a
                                className={style["social-link"]}
                                href="https://www.twitch.tv/"
                            >
                                <Icon
                                    className={style["icon"]}
                                    icon="simple-icons:twitch"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style["legals"]}>
                    <p className={style["legals-content"]}>
                        &copy; 2025, Game Store
                    </p>
                    <a
                        className={style["source-link"]}
                        href="https://github.com/arnaudSanchez1816/shopping-cart"
                    >
                        <Icon
                            className={style["icon"]}
                            icon="simple-icons:github"
                        />
                        <span>Mock game store</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
