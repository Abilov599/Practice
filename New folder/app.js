// function isPolidrom(str) {
//   let reversed = str.split("").reverse().join("");
//     if (str === reversed) {
//       console.log("yes, it's a polidrom");
//     } else {
//       console.log("no, it's not a polidrom");
//     }
// }

// isPolidrom("amman");

function generateOTP() {
  // let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  console.log(OTP);
}

generateOTP();
