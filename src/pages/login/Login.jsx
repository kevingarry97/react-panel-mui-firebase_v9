import { useContext, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./login.scss"
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({email: '', password: ''});

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleChange = ({target}) => {
    setData({...data, [target.name]: target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const {email, password} = data;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user})
        navigate("/")
      })
      .catch((error) => {
        setError(true)
      });

    // Create a User

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log('User ', user)
    //   })
    //   .catch((error) => {
    //     setError(true)
    //   });
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="email" />
        <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="password" />
        <button type="submit">Login</button>
        {error && <span>Wrong E-mail / Password</span>}
      </form>
    </div>
  )
}

export default Login