import Button from 'react-bootstrap/Button';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Expertisepopover from '../popovers/Expertisepopover';
import MyPopover from '../popovers/MyPopover';
import DetailSkillPopup from '../popovers/DetailSkillPopup';

import GlobalContext from '../../GlobalState';
import React, { useContext } from 'react';





function Skills(props) {
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
    const handleButtonClick = () => {
        console.log("added skiil", props.skill)
        console.log("added skiil", props.skillDetail.skill.name)
        setGlobalVariable(props.skillDetail)
    }

    return (
        <>
            <OverlayTrigger trigger={['hover', "focus"]} placement="auto" overlay={DetailSkillPopup(props.skillDetail.skill)} rootClose={true}>
                <Button variant="light" onClick={handleButtonClick}>{props.skillDetail.skill.name}</Button>
            </OverlayTrigger>
        </>
    );
}

export default Skills;







