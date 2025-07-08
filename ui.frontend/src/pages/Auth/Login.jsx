import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { validateEmail, validatePassowrd } from '../../utils/helper'
import { useNavigate, Link } from 'react-router-dom'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/inputs/Input'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  //handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError(t('email_validation_error'))
      return;
    }

    if(password === "") {
      setError("Please enter valid password.");
      return;
    } else if(!validatePassowrd(password)) {
      setError("Password must contain at leat 8 characters, 1 uppercase and a special character.");
      return;
    }

    setError("");

    //Lgin API Call
  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p classname="text-xs text-slate-700 mt-[5px] mb-6">Please Enter your details to Log In.</p>

        <form onSubmit={ handleLogin } >
          <Input
            value={ email }
            onChange={({ target }) => setEmail( target.value )}
            label="Email Address" 
            placeholder='email@example.com'
            type="text"
          />

          <Input
            value={ password }
            onChange={({ target }) => setPassword( target.value )}
            label="Password" 
            placeholder='*********'
            type="password"
          />

          {error && 
            <p className='text-red-500 text-xs pb-2.5'>
              { error }
            </p>
          }

          <button type="submit" className='btn-primary'>{ 'Login' }</button>

          <p className='text-[13px] text-slate-800 mt-3'>
            {"Don't have an account? "}
            <Link className="font-medium text-primary underline" to="/signUp">
              {'Sign Up'}
            </Link>
          </p>
        </form> 
      </div>
    </AuthLayout>
  )
}

export default Login
