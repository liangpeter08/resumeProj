## Resume Proj

- reactjs
- nodejs/expressjs
- axios
- cloud function
- postgres

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:8080) to view it in the browser.

### DEPLOY APP
`gcloud app deploy`

### vscode config
```
{
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
}
```
Create a bare clone of the repository.

git clone --bare https://github.com/exampleuser/old-repository.git
Mirror-push to the new repository.

cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git



## Postgres setup

# user_account
`CREATE TABLE USER_ACCOUNT(
   user_id serial PRIMARY KEY,
   google_id VARCHAR (100) UNIQUE NOT NULL,
   family_name VARCHAR(50),
   given_name VARCHAR(50),
   image_url VARCHAR,
   email VARCHAR (355) UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);`

INSERT INTO USER_ACCOUNT (google_id,family_name,given_name,image_url,email, created_on, last_login) VALUES ('10000', 'test', 'name', 'http://image', 'test@gmail.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);


# FOR LATER
add id_token for google authentication