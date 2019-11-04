import * as React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import appStore from "app/stores/AppStore";

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: horizontal;
`;

export interface IUserInfoProps {}

@observer
export default class UserInfo extends React.Component<IUserInfoProps> {
  constructor(props) {
    super(props);
  }
  loginUser = () => {
    appStore.userStore.logInUser();
  };
  logoutUser = () => {
    appStore.userStore.logout();
  };
  public render() {
    return (
      <UserInfoWrapper>
        {appStore.userStore.isUserLoggedIn ? (
          <React.Fragment>
            <div>{appStore.userStore.loggedInUser.userName}</div>
            <button onClick={this.logoutUser}>Log out</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>not authenticated</div>
            <button onClick={this.loginUser}>Log In</button>
          </React.Fragment>
        )}
      </UserInfoWrapper>
    );
  }
}
