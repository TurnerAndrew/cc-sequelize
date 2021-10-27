#Building the Backend
=====================

###Build out the basic server file
..*npm i express cors dotenv
..*Review dotenv - hides files from our deployed code
..*require dotenv into the server file
..*create .env add SERVER_PORT=9876

```javascript
require('dotenv').config()
```

```javascript
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.listen(SERVER_PORT, console.log(`listening on ${SERVER_PORT}))
```

