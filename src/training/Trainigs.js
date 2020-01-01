/* eslint-disable no-undef */
export default class Trainig {
    isInLocalStorage() {
        return !!localStorage.getItem("fit-app-trainings");
    }
    fromLocalStorage() {
        const trainings = JSON.parse(localStorage.getItem("fit-app-trainings"));
        const training = trainings.pop();
        training.exersises = training.exersises.map(exersise => {
            if (exersise.sets.every(set => set.reps === exersise.maxReps)) {
                exersise.weight =
                    parseFloat(exersise.weight) +
                    parseFloat(exersise.weightProg);
            }
            exersise.sets.forEach(set => (set.reps = 0));
            return exersise;
        });
        return training;
    }
    saveToLocalStorage(training) {
        const trainings = this.isInLocalStorage()
            ? this.fromLocalStorage()
            : [];
        trainings.push(training);
        localStorage.setItem("fit-app-trainings", JSON.stringify(trainings));
    }
}
