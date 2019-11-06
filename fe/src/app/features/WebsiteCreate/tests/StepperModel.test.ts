import { WebSiteStepperModel } from "../models/WebSiteStepperModel";
import { BaseStepModel } from "../models/BaseStepModel";
import { WebSitesListModel } from "app/features/WebsiteList/models/WebSitesListModel";

describe("stepper model tests", () => {
  let stepperModel: WebSiteStepperModel;

  beforeEach(() => {
    stepperModel = new WebSiteStepperModel(new WebSitesListModel());

    let step1 = new BaseStepModel(stepperModel);
    step1.title = "Step 1";
    let step2 = new BaseStepModel(stepperModel);
    step2.title = "Step 2";
    let step3 = new BaseStepModel(stepperModel);
    step3.title = "Step 3";

    stepperModel
      .addStep(step1)
      .addStep(step2)
      .addStep(step3);
  });

  it("creates new stepper model", () => {
    expect(stepperModel.currentStepIndex).toBe(0);
    expect(stepperModel.stepsArray.length).toBe(3);
  });

  it("changes step index", () => {
    stepperModel.nextStep();
    expect(stepperModel.currentStepIndex).toBe(1);
  });

  it("changes prev index", () => {
    stepperModel.nextStep();
    stepperModel.prevStep();
    expect(stepperModel.currentStepIndex).toBe(0);
  });

  it("wont change prev index if already 0", () => {
    stepperModel.prevStep();
    expect(stepperModel.currentStepIndex).toBe(0);
  });

  it("wont change next index if already max", () => {
    stepperModel.nextStep();
    stepperModel.nextStep();
    expect(stepperModel.currentStepIndex).toBe(2);

    stepperModel.nextStep();
    expect(stepperModel.currentStepIndex).toBe(2);
    stepperModel.nextStep();
    expect(stepperModel.currentStepIndex).toBe(2);
  });

  it("model.title for current step is correct", () => {
    stepperModel.nextStep();
    expect(stepperModel.currentStepModel.title).toBe("Step 2");
  });
});
