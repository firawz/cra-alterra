import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../Components/Input';
import Selection from '../Components/Selection';
import Label from '../Components/Label';
import { emotionOptions, reactions } from '../Utils';

const Form = () => {
    const [emotion, setEmotion] = useState(emotionOptions[0].value);
    const handleChange = e => {
        if (e.target) {
            setEmotion(e.target.value);
        }
    };
    return (
        <form>
            <Label labelID="emotion" content="Select emotions" />
            <Selection
                selectionID="emotion"
                options={emotionOptions}
                value={emotion}
                onSelectionChange={handleChange}
            />
            <Label labelID="reaction" content="Reaction" />
            <Input
                // key={emotion}
                inputID="reaction"
                defaultValue={reactions[emotion]}
            />
        </form>
    );
};

function App() {
    const history = useHistory();
    const [isShow, setShow] = useState(true);
    // const [buttonName, setButtonName] = useState("Hide");
    const handleButtonClick = () => {
        setShow(!isShow);
        // sama dengan bawah
        // setShow((prev) => !prev);
        // setButtonName(isShow ? "Show" : "Hide");
        // setButtonName((prev) => (prev === "Show" ? "Hide" : "Show"));
    };
    const handleChangeRoute = () => {
        history.push('/page-two');
    };
    return (
        <div className="container pt-2">
            {isShow && <Form />}
            <button
                onClick={handleButtonClick}
                className="btn btn-primary mt-4 mb-4"
            >
                {isShow ? 'Hide' : 'Show'}
            </button>
            <div>
                <Link to="/page-two">Pindah ke halaman dua</Link>
                <button className="btn btn-primary" onClick={handleChangeRoute}>
                    Pindah halaman dua
                </button>
            </div>
        </div>
    );
}

export default App;
