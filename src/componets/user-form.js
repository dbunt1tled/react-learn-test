import React, {Component} from 'react';

class UserForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        }
    }
    render() {
        const {article, isOpen} = this.props;
        return(
            <div>
                <label htmlFor="username">
                    User Name:
                    <input id="username" value={this.state.userName} onChange={this.onChangeUserName}/>
                </label>
            </div>
        );
    }

    onChangeUserName = (event) => {
        this.setState({userName: event.target.value});
    }
}

export default UserForm
