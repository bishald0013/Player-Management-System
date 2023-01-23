import React, {useEffect, useState} from 'react'
import DisplayManager from "./DisplayManager"
import { useAllManagerQuery } from '../../service/adminApi'

function AllManagers() {


  const [allManager, setAllManager] = useState({
    managers: []
  })

  const {data, isSuccess} = useAllManagerQuery()

  useEffect(() => {
    if(data && isSuccess){
      setAllManager({
        managers: data.msg
      })
    }
  }, [data, isSuccess])

  const {managers} = allManager
  console.log(managers);


  return (
    <div className='container'>
       <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Manager Name</th>
            <th scope="col">Manager Email</th>
          </tr>
        </thead>
      </table>
      {
        managers.map((m) => {
          return ( <DisplayManager m={m} key={m._id} /> )
        })
      }
    </div>
  )
}

export default AllManagers