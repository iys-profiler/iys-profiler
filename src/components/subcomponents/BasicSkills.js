import Button from 'react-bootstrap/Button';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Expertisepopover from '../popovers/Expertisepopover';
import MyPopover from '../popovers/MyPopover';
import DetailSkillPopup from '../popovers/DetailSkillPopup';





function BasicSkills(props) {
 
    const handleButtonClick = () => {
        console.log("added skiil",props.skill)

      }
    
    return (
        <>
            <OverlayTrigger trigger={['hover',"focus"]} placement="auto" overlay={DetailSkillPopup(props.skill)} rootClose={true}>
                <Button variant="light" onClick={handleButtonClick}>{props.skill.name}</Button>
            </OverlayTrigger>
        </>
    );
}

export default BasicSkills;







