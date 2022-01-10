
## Data Set Level Attributes
```json
[
  {
    "name": "code",
    "validations": [
      {
        "name": "Mandatory",
        "error": {
          "message": "this field is required"
        }
      },
      {
        "name": "limit_character_count",
        "min": 2,
        "max": 10,
        "error": {
          "message": "It is going beyond Character limit "
        }
      }
    ],
    "isUnique": true
  },
  {
    "name": "id",
    "validations": [
      {
        "name": "Mandatory",
        "error": {
          "message": "this field is required"
        }
      },
      {
        "name": "limit_character_count",
        "min": 2,
        "max": 10,
        "error": {
          "message": "It is going beyond Character limit "
        }
      }
    ],
    "isUnique": true
  }
]
```

## Data Value Level Attributes
```json
[
  {
    "name": "code1",
    "validations": [
      {
        "name": "Mandatory",
        "error": {
          "message": "this field is required"
        }
      },
      {
        "name": "limit_character_count",
        "min": 2,
        "max": 10,
        "error": {
          "message": "It is going beyond Character limit "
        }
      }
    ],
    "isUnique": true
  },
  {
    "name": "id1",
    "validations": [
      {
        "name": "Mandatory",
        "error": {
          "message": "this field is required"
        }
      },
      {
        "name": "limit_character_count",
        "min": 2,
        "max": 10,
        "error": {
          "message": "It is going beyond Character limit "
        }
      }
    ],
    "isUnique": true
  }
]
```
+ create a data value
+ will open a form populating attributes from data set level
+ +create a data attribute on the level of data value (2 attributes)
+ 
