import React, { Component } from 'react';
import Composer from '../Composer/Composer';
import IdeaCardList from '../IdeaCardList/IdeaCardList';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            ideaList: []
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    inputHandler(event) {
        this.setState({inputValue: event.target.value})
    }

    handlerSubmit(event) {
        event.preventDefault();

        let newList = this.state.ideaList;
        newList.push(this.state.inputValue);

        this.setState({
            inputValue: '',
            ideaList: newList
        })
    }

    render () {
        return (
            <div className="idea-muscle-dashboard">
                <Composer
                    inputHandler={this.inputHandler}
                    handlerSubmit={this.handlerSubmit}
                    inputValue={this.state.inputValue}
                />
                <IdeaCardList 
                    ideaList={this.state.ideaList}
                />
            </div>
        )
    }
}

export default Dashboard
