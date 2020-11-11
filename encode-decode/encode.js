let abolfazl = {
    age: 17,
    school: 'mollasadra',
    isMarried: false,
    job: 'programmer',
    intrests: {
        food: 'pizza',
        game: 'Red dead2',
        sports: ['football', 'chess', 'basketball'],
        skills: 'programming'
    },
    friends: {
        reza: {
            age: 17,
            school: 'Imama Ali',
            isMarried: false,
            job: 'doctor',
            interests: {
                food: 'kebab',
                game: 'The last of us 2',
                sports: ['rugby', 'volleyball'],
                skills: 'teaching',
            }
        },
        parsa: {
            age: 20,
            school: 'Imam reza',
            isMarried: true,
            job: 'actor',
            interests: {
                food: 'rice',
                game: 'God of war 4',
                sports: ['swimming', 'yoga'],
                skills: 'driver'
            }
        }
    },
    religion: 'muslim'
}

let address = ['abolfazl']
let result = {}

function encode(myObject) {
    for (var key in myObject) {
        var value = myObject[key]

        let object = check_for_object(value)
        let array = check_for_array(value)

        if (object && !array) {
            address.push(key)
            encode(value)
            address.pop()
        } else {
            if (array) {
                value = value.join(', ')
            }

            result[`${address.join(':')}:${key}`] = value
        }
    }

    return result
}

function check_for_object(variable) {
    return typeof variable === 'object'
}

function check_for_array(variable) {
    return Array.isArray(variable)
}

console.log(encode(abolfazl))