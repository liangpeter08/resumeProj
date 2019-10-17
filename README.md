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
`CREATE TABLE user_account(
   user_id serial PRIMARY KEY,
   google_id VARCHAR (100) UNIQUE NOT NULL,
   family_name VARCHAR(50),
   given_name VARCHAR(50),
   image_url VARCHAR,
   email VARCHAR (355) UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);`

INSERT INTO user_account (google_id,family_name,given_name,image_url,email, created_on, last_login) VALUES ('10000', 'test', 'name', 'http://image', 'test@gmail.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

# notes

`CREATE TABLE notes(
   note_id serial PRIMARY KEY,
   google_id VARCHAR (100) UNIQUE NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   last_modified TIMESTAMP,
   version INT,
   allowed_email VARCHAR (355)[]
);`

INSERT INTO notes (google_id,email,created_on,last_modified,version,allowed_email) VALUES ('10001', 'test@gmail.com', CURRENT_TIMESTAMP, NULL, 0, '{"test@gmail.com"}');


# FOR LATER
add id_token for google authentication
backend is very brittle, need to improve
improve postgres queries