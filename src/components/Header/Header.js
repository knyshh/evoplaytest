import React from "react";
import { HeaderData } from "../../data/data";
import { Link, IndexLink } from 'react-router';
import "./Header.scss";

class Header extends React.Component{

    render(){

        return(

            <header className="header-nav">
                    {
                        HeaderData.map( (item, i) => {
                            return(
                                <div className="header-nav__item" key={i} >
                                    <Link to={ item.href } activeClassName="header-nav__href--active" className="header-nav__href">
                                        <i className={item.icon}></i>
                                    </Link>
                                </div>
                            )
                        })
                    }

            </header>

        )
    }
}

export default Header;