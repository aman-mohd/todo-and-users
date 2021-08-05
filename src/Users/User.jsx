import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Paginate from './Paginate';
import ViewUsers from './ViewUsers';
import "./style.css"

const User = () => {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const url = `https://reqres.in/api/users?page=${page}`

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(url);
        const fetchedData = response.data;
        setUsers(fetchedData.data);
        setTotalPages(fetchedData.total_pages)
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [url]);

// function to dynamically change the page of url with buttons and page numbers

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const nextPage = () => {
    if (page >= 1 && page < totalPages) {
      setPage(page + 1)
    }
  } 

  const goToPage = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <div className="container">
      <h1 className="main_heading">User Data</h1>
      <ViewUsers 
        users={users}
      />

      <Paginate
       totalPages={totalPages}
       goToPage={goToPage}
       previousPage={previousPage}
       nextPage={nextPage}
      />

    </div>
  )
}

export default User
