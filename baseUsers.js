//array of objects (Users) user id was provided by Joe
//I've used Street Fighter 2 as my theme
//Some characters doesn't have a last name
const baseUsers = [
    { uid: '0OVMG', personalName: 'Ryu', familyName: 'Hoshi', userName: 'User 1', admin: true, pfp: 'Images/Ryu-icon.jpg' },
    { uid: '21IGA', personalName: 'Ken', familyName: 'Masters', userName: 'User 2', admin: false, pfp: 'Images/Ken-icon.jpg' },
    { uid: '2URBV', personalName: 'Chun-Li', familyName: '', userName: 'User 3', admin: false, pfp: 'Images/Chunli-icon.jpg' },
    { uid: 'B5S6C', personalName: 'Guile', familyName: '', userName: 'User 4', admin: false, pfp: 'Images/Guile-icon.jpg' },
    { uid: 'EDWKP', personalName: 'Blanka', familyName: '', userName: 'User 5', admin: false, pfp: 'Images/Blanka-icon.jpg'},
    { uid: 'FBEN5', personalName: 'Dhalsim', familyName: '', userName: 'User 6', admin: false, pfp: 'Images/Dhalsim-icon.jpg'},
    { uid: 'H40XH', personalName: 'Zangief', familyName: '', userName: 'User 7', admin: false, pfp: 'Images/Zangief-icon.jpg' },
    { uid: 'JUY4S', personalName: 'Edmond', familyName: 'Honda', userName: 'User 8', admin: false, pfp: 'Images/Honda-icon.jpg'},
    { uid: 'L2TGB', personalName: 'Cammy', familyName: 'White', userName: 'User 9', admin: false, pfp: 'Images/Cammy-icon.jpg'},
    { uid: 'MPFRW', personalName: 'T.', familyName: 'Hawk', userName: 'User 10', admin: false, pfp: 'Images/Hawk-icon.jpg' },
    { uid: 'QR69U', personalName: 'Balrog', familyName: '', userName: 'User 11', admin: false, pfp: 'Images/Balrog-icon.jpg' },
    { uid: 'SDXX4', personalName: 'Vega', familyName: '', userName: 'User 12', admin: false, pfp: 'Images/Vega-icon.jpg' },
    { uid: 'U4MUD', personalName: 'Sagat', familyName: '', userName: 'User 13', admin: false, pfp: 'Images/Sagat-icon.jpg' },
    { uid: 'WNCQ7', personalName: 'M.', familyName: 'Bison', userName: 'User 14', admin: true, pfp: 'Images/Bison-icon.jpg'},
    { uid: 'Y60EW', personalName: 'Akuma', familyName: 'Joseph', userName: 'User 15', admin: true, pfp: 'Images/Akuma-icon.png' }
];
//USER INFORMATION CHART
// | Username | Uid | Role
//--------------------------- 
// | User 1   | 0OVMG | Admin
// | User 2   | 21IGA | User
// | User 3   | 2URBV | User
// | User 4   | B5S6C | User
// | User 5   | EDWKP | User
// | User 6   | FBEN5 | User
// | User 7   | H40XH | User
// | User 8   | JUY4S | User
// | User 9   | L2TGB | User
// | User 10  | MPFRW | User
// | User 11  | QR69U | User
// | User 12  | SDXX4 | User
// | User 13  | U4MUD | User
// | User 14  | WNCQ7 | Admin
// | User 15  | Y60EW | Admin

//In order to log in you need the Username and the Uid of the respective User. 

//creating class Adm
//It is important to declare Admins because the code has to know which users are admins in order to display the correct cards and the delete button
class Adm {
    constructor(uid, personalName, familyName, userName, admin, pfp) {
        this.uid = uid;
        this.personalName = personalName;
        this.familyName = familyName;
        this.userName = userName;
        this.admin = admin;
        this.pfp = pfp;
    }
    //Setting the getAdmins method
     getAdmins(x) {
         //create an empty array called adminArray
        let adminArray = [];

        //Loop through the list provided (baseUsers) and pushes every element that has admin = true
        for (let i = 0; i < x.length; i++) {
            if (x[i].admin === true) {
                adminArray.push(x[i]);
            }
        }
        //this next line is crucial. Without it the new adminArray would be stuck inside the loop
        return adminArray;
    }
}