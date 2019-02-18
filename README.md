### Run

```
npm install
```
#### secrets folder

Not used in this project but project may not run without it

- database.js

config for both db and nodemailer
```
const config = {
    databaseStr:
        "", // db string
    host: "", // e.g. smtp.ethereal.email
    email: "", // sender email
    password: "", //sender pasword
    personal: "" // your email
};

module.exports = config;
```

- allow.js

collection of whitelisted email addresses
```
const list = [
    { email: "" //email address 1 },
    { email: "" // email 2 etc }
];

module.exports = list;
```

```
npm run dev
```
