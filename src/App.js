import React from 'react'
import './App.css'

import Layout from './components/common/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder'

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  )
}

export default App
