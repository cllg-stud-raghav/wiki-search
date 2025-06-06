import { useState } from "react";

function SearchBar({onSearch}) {
    const [searchTerm,setSearchTerm]=useState(' ');
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSearch(searchTerm);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             name="searchTerm"
             value={searchTerm}
             placeholder="e.g. Carryminati"
             id="search-bar"
             onChange={(e)=>{setSearchTerm(e.target.value)}}
             />
        </form>
    )
}
export default SearchBar;