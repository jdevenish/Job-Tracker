# Auth API
```
{
  "username" : String,
  "password" : String
}
```

# Profile API
```
{
  "auth": {
    "userName" : String,
    "password" : String
   },
   "targetCompanies": {
    "name" : String,
    "jobs" : [
      {
        "job" : String,
        "notes": String
      },
      {...},
      {...},
      {...}
    ],
    "pointOfContact" : String,
    "icon" : String
   },
   "jobSearchMaterial": {
      "brandStatement" : String,
      "coverLetter" : String,
      "resume" : String,
      "gitHub" : String,
      "linkedIn" : String,
      "replit" : String,
      "codeSandBox" : String, 
      "profileSite" : String
   },
   "networkingContacts" : [
      {
        "name" : String,
        "phone" : String,
        "email" : String,
        "notes" : String,
        "employer" : String
      },
      {...},
      {...},
      {...}
   ]
}

```

# Resources API
```
[
  {
    "name" : String,
    "url" : String, 
    "description" : String,
    "views" : Number
  },
  ...
]
```

