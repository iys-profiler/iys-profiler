import Button from 'react-bootstrap/Button';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Expertisepopover from './popovers/Expertisepopover';
import MyPopover from './popovers/MyPopover';
import Popup from './popovers/Popup';







function Skills(props) {
    return (
        <>
            <OverlayTrigger trigger={['click']} placement="auto" overlay={Expertisepopover} rootClose={true}>
                <Button variant="light">Click me to see</Button>
            </OverlayTrigger>
        </>
    );
}

export default Skills;







