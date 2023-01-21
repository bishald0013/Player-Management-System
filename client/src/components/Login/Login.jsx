import React from 'react'

function Login() {

  const handleSubmit = (e) =>{
    e.preventDefault()

    const loginData = new FormData(e.currentTarget)

    const data = {
      email: loginData.get('email'),
      password: loginData.get('password')
    }

    console.log(data)

  }
  return (
    <div className='container w-25 mt-5'>
      <form id='login_form' onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal">Please LogIn</h1>

        <div class="form-floating my-2">
          <input
            type="email"
            name='email'
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            name='password'
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
    </div>
  )
}

export default Login
