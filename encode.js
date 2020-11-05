let abolfazl = {
    age: 17,
    school: 'mollasadra',
    isMarried: false,
    job: 'programmer',
    iterests: {
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
                skills: 'teaching'
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


let sum = []
let info = []

function factorial(myObject) {
    for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            var informationOfAbolfazl = myObject[key];

            //select type of variable
            let object = check_for_object(informationOfAbolfazl)
            let array = check_for_array(informationOfAbolfazl)

            //generate changes on objects
            if (array) info.push(informationOfAbolfazl)
            else if (object) {
                sum.push(key)
                factorial(informationOfAbolfazl)
            } else if (!(array) && !(object) && sum.length !== 0) {
                console.log(`'${sum.join(':')}:${key}' : ${informationOfAbolfazl}`)
            } else console.log(`'${key}' : '${informationOfAbolfazl}'`)
        }
    }


    //generates changes on an array
    if (info.length !== 0) {
        console.log(`'${sum.join(':')}' : '${info}'`)
        sum = []
        info = []
    }
}

factorial(abolfazl)

function check_for_object(variable) {
    return typeof variable === 'object'
}

function check_for_array(variable) {
    return Array.isArray(variable)
}