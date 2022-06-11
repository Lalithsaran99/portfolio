import "./App.css";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Navbar } from "./components/navbar";
import { Skills } from "./components/skills";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
