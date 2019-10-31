function Users(id, firstName, lastName, birthday, gender ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender; 
}

function randomAge() {
    let age = 0;
    age =Math.floor(Math.random() * 20 + 20) ;
    return age;
}

function randomGender() {
    let gender = 0;
    let genderString = 'male'
    gender = Math.floor((Math.random() * 1) + 1);
    genderString === 0 ? 'male' : 'female';
    return genderString;
   
}

let firstNameList=['A','B','C','D','E','F','G','H','I','K','L','P','N','M','V','S','X','Z','U','R'];
let lastNameList=['A','B','C','D','E','F','G','H','I','K','L','P','N','M','V','S','X','Z','U','R'];

function getItem(array) {
    let itemIndex = 0;
    const maxItem = array.length;
    itemIndex = Math.floor(Math.random() * maxItem);
    return array[itemIndex];
}

function getListUser() {
    let listUsers = [];
    for(let i =0; i < 40; i++) {
        let user = {
            id : i, 
            firstName: getItem(firstNameList), 
            lastName: getItem(lastNameList), 
            birthday: randomAge(),
            gender: randomGender() 
        }

    listUsers.push(user);
}
    console.log(listUsers);
}
getListUser()