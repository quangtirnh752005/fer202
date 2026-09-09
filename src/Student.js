import Person from './Person';

class Student extends Person {
    constructor(name, age, scores) {
        super(name, age);
        this.scores = scores;
    }
    avgScore() {
        return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
    }
    studentInformation() {
        return `${super.introduce()}, điểm trung bình: ${this.avgScore()}`;
    }
    updScores(newScores) {
        this.scores = [...this.scores, ...newScores];
    }
    scoresData() {
        return this.scores.map((d) => d);
    }
    passScores() {
        return this.scores.filter((d) => d >= 5);
    }
    // Yêu cầu 7: dùng Promise mô phỏng việc đánh giá học lực bất đồng bộ
    evaluate() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.avgScore() >= 8 ? 'Excellent Student' : 'Need Improvement');
            }, 1000);
        });
    }
}

export default Student;