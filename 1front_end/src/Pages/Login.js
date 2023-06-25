import { useState } from "react";
import axios from "axios";
import "../Assets/Styles/Login.css";
//import { useRouter } from "next/navigation";
import Navebar from "../Components/Common/Navebar";
function Login({ cartsize }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("hello");
    /*try {
      const response = await axios.post(
        "http://localhost:8000/api/admins/login",
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      // Store the token securely in local storage or session storage
      localStorage.setItem("token", token);
      if (token) {
        router.push("/products");
      }
      // Use the token to send authenticated requests
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } catch (error) {
      console.error(error);
    }*/
  };
  return (
    <>
      <Navebar cartsize={cartsize} />
      <div className="container">
        <div className="form">
          <h2 className="heading">Login</h2>

          <form onSubmit={handleLogin} className="formoflogin">
            <div className="">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input"
                required
              />
            </div>
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
