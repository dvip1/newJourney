import { GlobalStyles } from "../../styles/homeStyle";
import { PrimaryButton } from "../UI/button";
import { SecondaryButton } from "../UI/button";

export function Hero() {
    return (
        <>
            <GlobalStyles />
            <div className="grid md:grid-cols-2 gap-4 debug-screens my-container  mt-10">
                {/* Item 1 */}
                <div className="md:col-span-1 md:order-1  order-2 flex justify-center items-center ">
                    <div className="p-4 text-left">
                        <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">
                            Join in on my weird <span className="textGrad">Journeys</span>
                        </h1>
                        <p className="subtitle text-base">
                            Discover my personal Blog - A collection of things that I love</p>
                        <a href="https://twitter.com/PatelDvip" target="blank">
                            <PrimaryButton className="rounded-md" > Subscribe  <i className="fas fa-envelope"></i></PrimaryButton>
                        </a>
                        <a href="https://github.com/dvip1" target="blank">
                            <SecondaryButton className="rounded-md"> Github  <i className="fab fa-github"></i></SecondaryButton>
                        </a>
                    </div>
                </div>

                {/* Item 2 */}
                {/* Item 2 */}
                <div className="md:col-span-1 md:order-2 order-1 flex justify-center items-center md:block">
                    <div className="p-4">
                        <img src="/Journeys.svg" alt="" className="w-full xl:w-10/12" />
                    </div>
                </div>

            </div>
        </>
    );
}