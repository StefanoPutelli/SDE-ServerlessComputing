Are mandatory:
 - Cloudflare account
 - Node.js installed -> sudo apt install nodejs

1. DB project creation
A new project "DB" is created with
    npm create cloudflare@latest -- DB

    - For What would you like to start with?, choose Hello World example.
    - For Which template would you like to use?, choose Hello World Worker.
    - For Which language do you want to use?, choose TypeScript.
    - For Do you want to use git for version control?, choose Yes.
    - For Do you want to deploy your application?, choose No (we will be making some changes before deploying).

Now the project folder includes
    - A "Hello World" Worker in index.ts.
    - A wrangler.toml configuration file. wrangler.toml is how your DB Worker accesses your D1 database.

2. DB creation
Enter into the "DB" folder and run the command "npx wrangler d1 create database"
    - "wrangler d1" creates a database named as the string given as parameter (database)
        - Outputs the binding configuration needed in the next step

3. Bind your Worker to your D1 database
Bindings are created updating the "wrangler.toml" file
    1. The lines obtained as output of the 2nd step are copied
    2. and added at the end of the "wrangler.toml" file
        [[d1_databases]]
        binding = "DB"                                  # Binding name used to reference this database in the Worker
        database_name = "database"                      # Name given previously to the database
        database_id = "<unique-ID-for-your-database>"   # Unique identifier of the database

4. Insert data into the database
    - Create the file "schema.sql" into the DB directory and use it to create the database structure
    - Initialize the database with the command
        "npx wrangler d1 execute database --local --file=./schema.sql"
    - Check if all the data are inserted into the database with the command
        npx wrangler d1 execute database --local --command="SELECT * FROM Customers"

4.1. Write queries within the workers
    - Navigate to db worker and open the intex.ts file (Configuration)
    - Replace the file with the one in the Lab5/Exercise2 folder

5. Deploy the database
    - To deploy remotely the DB is used the command
        npx wrangler d1 execute database --remote --file=./schema.sql
    - Check if all the data are remotely deployed
        npx wrangler d1 execute database --remote --command="SELECT * FROM Customers"
    - To deploy the project and obtain the entry point to access the database run the command "npx wrangler deploy"
        - Ask if improvements
    - To visit the database go to the url "https://DB.<your-subdomain>.workers.dev"

6. Test the database locally
    - Run the command 
        npx wrangler dev
    - As output is presented a URL to review the workers
