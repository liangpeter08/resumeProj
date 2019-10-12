import * as React from 'react';
import css from './header.css';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import HeaderMenu from '../../components/headerMenu/headerMenu';

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
                    <div className={[css.headerSvg, css.hide].join(' ')} dangerouslySetInnerHTML={{__html: logo}} />
                    <div className={css.headerTitle}>Software Engineer</div>
                </div>
                <div className={css.headerTitle}>
                    <div>Peter Liang</div>
                </div>
                <div className={css.navLinks}>
                    <div className={css.navTitle}>Resume</div>
                    <div className={css.navTitle}>Contact</div>
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