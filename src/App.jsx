import HeroSection from './components/HeroSection'
import './styles/App.css'
import Whyus from './components/Whyus'
import Features from './components/Features'
import FullDemo from './components/FullDemo'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'

function App() {
  const targetRef = useRef()

  useEffect(() => {
    console.log(
      '%cCan%cWeBe!',
      'color: #e47e24; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;',
      'color: #fff; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;'
    )
    console.log(
      '%cHey explorer!, Are you lost?? Because this is not the right place for you. If you want to work with us at CanWeBe contact us now.',
      'color: #e1e1e1; font-size: 1.5em;'
    )
  }, [])

  return (
    <>
      <HeroSection targetRef={targetRef} />
      <Whyus ref={targetRef} />
      <Features />
      <FullDemo />
      <Footer />
    </>
  )
}

export default App
