// css import
import "./index.css";
// pages import
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollProgress from "./components/ScrollProgress";
import UiLibrary from "./components/ui-library/UiLibrary";
import { useScroll } from "./components/scrollAnimationHook";

function App() {
  const [elementHeader, , viewHeader] = useScroll();
  const [elementAbout, controlsAbout, viewAbout] = useScroll();
  const [elementExp, controlsExp, viewExp] = useScroll();
  const [elementPort, controlsPort, viewPort] = useScroll();
  const [elementUiLib, controlsUiLib, viewUiLibrary] = useScroll();
  const [elementContact, controlsContact, viewContact] = useScroll();
  return (
    <>
      <ScrollProgress />
      <main className="main">
        <Header element={elementHeader} />
        <Nav
          viewHeader={viewHeader}
          viewAbout={viewAbout}
          viewExp={viewExp}
          viewPort={viewPort}
          viewUiLibrary={viewUiLibrary}
          viewContact={viewContact}
        />
        <About controls={controlsAbout} element={elementAbout} />
        <Experience controls={controlsExp} element={elementExp} />
        <Portfolio controls={controlsPort} element={elementPort} />
        <UiLibrary controls={controlsUiLib} element={elementUiLib} />
        <Contact controls={controlsContact} element={elementContact} />
        <Footer />
      </main>
    </>
  );
}

export default App;
