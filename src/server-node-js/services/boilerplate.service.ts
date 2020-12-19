export const get = () =>
  new Promise((resolve, reject) => {
    resolve({
      name: "John",
      id: 1,
      type: "Node js"
    });
  });