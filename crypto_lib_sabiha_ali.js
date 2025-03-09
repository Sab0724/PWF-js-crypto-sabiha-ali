//function what_are_words_worth(){
//    let smtg = prompt("Enter something");
//    console.log(smtg.length);
//    return confirm("The word "+smtg+" contains "+smtg.length+" words")
//}

//Partie 2
function count_words(string_of_words) {

    let count = 0;

    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < string_of_words.length; ++i) {
        let char = string_of_words.charAt(i);

        // Vérifier si le caractère actuel est un espace et le caractère précédent n'est pas un espace
        if (char === ' ' && i > 0 && string_of_words.charAt(i - 1) !== ' ') {
            count++;
        }
    }
    
    // Ajouter 1 pour le dernier mot (s'il y a des mots dans la chaîne)
    if (string_of_words.length > 0 && string_of_words.charAt(string_of_words.length - 1) !== ' ') {
        count++;
    }

    return count;
}


//Partie 3
function count_words_by(string_of_words, separator) {

    let count = 0;

    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < string_of_words.length; ++i) {
        let char = string_of_words.charAt(i);

        // Vérifier si le caractère actuel est un espace et le caractère précédent n'est pas un espace
        if (char === separator && i > 0 && string_of_words.charAt(i - 1) !== separator) {
            count++;
        }
    }
    
    // Ajouter 1 pour le dernier mot (s'il y a des mots dans la chaîne)
    if (string_of_words.length > 0 && string_of_words.charAt(string_of_words.length - 1) !== separator) {
        count++;
    }

    return count;
}   

//Partie 4
function is_a_vowel(letter) {
    // Iterate through the vowels array
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

function count_vowels(string_of_words){

    let count = 0;

    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < string_of_words.length; ++i) {
        let letter = string_of_words.charAt(i);

        // Vérifier si le caractère actuel est une voyelle
        if (is_a_vowel(letter) === true) {
            count++;
        }
    }

    return count;

}

//Partie 5
function count_consonants(string_of_words) {
    return string_of_words.length - (count_vowels(string_of_words) + count_words(string_of_words) - 1 ); 
}

//Partie 6
function remove(string_of_words, caracter) {

    let result = '';

    for (let i = 0; i < string_of_words.length; i++) {

        if (string_of_words.charAt(i) !== caracter) {
            result += string_of_words.charAt(i);
        }
    }

    return result;
}

//Partie 7
function remove_strings(string_of_words, caracters) {

    let result = '';

    for (let i = 0; i < string_of_words.length; i++) {

        let letter = string_of_words.charAt(i);

        if (caracters.indexOf(letter) === -1) {
            result += letter;
        }
    }

    return result;
}

//Partie 8
function crypto(a_string, a_number) {
    let result = '';

    for (let i = 0; i < a_string.length; i++) {

        let char = a_string.charAt(i);
        let newChar;

        if (char >= 'a' && char <= 'z') {
            newChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + a_number) % 26) + 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {
            newChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + a_number) % 26) + 'A'.charCodeAt(0));
        } else {
            newChar = char;
        }

        result += newChar;
    }

    return result;
}

//Partie 9
function decrypt(a_string, a_number) {
    return crypto(a_string, 26 - a_number);
}

//Partie 10
function enigma(crypted_string) {
    for (let i = 0; i < 26; i++) {
        let decrypted = decrypt(crypted_string, i);
        if (decrypted.includes(' the ') || decrypted.includes(' and ')) {
            console.log('Key found: ' + i);
            return i;
        }
    }
}
