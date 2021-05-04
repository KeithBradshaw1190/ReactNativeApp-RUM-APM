db.createUser(
    {
        user: "list_user",
        pwd: "password",
        roles:[
            {
                role: "readWrite",
                db:   "list"
            }
        ]
    }
);