const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];

function calculateGrade(students) {
    const result = [];
    
    for (const student of students) {
        let sum = 0;
        
      
        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i];
        }
        
        const average = sum / student.scores.length;
     
        let grade;
        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        
        result.push({
            name: student.name,
            scores: student.scores,
            average: average.toFixed(2),
            grade: grade
        });
    }
    
    return result;
}

console.log(calculateGrade(students));
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];

const filters = { maxPrice: 20000, category: "электроника" };

const filterProducts = (products, filters) => {
    const result = [];

    if (!filters) {
        return products;
    }
    
    for (const product of products) {
        let matches = true;

        if (filters.maxPrice && product.price > filters.maxPrice) {
            matches = false;
        }

        if (filters.category && product.category !== filters.category) {
            matches = false;
        }
        
        if (matches) {
            result.push(product);
        }
    }
    
    return result;
};

console.log(filterProducts(products, filters));
