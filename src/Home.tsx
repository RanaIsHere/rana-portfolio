import Banner from "./components/Banner";
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";

function Home() {
    return (
        <main>
            <Banner />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}

export default Home;