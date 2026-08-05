export function fakeLogin(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token", email });
    }, 800);
  });
}

export function fakeCheckToken(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ email: "test@example.com" });
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
