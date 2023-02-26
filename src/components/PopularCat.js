import Card from 'react-bootstrap/Card';
import { getPopularCategories } from './api/ApiCalls';

import React, { useState, useEffect } from 'react'
import BasicSkills from './subcomponents/BasicSkills';

// return the list and iterate it through the card title
function PopularCat() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getPopularCategories()
            .then(response => {
                console.log(response.data)
                setCategories(response.data);
            })
            .catch(error => console.error(error));
    }, []);


    return (
        <>


            <Card className='mt-3'>
                <Card.Body>
                    <Card.Title >Popular Categories </Card.Title>
                    <hr></hr>
                    {categories.map(category => (
                        // <span>{categories._key}</span>
                        <BasicSkills key={category._key} skill={category} />
                    ))}
                    <hr />

                </Card.Body>
            </Card>
        </>
    );
}

export default PopularCat;



