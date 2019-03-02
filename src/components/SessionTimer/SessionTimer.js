import React, { Component } from 'react';
const ms = require('pretty-ms');

class SessionTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({ time: 0 })
    }
    
    render() {
        const {
            cardListLength
        } = this.props

        if (cardListLength === 10) {
            if (this.state.isOn) { this.stopTimer() }
        }

        return (
            <div>
                <h3>{ms(this.state.time)}</h3>
            </div>
        );
    }
}

export default SessionTimer;