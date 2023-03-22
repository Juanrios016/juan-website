type SingleSkill = {
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

type SingleProject = {
        "name": String,
        "status": String,
        "class": String
        "description": String,
        "image": String
    }

type JuanData = {
    "about": [],
    "experiences": [],
    "academicProjects": [],
    "sideProjects": [],
    "skills": []
}