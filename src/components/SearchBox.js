import React from 'react';

const SearchBox=({searchChange}) =>{
    return(
        <div className='tc pa2' >
        <input className='tc pa3 ba b--green bg-light-pink'  
        type='search' 
        placeholder='search chads'
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox