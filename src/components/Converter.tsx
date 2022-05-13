import React, { useState } from 'react';

export default function Converter() {
    const [binaryNumber, setBinaryNumber] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [decimalRep, setDecimalRep] = useState(0);

    const calculateDecimalRepresentation = (numbers: number[]): number => {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === 1) sum += Math.pow(2, numbers.length - (i + 1));
        }

        return sum;
    }

    const toggleBinaryNumber = (index: number) => {
        let modifiedArray = [...binaryNumber];
        modifiedArray[index] = modifiedArray[index] === 0 ? 1 : 0;
        setBinaryNumber(modifiedArray);
        setDecimalRep(calculateDecimalRepresentation(modifiedArray))
    }

    const resetBinaryNumber = () => {
        setBinaryNumber(new Array(10).fill(0));
        setDecimalRep(0);
    }

    return (
        <>
            <div>
                {binaryNumber.map((number, index) => (
                    <button key={index} value={number} onClick={() => toggleBinaryNumber(index)}>
                        {number}
                    </button>
                ))}
                <div className='App'>
                    <p>{decimalRep}</p>
                    <button onClick={resetBinaryNumber}>Reset</button>
                </div>
            </div>
        </>
    )
}