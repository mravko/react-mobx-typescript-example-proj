import * as React from 'react';
import { useEffect } from 'react';
import apstore from 'app/stores/AppStore';


interface ILandingPageProps {
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = () => {
  useEffect(() => {
    apstore.setPageTitle("Landing page")
  }, []);
  
  return (
    <React.Fragment>
      <div>Hello, this is the landing page</div>
    </React.Fragment>
  );
};

export default LandingPage;
