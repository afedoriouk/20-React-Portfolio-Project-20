import React, { useEffect, useState } from 'react'
import Loader from 'react-loader'
import AnimatedLetters from '../AnimatedLetters'
import './index.css'

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([])
}
useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return () => {
    clearTimeout(timer)
  }
})

useEffect(() => {
  getPortfolio()
}, [])

const getPortfolio = async () => {
  const querySnapshot = await getDocs(collection(db, 'portfolio'))
  setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
}

const renderPortfolio =(portfolio)=> {
    return (
   
        <div className="image-container"> {
            portfolio.map((port, idx)=>{
                return(<div className="image-container" key={idx}>
                    <img src={port.image}
                    className="portfolio-image"
                    alt="portfolio"/>
                    <div className ="content">
                        <p className="title">{port.name}</p>
                        
                        )
            })
            </div>
        }
    )
} 


        <Loader type="BeatLoader"/>
        </div>