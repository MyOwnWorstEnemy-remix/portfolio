import Header from "../blocks/header"
import Hero from "../blocks/hero";
import About from "../blocks/about";
import Projects from "../blocks/projects";

function MainPage () {
    return (
        <>
            <div className="w-full min-h-screen pb-10 bg-[#f9f3ed] dark:bg-[#0c0c0c] relative overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        opacity: "0.04",
                        background:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.6' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    }}
                />
                <div className="absolute top-[5vh] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#ff510020] dark:bg-[#ee00ff17] rounded-full blur-[100px] z-0"></div>
                <div className="absolute top-[50vh] right-[-15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#ff000020] dark:bg-[#8000ff17] rounded-full blur-[120px] z-0"></div>
                <div className="px-6 unselectable py-8 md:px-12 md:py-8 lg:px-24 lg:py-8 max-w-[100rem] mx-auto flex flex-col relative z-10">
                    <Header />
                    <main className="pt-24 md:pt-24 lg:pt-28">
                        <Hero />
                        <About />
                        <Projects />
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainPage;