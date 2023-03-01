import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import SkillsList from './SkillsList';
import { searchSkills } from './api/ApiCalls';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [searchSkillList, setSearchSkillList] = useState([]);

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
        // console.log('User typed:', );
        // if (event.target.value) {

        //     searchSkills(event.target.value)
        //         .then(response => {
        //             // console.log(response.data)
        //             console.log(response.data)
        //             setSearchSkillList(response.data);
        //         })
        //         .catch(error => console.error(error));
        //     // Call any other functions or update any state here based on the user input
        // }
        // setSearchSkillList([])
    }

    useEffect(() => {
        // Call the API here using the searchValue variable

        const fetchData = async () => {
            try {
                if (searchValue) {
                    const response = await searchSkills(searchValue);
              setSearchSkillList(response.data);
                }
              
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
      }, [searchValue]);

    return (
        <>
            <Form.Group className="mt-3" controlId="skillSearchFrom.ControlInput1">
                <Form.Label>Search Skills</Form.Label>
                <Form.Control size="lg" type="search" autoFocus placeholder="Search Skills" value={searchValue}
                    onChange={handleSearchInputChange} />
            </Form.Group>
            <Card className='mt-3'>
                <Card.Body>
                    <Card.Title >Search Result  </Card.Title>
                    <Badge bg="light" text='dark'>
                        {searchSkillList.length}
                    </Badge>< span className="text-muted" >Skills Found</span>
                    <hr></hr>
                    <SkillsList searchSkillList={searchSkillList}  setSearchValue={setSearchValue} />

                </Card.Body>
            </Card>

        </>
    );
}

export default SearchBar;


