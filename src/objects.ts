// Type
type Order ={
	productId: string
	price: number
}
type User = {
	firstName: string
	age: number
	email: string
	password?: string
	orders: Order[]
	register(): string
};

const user:  User = {
	firstName: "Jane",
	age: 20,
	email: 'jane@doe.com',
	orders: [{productId: 'Arroz', price: 15.90}],
	register() {
		return '1';
	}
}

const user2:  User = {
	firstName: "Paulo",
	age: 20,
	email: 'paulo@doe.com',
	password: '12345',
	orders: [{productId: 'Arroz', price: 15.90}],
	register() {
		return '2';
	}
}


const printLog = (message: string) => {}

printLog(user.password!)

// Unions 
type Author = {
	books: string[]
}

const author: Author & User = {
	age: 22,
	books: ['1'],
	email: 'author@doe.com',
	firstName: "Author",
	orders: [],
	register() {
		return 'Logado'
	}
}

// Interface

interface UserInterface {
	readonly firstName: string
	email: string
	login(): string
}

const emailUser: UserInterface = {
	email: 'felipe@doe.com',
	firstName: "Felipe",
	login() {
		return "logado"
	}
}

interface AuthorInterface {
	books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
	email: 'adovaldo@doe.com',
	firstName: "Adovaldo",
	books: [],
	login() {
		return "logado"
	}
}

// interface Grade = number | string  -------> é possivel somente com Type e não com Interface
type Grade = number | string

const grade: Grade = 1;