import {useState} from 'react';
// import {g}
import './SearchForm.css'

const SearchForm = (props) =>{
    //useState to change user text
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("searching")
        props.setSearchInput(searchTerm)
        
    }

    const handleInputChange = (e) =>{
        setSearchTerm(e.target.value)
    }

    return(
        <div className='AppSearchBox'>
            <form className='search-box-form' onSubmit={handleSubmit}>
                <input type="search" value={searchTerm} onChange={handleInputChange} placeholder='Search a movie...'></input>
                <button type ="submit">🔎</button>
            </form>
        </div>
    )
}

export default SearchForm;