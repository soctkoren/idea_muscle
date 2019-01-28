import React from 'react';
import './Composer.scss';

const Composer = (props) => {
    const {
        inputHandler,
        handlerSubmit,
        inputValue
    } = props
    return (
        <div className="idea-muscle-composer">
            <input
                value={inputValue}
                placeholder="Enter your awesome idea here" 
                onChange={inputHandler}
            />
            <div>
                <button onClick={handlerSubmit}>
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default Composer;
