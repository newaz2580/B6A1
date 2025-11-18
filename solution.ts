function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  } 
  else if (typeof value === "boolean") {
    return !value;
  }

  return value; 
}

formatValue("hello");



function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } 
  else if (Array.isArray(value)) {
    return value.length;
  }

  return 0; 
}

getLength("typescript");  




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails()); 

const person2 = new Person('Alice', 25);
// console.log(person2.getDetails()); 


type Book = {
  title: string;
  rating: number;
};

const books: Array<Book> = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

function filterByRating(books: Book[]): Book[] {
  const filteredRating = books.filter(book => book.rating >= 4);
  return filteredRating;
}

filterByRating(books);



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

filterActiveUsers(users);


interface BookDetails {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: BookDetails): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: BookDetails = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];

  function exists(value: number | string): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

getUniqueValues(array1, array2);


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, item) => {

    const discountAmount = item.discount ? (item.price * item.discount) / 100 : 0;
    
    const finalPrice = (item.price - discountAmount) * item.quantity;
   
    return total + finalPrice;
  }, 0);
}


const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);



