import React from 'react'
import { useRegisterManagerMutation } from '../../service/managerAuth'

function SignUp() {

  const [registerManager] = useRegisterManagerMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const SigneUpData = new FormData(e.currentTarget)

    const formData = {
      email: SigneUpData.get('email'),
      password: SigneUpData.get('password'),
      name: SigneUpData.get('name'),
      sports: SigneUpData.get('sports')
    }

    const {email, password, name, sports} = formData

    if(email && password && name && sports){
      const res = await registerManager(formData)
      console.log(res)
    }else{
      console.log('all fields are required')
    }
    
    console.log(formData)

  }

  return (
    <div className='container w-25 mt-5'>
      <form id='SigneUp_form' onSubmit={handleSubmit} >
        <h1 class="h3 mb-3 fw-normal">Please SignUp</h1>
        <div class="form-floating my-2">
          <input
            type="name"
            id="name"
            name='name'
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Manager Name</label>
        </div>
        <div class="form-floating my-2">
          <input
            type="sports"
            id="sports"
            name='sports'
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Sports Name</label>
        </div>
        <div class="form-floating my-2">
          <input
            type="email"
            id="email"
            name='email'
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            id="password"
            name='password'
            class="form-control"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary my-2" type="submit">
          SigneUp
        </button>
      </form>
    </div>
  )
}

export default SignUp