import Button from 'react-bootstrap/Button';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Expertisepopover from './popovers/Expertisepopover';
import MyPopover from './popovers/MyPopover';
import DetailSkillPopup from './popovers/DetailSkillPopup';







function Skills(props) {
    const handleButtonClick = () => {
        // props.setSearchValue(props.name)
      }
    
    return (
        <>
            <OverlayTrigger trigger={['hover',"focus"]} placement="auto" overlay={DetailSkillPopup(props)} rootClose={true}>
                <Button variant="light" onClick={handleButtonClick}>{props.name}</Button>
            </OverlayTrigger>
        </>
    );
}

export default Skills;







