const API = {
  serverURL: "http://localhost:3000/",

  login(user, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = btoa({ user, password }); // Base64
        const res = await fetch(`${this.serverURL}login?data=${data}`);

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default API;
