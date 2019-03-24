import React from "react";
import { Link } from "react-router-dom";
import PostLogin from "../services/postLogin";
import { Redirect } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CreateUser } from "../store/actions/user";


class UserLogin extends React.PureComponent {
    state = { username: "", password: "" }

    onUsername = (event) => this.setState({ username: event.target.value });
    onPassword = (event) => this.setState({ password: event.target.value });

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        this.auth({ username, password });
    }

    auth = async (obj) => {
        try {
            const user = await PostLogin(obj);
            if (user._id === "X") {
                this.setState({ username: "", password: "" })
            }
            else {
                this.props.CreateUser(user);
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    render() {
        if (this.props.User._id !== "") {
            return <Redirect to={"/zapas"}/*to={`/users/${user._id}`}*/ />
        }
        else {
            return <div id="loginPage">
                <img src="/dist/images/signin2.jpg" alt="" />
                <form>
                    <div className="username">
                        <input type="text" placeholder="Enter username" value={this.state.username} onChange={this.onUsername} />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.onPassword} />
                    </div>
                    <input type="submit" value="LOGIN" onClick={this.handleSubmit} /><br />
                    <div className="register">
                        <span>Do you want to register? </span>
                        <Link to="/register">Create an Account</Link>
                    </div>
                </form>
            </div>
        }
    }
}
export default connect(state => ({ User: state.User }),
    dispatch => bindActionCreators({ CreateUser }, dispatch))(UserLogin);

