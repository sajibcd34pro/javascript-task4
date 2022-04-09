function seerToMoon(seer) {
    if (seer > 0) {
        const moon = seer / 40;
        return moon;
    } else {
        console.log("plz enter a valid number")
  }
}
const getMoon = seerToMoon(80);
console.log(getMoon, 'Mon');

//function totalSales
function totalSales(shirts, pent, shoes) {
  if (shirts > 0 && pent > 0 && shoes > 0) {
    const shirtPrice = 100;
    const pentPrice = 200;
    const shoesPrice = 200;
    const totalShirtPrice = shirtPrice * shirts;
    const totalPentPrice = pentPrice * pent;
    const totalShoesPrice = shoesPrice * shoes;
    const total = totalShirtPrice + totalPentPrice + totalShoesPrice;
    return total;
  } else {
    console.log("please enter a valid number");
  }
}

console.log(totalSales(2, 2, 2));


//function deliveryCost
function deliveryCost(shirts) {
  if (shirts > 0) {
    if (shirts <= 100) {
      const shirtPrice = 100;
      const deliveryCost = shirtPrice * shirts;
      return deliveryCost;
    } else if (shirts > 100 && shirts <= 200) {
      const shirtPrice = 80;
      const deliveryCost = shirtPrice * shirts;
      return deliveryCost;
    } else if (shirts > 200) {
      const shirtPrice = 50;
      const deliveryCost = shirtPrice * shirts;
      return deliveryCost;
    }
  } else {
    console.log("plz enter a valid number");
  }
}

// get your shirts delivery costs
const myShirt = deliveryCost(101);
console.log(myShirt);



//find oddFriend

function findOddFriend(array) {
  const oddFriend = [];
  for (let i = 0; i < array.length; i++) {
    if (friends[i].length % 2 !== 0) {
      oddFriend.push(friends[i]);
    }
  }
  return oddFriend;
}
const friends = ["abc", "ab", "abcde", "abce"];

console.log(findOddFriend(friends));
