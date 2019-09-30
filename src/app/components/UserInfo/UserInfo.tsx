import * as React from 'react';
import { observer, inject } from 'mobx-react';
import UserStore from 'app/stores/UserStore';
import styled from 'styled-components';

const UserInfoWrapper = styled.div`
	display: flex;
	flex-direction: horizontal;
`;

export interface IUserInfoProps {
	store?: UserStore;
}

@inject((stores: any) => {
	return {
		store: stores.appStore.userStore
	}
})
@observer
export default class UserInfo extends React.Component<IUserInfoProps> {
	constructor(props) {
		super(props);
	}
	loginUser = () => {
		this.props.store.logInUser();
	};
	logoutUser = () => {
		this.props.store.logout();
	};
	public render() {
		return (
			<UserInfoWrapper>
				{this.props.store.isUserLoggedIn ?
					<React.Fragment>
						<div>{this.props.store.loggedInUser.userName}</div>
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