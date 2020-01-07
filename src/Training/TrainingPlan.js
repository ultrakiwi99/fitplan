/* eslint-disable no-undef */
export default class TrainingPlan {
    storageName = "fit-app";

    addToPlan(training) {
        const saved = this.getPlan();
        saved.trainings.push(training);
        this.savePlan(saved);
    }

    removeFromPlan(trainingName) {
        const saved = this.getPlan();
        saved.trainings = saved.trainings.filter(
            training => training.name !== trainingName
        );
        this.savePlan(saved);
    }

    saveTraining(training) {
        const saved = this.getPlan();
        saved.saved.push(training);
        this.savePlan(saved);
    }

    nextTraining() {
        let next;
        const saved = this.getPlan();
        const trainLen = saved.trainings.length;
        const savedLen = saved.saved.length;
        const clone = obj => JSON.parse(JSON.stringify(obj));
        switch (true) {
            case savedLen === 0 || savedLen === trainLen:
                next = clone(saved.trainings.shift());
                break;
            case savedLen > trainLen:
                next = clone(saved.saved[savedLen - trainLen]);
                break;
            default:
                next = clone(saved.trainings[trainLen - savedLen]);
        }
        next.exersises = next.exersises.map(exersise => {
            if (exersise.sets.every(set => set.reps === exersise.maxReps)) {
                exersise.weight = exersise.weight + exersise.weightProgression;
            }
            exersise.sets = exersise.sets.map(() => ({ reps: 0 }));
            return exersise;
        });
        return next;
    }
    clearSaved() {
        const saved = this.getPlan();
        saved.saved = [];
        this.savePlan(saved);
    }
    getPlan() {
        let plan = localStorage.getItem(this.storageName);
        if (!plan) {
            plan = {
                trainings: [],
                saved: []
            };
        } else {
            plan = JSON.parse(plan);
        }
        return plan;
    }
    savePlan(plan) {
        localStorage.setItem(this.storageName, JSON.stringify(plan));
    }
}
