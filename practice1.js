
function Users(id, firstName, lastName, birthday, gender) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender;
}

function randomAge() {
    let age = 0;
    age = Math.floor(Math.random() * 20 + 20);
    return age;
}


function randomGender() {
    let gender = 0;
    let genderString = 'male'
    gender = Math.floor((Math.random() > 0.5) ? 1 : 0);
    genderString = gender === 0 ? 'male' : 'female';
    return genderString;

}

let firstNameList = ['Thu', 'Hanh', 'Tran', 'Thao', 'Bao', 'Khiem', 'Trang', 'Nhi', 'Hai', 'Đai', 'Đat', 'Vinh', 'Nghia', 'Thanh', 'Phuc', 'Trong', 'Kiet', 'Nga', 'Tram', 'Phon']
let lastNameList = ['Duong', 'Le', 'Tran', 'Pham', 'Nguyen', 'Nguyen', 'Truong', 'Ha', 'Nguyen', 'Hoang', 'Ngo', 'Huynh', 'Tran', 'Phan', 'Lam', 'Vo', 'Vo', 'Nguyen', 'Tran', 'Phan']

function getItem(array) {
    let itemIndex = 0;
    const maxItem = array.length;
    itemIndex = Math.floor(Math.random() * maxItem);
    return array[itemIndex];
}

function getListUser() {
    let listUsers = [];
    for (let i = 0; i < 40; i++) {
        let user = {
            id: i,
            firstName: getItem(firstNameList),
            lastName: getItem(lastNameList),
            birthday: randomAge(),
            gender: randomGender()
        }

        listUsers.push(user);
    }
    return listUsers;
}
let listAllUsers = [];
listAllUsers = getListUser();

function changeFirstName() {
    listAllUsers[2].firstName = "Smith";
    console.log(listAllUsers);

}

function listSpecialUsers() {
    let listUser = [];
    for (let i = 0; i < listAllUsers.length; i++) {
        let fullname = listAllUsers[i].firstName + ' ' + listAllUsers[i].lastName;
        if (fullname.includes('an')) listUser.push(listAllUsers[i]);
    }
    console.log(listUser);
}

function getListAge() {
    let listUser = [];
    for (let i = 0; i < listAllUsers.length; i++) {

        if ((listAllUsers[i].birthday >= 25 && listAllUsers[i].birthday <= 33 && listAllUsers[i].gender == 'male') || (listAllUsers[i].birthday == 38 && listAllUsers[i].gender == 'male'))
            listUser.push(listAllUsers[i]);
    }
    console.log(listUser)
}

function listSpecticalName() {
    let listUser = [];
    for (let i = 0; i < listAllUsers.length; i++) {
        let regexp = /s.*h/gi;
        if (regexp.test(listAllUsers[i].firstName)) listUser.push(listAllUsers[i]);
    }
    console.log(listUser);
}

function removeUser() {
    for (let i = 0; i < listAllUsers.length; i++) {
        if (listAllUsers[i].birthday > 35) listAllUsers.splice(i, 1);
    }
    console.log(listAllUsers);

}
console.log("/1/");
console.log(listAllUsers);
console.log("/2/");
changeFirstName();
console.log("/3/")
listSpecialUsers();
console.log("/4/");
getListAge();
console.log("/5/")
listSpecticalName();
console.log("/6/");
removeUser();