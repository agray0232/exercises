import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div><Link to={"/"}>Home</Link ></div >
                <div><Link to={"/feed"}>Feed</Link ></div >
                <div><Link to={"/faq"}>FAQ</Link ></div >
            </div>
        )
    }
}

export default Header;