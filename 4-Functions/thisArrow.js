const user = {
  username: "g",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // sam hobe

// console.log(this); // {} empty object but in website window objecct

// function chai(){
//     let username = "g"
//     console.log(this.username);// undefined bcz cant work in function
//     console.log(this); // will be different
// }

// chai()

// const chai = function () {
//     let username = "g"
//     console.log(this.username); // undefined
// }

const chai = () => {
  let username = "g";
  console.log(this); // {} hobe
  console.log(this.username); // undefined
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "g" }); // object return

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
