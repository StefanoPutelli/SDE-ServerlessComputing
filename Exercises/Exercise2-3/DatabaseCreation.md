# Database Creation

## 1. DB creation
- Run in the root directory:
    ```sh
    npx wrangler d1 create database
    ```
- `wrangler d1` creates a database named as the string given as parameter (database)
    - Outputs the binding configuration needed in the next step

## 2. Bind your Worker to your D1 database
Bindings are created by updating the `wrangler.toml` file:
1. Copy the lines obtained as output of the 2nd step
2. Add them at the end of the `wrangler.toml` file:
        ```toml
        [[d1_databases]]
        binding = "DB"                                  # Binding name used to reference this database in the Worker
        database_name = "database"                      # Name given previously to the database
        database_id = "<unique-ID-for-your-database>"   # Unique identifier of the database
        ```

## 3. Insert data into the database
- Initialize the database with the command:
    ```sh
    npx wrangler d1 execute database --local --file="Exercises/Exercise2-3/schema.sql" --config="Exercises/Exercise2-3/wrangler.toml"
    ```
- Check if all the data are inserted into the database with the command:
    ```sh
    npx wrangler d1 execute database --local --command="SELECT * FROM Customers" --config="Exercises/Exercise2-3/wrangler.toml"
    ```

## 4. Deploy the database
- To deploy remotely the DB, use the command:
    ```sh
    npx wrangler d1 execute database --remote --file="Exercises/Exercise2-3/schema.sql" --config="Exercises/Exercise2-3/wrangler.toml"
    ```
- Check if all the data are remotely deployed:
    ```sh
    npx wrangler d1 execute database --remote --command="SELECT * FROM Customers" --config="Exercises/Exercise2-3/wrangler.toml"
    ```
- To deploy the project and obtain the entry point to access the database, run the command:
    ```sh
    npx wrangler deploy
    ```
    - Ask if improvements
