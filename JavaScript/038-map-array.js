// array map kullanımı

const USERS = ["AYSE","MehMet","TugCE","AkSEL"]

// userName içinde orijinal isim kalsın

//shortName içinde ilk harf büyük 

// newName içinde ilk harf büyük olsun

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item =>
//     {

//         return {
//             userName: item,
//             shortName: `${item[0]}.`,
//             newName: `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}`
//         }
//     }
    
//     )


const USERS_OBJ = USERS.map((item) => (
    {userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}`,}
)
)