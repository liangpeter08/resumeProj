import * as React from 'react';
import css from './header.css';
import menu from '../../assets/menu.svg';
import HeaderMenu from '../../components/headerMenu/headerMenu';
import logo from '../../assets/logo2.png';
import {Link} from 'react-router-dom';

interface HeaderProps {

};

interface HeaderState {
    expand: boolean;
};

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            expand: false
        }
    }

    handleMenuClick(expand) {
        this.setState({expand});
    }

    render() {
        return (
            <div className={css.header}>
                <div className={css.headerLeft}>
                    <img className={[css.headerSvg, css.logoSvg].join(' ')} src={logo}/>
                    <Link to="/" className={[css.headerTitle, css.hide].join(' ')}>Software Engineer</Link>
                </div>
                <Link to="/" className={css.nameTitle}>
                    Peter Liang
                </Link>
                <div className={css.navLinks}>
                    <Link to="/resume" className={css.navTitle}>Resume</Link>
                    <Link to="/contact" className={css.navTitle}>Contact</Link>
                    {!this.state.expand ? <div className={css.headerSvg} dangerouslySetInnerHTML={{__html: menu}}
                        onClick={this.handleMenuClick.bind(this, true)}>
                    </div> : <div className={css.headerSvg}></div>}
                    {!this.state.expand && <div className={css.headerMenu}/>}
                </div>
                {this.state.expand ? <HeaderMenu onClose={this.handleMenuClick.bind(this, false)} /> : ''}
            </div>

        );
    }
};


export default Header;