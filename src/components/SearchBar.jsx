/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <>
            <form className="flex justify-end w-full space-x-5" onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} type="text" placeholder='Search Items...' className='px-2 py-1 w-1/6 rounded-md' />
                <button className="px-2 py-1 rounded-md border-[1px] bg-purple-200 border-purple-200 shadow-lg hover:scale-105 transition-all hover:bg-purple-300">Search</button>
            </form>
        </>
    )
}

export default SearchBar