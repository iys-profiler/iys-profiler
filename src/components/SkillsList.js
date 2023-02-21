import Button from 'react-bootstrap/Button';
import Skills from './Skills';

function SkillsList() {
    return (
        <>
        <div className='mt-3'>
          <Skills  name="My Component" />
          <Skills  name="My ds" />
          <Skills   name="My Component"/>
          </div>
        </>
    );
}

export default SkillsList;