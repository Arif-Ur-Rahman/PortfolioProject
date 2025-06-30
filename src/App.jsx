import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import EducationExperience from './components/education_experience/EducationExperience'
import ScrollUp from './components/scrollUP/ScrollUp'


function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <EducationExperience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
