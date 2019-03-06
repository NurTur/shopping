import React from "react";

class UserLogin extends React.Component {
    state = { logState: "login", firstName: "", lastName: "", email: "", phone: "", password: "" }

    handleClick = () => {
        this.setState({ logState: "logup" });
    }
    onFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }
    onLastName = (event) => {
        this.setState({ lastName: event.target.value });
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

    render() {
        const { firstName, lastName, email, phone, password } = this.state;
        console.log("nur");
        return <div id="loginPage">
            <div className="loginContainer">
                <div className="mainLogin">
                    {this.state.logState === "login" ?
                        (<form className="form-signin">
                            <img src="/dist/images/signIn.jpg" alt="" style={{ width: "80px" }} className="mb-4" />
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
                                <a href="#" onClick={this.handleClick}>Create an Account</a>
                            </div>
                        </form>) :
                        (<form className="form-signup">
                            <img src="/dist/images/register2.jpg" alt="" className="mb-4" />
                            <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" placeholder="First Name" className="form-control"
                                        onChange={this.onFirstName} value={firstName} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" placeholder="Last Name" className="form-control"
                                        onChange={this.onLastName} value={lastName} required />
                                </div></div>
                            <div className="row">
                                <div className="col-md mb-3">
                                    <input type="text" placeholder="Email address" className="form-control"
                                        onChange={this.onEmail} value={email} required />
                                </div></div>
                            <div className="row">
                                <div className="col-md mb-3">
                                    <input type="text" placeholder="Phone number" className="form-control"
                                        onChange={this.onPhone} value={phone} required />
                                </div></div>
                            <div className="row"><div className="col-md mb-3">
                                <input type="text" placeholder="New password" className="form-control"
                                    onChange={this.onPassword} value={password} required />
                            </div></div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Sign Up</button>
                            <br />
                            <div className="end">
                                <span>You do not want to register? </span>
                                <a href="#">Sign Up</a>
                            </div>
                        </form>)}
                </div>
            </div>
        </div>
    }

}

export default UserLogin;
