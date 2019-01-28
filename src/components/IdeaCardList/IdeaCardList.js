import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

import './IdeaCardList.scss';

const IdeaCardList = (props) => {
    const {
        ideaList
    } = props
    
    return (    
        <div className="idea-card-list">
            {ideaList.length ? 
                ideaList.map((idea, index) =>
                    <IdeaCard idea={idea} key={index} />
                ) :
                "no cards" 
            }
        </div>
    );
}

export default IdeaCardList;
