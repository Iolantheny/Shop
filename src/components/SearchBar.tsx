import React, { useState } from 'react';
import { navigate } from "gatsby"
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {

    const [name, setName] = useState("")

    const InputChange = e => {
        setName(e.target.value);
    }

    const Submit = e => {
        e.preventDefault()

        navigate('/search', { state: { name } })
    }
    return (
        <form className="searchbar">
            <input
                type="text"
                aria-label="Search"
                placeholder="szukaj"
                className="searchbar__input"
                onChange={InputChange}
            />
            <button
                className='searchbar__button'
                onClick={Submit}
            >
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar