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
        // this creates a shallow copy of the previous state object. In this case, the spread operator is used to expand the properties of the prevState object into the new object being created. This creates a new object with all the properties of the previous state object.By using a shallow copy of the previous state object, the code is able to preserve any properties that were not updated by the onChange event. This is important because React components should always update their state immutably, meaning that they should create a new object or array rather than modifying the existing one.
        ...prevState,
        // this will be email or password. Depending on the id value of the input element. 
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
