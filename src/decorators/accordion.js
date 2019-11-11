import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent{
    constructor(...args) {
        super(...args);
        this.state = {
            openItemId: null,
        };
    }
    toggleOpenItem = (id) => this.setState(
        (state) => (
            {
                openItemId: state.openItemId === id ? null : id,
            }
        )
    );

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
    }
} 
