import HomePage from './components/pages/Homepage';
import AuthContext from './components/store/auth-context'
import { useContext } from 'react'
import React ,{ useState  } from 'react'
import './style.css';
import Welcome from './components/pages/Welcome';

function App() {
  const [loginsucess ,setloginsucess ] = useState(false)

  const authctx = useContext(AuthContext)
  if(authctx.isLoggedIn){
      setloginsucess(true)
  }
  return (
    <>
    <h1>Expense Tracker </h1>
     { loginsucess && <Welcome />}
     { !loginsucess &&  <HomePage />}
    </>
  );
}

export default App;
