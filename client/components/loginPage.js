import React from "react";
import { Link } from "react-router-dom";

class UserLogin extends React.PureComponent {

    render() {
        return <div id="loginPage">                   
                <img src="/dist/images/signin2.jpg"  alt=""/>
          
                <form>  
                <div className="username">             
                <input  type="text" placeholder="Enter username"/>
                </div>    
                <div className="password">
                <input type="password" placeholder="Enter password"/>
                </div>         
                <input type="submit" value="LOGIN" /><br /> 
                <div className="register">
                    <span>Do you want to register? </span>
                    <Link to="/register">Create an Account</Link>
                </div>           
                </form>
                </div>
                }
            }
                    
export default UserLogin;
                    
                    
                    /*import React from "react";
import {Link} from "react-router-dom";
                        
class UserLogin extends React.PureComponent {

                            render() {
                        return <div id="loginPage">
                            <div className="loginContainer">
                                <div className="mainLogin">
                                    <form className="form-signin">
                                        <img src="/dist/images/signIn2.jpg" alt="" style={{ width: "80px" }} className="mb-4" />
                                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input type="email" id="email" placeholder="Email address" className="form-control first" />
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input type="password" id="password" placeholder="Password" className="form-control last" />
                                        <p ><a href="#">Forget password ?</a></p>
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">Log In</button>
                                        <br />
                                        <div className="end">
                                            <span>Do you want to register? </span>
                                            <Link to="/register">Create an Account</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        }
                    
                    }
                    
                    export default UserLogin;
                    
                    
                    import React from "react";
                    import PostRegister from "../services/postRegister";
                    import PostLogin from "../services/postLogin";
                    import PostContinue from "../services/postContinue";
                    
import {Redirect} from 'react-router';
                        
class UserLogin extends React.Component {
                            state = { class: true, page: 1, id: "", message: "" }

    phone = React.createRef();
                        email = React.createRef();
                        password1 = React.createRef();
                        password2 = React.createRef();
                        username = React.createRef();
                    
                    
    reset = () => {
                            this.username.current.value = "";
                        this.password1.current.value = "";
                        this.password2.current.value = "";
                    }
                
    register = async (obj) => {
        try {
            const user = await PostRegister(obj);
                        console.log(user);
            if (user.username === "") {
                            this.reset();
                        }
            else {
                            console.log(user._id);
                        this.setState({page: 2, id: user._id });
                    }
                }
        catch (error) {
                            console.log(error);
                        }
                    }
                
    register2 = async (obj) => {
        try {
            const user = await PostContinue(obj);
                        console.log(user);
            this.setState({message: user.message })
                    }
        catch (error) {
                            console.log(error);
                        }
                    }
                
    auth = async (obj) => {
        try {
            const user = await PostLogin(obj);
                        console.log(user);
                    }
        catch (error) {
                            console.log(error);
                        }
                    }
                
                
                
    handleRegister = (event) => {
                            event.preventDefault();
                        const username = this.username.current.value;
                        const password1 = this.password1.current.value;
        if (password1 === this.password2.current.value && password1 !== "" && username.length > 0) {
            const obj = {username, password: password1 }
                        this.register(obj);
                    }
        else {this.reset(); }
                    }
                
    handleRegister2 = (event) => {
                            event.preventDefault();
                        const phone = this.phone.current.value;
        if (phone.length > 0) {
            const obj = {phone, email: this.email.current.value, _id: this.state.id };
                        this.register2(obj);
        } else {
                            this.email.current.value = "";
                        }
                    }
                
    handleLogin = (event) => {
                            event.preventDefault();
                        const phone = this.phone.current.value;
                        const password1 = this.password1.current.value;
        if (password1 !== "" && phone.length > 0) {
            const obj = {phone: phone.slice(0), password: password1.slice(0) }
                        this.auth(obj);
                    }
        else {
                            this.phone.current.value = "";
                        this.password1.current.value = "";
                    }
                }
            
    render() {
                            console.log(this.state.id);
                        if (this.state.message === "user registered") {
            const path = `/user/${this.state.id}`;
            return (<Redirect to={path} />);
                    }
            
        return <div id="loginPage">
                            <div className="headerLogin ">
                                <img className="image" src="/dist/images/logotip.jpg" alt="logotip" />
                            </div>
                            <div className="mainLogin">
                                {this.state.class ?
                                    <div id="loginBox">
                                        <section className="login activ"><h1>LOGIN</h1></section>
                                        <section className="register passiv" onClick={() => this.setState({ class: false })}><h1>REGISTER</h1></section>
                                        <section className="main">
                                            <input type="text" ref={this.phone} placeholder="enter phone number" />
                                            <input type="password" ref={this.password1} placeholder="password" />
                                            <input type="submit" onClick={this.handleLogin} value="Login" />
                                        </section>
                                    </div> :
                                    <div id="loginBox">
                                        <section className="login passiv" onClick={() => this.setState({ class: true })}><h1>LOGIN</h1></section>
                                        <section className="register activ"><h1>REGISTER</h1></section>

                                        {this.state.page === 1 &&
                                            <section className="main">
                                                <h3>Enter the your username</h3>
                                                <input type="text" ref={this.username} required />
                                                <h3>Create a new password</h3>
                                                <input type="password" ref={this.password1} required />
                                                <h3>Repeat new password</h3>
                                                <input type="password" ref={this.password2} required />
                                                <input type="submit" onClick={this.handleRegister} value="Continue" />
                                            </section>
                                        }
                                        {this.state.page === 2 &&
                                            <section className="main">
                                                <h3>Enter phone number</h3>
                                                <input type="text" ref={this.phone} required />
                                                <h3>Enter your email</h3>
                                                <input type="email" ref={this.email} />
                                                <input type="submit" onClick={this.handleRegister2} value="Register" />
                                            </section>
                                        }

                                    </div>
                                }

                            </div>
                        </div>
                        }
                    
                    }
                    
                    export default UserLogin;
*/