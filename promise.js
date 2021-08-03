const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "jason" });
  }, 2000);
});
