# ROOM4ALL API

## Mapping Get
### localhost:8080/meeting

```json
 [
    
    {
    
    "id": 1,
    "name": "Nicolas",    
    "email": "qualquer@qualquer.com",
    "nb_phone": "999999999",
    "date": "29/04/2022",
    "hours_start": 630, 
    "hours_end": 750,
    "notes": "qualquer coisa"
    
    },
]
 ```

```json
[
    {
        "id": 2,
        "name": "Daniel",
        "email": "qualquer@qualquer.com",
        "nb_phone": "888888888",
        "date": "29/04/2022",
        "hours_start": 750,
        "hours_end": 870,
        "notes": "qualquer coisa"
    },

    {
        "id": 3,
        "name": "Ricardo",
        "email": "qualquer@qualquer.com",
        "nb_phone": "888888888",
        "date": "28/04/2022",
        "hours_start": 750,
        "hours_end": 870,
        "notes": "qualquer coisa"
    }
]
 ```

### localhost:8080/meeting/{id}

```json

{
    "id": 3,
    "name": "Ricardo",
    "email": "qualquer@qualquer.com",
    "nb_phone": "888888888",
    "date": "28/04/2022",
    "hours_start": 750,
    "hours_end": 870,
    "notes": "qualquer coisa"
}
    
```
    
### localhost:8080/room

```json
[
    {
        "id": 1,
        "name": "10",
        "max_capacity": 5,
        "open_hours": [
            {
                "id": 1,
                "date": "2022-04-29T23:00:00.000+00:00",
                "open_hours": 200,
                "close_hours": 400
            },
            {
                "id": 2,
                "date": "2022-04-30T23:00:00.000+00:00",
                "open_hours": 200,
                "close_hours": 400
            }
        ],
        "notes": "Qualuer coisa",
        "meeting": [
            {
                "id": 1,
                "name": "Nicolas",
                "email": "qualquer@qualquer.com",
                "nb_phone": "999999999",
                "date": "29/04/2022",
                "hours_start": 630,
                "hours_end": 750,
                "notes": "qualquer coisa"
            },
            {
                "id": 3,
                "name": "Ricardo",
                "email": "qualquer@qualquer.com",
                "nb_phone": "888888888",
                "date": "28/04/2022",
                "hours_start": 750,
                "hours_end": 870,
                "notes": "qualquer coisa"
            }
        ]
    }
]
```
### localhost:8080/room/1


```json
{
    "id": 1,
    "name": "10",
    "max_capacity": 5,
    "open_hours": [
        {
            "id": 1,
            "date": "2022-04-29T23:00:00.000+00:00",
            "open_hours": 200,
            "close_hours": 400
        },
        {
            "id": 2,
            "date": "2022-04-30T23:00:00.000+00:00",
            "open_hours": 200,
            "close_hours": 400
        }
    ],
    "notes": "Qualuer coisa",
    "meeting": [
        {
            "id": 1,
            "name": "Nicolas",
            "email": "qualquer@qualquer.com",
            "nb_phone": "999999999",
            "date": "29/04/2022",
            "hours_start": 630,
            "hours_end": 750,
            "notes": "qualquer coisa"
        },
        {
            "id": 3,
            "name": "Ricardo",
            "email": "qualquer@qualquer.com",
            "nb_phone": "888888888",
            "date": "28/04/2022",
            "hours_start": 750,
            "hours_end": 870,
            "notes": "qualquer coisa"
        }
    ]
}	
```

# Mapping post
### localhost:8080/meeting
### localhost:8080/room
