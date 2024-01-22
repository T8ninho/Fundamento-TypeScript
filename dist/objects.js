"use strict";
const user = {
    firstName: "Jane",
    age: 20,
    email: 'jane@doe.com',
    orders: [{ productId: 'Arroz', price: 15.90 }],
    register() {
        return '1';
    }
};
const user2 = {
    firstName: "Paulo",
    age: 20,
    email: 'paulo@doe.com',
    password: '12345',
    orders: [{ productId: 'Arroz', price: 15.90 }],
    register() {
        return '2';
    }
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 22,
    books: ['1'],
    email: 'author@doe.com',
    firstName: "Author",
    orders: [],
    register() {
        return 'Logado';
    }
};
const emailUser = {
    email: 'felipe@doe.com',
    firstName: "Felipe",
    login() {
        return "logado";
    }
};
const newAuthor = {
    email: 'adovaldo@doe.com',
    firstName: "Adovaldo",
    books: [],
    login() {
        return "logado";
    }
};
const grade = 1;
