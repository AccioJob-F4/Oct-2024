const user = {
  name: "William Benson",
  age: 20,
  address: {
    city: "Maryland",
    state: "Lagos",
    extras: {
      pinCode: "211008",
      country: "India",
    },
  },
  hobbies: ["Swimming", "Golf", "Writing"],
};

const {
  //   name,
  //   age,
  address: { city, state },
  hobbies: [firstHobby],
} = user;

const getAddress = () => {
  if (user.address.city && user.address.state) {
    console.log(
      user.address.city +
        " " +
        user.address.state +
        " " +
        user.address.extras.country +
        ", " +
        user.address.extras.pinCode
    );
  } else if (city || user.address.state) {
    console.log(user.address.city ? user.address.city : user.address.state);
  } else {
    console.log("Both empty or unavailable");
  }
};

// const getDetails = () => {
//   let address;

//   if (user.name) name = user.name;
//   if (user.age) age = user.age;
//   if (user.hobbies) hobbies = user.hobbies;

//   console.log(
//     `My name is ${user.name}, I'm ${
//       user.age
//     } years old. I'm a resident of ${address} and my hobbies are ${user.hobbies.join(
//       ", "
//     )}`
//   );
// };

getAddress();

// getDetails();

fetch("URL", {
  method: "POST",
  body: JSON.stringify(),
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log("🚀 ~ data:", data);
  })
  .catch((error) => {
    console.log("🚀 ~ error:", error);
  });
