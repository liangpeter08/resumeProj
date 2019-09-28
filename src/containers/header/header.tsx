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
                <div className={css.headerFields} dangerouslySetInnerHTML={{__html: logo}} />
                <div className={css.headerTitle}>Hollow Cave</div>
                {!this.state.expand ? <div className={css.headerMenu} dangerouslySetInnerHTML={{__html: menu}}
                    onClick={this.handleMenuClick.bind(this, true)}>
                </div> : <div className={css.headerMenu}/>}
                {this.state.expand ? <HeaderMenu onClose={this.handleMenuClick.bind(this, false)} /> : ''}
            </div>

        );
    }
};


export default Header;