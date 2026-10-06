//console.log("Shivam Dubey")
require('dotenv').config()


const express = require('express');
const app = express()
const port = process.env.PORT || 3000

const githubData = {
  "login": "DwivediShivamkumar",
  "id": 262737451,
  "node_id": "U_kgDOD6kOKw",
  "avatar_url": "https://avatars.githubusercontent.com/u/262737451?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DwivediShivamkumar",
  "html_url": "https://github.com/DwivediShivamkumar",
  "followers_url": "https://api.github.com/users/DwivediShivamkumar/followers",
  "following_url": "https://api.github.com/users/DwivediShivamkumar/following{/other_user}",
  "gists_url": "https://api.github.com/users/DwivediShivamkumar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DwivediShivamkumar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DwivediShivamkumar/subscriptions",
  "organizations_url": "https://api.github.com/users/DwivediShivamkumar/orgs",
  "repos_url": "https://api.github.com/users/DwivediShivamkumar/repos",
  "events_url": "https://api.github.com/users/DwivediShivamkumar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DwivediShivamkumar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-02-20T06:05:15Z",
  "updated_at": "2026-06-22T08:11:58Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Shivam Dubey')
})


app.get('/signup', (req, res) => {
  res.send('Gopalganj')
})


app.get('/about', (req, res) => {
  res.send('<h1>Software Engineer</h1>')
})

app.get('/contact', (req,res) => {
  res.send(8709045678)
})

app.get('/footballer', (req, res) => {
  res.send('<h1>Messi is the best footballer of all time.</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})