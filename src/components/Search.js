import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {
  const [keyword, setKeyword] = useState('');

  function handleKeywordInput(event) {
    setKeyword(event.target.value);
    console.log(event.target.value);
    props.handleSearch(event.target.value);
  }
  return (
    <>
      <h1>Search</h1>
      <Input
        style={{
          width: '400px',
        }}
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      ></Input>
    </>
  );
}

export default Search;
