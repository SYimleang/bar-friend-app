import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import "./SearchBar.css";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setfilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setwordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if(searchWord === ""){
      setfilteredData([]);
      setwordEntered("");
    } else{
      setfilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setfilteredData([]);
    setwordEntered("");
  }

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className='searchIcon'>
            {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon onClick={clearInput}/>}
            </div>
        </div>
        {filteredData.length != 0 && (
          <div className='dataResult'>
            
            {filteredData.slice(0, 5).map((value, key) => {
              // Change href to drinks page
              return (
                <a className="dataItem" href={'/'} target="_blank">  
                  <p>{value.name}</p>
                </a>
              );
            })}
          </div>
        )}
    </div>
  )
}

export default SearchBar