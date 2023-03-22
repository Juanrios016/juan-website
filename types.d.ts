type Skill = {
        "name": String,
        "level": String,
        "image": String
}

type SingleExperience = {
        "id": String,
        "place": String,
        "location": String,
        "link": URL,
        "date": String,
        "positions": [SinglePosition]
    }
type SinglePosition = {
        "name": String,
        "tasks": [String]
    }