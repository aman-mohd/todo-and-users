import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';

const ViewUsers = ({ users }) => {
  return (
    <div className="users_page">
      {users.map((user) => {
        return (
          <div className="users_card" key={user.id}>
            <div className="single_card">
              <div className="img_div">
                <img className="img" src={user.avatar} alt="photo NA" />
              </div>
              <h4>{user.first_name} {user.last_name}</h4>
              <p><AiOutlineMail/>: {user.email}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ViewUsers
