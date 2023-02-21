import Card from 'react-bootstrap/Card';
import Skills from './Skills';

function PopularCat() {
    return (
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Popular Categories </Card.Title>
                <hr />
                <Skills name="My Component" />
                <Skills name="My ds" />
                <Skills name="My Component" />
                <Skills name="My Component" />
                <Skills name="My Component" />
                <Skills name="My Component" />
            </Card.Body>
        </Card>
    );
}

export default PopularCat;



