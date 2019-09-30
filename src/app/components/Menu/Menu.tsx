import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

interface IMenuProps {
}

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: horizontal;
`;

const MenuItemWrapper = styled.div`
	width: 200px;
`;

const Menu: React.FunctionComponent<IMenuProps> = () => {
	return <MenuWrapper>
		<MenuItemWrapper>
			<Link to="/">Home</Link>
		</MenuItemWrapper>
		<MenuItemWrapper>
			<Link to="/master">MasterDetail</Link>
		</MenuItemWrapper>
		<MenuItemWrapper>
			<Link to="/master2">MasterDetail 2</Link>
		</MenuItemWrapper>
		<UserInfo></UserInfo>
	</MenuWrapper>;
};

export default Menu;