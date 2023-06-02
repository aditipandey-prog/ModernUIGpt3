import React from 'react'
import {Brand,CTA,Navbar} from './Components';
import { Header,Possibility,Whatgpt3,Footer } from './Containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Possibility/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
