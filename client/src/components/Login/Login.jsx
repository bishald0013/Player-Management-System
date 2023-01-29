import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../service/localStorage'
import { useAdminLoginMutation } from '../../service/adminApi'
import { useLoginManagerMutation } from '../../service/managerAuth'

function Login() {
  const navigate = useNavigate()
  const [loginManager] = useLoginManagerMutation()
  const [adminLogin] = useAdminLoginMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginData = new FormData(e.currentTarget)

    const data = {
      email: loginData.get('email'),
      password: loginData.get('password'),
    }

    if(data.email === 'bishaldeb282@gmail.com'){
      const res = await adminLogin(data)
      if(res.data.status === 'success'){
        navigate('/adminDeshbord')
      }

    }

    if (data.email && data.password) {
      const res = await loginManager(data)
      console.log(res)

      if (res.data.status === 'success') {
        setToken(res.data.token)
        navigate('/deshbord')
      }
    }

    console.log(data)
  }
  return (
    <div className="container w-25 mt-5">
      <form id="login_form" onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal">Please LogIn</h1>

        <div class="form-floating my-2">
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary my-2" type="submit">
          LogIn
        </button>
      </form>
      <span>Or</span>
      <Link to="/signeUp">
        <button type="button" class="btn btn-dark mx-3">
          SigneUp
        </button>
      </Link>
    </div>
  )
}

export default Login
