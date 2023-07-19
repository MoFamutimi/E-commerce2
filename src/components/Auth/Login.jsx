import {BiUser, BiSolidLock} from 'react-icons/bi'
import {BsCart4} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
// import {BsInstagram} from 'react-icons/bs'
// import {FiFacebook, FiTwitter, FiBookOpen} from 'react-icons/fi'
import "./AuthStyle.css"
import bgImage from "../../assets/bg.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/ProductState'


const Login = ()=>{
    const nav = useNavigate()
    const Dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [message, setmessage] = useState({error:false, value: "",  msg:""})

    const data = {email, password}
    const url = "https://eflexshop.onrender.com/user/login"

    const Login = (e)=>{
        e.preventDefault()
        axios.post(url,data)
        .then(res=> {
            console.log(res)
            Dispatch(userData(res.data.data))
            nav("/")
        })
        .catch((err)=>{
            console.log(err)
            // setmessage({error:true, value: "email", msg: err.response.data.errors[0].msg})
        })
        
    }


    return(
     <div className='AuthBody'>
         <div className="container">
       <div className="holder">
        <div className="left">
        <img src={bgImage} alt=""></img>
        </div>
        <div className="right">
            <div className="description">
                <div className='logo'>
                {/* <BsCart4 className='cart'/> */}
                <h1>Login</h1>
                </div>
               <h3>"Get ready for a delightful shopping experience!</h3>
                
            </div>

            <div className="login-page">
                <form>
                    <div className="login">
                    <input type="text" placeholder="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                        <BiUser className='user'/>
                    </div>

                {/* <div className="login">
                        <input type="username" placeholder="username"/>
                        <BiUser className='user'/>
                    </div> */}


                    <div className="login">
                    <input type="password" placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                        <BiSolidLock className='user'/>
                        <AiFillEye className='eyes'/>
                    </div>

                    <h5>Forget Password</h5>

                    <button className='Btn' onClick={(e)=> Login(e)}>Login</button>

                    
                    {/* <div className='socialmedia'>
                        <BsInstagram className='social'/>
                        <FiFacebook className='social'/>
                        <FiTwitter className='social'/>
                    </div> */}
                </form>

              
            </div>
        </div>
       </div>
      </div>
     </div>
    )
  }
  
  export default Login