import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HalamanDua = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator] = useState([
        { name: '+' },
        { name: '-' },
        { name: '*' },
        { name: '/' },
    ]);
    const [temp, setTemp] = useState(operator[0].name);
    const [hasil, setHasil] = useState(num1 + num2);

    useEffect(() => {
        setNum1(Number(num1));
        setNum2(Number(num2));
        let res = 0;
        if (temp == '+') {
            res = num1 + num2;
            return setHasil(res);
        }
        if (temp == '-') {
            res = num1 - num2;
            return setHasil(res);
        }
        if (temp == '*') {
            res = num1 * num2;
            return setHasil(res);
        }
        if (temp == '/') {
            res = num1 / num2;
            return setHasil(res);
        }
    }, [num1, num2, temp]);

    return (
        <div className="container">
            <h1>Calculator</h1>
            <Link to="/">Pindah ke halaman utama</Link>
            <br />
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
            />
            <select
                value={temp}
                onChange={e => {
                    setTemp(e.target.value);
                }}
            >
                {operator.map((e, i) => {
                    return (
                        <option key={i} value={e.name}>
                            {e.name}
                        </option>
                    );
                })}
            </select>
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
            />
            =
            <input type="number" value={hasil} disabled />
        </div>
    );
};

export default HalamanDua;
