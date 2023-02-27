import Button from 'react-bootstrap/Button';
import Skills from './Skills';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { treeSkills } from '../api/ApiCalls';
import { useState, useEffect } from 'react';


function SkillSubTree(props) {
    const skillFileId = props.skill_files._id
    console.log(props)
    const [skillTree, setSkillTree] = useState([]);
    useEffect(() => {
        // Call the API here using the searchValue variable

        const fetchData = async () => {
            try {
                if (skillFileId) {
                    console.log("timepas", skillFileId)

                    const response = await treeSkills(skillFileId);
                    console.log(response.data)
                    setSkillTree(response.data);
                }

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [skillFileId]);



    return (
        <Card className='mt-3'>
            <Card.Body>
                Siblings SKiils
                <hr />
                <Breadcrumb>
                    <Breadcrumb.Item active className='text-danger'>Ancestors</Breadcrumb.Item>
                    {skillTree?.ancestors?.map(skill_files => (
                        <Breadcrumb.Item active >{skill_files.file.name}</Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                {skillTree?.siblings?.map(skill_files => (
                        <Skills skillDetail={skill_files}></Skills>
                    ))}

            </Card.Body>
        </Card>);
}

export default SkillSubTree; 