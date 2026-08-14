export function fakeLogin(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token", name: "Ziah", email });
    }, 800);
  });
}

export function fakeCheckToken(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-jwt-token") {
        resolve({ name: "Ziah", email: "test@example.com" });
      } else {
        reject("Invalid token");
      }
    }, 800);
  });
}

export function fakeSaveArticle(article) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...article, _id: Date.now() });
    }, 500);
  });
}

export function fakeDeleteArticle(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}

// export function fakeLogin(email, password) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ token: "fake-jwt-token", name: "Ziah", email });
//     }, 800);
//   });
// }

// export function fakeCheckToken(token) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ email: "test@example.com" });
//     }, 800);
//   });
// }
