import * as React from 'react';
import UserInfo from 'app/components/UserInfo';

interface ILandingPageProps {
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <React.Fragment>
      <UserInfo></UserInfo>
      <div>Hello, this is the landing page</div>
    </React.Fragment>
  );
};

export default LandingPage;
