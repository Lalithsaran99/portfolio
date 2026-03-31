import "./App.css";
import { Background } from "./components/Background";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <Background />
      <main className="text-gray-200 body-font relative z-10 font-sans">
        <Navbar />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
