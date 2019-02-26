import React from "react";


class HomePage extends React.Component {

    render() {
        return (<div id="homePage">
            <div className="headerHome">
                <header id="headerOfPage">
                    <img className="image" src="/dist/images/logotip.jpg" alt="logotip" />
                    <div className="link"><a href="#">Login</a></div>
                </header>
            </div>
            <section className="filters">
                <div id="dataOfField">
                    <h2>Filters :</h2>
                    <div className="condition">
                        <label htmlFor="dropdown">By Category :</label>
                        <select id="dropdown" name="dropdown" >
                            <option value="1">ddd</option>
                            <option value="2">ddd</option>
                        </select>
                    </div>




                </div>
            </section>
            <div className="mainHome"></div>
            <div className="footerHome"></div>
        </div>);
    }
}


export default HomePage;

