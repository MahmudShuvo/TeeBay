# Teebay 

A full-stack e-commerce application with crud(create,read,update,delete) operations, buy/rent/sell/lent functionalities for user dashboard. Login secured, rent and buy options are optimized.

Frontend (technologies): React Js, React router, TypeScript, Tailwind CSS, Flowbite(library), Apollo Client, GraphQL.

Backend(technologies): Postgresql, Express, Prisma, GraphQL API, Apollo server. 

Part 1:
Login and signup page designed using flowbite, tailwind css and react js. The login functionality is secured by validating user input on the client side, storing authentication tokens and user data securely in local storage. Also, redirecting authenticated users away from the login page. Login form uses React Hook Form for registering email and password fields. Password type was implemented as well. <br/>

Part 2:
Add product: Users can click "Add Product" from their dashboard which opens a modal with a multi-step form. User can select multiple categories for a product. Upon completing all steps and submitting the form, the product is added via a GraphQL mutation.<br/>

Edit Product: Used React Hook Form for form management and Apollo Client for GraphQL mutations to update product data, with category options fetched dynamically from the server. Edited products are updated for all users through database.  Modals skeleton generated from flowbite.<br/>

Delete Product: Deleting the product by calling the DeleteProduct mutation with the product ID and then updating the Apollo cache to remove the deleted product from the existing products list. unnecessary cache were cleared that way.<br/>

Part 3:

All product added by users: used Apollo useQuery hook to fetch the products from your backend. Flowbite cards being used.<br/>

Buy product: ConfirmBuy enhances user experience by providing a clear, interactive confirmation process for purchasing products while handling potential errors like a user can't buy or rent his own product. Also a user must have to login to buy/rent a product.<br/>

Rent product: The return date for rent was set to be at least a day more than the from date. The dates before the from date made unclickable. If a user change its from date more than once than made the return date null again. By that way it can handle errors.<br/>

User Dashboard: UserProductTab component uses Tabs from flowbite-react to create a tabbed interface. It displays tabs for "Bought," "Sold," "Borrowed," and "Lent," each linked to components. In addition there is a feature for each user that the person who will buy their product will be displayed. 




