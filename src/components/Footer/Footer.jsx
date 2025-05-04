import style from "./Footer.module.css"
import { Icon } from "@iconify-icon/react"

function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Team</a>
                </div>
                <div>
                    <a href="#">
                        <Icon icon="line-md:twitter-x" />
                    </a>
                    <a href="#">
                        <Icon icon="ic:baseline-facebook" />
                    </a>
                    <a href="#">
                        <Icon icon="mdi:instagram" />
                    </a>
                    <a href="#">
                        <Icon icon="simple-icons:bluesky" />
                    </a>
                    <a href="#">
                        <Icon icon="ic:baseline-tiktok" />
                    </a>
                    <a href="#">
                        <Icon icon="mdi:twitch" />
                    </a>
                </div>
            </div>
            <div>
                <h1>Game Store</h1>
                <div>
                    <p>&copy; 2025, Game Store</p>
                    <a href="#">Mock game store</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
