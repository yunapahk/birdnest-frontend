# BirdNest
- [Deployed Frontend](https://birdnest-jade.vercel.app/)
- [Deployed Backend](https://birdnest-backend-bc7d.onrender.com) 
- [Trello Board](https://trello.com/invite/b/4JSumEwy/ATTI5d5ab6e236ea500a2efadf2cfb3c4e15DAA9D443/birdnest)

## Description
- Comfortable bird's nest for developers to for resources based on libraries, frameworks, videos, and documentation.

## UI Mock Up
_Dashboard_

![Dashboard](dashboard.png)

_Create/Update_

![Create/Update](create&update.png)

## Endpoints
| Method | Route            | Description               |
|--------|------------------|---------------------------|
| GET    | /api/birdnests   | Retrieve all entries   |
| POST   | /api/birdnests      | Add a new entry         | 
| GET    | /api/birdnests/:id   | Retrieve a entry by ID    | 
| PUT    | /api/birdnests/:id   | Update a entry by ID      |
| DELETE | /api/birdnests/:id   | Delete a entry by ID      | 

## ERD 
```mermaid
erDiagram
    ENTRY ||--|{ CATEGORY : belongs_to
    CATEGORY {
        int id
        string name
    }
    ENTRY {
        int id
        string name
        string description
        int categoryId FK
    }

  




