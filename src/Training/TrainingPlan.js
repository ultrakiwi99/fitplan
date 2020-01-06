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
        if (saved.saved.length === 0) {
            console.log(saved);
            if (saved.trainings.length > 1) {
                return saved.trainings
                    .sort((tr1, tr2) => tr1.order < tr2.order)
                    .pop();
            }
            return saved.trainings.pop();
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
