import React from 'react';
import './Composer.scss';

const Composer = (props) => {
    const {
        inputHandler,
        enterPressed,
        inputValue,
        isSessionComplete
    } = props

    return (
        <div className="idea-muscle-composer">
            <input
                value={inputValue}
                placeholder="Enter your awesome idea here" 
                onChange={inputHandler}
                onKeyPress={enterPressed}
                disabled={isSessionComplete ? "disabled" : "" } 
            />
        </div>
    );
}

export default Composer;
