import * as React from 'react';
import { observer, inject } from 'mobx-react';
import UserStore from 'app/stores/UserStore';


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
			<div>
				{this.props.store.isUserLoggedIn ?
					<div>
						<div>{this.props.store.loggedInUser.userName}</div>
						<button onClick={this.logoutUser}>Log out</button>
					</div> :
					<div>
						<div>not authenticated</div>
						<button onClick={this.loginUser}>Log In</button>
					</div>
				}
			</div>
		);
	}
}