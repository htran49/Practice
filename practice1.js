
function randomAge(){
    let age= 0;
    age = Math.random() * 20 +20;
    return age;
}
function randomGender(){
    let gender = 0;
    let genderString = 'male';
    gender = Math.floor(Math.random()*1)+1;
    if(genderString=gender){
        console.log('male')
    } console.log('female')
    return gender;
}
let firstName=['A','B','C','D','E','F','G','H','I','K','L','P','N','M','V','S','X','Z','U','R'];
let lastName=['A','B','C','D','E','F','G','H','I','K','L','P','N','M','V','S','X','Z','U','R'];
function getItem(array){
    let itemIndex=0;
    const maxItem = array.length;
    itemIndex = Math.floor(Math.random()* maxItem);
    return array[itemIndex];
}
function getListUser(){
    let listUsers = [];
    for(let i=0;i<40;i++){
        let user = {
            id: i,
            firstName: getItem(firstName),
            lastName: getItem(lastName),
            birthday: randomAge(),
            gender: randomGender()
        }
        listUsers.push(user);
    }
    console.log('listUsers',listUsers);
    return listUsers;
}