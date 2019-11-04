## CS296P Project: FLINE

This app is made for students to make friends with each other around their campus based on our recommendation system.

### Setup

Simply clone the project  
Copy .env.default to .env and fill in all the configurations  
Run:
```shell
$ npm install
$ npm run dev
```

and navigate your browser to `localhost:3000` 

### Folder Structure

```
.
├── client                  # front-end
│   ├── pages               # views
│   │   ├── index.js        # main page
│   │   └── ...             # other pages (*)
│   └── components          # reusable modules for views
│       └── ...             # 
├── node_modules            # packages used in this project
├── public                  # 
├── server                  # backend:
│   ├── models              # database interface
│   │   ├── db.js           # database connection
│   │   ├── user.js         # operations for user database
│   │   └── ...             # operations for other database (*)
│   ├── routes              # server-side router
│   │   ├── index.js        # routing table
│   │   ├── users.js        # api for user logics
│   │   └── ...             # api for other logics (*)
│   └── index.js            # entry point for the server
├── .babelrc                # babel configurations
├── .env                    # environment variables and constant
├── next.config.js          # framework settings to support .env
├── package.json            # package and npm script configurations
└── README.md               # 
```

The folders with `(*)` appended are where you add your new features.
