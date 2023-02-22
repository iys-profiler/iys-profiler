import Form from 'react-bootstrap/Form';

function SearchBar() {
    return (
        <>
            <Form.Group className="mt-3" controlId="skillSearchFrom.ControlInput1">
                <Form.Label>Search Skills</Form.Label>
                <Form.Control size="lg" type="search" autoFocus placeholder="Search Skills" />
            </Form.Group>
        </>
    );
}

export default SearchBar;


