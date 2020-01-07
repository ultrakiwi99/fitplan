import LocalStorageMock from "./mocks/localStrageMock";
import TrainingPlan from "../../src/Training/TrainingPlan";

global.localStorage = new LocalStorageMock();

const trainingA = {
    name: "Training A",
    order: 0,
    exersises: [
        {
            name: "exersise 1",
            maxReps: 5,
            weight: 10,
            weightProgression: 1.25,
            sets: [{ reps: 0 }]
        }
    ]
};
const trainingB = {
    name: "Training B",
    order: 1,
    exersises: [
        {
            name: "exersise 1",
            maxReps: 5,
            weight: 10,
            weightProgression: 1.25,
            sets: [{ reps: 0 }]
        }
    ]
};

describe("TrainingPlan", () => {
    const plan = new TrainingPlan();

    it("Adds training to training plan", () => {
        plan.addToPlan(trainingA);
        plan.addToPlan(trainingB);

        const saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["trainings"][0]["name"]).toBe("Training A");
        expect(saved["trainings"][1]["name"]).toBe("Training B");

        global.localStorage.clear();
    });

    it("Saves training to saved trainings list", () => {
        plan.addToPlan(trainingA);

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));
        expect(saved["trainings"][0]["name"]).toBe("Training A");

        plan.removeFromPlan("Training A");

        saved = JSON.parse(global.localStorage.getItem("fit-app"));
        expect(saved["trainings"]).toStrictEqual([]);

        global.localStorage.clear();
    });

    it("Saves training to saved training list", () => {
        const withReps = JSON.parse(JSON.stringify(trainingA));
        withReps.exersises[0].sets[0].reps = 5;
        plan.saveTraining(withReps);

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["saved"][0]["name"]).toBe("Training A");
        expect(saved["saved"][0]["exersises"][0]["sets"][0]["reps"]).toBe(5);

        global.localStorage.clear();
    });

    it("Clears all saved trainings", () => {
        plan.saveTraining(trainingA);
        plan.saveTraining(trainingB);

        plan.clearSaved();

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["saved"]).toStrictEqual([]);

        global.localStorage.clear();
    });

    it("Returns default training if no trainings are saved", () => {
        plan.addToPlan(trainingA);

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training A",
            order: 0,
            exersises: [
                {
                    name: "exersise 1",
                    maxReps: 5,
                    weight: 10,
                    weightProgression: 1.25,
                    sets: [{ reps: 0 }]
                }
            ]
        });
        global.localStorage.clear();
    });

    it("Returns first training by order, if no saved training exist", () => {
        plan.addToPlan(trainingA);
        plan.addToPlan(trainingB);

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training A",
            order: 0,
            exersises: [
                {
                    name: "exersise 1",
                    maxReps: 5,
                    weight: 10,
                    weightProgression: 1.25,
                    sets: [{ reps: 0 }]
                }
            ]
        });

        global.localStorage.clear();
    });

    it("Returns trainig next by order training with ajusted weight", () => {
        plan.addToPlan(trainingA);
        plan.addToPlan(trainingB);

        plan.saveTraining(trainingA);
        plan.saveTraining(trainingB);

        const enoughRepsA = plan.nextTraining();
        expect(enoughRepsA.name).toBe("Training A");
        enoughRepsA.exersises[0].sets[0].reps = 5;
        plan.saveTraining(enoughRepsA);

        const enoughRepsB = plan.nextTraining();
        expect(enoughRepsB.name).toBe("Training B");
        enoughRepsB.exersises[0].sets[0].reps = 5;
        plan.saveTraining(enoughRepsB);

        const notEnoughRepsA = plan.nextTraining();
        expect(notEnoughRepsA.name).toBe("Training A");
        expect(notEnoughRepsA.exersises[0].weight).toBe(11.25);
        expect(notEnoughRepsA.exersises[0].sets[0].reps).toBe(0);
        notEnoughRepsA.exersises[0].sets[0].reps = 3;
        plan.saveTraining(notEnoughRepsA);

        const notEnoughRepsB = plan.nextTraining();
        expect(notEnoughRepsB.name).toBe("Training B");
        expect(notEnoughRepsB.exersises[0].weight).toBe(11.25);
        expect(notEnoughRepsB.exersises[0].sets[0].reps).toBe(0);
        notEnoughRepsB.exersises[0].sets[0].reps = 3;
        plan.saveTraining(notEnoughRepsB);

        const nextA = plan.nextTraining();
        expect(nextA.name).toBe("Training A");
        plan.saveTraining(nextA);

        const nextB = plan.nextTraining();
        expect(nextB.name).toBe("Training B");
    });
});
