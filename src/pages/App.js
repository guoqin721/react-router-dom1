import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Topics from './topics/Topics';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/about'>关于</Link></li>
              <li><Link to='/topics'>主题列表</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;