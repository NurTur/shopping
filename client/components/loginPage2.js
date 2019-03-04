import React from "react";
class UserLogin extends React.Component {


    render() {

        return <div id="loginPage">
            <div className="headerLogin ">
                <img className="image" src="/dist/images/logotip.jpg" alt="logotip" />
            </div>
            <div className="mainLogin">

                {/*<form class="form-signin">
                    <img src="/dist/images/signIn.jpg" alt="" style={{ width: "80px" }} class="mb-4" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="email" className="sr-only">Email address</label>
                    <input type="email" id="email" placeholder="Email address" className="form-control first" />
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" id="password" placeholder="Password" className="form-control last" />
                    <p ><a href="#">Forget password ?</a></p>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Log In</button>
                    <br />
                    <div className="end">
                        <span>Do you want to register? </span>
                        <a href="#">Create an Account</a>
                    </div>
    </form>*/}

                <form className="form-signup">
                    <img src="/dist/images/register2.jpg" alt="" className="mb-4" />
                    <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <input type="text" id="firstName" placeholder="First Name" class="form-control" />
                            <div class="invalid-feedback">Valid first name is required.</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <input type="text" id="lastName" placeholder="Last Name" value="" class="form-control" />
                            <div class="invalid-feedback">Valid last name is required.</div></div></div>
                    <div class="row">
                        <div class="col-md mb-3">
                            <input type="text" id="emailId" placeholder="Email address" value="" class="form-control" />
                            <div class="invalid-feedback">Valid first name is required.</div></div></div>
                    <div class="row"><div class="col-md mb-3">
                        <input type="text" id="act-password" placeholder="New password" value="" class="form-control" />
                        <div class="invalid-feedback">Valid first name is required.</div></div></div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block">Sign Up</button>
                    <br />
                    <div className="end">
                        <span>You do not want to register? </span>
                        <a href="#">Sign Up</a>
                    </div>
                </form>








            </div>
            <div className="footerLogin">
            </div>

        </div>
    }

}

export default UserLogin;
