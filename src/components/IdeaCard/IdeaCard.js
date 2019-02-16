import React from 'react';
import './IdeaCard.scss';

const IdeaCard = ({idea}) => {
    return (
        <div className="idea-card">
            <p>{idea}</p>
        </div>
    )
}

export default IdeaCard;
