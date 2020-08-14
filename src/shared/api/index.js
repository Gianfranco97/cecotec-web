const API = {
  serverURL: "http://localhost:3000/",

  login(user, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = { user, password };
        const res = await fetch(`${this.serverURL}login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const sessionInfo = await res.json();
        console.log(sessionInfo)

        sessionStorage.setItem("session-token", sessionInfo["session-token"]);

        resolve(sessionInfo);
      } catch (error) {
        reject(error);
      }
    });
  },

  getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}products`);

        resolve(await res.json());
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

        resolve(await res.json());
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
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  updateProducts(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}products/${data.id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  getClients() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}clients`);

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  deleteClients(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}clients/${id}`, {
          method: "DELETE",
        });

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  addClients(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}clients`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },

  updateClients(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${this.serverURL}clients/${data.id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        resolve(await res.json());
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default API;
