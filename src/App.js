import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollProgress from "./components/ScrollProgress";
import Education from "./components/Education";
import { Toaster } from "./components/ui/toaster";

const Portfolio = () => {
  return (
    <div
      data-testid="portfolio-root"
      className="min-h-screen bg-white text-slate-900 dark:bg-[#0a0a0f] dark:text-slate-100 transition-colors duration-500 font-body selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-200"
    >
      <ScrollProgress />
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <DarkModeToggle />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loading message="Loading Portfolio..." />}>
          <Routes>
            <Route path="/myPortfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
