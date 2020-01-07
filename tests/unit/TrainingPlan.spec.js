import LocalStorageMock from "./mocks/localStrageMock";
import TrainingPlan from "../../src/Training/TrainingPlan";

global.localStorage = new LocalStorageMock();

describe("TrainingPlan", () => {
    const plan = new TrainingPlan();

    it("Adds training to training plan", () => {
        plan.addToPlan({
            name: "Training A"
        });
        plan.addToPlan({
            name: "Training B"
        });

        const saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["trainings"][0]["name"]).toBe("Training A");
        expect(saved["trainings"][1]["name"]).toBe("Training B");

        global.localStorage.clear();
    });

    it("Saves training to saved trainings list", () => {
        plan.addToPlan({
            name: "Training A"
        });

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));
        expect(saved["trainings"][0]["name"]).toBe("Training A");

        plan.removeFromPlan("Training A");

        saved = JSON.parse(global.localStorage.getItem("fit-app"));
        expect(saved["trainings"]).toStrictEqual([]);

        global.localStorage.clear();
    });

    it("Saves training to saved training list", () => {
        plan.saveTraining({
            name: "Training A",
            exersises: [{ name: "exersise 1", sets: [{ reps: 5 }] }]
        });

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["saved"][0]["name"]).toBe("Training A");
        expect(saved["saved"][0]["exersises"][0]["sets"][0]["reps"]).toBe(5);

        global.localStorage.clear();
    });

    it("Clears all saved trainings", () => {
        plan.saveTraining({
            name: "Training A",
            exersises: [{ name: "exersise 1", sets: [{ reps: 5 }] }]
        });
        plan.saveTraining({
            name: "Training B",
            exersises: [{ name: "exersise 2", sets: [{ reps: 5 }] }]
        });

        plan.clearSaved();

        let saved = JSON.parse(global.localStorage.getItem("fit-app"));

        expect(saved["saved"]).toStrictEqual([]);

        global.localStorage.clear();
    });

    it("Returns default training if no trainings are saved", () => {
        plan.addToPlan({
            name: "Training A",
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

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training A",
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
        plan.addToPlan({
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
        plan.addToPlan({
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
        });

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
        plan.addToPlan({
            name: "Training A"
        });
        plan.addToPlan({
            name: "Training B"
        });

        plan.saveTraining({
            name: "Training A"
        });
        plan.saveTraining({
            name: "Training B"
        });

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training A"
        });

        plan.saveTraining({
            name: "Training A"
        });

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training B"
        });

        plan.saveTraining({
            name: "Training B"
        });

        expect(plan.nextTraining()).toStrictEqual({
            name: "Training A"
        });
    });
});
