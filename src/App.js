import React, { useState } from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import BlogPost from './components/pages/BlogPost'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import Users from './components/pages/Users'
import Page from './components/shared/page'
import EditAbout from './components/pages/EditAbout'
import EditBlog from './components/pages/EditBlog'

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false)

  // Need to lift state in order to reflect logged in on Navbar as well as Routes. 
  const logout = event => {
    setLoggedIn(false);
}

  return (
   <BrowserRouter>
        <Navigation {...{loggedIn}} logout={logout}/>
        <Switch>
          <Route exact path="/" render={
            (props) => <Page title="Shane Lee">
              <Home {...props}/>
            </Page>
          } />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blogpost" component={BlogPost} />
         
          <Route exact path="/login" render={
            (props) => <Login {...{setLoggedIn, ...props}} />
          } 
          />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
          <PrivateRoute path="/users">
            <Users />
          </PrivateRoute>
          <PrivateRoute path="/editAbout">
            <EditAbout />
          </PrivateRoute> 
          <PrivateRoute path="/editBlog">
            <EditBlog />
          </PrivateRoute> 
          
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
