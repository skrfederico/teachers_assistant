import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Route, Switch, Redirect } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Login from './pages/Login'

import '@fortawesome/fontawesome-free/css/all.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Router path="/login" component={Login}> */}
    <Router>
      <App />
      {/* <Login /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Switch>
//       <Router path="/login" component={Login}>
//         <Redirect from="/" to="/login" />
//         <App />
//       </Router>
//     </Switch>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
