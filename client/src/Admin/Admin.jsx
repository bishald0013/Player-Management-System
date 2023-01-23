import React from 'react'
import {useNavigate} from "react-router-dom"
import AdminDeshbord from './AdminDeshbord'
import { useAdminLoginMutation } from '../service/adminApi'

function Admin() {

  const [adminLogin] = useAdminLoginMutation()

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const adminForm = {
      email: data.get('email'),
      password: data.get('password')
    }

    if(adminForm.email && adminForm.password){
        const res = await adminLogin(adminForm)
        console.log(res)
        
        if(res.data.status === 'success'){
          navigate('/adminDeshbord')
        }
    }

  }

  return (
    <div className='container w-25' style={{marginTop: "10rem"}}>
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
    </div>
  )
}

export default Admin