



// // ## 2. Instagram Post ðŸ“±
// function createPost(image,title,tags) {
//     this.image = image;
//     this.title = title;
//     this.tags = tags;
//     this.likes = Math.floor(Math.random() * 1000) + 1;
//     this.views = Math.floor(Math.random() * 10000) + 1;
// }

// let post = new createPost("image.png", "nimadir", "#birnarsa");
// let post1 = new createPost("airline.png", "Boing 747", "#biggest airline in the world");

// console.log(post);
// console.log(post1);


// // ## 3. Pizza Buyurtma ðŸ•
// let sizeObj = {
//     small: 2500,
//     medium: 4000,
//     large: 6000,
// };

// let extraObj = {
//     cheese: 1000,
//     tomato: 800,
//     free: 1300,
// };

// function pizzaZakaz(size,extra) {
//     let extraPrice = 0;
//     for (let i = 0; i < extra.length; i++) {
//         extraPrice += extraObj[extra[i]];
//     }
//     this.size = size;
//     this.extra = extra;
//     this.price = sizeObj[this.size] + extraPrice;
//     this.time = `${Math.floor(Math.random() * 45) + 15} daqiqa`;
// } 

// let order = new pizzaZakaz("medium", ["cheese", "tomato"]);
// let order2 = new pizzaZakaz("small", ["cheese", "tomato", "free"]);

// console.log(order);
// console.log(order2);



// ## 5. YouTube Video ðŸŽ¥
function youtubeVideo(title, duration) {
    this.title = title;
    this.duration = duration;
    this.views = Math.floor(Math.random() * 100000) + 1;
    this.likes = Math.floor(Math.random() * 10000) + 1;
    this.dislikes = Math.floor(Math.random() * 1000) + 1;
}

let video = new youtubeVideo("JavaScript tutorial","32:21");

console.log(video);
