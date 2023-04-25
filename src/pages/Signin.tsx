import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setFormData((prevState) => ({
        ...prevState,
        
        [e.target.id]: e.target.value
    }))
  }


  

  return (
    <>
      <div className='pageContainer'>
        <header>
            <p className='pageHeader'>Welcome Back!</p>
        </header>
        <main>
            <form>
                <input type='email' className='emailInput' placeholder='email' id='email' value={email} onChange={onChange}/>
                <div className='passwordInputDiv'>
                    <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder="Password" id="password" value={password} onChange={onChange} />
                   <img src={visibilityIcon} alt="show password" className="showPassword" onClick={(prevState)=> !prevState}/> 
                </div>

                <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

                <Link to='/sign-up' className='registerLink'>
                Sign Up Instead
            </Link>
            </form>
        </main>
      </div>
    </>
  )
}

export default Signin
