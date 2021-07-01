import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';

function App() {
    const [token, setstate] = useState('aaa');
    // cek ada token gak? kalo ga ada ke login page

    return (
        <div>
            <StatefullComponent />
        </div>
    );
}

function StatefullComponent() {
    const reactions = {
        neutral: '.........',
        happy: 'Yeaaaay !!!',
        sad: 'I want to cry ',
        confused: 'What was that ???',
    };
    const [choice, setChoice] = useState(Object.entries(reactions));
    const [reaction, setReaction] = useState(choice[0][0]);
    const [hasil, setHasil] = useState('');

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                {reaction}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {choice.map((e, i) => {
                                    return (
                                        <Dropdown.Item
                                            key={i}
                                            onClick={() => {
                                                setHasil(e[1]);
                                                setReaction(e[0]);
                                            }}
                                        >
                                            {e[0]}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Row>hasil = {hasil}</Row>
                </Row>
            </Container>
        </div>
    );
}
export default App;
