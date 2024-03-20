//import React from 'react'

const Search = ({filterValue ,handleFilter}) => {
  return (
    <div style={{ padding: "5px" }} className="text-black ">
        <p>search button</p>
    <input
    className='btn btn-primary'
      placeholder="search"
      value={filterValue}
      onInput={(e) => {
        handleFilter(e);
      }}
    />
  </div>
  )
}

export default Search;