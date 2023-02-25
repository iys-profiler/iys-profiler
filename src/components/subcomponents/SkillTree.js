import Button from 'react-bootstrap/Button';
import Skills from './Skills';

function SkillTree(props) {
    return (
        <>
        <div className='mt-3'>
        {props.files_by_name.map(category => (
                        // <span>{categories._key}</span>
                        // console.log(category)""
                        <Skills key={category._key} name={category.skill.name}  setSearchValue={props.setSearchValue} />
                    ))}
          {/* {console.log("this iosakj",props.searchSkillList)} */}
          </div>
        </>
    );
}

export default SkillTree;