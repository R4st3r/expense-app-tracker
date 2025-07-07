import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/inputs/Input'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  //handle login form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p classname="text-xs text-slate-700 mt-[5px] mb-6">Please Enter your details to Log In.</p>

        <form onSubmit={ handleSubmit } >
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
            type="password" //TODO Add tooltip "Password must contain at least 1 uppercase 1 special character ecc..."
          />

          {error && 
            <p className='text-red-500 text-xs pb-2.5'>
              { error }
            </p>
          }

          <button type="submit" className='btn-primary'>{ 'Login' }</button>

          <p className='text-[13px] text-slate-800 mt-3'>
            {"Don't have an account?"}
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
