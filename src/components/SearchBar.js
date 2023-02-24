import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import SkillsList from './SkillsList';
function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
        console.log('User typed:', event.target.value);
        // Call any other functions or update any state here based on the user input
    }

    return (
        <>
            <Form.Group className="mt-3" controlId="skillSearchFrom.ControlInput1">
                <Form.Label>Search Skills</Form.Label>
                <Form.Control size="lg" type="search" autoFocus placeholder="Search Skills" value={searchValue}
                    onChange={handleSearchInputChange} />
            </Form.Group>
        </>
    );
}

export default SearchBar;


