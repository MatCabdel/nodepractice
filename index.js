const userInfo = require(`./information`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hello, i'm ${userInfo.userName} from ${userInfo.userCampus} Campus`),
    e : "oO",
    T : "U"
}));

