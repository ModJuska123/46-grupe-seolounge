export function isValidUsername(text) {
    const minLength = 2;
    const maxLength = 20;

if (typeof text !== 'string') {
    return false;
}

if (text.length < minLength) {
    return false;
}

if (text.length > maxLength) {
    return false;
}
// tik raides ir skaiciai ir _
const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGJIJKLMNOPQRSTUVWXYZ0123456789_';
for (const letter of text) {
    if(!abc.includes(letter)) {
        return false;
    }
}
return true;
}


export function isValidEmail(text) {
    const minLength = 6;
    const maxLength = 60;

if (typeof text !== 'string') {
    return false;
}

if (text.length < minLength) {
    return false;
} 
    return true;
}


export function isValidPhone(text) {
    return true;
}


export function isValidPassword(text) {
    return true;
}
