function printHello(firstName, lastName) {
    firstName = firstName || 'User';
    lastName = lastName || 'User';
    let fullName = firstName + ' ' + lastName
    alert('Hello, ' + fullName);
}

printHello('asd', 'wer');

