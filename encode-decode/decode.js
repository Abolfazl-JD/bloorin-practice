let result = {
    'age': 17,
    'school': 'mollasadra',
    'isMarried': false,
    'job': 'programmer',
    'intrests:food': 'pizza',
    'intrests:game': 'Red dead2',
    'intrests:sports': 'football, chess, basketball',
    'intrests:skills': 'programming',
    'friends:reza:age': 17,
    'friends:reza:school': 'Imama Ali',
    'friends:reza:isMarried': false,
    'friends:reza:job': 'doctor',
    'friends:reza:interests:food': 'kebab',
    'friends:reza:interests:game': 'The last of us 2',
    'friends:reza:interests:sports': 'rugby, volleyball',
    'friends:reza:interests:skills': 'teaching',
    'friends:parsa:age': 20,
    'friends:parsa:school': 'Imam reza',
    'friends:parsa:isMarried': true,
    'friends:parsa:job': 'actor',
    'friends:parsa:interests:food': 'rice',
    'friends:parsa:interests:game': 'God of war 4',
    'friends:parsa:interests:sports': 'swimming, yoga',
    'friends:parsa:interests:skills': 'driver',
    'religion': 'muslim'
}

//variable
let abolfazl = {}

function decode(myObject) {
    for (let key in myObject) {
        var element = myObject[key];

        //change keys(string) to ARRAY
        key = key.split(':')

        //make a new variable for saving addresses
        let address = ['abolfazl']

        //iterate over key
        generateObject(address, key, element)


    }
    return abolfazl
}

function generateObject(address, key, element) {
    for (let i = 0; i < key.length; i++) {
        const key_value = key[i];

        //nkowing the index of iterated key in abolfazl
        let index = Object.keys(eval(address.join('.'))).indexOf(key_value);

        //check if it's the last index of key or not
        if (i !== key.length - 1) {

            //check if the key is in Abolfazl object or not
            if (index === -1) {
                eval(address.join('.'))[key_value] = {}
            }

            //add the key to address variable
            address.push(key_value)

        } else {

            //check if the value was an array or not
            if (typeof element === 'string' && element.indexOf(',') !== -1) {
                element = element.split(',')
            }
            eval(address.join('.'))[key_value] = element
        }
    }
}

console.log(decode(result))