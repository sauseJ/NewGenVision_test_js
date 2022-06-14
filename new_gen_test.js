let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Основная функция для фильтрации цен
function filter_by_price(courses, requiredRange) {
    // Заменяем null для последующего числового сравнения для фильтра (вариантов цен) 
    replace_nulls(requiredRange);

    // Переменная, в которой хранятся объекта, прошедшие фильтрацию
    let requiredCourses = courses.filter(course => {
        // Заменяем null для последующего числового сравнения для самих цен и потом проверяем - находится ли они в небходимом диапазоне
        replace_nulls(course.prices);
        if (course.prices[0] >= requiredRange[0] && course.prices[1] <= requiredRange[1]) {
            return course;
        };
    });

    // Возвращаем названия курсов, которые подходят по запросу
    return requiredCourses.map(course => course.name);
}

// Функиця, заменяющая null на 0 или Infinity, в зависимости от положения в необходимом диапазоне
function replace_nulls(range) {
    if (range[0] === null) {
        range[0] = 0;
    };
    if (range[1] === null) {
        range[1] = Infinity;
    };
};


console.log(filter_by_price(courses, requiredRange3));