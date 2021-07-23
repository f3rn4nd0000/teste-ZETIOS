import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import AuthPage from './AuthPage';
import { BrowserRouter, Switch, Route  } from 'react-router-dom' 
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
     <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/about" component={About} />
            <Route path="/authpage" component={AuthPage} />
      </Switch>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
