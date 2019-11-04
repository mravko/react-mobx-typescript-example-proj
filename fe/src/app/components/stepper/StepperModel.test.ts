import { StepperModel } from "./StepperModel";
import { StepModel } from "./StepModel";

describe("stepper model tests", () => {
  let stepperModel: StepperModel;

  beforeEach(() => {
    let stepArray: StepModel[] = [];
    let step1 = new StepModel();
    step1.title = "Step 1";
    let step2 = new StepModel();
    step2.title = "Step 2";
    let step3 = new StepModel();
    step3.title = "Step 3";
    stepArray.push(step1);
    stepArray.push(step2);
    stepArray.push(step3);

    stepperModel = new StepperModel(stepArray);
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
