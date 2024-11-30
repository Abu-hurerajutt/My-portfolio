import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Carousel from './Components/Carousel'
import LatestResults from './Components/LatestResults'
import Teams from './Components/Teams'
import CounterCard from './Components/Countercard'
import PlayerCard from './Components/PlayerCard'
import NewsCard from './Components/NewsCard'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <Header/>
      <Carousel/>
      <LatestResults/>
      <Teams/>
      <CounterCard/>
      <PlayerCard/>
      <NewsCard/>
      <Footer/>
    </>
  )
}

export default App
