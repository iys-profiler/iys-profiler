import Button from 'react-bootstrap/Button';
import Skills from './Skills';
import Card from 'react-bootstrap/Card';

import React, { useContext,useEffect } from 'react';
import GlobalContext from '../../GlobalState';
import SkillSubTree from './SkillSubTree';





function SearchAddedTree(props) {
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
    console.log("gobal vaibale", globalVariable)

    useEffect(() => {
        console.log('Global variable has changed:', globalVariable?.skill?.name);
        console.log('Global variable has changed:', globalVariable?.files);
        console.log('FILSE:', globalVariable?.file);
    }, [globalVariable]);


    const renderSkillSubTree = () => {
        if (globalVariable?.file) {
          return  <SkillSubTree key={globalVariable?.file._key} skill_files={globalVariable?.file} />
        } else {
          return null;
        }
      }

    return (
        <>
            <div className='mt-3'>
                <Card className='mt-3'>
                    <Card.Body>
                        <Card.Title >"{globalVariable?.skill?.name}" <span className="text-muted">
                            Selected Skills
                        </span></Card.Title>
                        {globalVariable?.files?.map(skill_files => (
                            <SkillSubTree key={skill_files._key} skill_files={skill_files} />
                        ))
                        }
                        {renderSkillSubTree()}

                       

                        <hr />
                        <p></p>

                    </Card.Body>
                </Card>
                
            </div>
        </>
    );
}

export default SearchAddedTree;