For backend: <br/>
Must have Node.JS (latest version preferable), PostgreSQL installed and running, Prisma CLI installed globally.<br/>
1. Clone the repository. <br/>
2. cd teebay-backend => yarn install <br/>
3. set up env variable: DATABASE_URL="postgresql://postgres:MHshuvo@localhost:5432/test?schema=public"<br/>
4.Set up prisma => "npx prisma generate", "npx prisma migrate dev --name init" <br/>
5. Run the server using "yarn run dev" command. This will start the server at `http://localhost:4000`.<br/>

You can access the GraphQL Playground to interact with your API at `http://localhost:4000/graphql`.<br/>

For frontend: <br/>
1. clone the repository. <br/>
2. cd teebay-frontend. <br/>
3. Intsll yarn. Run the command "yarn run dev". It will start the server at `http://localhost:5173/`.

