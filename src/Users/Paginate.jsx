import React from 'react'

const Paginate = ({ totalPages, goToPage, previousPage, nextPage }) => {

  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <>
      <div className="paginate">
        <button class="btn" onClick={previousPage}>Prev</button>
        {pageNumbers.map((page) => {
          return (
            <ul key={page}>
              <li onClick={() => { goToPage(page) }}>{page}</li>
            </ul>
          )
        })}
        <button class="btn" onClick={nextPage}>Next</button>
      </div>
    </>


  )
}

export default Paginate
