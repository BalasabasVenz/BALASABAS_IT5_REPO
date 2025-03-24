function whatShallIWear(temp) {
    if (temp < 60) {
        console.log('Wear a Jacket');
    }else if (temp < 70) {
        console.log('Wear a Sweater');
    }else {
        console.log('Wear a t-shirt');
    }
}

whatShallIWear(50)
whatShallIWear(100)
whatShallIWear(60)