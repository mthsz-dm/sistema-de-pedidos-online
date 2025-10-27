# sistema-de-pedidos-online
This project is a web system to create and manage online orders, develop with React e node.js.

# Assumed premises
* Cart and Products
    * Each product has a unique id
    * The minimum quantity per product in the cart is 1, and the max is 10
    * There is no real stock management
* Checkout
    * The checkout is simuleted, the application don't have a real payment system
* FrontEnd
    * It's a simple layout focusing on the main functionality
    * Basic responsive design
* BackEnd
    * Simple RESTful API with routes to list products, manipulate the cart, and simulate checkout
* Data
    * Initial data is loaded using seed.js
    * Product images are static 

# Design decisions
* Technologies
    * FrontEnd: React
    * BackEnd: Node,js
    * DataBase: SQLite
* Frontend Structure
    * Separation into components, navbar, footer, for better organization and reusability
    * Simple and responsive layout, prioritizing clarity and user experience
    * Use of hooks useState and useEffect to manage state and API calls
* Backend Structure
    * RESTful API with clear routes GET /cart, POST /cart, PUT /cart/:id, DELETE /cart/:id
    * Controllers separated cartController.js to isolate business logic from routing
    * Use of Prisma to abstract SQLite queries and ensure data integrity
* Cart
    * Each cart item is linked to a existing product to avoid inconsistency
    * deleteAllItems endpoint to simulate checkout and clear the cart
* Checkout
    * Simulated: the user only selects the payment method, with no real payment processing
    * After confirmation, all cart items are removed from the database and frontend state
* Best Practices
    * Use of async/await and error handling in the backend try/catch
    * User feedback via SweetAlert2 for actions like add, remove, or confirm purchase
    * Clear separation between frontend and backend with well-defined endpoints

# How to use the program
## Frontend
1. Open the terminal
2. cd frontend
3. npm install
4. npm run dev
5. The front is running

## Data Base (must be executed the before backend)
1. Open the terminal
2. cd backend
3. cd prisma
4. npx prisma generate
5. npx prisma studio

## Backend
1. Open the terminal
2. cd backend
3. npm install
4. cd src
5. node index.js (must be executed the code after this action "npx prisma generate")

# Usage
1. Open the frontend in browser
2. Browse products and click "Adicionar para carrinho" to continue buying or if you want to go straight to the cart you click "Comprar agora"
3. Go to cart page you can adjust quantities, remove items or remove all items
4. Click "Confirmar Compra" to simulate checkout
5. Click "Método Pagamento" then select form of payment then click "Confirmar"
6. Cart will be cleared and a success message displayed

# References
## Use of AI
During the development of this project, ChatGPT was used as a support tool for learning and guidance
* Understanding and using SQLite
* Clarifying React and Node.js concepts and practices that were unclear or forgotten
* Assisting with code structuring and best practices
Prompts used included questions about React state management, Node.js APIs, SQLite operations, and general coding practices
Examples used: "Como criar e popular uma tabela no SQLite com prisma", "Qual a melhor forma de usar o sqlite com node.js", "Qual a melhor maneira de ultilizar rotas para conectar o backend com o frontend"

## WebSites
* [SweetAlert](https://sweetalert2.github.io)
* [W3school](https://www.w3schools.com)
* [React-Icons](https://react-icons.github.io/react-icons)
