const API = {
  serverURL: "http://localhost:3000/",

  login(user, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = { user, password };
        const res = await fetch(`${this.serverURL}login`, {
          method: "POST",
          body: data,
        });

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default API;
