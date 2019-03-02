import React, { Component } from 'react';
import Composer from '../Composer/Composer';
import IdeaCardList from '../IdeaCardList/IdeaCardList';
import SessionTimer from '../SessionTimer/SessionTimer';

import './Dashboard.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isInSession: false,
            isSessionComplete: false,
            inputValue: '',
            ideaList: []
        }

        this.toggleIsInSession = this.toggleIsInSession.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.resetApp = this.resetApp.bind(this);
    }

    toggleIsInSession() {
        this.setState({
            isInSession: !this.state.isInSession
        })
    }

    resetApp(event) {
        event.preventDefault();

        this.setState({
            inputValue: '',
            ideaList: []
        })
    }    

    inputHandler(event) {
        this.setState({inputValue: event.target.value})
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if (code === 13) {            
            this.handlerSubmit(event)
        }
    }

    handlerSubmit(event) {
        event.preventDefault();

        // add validation to make sure we don't go past ten
        if (this.state.ideaList.length === 10) {
            this.setState({
                inputValue: '',
                isSessionComplete: true
            })
        } else {
            let newList = this.state.ideaList;
            newList.push(this.state.inputValue);
            
            this.setState({
                inputValue: '',
                ideaList: newList
            })
        }

    }

    render () {
        return (
            <div className="idea-muscle-dashboard">
                {/* <button onClick={this.resetApp}>refreash</button> */}
                {
                    this.state.isInSession ?
                        <SessionTimer
                            cardListLength={this.state.ideaList.length}
                        /> : null
                }
                {
                    this.state.isInSession ? 
                    <Composer
                        inputHandler={this.inputHandler}                        
                        inputValue={this.state.inputValue}
                        enterPressed={this.enterPressed}
                        isSessionComplete={this.state.isSessionComplete}
                    /> : 
                    <div className="idea-muscle-session-starter">
                        <p>Train your brian today!</p>
                        <button onClick={this.toggleIsInSession}>START SESSION</button>
                    </div>
                }
                <IdeaCardList 
                    ideaList={this.state.ideaList}
                    isInSession={this.state.isInSession}                    
                />
            </div>
        )
    }
}

export default Dashboard
