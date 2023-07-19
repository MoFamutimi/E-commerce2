import { BiSolidLock } from 'react-icons/bi';
import { AiFillEye, AiOutlineMail } from 'react-icons/ai';
import bgImage from "../../assets/bg.jpg";
import { SpinnerCircular } from 'spinners-react';
import axios from 'axios';
import "./AuthStyle.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/ProductState';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const Dispatch = useDispatch();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setmessage] = useState({ error: false, value: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const data = { name, email, password };
  const url = "https://eflexshop.onrender.com/user/register";

  const Signup = (e) => {
    e.preventDefault();
    if (!name) {
      setmessage({ error: true, value: "name", msg: "*Input your name" });
      setLoading(false);
    } else if (!email) {
      setmessage({ error: true, value: "email", msg: "*Input your email" });
      setLoading(false);
    } else if (email.indexOf("@") === -1) {
      setmessage({ error: true, value: "email", msg: "*Invalid email format" });
      setLoading(false);
    } else if (!password) {
      setmessage({ error: true, value: "password", msg: "*Input your password" });
      setLoading(false);
    } else if (!confirm) {
      setmessage({ error: true, value: "confirm", msg: "*Input your confirm password" });
      setLoading(false);
    } else if (password !== confirm) {
      setmessage({ error: true, value: "password", msg: "*Passwords do not match" });
      setLoading(false);
    } else if (password.length < 8) {
      setmessage({ error: true, value: "password", msg: "*Your password must be at least 8 characters long" });
      setLoading(false);
    } else {
      setmessage("");
      setLoading(true);

      axios.post(url, data)
        .then(res => {
          console.log(res);
          Dispatch(userData(res.data.data));
          nav("/");
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          setmessage({ error: true, value: "email", msg: err.response.data.errors[0].msg });
          setLoading(false);
        });
    }
  };

  return (
    <div className='AuthBody'>
      <div className="container">
        <div className="holder">
          <div className="left">
            <img src={bgImage} alt=""></img>
          </div>
          <div className="right">
            <div className="description">
              <div className='logo'>
                <h1>Sign UP</h1>
              </div>
              <h3>Get ready for a delightful shopping experience!</h3>
            </div>

            <div className="login-page">
              <form>
                <div className="login">
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <AiOutlineMail className='user' />
                  {message.value === "name" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                </div>

                <div className="login">
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <AiOutlineMail className='user' />
                  {message.value === "email" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                </div>

                <div className="login">
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <BiSolidLock className='user' />
                  <AiFillEye className='eyes' />
                  {message.value === "password" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                </div>

                <div className="login">
                  <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                  <BiSolidLock className='user' />
                  <AiFillEye className='eyes' />
                  {message.value === "confirm" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                  {message.value === "password" && message.msg === "*Passwords do not match" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                  {message.value === "password" && message.msg === "*Your password must be at least 8 characters long" ?
                    <p style={{ color: "red", fontSize: "10px", marginLeft: "5px" }}>{message.msg}</p> : null
                  }
                </div>

                <h5 className='Forget'>Forget Password</h5>

                <button className='Btn' onClick={(e) => Signup(e)}>
                  {loading ? <SpinnerCircular size={30} /> : "Sign up"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
