**Are mandatory**:
 - Cloudflare account
 - Node.js installed -> sudo apt install nodejs

1. db project creation
A new project "db" is created with
    `npm create cloudflare@latest -- db`

    - For What would you like to start with?, choose Hello World example.
    - For Which template would you like to use?, choose Hello World Worker.
    - For Which language do you want to use?, choose TypeScript.
    - For Do you want to use git for version control?, choose Yes.
    - For Do you want to deploy your application?, choose No (we will be making some changes before deploying).

Now the project folder includes
    - A "Hello World" Worker in index.ts.
    - A wrangler.toml configuration file. wrangler.toml is how your db Worker accesses your D1 database.

2. db creation
Enter into the "db" folder and run the command `npx wrangler d1 create database`
    - "wrangler d1" creates a database named as the string given as parameter (database)
    - Outputs the binding configuration needed in the next step

3. Bind your Worker to your D1 database
Bindings are created updating the "wrangler.toml" file
    1. The lines obtained as output of the 2nd step are copied
    2. and added at the end of the "wrangler.toml" file

        ```
            [[d1_databases]]
            binding = "db"                                  # Binding name used to reference this database in the Worker
            database_name = "database"                      # Name given previously to the database
            database_id = "<unique-ID-for-your-database>"   # Unique identifier of the database
        ```

4. Insert data into the database
    - Create the file "schema.sql" into the db directory and use it to create the database structure
    - Initialize the database with the command
        `npx wrangler d1 execute database --local --file=./schema.sql`
    - Check if all the data are inserted into the database with the command
        `npx wrangler d1 execute database --local --command="SELECT * FROM Customers"`

5. Deploy the database
    - To deploy remotely the db is used the command
        `npx wrangler d1 execute database --remote --file=./schema.sql`
    - Check if all the data are remotely deployed
        `npx wrangler d1 execute database --remote --command="SELECT * FROM Customers"`
    - To deploy an empty database run the command `npx wrangler deploy`
    - To visit the database go to the url "https://db.<your-subdomain>.workers.dev"

6. Test the database locally
    - Run the command 
        `npx wrangler dev`
    - As output is presented a URL to review the workers
