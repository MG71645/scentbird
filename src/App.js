import React, { Component } from 'react'

// Components
import Header from './components/Header'
import PageTitle from './components/PageTitle'
import SummaryBlock from './components/SummaryBlock'
import SubscriptionForm from './components/SubscriptionForm'
import InformationBlock from './components/InformationBlock'

//Styles
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div className="layout">
            <div className="body">
                <PageTitle/>
                <SummaryBlock/>
                <SubscriptionForm/>
                <InformationBlock/>
            </div>
          </div>
      </div>
    )
  }
}

export default App
