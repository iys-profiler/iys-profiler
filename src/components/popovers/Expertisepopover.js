import Popover from 'react-bootstrap/Popover';
import Rating from '../subcomponents/Rating';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const Expertisepopover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expertise <></>  <Rating /></Popover.Header>
        <Popover.Body>
            <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" autoFocus=""/>
                
                
            </InputGroup>
        </Popover.Body>
    </Popover>
);
export default Expertisepopover;
