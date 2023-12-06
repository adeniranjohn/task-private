# task-private
A  backend api endpoint that uses github app using Adonisjs to get the list of all private repositories from Github account.

## Install
** Installation **
```
npm install
```
## Start
** Development **
`npm run dev`
This to start the server for Development 
Default port is running on 127.0.0.1:3333 - it returns an object with
```
{
  "hello": "world"
}
```

## Github Request
```
curl -i -H 'Authorization: token GITHUB_TOKEN' http://localhost:3333/github?q:user=username&visibility=visibiltiy&limit=limit&page=page 
```

** Environment Variables **
GITHUB_TOKEN = This is token created from your github profile (Token classic)
`
** Query **
limit = default is 10
username =  Github username, default is adeniranjohn
page = default is 0
visibility = default is private, options - (private | public)
`
## Build

```
npm run build
```
