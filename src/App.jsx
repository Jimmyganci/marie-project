import { useEffect, useState } from 'react'
import './App.css'
import { definitions } from './data/dicos'

function App() {
  const [quoteRandom, setQuoteRandom] = useState({})

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function reload() {
    return location.reload()
  }

  useEffect(() => {
    const definitionsLength = definitions.length
    const randomIndex = getRandomInt(definitionsLength)
    setQuoteRandom(definitions[randomIndex])
  }, [])

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__container--title">
          Si tu connais Marie, tu connais aussi:
        </h1>
        <div className="app__container__defintion">
          <h5 className="app__container__defintion--title">
            {quoteRandom.name}:
          </h5>
          <p className="app__container__defintion--desc">
            {quoteRandom.description}
          </p>
        </div>
      </div>
      <button onClick={reload}>Encore stp!</button>
    </div>
  )
}

export default App
