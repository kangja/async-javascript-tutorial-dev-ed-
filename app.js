// sync code example

// function otherFunct() {
//   console.log("we are in another function");
//   console.log("do some stuff");
// }

// console.log("start");

// otherFunct();

// console.log("end");

// async code example
// console.log("start");

// setTimeout(() => {
//   console.log("we are in the timeout");
// }, 5000);

// console.log("end");

// console.log("start");

// const items = [1, 2, 3, 4, 5];

// items.forEach((item) => {
//   console.log(item);
// });

// console.log("end");

// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("now we have the data");
//     callback({ userEmail: email });
//   }, 3000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   }, 2000);
// }

// const user = loginUser("jkang@gmail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("finish");

console.log("start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("now we have the data");
    callback({ userEmail: email });
  }, 3000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}

const user = loginUser("jkang@gmail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("finish");
