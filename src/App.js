import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';




function App() {

    // Initialize loading state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            // Set loading state to false after delay
            setLoading(false);
        }, 2000); // Adjust the delay time as needed

        // Clear timeout on component unmount
        return () => clearTimeout(timer);
    }, []);

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (

        <div className="app" data-theme={theme}>
            {loading ? (<Loader />) : (<><Sidebar theme={theme} switchTheme={switchTheme} />
                <main className='main'>
                    <Home />
                    <About />
                    <Resume />
                    <Portfolio />
                    <Services />
                    <Contact theme={theme} />
                </main></>)}


        </div>
    );
}

export default App;
