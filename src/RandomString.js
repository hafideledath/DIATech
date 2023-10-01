// const chars = "01"
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
const charCount = 1600

function getRandomString() {
    let randomString = ""
    for (let i = 0; i < charCount; i++) {
        randomString += chars[Math.floor(Math.random() * chars.length)]
    }
    return randomString;
}

export default getRandomString