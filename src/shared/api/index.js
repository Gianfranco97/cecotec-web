const API = {
  serverURL: "http://localhost:3000/",

  login(user, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = { user, password };
        const res = await fetch(`${this.serverURL}login`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });

        resolve(res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}products`);

        resolve(res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  deleteProducts(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}products/${id}`, {
          method: "DELETE",
        });

        resolve(res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  addProducts(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}products`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        resolve(res.json());
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default API;
