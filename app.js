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
//     videoDetails(videos[0],  (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("finish");

// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from youtube");
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 2000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from fb");
//     resolve({ user: "name " });
//   }, 5000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));

console.log("start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

// loginUser("jkang@gmail.com", "hello")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

async function displayUser() {
  const loggedUser = await loginUser("jason", 123456);
  const videos = await getUserVideos(loggedUser.userEmail);
  const detail = await videoDetails(videos[0]);
  console.log(detail);
}

displayUser();
