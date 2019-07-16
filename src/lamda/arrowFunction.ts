function baseFunc(testFunc: Function) {
  testFunc();
}

baseFunc(() => {
  console.log("welcomeArrowFunction");
});
