import * as React from 'react';
import AppStore from 'app/stores/AppStore';
import { useEffect } from 'react';
import StoreProvider from 'app/stores/StoreProvider';

interface ILandingPageProps {
  appStore?: AppStore
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = () => {
  useEffect(() => {
    StoreProvider.stores.appStore.setPageTitle("Landing page")
  }, []);
  
  return (
    <React.Fragment>
      <div>Hello, this is the landing page</div>
    </React.Fragment>
  );
};

export default LandingPage;
