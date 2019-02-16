import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

import './IdeaCardList.scss';

const IdeaCardList = (props) => {
    const {
        ideaList,
        isInSession
    } = props
    
    return (    
        <div className="idea-card-list">
            {
                isInSession ? 
                    ideaList.length ?
                        ideaList.map((idea, index) =>
                            <IdeaCard idea={idea} key={index} />
                        ) :
                        <div className="idea-empty-card">
                            <p>You have no ideas right now</p>
                        </div>
                : null 
            }          
        </div>
    );
}

export default IdeaCardList;
