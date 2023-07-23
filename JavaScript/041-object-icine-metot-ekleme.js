// Object şçşne metot eklemek

let user1 = {
    firstName: "John",
    lastName: "Doe",
    score : [1,2,3,4,5],
    isActive: true,
    shortName : function(){
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
    }
};

console.log(user1);


