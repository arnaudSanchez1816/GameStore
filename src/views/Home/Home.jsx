import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"
import style from "./Home.module.css"

function Home() {
    return (
        <div className={style["home"]}>
            <HeroCarousel options={{ autoScroll: true }} />
            <div>
                <h2>Last releases</h2>
                <div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=280"
                            alt=""
                        />
                        <p>A Plague tale : requiem</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=280"
                            alt=""
                        />
                        <p>A Plague tale : requiem</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=280"
                            alt=""
                        />
                        <p>A Plague tale : requiem</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=280"
                            alt=""
                        />
                        <p>A Plague tale : requiem</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.4956.13558336166432541.beb57fbe-cc4b-40c5-ba76-c8112867dea2.43b4dea4-61a1-4ffc-81ab-62cf72323363?w=280"
                            alt=""
                        />
                        <p>A Plague tale : requiem</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Genres</h2>
                <div>
                    <div>
                        <button type="button">Action</button>
                    </div>
                    <div>
                        <button type="button">RPG</button>
                    </div>
                    <div>
                        <button type="button">Shooter</button>
                    </div>
                    <div>
                        <button type="button">Strategy</button>
                    </div>
                    <div>
                        <button type="button">Adventure</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Popular games</h2>
                <div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                    <div>
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965?w=280"
                            alt=""
                        />
                        <p>Age of Empire II : Definitive edition</p>
                    </div>
                </div>
                <button type="button">Display all games</button>
            </div>
        </div>
    )
}

export default Home
