This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# burgerApp

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
