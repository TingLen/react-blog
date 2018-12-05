import React from 'react'
import Home from './pages/home'
import Categories from './pages/categories'
import Article from './pages/article'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/categories/:category" component={Categories}/>
                    <Route path="/article/:article" component={Article}/>
                </div>
            </Router>
        );
    }
}

export default App

