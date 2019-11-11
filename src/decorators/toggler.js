import React, {Component as ReactComponent} from 'react'

export default (Parent) => class Toggler extends ReactComponent{
    constructor(...args) {
        super(...args);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => this.setState((state) => ({isOpen: !state.isOpen}));
    label = () => this.state.isOpen ? 'hide' : 'show';
    render() {
        return <Parent {...this.props} {...this.state} toggle={this.toggle} label={this.label}/>
    }
}
