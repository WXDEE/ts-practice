function buildName(firstName?: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
console.log(buildName('dee'));