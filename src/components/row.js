import React, {useState} from 'react';


function Square(props) {

    const trueletter = props.letter;
    const [guess, setGuess] = useState('');
    const [color, setColor] = useState('Tomato');

    const handleInputChange = (event) => {
      setGuess(event.target.value);
    };

    // Set background colour & reveal the letter
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
          if (guess.trim().toLowerCase() === trueletter.toLowerCase()) {
            setColor('green');
          } else {
            setColor('red');
          }
        }
      };

    return(
        <input
            className='square'
            style={{ textAlign: 'center', backgroundColor: color }}
            value={guess}
            onChange={handleInputChange}    
            onKeyUp={handleKeyUp}
        />
    );
}


function Row(props) {

    return (
        <div>
            <div className='container'>
                {Object.entries(props.wordData).map(([key, value]) => (
                    <Square letter={value} />
                ))}
            </div>
        </div>
    );
}

export default Row;