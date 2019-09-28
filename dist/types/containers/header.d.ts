import * as React from 'react';
interface HeaderProps {
}
interface HeaderState {
    expand: boolean;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    handleMenuClick(expand: any): void;
    render(): JSX.Element;
}
export default Header;
