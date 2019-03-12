import React from "react";
import { connect } from "react-redux";


class UserPage extends React.PureComponent {
    /*state = { user: null }

    componentDidMount() {
        this.findUser();
    }

    findUser = async () => {
        try {
            const user = await GetUser(this.props.match.params.id);
            this.setState({ user });
        }
        catch (error) {
            console.log(error);
        }
    }*/

    render() {
        return (<div id="userPage">
            <div id="adsEmptyBox">You currently have no active ads</div>
        </div>)
    }
}

export default connect(state => ({ User: state.User }))(UserPage);


