import Button from 'react-bootstrap/Button';
import Skills from './Skills';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import React, { useContext } from 'react';
import GlobalContext from '../../GlobalState';
import SkillSubTree from './SkillSubTree';





function SearchAddedTree(props) {
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
    console.log("gobal vaibale",globalVariable)
    return (
        <>
            <div className='mt-3'>
                <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title >"{globalVariable?.skill?.name}" <span className="text-muted">
                            Selected Skills
                        </span></Card.Title>
                        {globalVariable?.files?.map(skill_files => (
                        // <span>{categories._key}</span>
                        <SkillSubTree key={skill_files._key} skill_files={skill_files} />
                        
                        // console.log("skill_files",skill_files)
                        // <BasicSkills key={category._key} skill={category} />
                    ))}
      
                        <hr />
                        <p></p>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default SearchAddedTree;