import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Skills />
        <Projects />
        <Timeline />
        
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
