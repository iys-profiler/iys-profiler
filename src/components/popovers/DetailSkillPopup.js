import Popover from 'react-bootstrap/Popover';
const DetailSkillPopup =(props)=> (
    <Popover id="popover-basic">
        <Popover.Header as="h3">{props.name}</Popover.Header>
        <Popover.Body>{props.description}</Popover.Body>
    </Popover>
);
export default DetailSkillPopup;
