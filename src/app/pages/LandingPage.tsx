import * as React from 'react';
import { inject } from 'mobx-react';
import AppStore from 'app/stores/AppStore';
import { useEffect } from 'react';

interface ILandingPageProps {
  appStore?: AppStore
}

const LandingPage: React.FunctionComponent<ILandingPageProps> = inject("appStore")((props) => {
  useEffect(() => {
    props.appStore.setPageTitle("Landing page")
  }, []);
  
  return (
    <React.Fragment>
      <div>Hello, this is the landing page</div>
    </React.Fragment>
  );
});

export default LandingPage;
