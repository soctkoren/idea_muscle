import React from 'react';
import './Composer.scss';

const Composer = (props) => {
    const {
        inputHandler,
        handlerSubmit,
        enterPressed,
        inputValue
    } = props

    return (
        <div className="idea-muscle-composer">
            <input
                value={inputValue}
                placeholder="Enter your awesome idea here" 
                onChange={inputHandler}
                onKeyPress={enterPressed}
            />
            <div>
                {/* <button onClick={handlerSubmit}>
                    SUBMIT
                </button> */}
            </div>
        </div>
    );
}

export default Composer;
