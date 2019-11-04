import * as React from "react";
import { useEffect } from "react";
import apstore from "app/stores/AppStore";
import StepperComponent from "app/components/stepper/StepperComponent";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = () => {
  useEffect(() => {
    apstore.setPageTitle("Landing page");
  }, []);

  return (
    <div>
      Hello, this is the landing page
      <StepperComponent></StepperComponent>
    </div>
  );
};

export default LandingPage;
