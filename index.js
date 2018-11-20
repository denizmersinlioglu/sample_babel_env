import Teacher from './teacher';
import Person from './person';

const person = new Person('Deniz');
const teacher = new Teacher('Teacher');
teacher.degree = 4;
console.log(teacher.degree);
const runner = {
  name: 'Runner',
  run() {
    console.log(this);
  },
  swim() {
    setTimeout(() => {
      console.log('this :', this);
    }, 1000);
  }
};

person.walk();

const walk = person.walk.bind(person);
console.log(walk);

const square = number => number * number;
console.log(square(5));

const jobs = [
  { id: 0, isActive: true },
  { id: 1, isActive: true },
  { id: 2, isActive: false }
];

const others = [
  { id: 3, isActive: true },
  { id: 4, isActive: true },
  { id: 5, isActive: false }
];

jobs.filter(c => c.id === 2).forEach(c => console.log(c));
person.talk();
jobs.map(c => c.id).forEach(c => console.log(c));
const [first, second] = jobs;
console.log(first, second);
const { isActive: ac } = first;
console.log(ac);

const combined = [...jobs, 'a', ...others];
console.log('combined :', combined);
const clonedJobs = [...jobs];
console.log('clonedJobs :', clonedJobs);

const centaur = { ...person, ...runner, location: 'Australia' };
console.log('centaur :', centaur);

const centaurCopy = { ...centaur };
console.log('centaurCopy :', centaurCopy);
