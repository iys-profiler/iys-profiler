import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import PopularCat from '../PopularCat';
import SearchBar from '../SearchBar'
import SearchAddedTree from '../subcomponents/SearchAddedTree';
import Card from 'react-bootstrap/Card';
function SkillCatApi() {

    return (
        <>
            <Container>
            <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title>Objective</Card.Title>
                        <Card.Text>
                            With the skills search API, applications can allow for users to search, be shown skills based on the term they type.And based on the skill they select, show the skills that are in the same category
                        </Card.Text>
                        <Card.Link href="http://18.235.0.193/docs" target="_blank">Docs link</Card.Link>
                    </Card.Body>
                </Card>
                <SearchBar />
                <SearchAddedTree />
            </Container>
        </>
    );
}

export default SkillCatApi;



