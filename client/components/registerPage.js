import React from "react";
import PostRegister from "../services/postRegister";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CreateUser } from "../store/actions/user";




class UserRegister extends React.Component {
    state = { user: { username: "", _id: "X" }, username: "", email: "", phone: "", password: "" }

    onUserName = (event) => {
        this.setState({ username: event.target.value });
    }
    onEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    onPhone = (event) => {
        this.setState({ phone: event.target.value });
    }
    onPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, phone, password } = this.state;
        const obj = { username, email, phone, password };
        this.register(obj);
    }

    register = async (obj) => {
        try {
            const user = await PostRegister(obj);
            if (user._id === "X") {
                this.setState({ username: "", email: "", phone: "", password: "" })
            }
            else {
                this.props.CreateUser({ _id: user._id, username: obj.username, email: obj.email, phone: obj.phone });
                this.setState({ user });
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        const { user, username, email, phone, password } = this.state;
        if (user._id !== "X") {
            return <Redirect to={`/users/${user._id}`} />
        }
        else {
            return <div id="registerPage">
                <img src="/dist/images/register.jpg" alt="" />
                <form>
                    <div className="register"><input type="text" placeholder="username"
                        value={username} onChange={this.onUserName} required /></div>
                    <div className="register"><input type="email" placeholder="email"
                        value={email} onChange={this.onEmail} required /></div>
                    <div className="register"><input type="text" placeholder="phone"
                        value={phone} onChange={this.onPhone} required /></div>
                    <div className="register"><input type="password" placeholder="password"
                        value={password} onChange={this.onPassword} required /></div>
                    <input type="submit" value="REGISTER" onClick={this.handleSubmit} /><br />
                    <div className="login">
                        <span>You do not want to register? </span>
                        <Link to="/login">Sign Up</Link>
                    </div>
                </form>
            </div>
        }
    }
}

export default connect(state => ({ User: state.User }),
    dispatch => bindActionCreators({ CreateUser }, dispatch))(UserRegister);





