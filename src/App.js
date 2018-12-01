import React from 'react'
import Home from './pages/home'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App

