/* ==========================================================
 * Exercise 4 - phần ES6
 * ======================================================== */

/* ---------- Dữ liệu của đề ---------- */
const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 },
];

const array = [1, 2, 3, 4];

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: 'Costas',
  address: {
    street: 'Lalaland 12',
  },
};

/* ---------- Nhóm 1: mảng people ---------- */
const isTeenager = (p) => p.age >= 10 && p.age <= 20;

// find(): người đầu tiên là teenager
const firstTeenager = people.find(isTeenager);
// filter(): tất cả người là teenager
const allTeenagers = people.filter(isTeenager);
// every(): tất cả đều là teenager hay không
const everyTeenager = people.every(isTeenager);
// some(): có ai là teenager hay không
const someTeenager = people.some(isTeenager);

/* ---------- Nhóm 2: mảng array = [1, 2, 3, 4] ---------- */
// reduce() với arrow function, giá trị khởi tạo là tham số thứ hai
const sumArray = array.reduce((acc, cur) => acc + cur, 0);
const productArray = array.reduce((acc, cur) => acc * cur, 1);

/* ---------- Nhóm 3: companies, ages, person ---------- */
// forEach(): in tên từng công ty
companies.forEach((company) => console.log(company.name));
const companyNames = companies.map((company) => company.name);

// filter(): in tên công ty bắt đầu sau năm 1987
const startedAfter1987 = companies.filter((company) => company.start > 1987);
startedAfter1987.forEach((company) => console.log(company.name));

// filter() + map(): công ty Retail, tăng start thêm 1
const retailCompanies = companies
  .filter((company) => company.category === 'Retail')
  .map((company) => ({ ...company, start: company.start + 1 }));

// sort(): sắp xếp công ty theo năm kết thúc tăng dần
const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);

// sort(): sắp xếp tuổi giảm dần
const sortedAges = [...ages].sort((a, b) => b - a);

// reduce(): in tổng tất cả số tuổi
const sumAges = ages.reduce((acc, cur) => acc + cur, 0);
console.log(sumAges);

// Object destructuring: tạo object mới từ companies[0] kèm method print
const { name: firstName, category: firstCategory } = companies[0];
const firstCompany = {
  name: firstName,
  category: firstCategory,
  print() {
    console.log(this.name);
  },
};
firstCompany.print();

// Rest parameter: cộng số lượng tham số không biết trước
const sumAll = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

// Rest parameter: gom mọi tham số vào một mảng, tham số là mảng thì trải ra
const collectToArray = (...args) =>
  args.reduce(
    (acc, cur) => (Array.isArray(cur) ? [...acc, ...cur] : [...acc, cur]),
    []
  );

// Destructuring lồng nhau: lấy street từ person
const {
  address: { street },
} = person;

// Closure: mỗi lần gọi trả về số tăng dần bắt đầu từ 0
const createCounter = () => {
  let count = 0;
  return () => count++;
};

// Tách query string của URL thành object key - value
const getQueryParams = (url) => {
  const queryString = url.split('?')[1] || '';
  return queryString
    .split('&')
    .filter((pair) => pair !== '')
    .reduce((result, pair) => {
      const [key, value] = pair.split('=');
      return { ...result, [key]: decodeURIComponent(value) };
    }, {});
};

/* ---------- Promise ---------- */
// Trả về số ngẫu nhiên lớn hơn 5, ngược lại báo lỗi "Error"
const getRandomNumber = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 10) + 1;
      if (number > 5) {
        resolve(number);
      } else {
        reject(new Error('Error'));
      }
    }, 1000);
  });

/* ---------- Gom kết quả để hiển thị ra màn hình ---------- */
const counter = createCounter();

const results = [
  ['Teenager đầu tiên (find)', firstTeenager.name],
  ['Tất cả teenager (filter)', allTeenagers.map((p) => p.name).join(', ')],
  ['Tất cả đều là teenager? (every)', String(everyTeenager)],
  ['Có ai là teenager? (some)', String(someTeenager)],
  ['Tổng [1,2,3,4] (reduce)', sumArray],
  ['Tích [1,2,3,4] (reduce)', productArray],
  ['Tên các công ty (forEach)', companyNames.join(', ')],
  [
    'Công ty bắt đầu sau 1987 (filter)',
    startedAfter1987.map((c) => c.name).join(', '),
  ],
  [
    'Sắp xếp theo năm kết thúc tăng dần (sort)',
    sortedByEnd.map((c) => `${c.name} (${c.end})`).join(', '),
  ],
  ['Tuổi giảm dần (sort)', sortedAges.join(', ')],
  ['Tổng số tuổi (reduce)', sumAges],
  [
    'Object từ companies[0] (destructuring)',
    `${firstCompany.name} - ${firstCompany.category}, print() in ra: ${firstCompany.name}`,
  ],
  ['sumAll(1, 2, 3, 4, 5) (rest)', sumAll(1, 2, 3, 4, 5)],
  [
    "collectToArray(1, 'a', [2, 3], true)",
    JSON.stringify(collectToArray(1, 'a', [2, 3], true)),
  ],
  ['street của person (destructuring)', street],
  ['counter() 3 lần liên tiếp', `${counter()}, ${counter()}, ${counter()}`],
  [
    "getQueryParams('http://abc.com?name=Quang&age=21')",
    JSON.stringify(getQueryParams('http://abc.com?name=Quang&age=21')),
  ],
];

export { companies, retailCompanies, getRandomNumber, results };
