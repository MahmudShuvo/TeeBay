# Teebay 

A full-stack e-commerce application with crud(create,read,update,delete) operations, buy/rent/sell/lent functionalities for user dashboard. Login secured, rent and buy options are optimized.

Frontend (technologies): React Js, React router, TypeScript, Tailwind CSS, Flowbite(library), Apollo Client, GraphQL
Backend(technologies): Postgresql, Express JS, Prisma, GraphQL, Apollo server

Part 1:
Login and signup page designed using flowbite, tailwind css and react js. The login functionality is secured by validating user input on the client side, storing authentication tokens and user data securely in local storage. Also, redirecting authenticated users away from the login page. Login form uses React Hook Form for registering email and password fields. Password type was implemented as well.\\

Part 2:
Add product: Users can click "Add Product" from their dashboard which opens a modal with a multi-step form. User can select multiple categories for a product. Upon completing all steps and submitting the form, the product is added via a GraphQL mutation.

Edit Product: 


Pre-requisite: Intstall Node.JS latest version, Postgresql, PgAdmin4(I used to see the database)

DATABASE_URL="postgresql://postgres:MHshuvo@localhost:5432/test?schema=public"
