const bcrypt = require('bcrypt')
const prompt = require('prompt-sync')()

const password = prompt("Enter the password: ")

function validatePassword(password){
    if (password.length < 11) {
        return false
    }
    return true
}

async function hashAndCheckPassword(password) {
    if (validatePassword(password)) {
        const hash = await bcrypt.hash(password, 10)
        console.log("Hashed Password:", hash)
        checkPassword(password, hash)
    } else {
        console.log("Invalid Password")
    }
}

async function checkPassword(password, hash){
    const isMatch = await bcrypt.compare(password, hash)
    console.log(isMatch)
}

hashAndCheckPassword(password)