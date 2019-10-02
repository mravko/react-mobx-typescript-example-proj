import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import StoreProvider from 'app/stores/StoreProvider';

const UserInfoWrapper = styled.div`
	display: flex;
	flex-direction: horizontal;
`;

export interface IUserInfoProps {
	
}

@observer
export default class UserInfo extends React.Component<IUserInfoProps> {
	constructor(props) {
		super(props);
	}
	loginUser = () => {
		StoreProvider.stores.appStore.userStore.logInUser();
	};
	logoutUser = () => {
		StoreProvider.stores.appStore.userStore.logout();
	};
	public render() {
		return (
			<UserInfoWrapper>
				{StoreProvider.stores.appStore.userStore.isUserLoggedIn ?
					<React.Fragment>
						<div>{StoreProvider.stores.appStore.userStore.loggedInUser.userName}</div>
						<button onClick={this.logoutUser}>Log out</button>
					</React.Fragment> :
					<React.Fragment>
						<div>not authenticated</div>
						<button onClick={this.loginUser}>Log In</button>
					</React.Fragment>
				}
			</UserInfoWrapper>
		);
	}
}