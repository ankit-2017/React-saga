import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Login from '../components/Auth/login'
  import SignUp from '../components/Auth/signup'
  import Dashboard from '../components/dashboard/home'
  import {useEffect, useState} from 'react'


  function Routes() {
      const [user, setUser] = useState()
      useEffect(()=> {
        let data = window.localStorage.getItem("user")
        data = JSON.parse(data)
        console.log("user", data)
        if(data)
            setUser(data.token)
      })

      return(
          <Router>
                <Switch>
                    
                    <Route exact path="/">
                            <Login />
                    </Route>
                    <Route path="/signup">
                            <SignUp />
                    </Route>
                    {
                        user ? 
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    : ''
                    }
                    
                </Switch>
          </Router>
      )
  }

  export default Routes