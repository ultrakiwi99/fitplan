import Trainings from "../../src/training/Trainigs";

// mock
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new LocalStorageMock();

describe("Trainings class", () => {
    // assign
    const trainings = new Trainings();

    it("checks if trainings exist in localStorage", () => {
        // assert
        expect(trainings.isInLocalStorage()).toBeFalsy();

        // assgin
        global.localStorage.setItem(
            "fit-app-trainings",
            JSON.stringify({
                name: "Test Training"
            })
        );

        // assert
        expect(trainings.isInLocalStorage()).toBeTruthy();

        global.localStorage.clear();
    });

    it("gets training from localStorage with progression", () => {
        // assign
        trainings.saveToLocalStorage({
            name: "Test Training",
            exersises: [
                {
                    name: "Squat",
                    maxReps: 5,
                    weight: 30,
                    weightProg: 1.25,
                    sets: [
                        {
                            reps: 5
                        },
                        {
                            reps: 5
                        }
                    ]
                },
                {
                    name: "Bench",
                    maxReps: 5,
                    weight: 20,
                    weightProg: 1.25,
                    sets: [
                        {
                            reps: 5
                        },
                        {
                            reps: 3
                        }
                    ]
                }
            ]
        });

        // assert
        const training = trainings.fromLocalStorage();
        expect(training.name).toBe("Test Training");
        expect(training.exersises[0]).toMatchObject({
            name: "Squat",
            maxReps: 5,
            weight: 31.25,
            weightProg: 1.25,
            sets: [
                {
                    reps: 0
                },
                {
                    reps: 0
                }
            ]
        });
        expect(training.exersises[1]).toMatchObject({
            name: "Bench",
            maxReps: 5,
            weight: 20,
            weightProg: 1.25,
            sets: [
                {
                    reps: 0
                },
                {
                    reps: 0
                }
            ]
        });
    });
});
