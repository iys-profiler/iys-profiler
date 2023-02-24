import Button from 'react-bootstrap/Button';
import Skills from './Skills';

function SkillsList(props) {
    return (
        <>
        <div className='mt-3'>
        {props.searchSkillList.map(category => (
                        // <span>{categories._key}</span>
                        // console.log(category)""
                        <Skills key={category._key} name={category.skill.name} />
                    ))}
          {/* {console.log("this iosakj",props.searchSkillList)} */}
          </div>
        </>
    );
}

export default SkillsList;