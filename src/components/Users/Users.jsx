// import React from 'react'
import { useParams } from "react-router-dom"

const Users = () => {
    const {userid}=useParams()
  return (
    <div className="text-center p-4 text-3xl bg-slate-400 font-bold">
      User:{userid}
    </div>
  )
}

export default Users
