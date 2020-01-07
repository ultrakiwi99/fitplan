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
        const saved = this.getPlan();
        const trainLen = saved.trainings.length;
        const savedLen = saved.saved.length;
        if (savedLen === 0) {
            return saved.trainings.shift();
        }
        if (savedLen > trainLen) {
            return saved.saved[savedLen - trainLen];
        } else if (savedLen === trainLen) {
            return saved.trainings.shift();
        } else {
            return saved.trainings[trainLen - savedLen];
        }
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
