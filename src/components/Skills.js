import Button from 'react-bootstrap/Button';

function Skills(props) {
    return (
        <>
            <Button variant="light">{props.name}</Button>{' '}
        </>
    );
}

export default Skills;