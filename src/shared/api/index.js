const API = {
  serverURL: "http://localhost:3010/",

  makeRequest(request, callback) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(request.url, {
          method: request.method || "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: request.data && JSON.stringify(request.data),
        });

        const dataJSON = await res.json();

        if (callback) callback(dataJSON);

        resolve(dataJSON);
      } catch (error) {
        reject(error);
      }
    });
  },

  login(user, password) {
    return this.makeRequest(
      {
        url: `${this.serverURL}login`,
        method: "POST",
        data: { user, password },
      },
      (dataJSON) => {
        sessionStorage.setItem("session-token", dataJSON["session-token"]);
      }
    );
  },

  logout() {
    return this.makeRequest(
      {
        url: `${this.serverURL}logout`,
        method: "PUT",
      },
      () => {
        sessionStorage.clear();
      }
    );
  },

  getProducts() {
    return this.makeRequest({
      url: `${this.serverURL}products`,
    });
  },

  deleteProducts(id) {
    return this.makeRequest({
      url: `${this.serverURL}products/${id}`,
      method: "DELETE",
    });
  },

  addProducts(data) {
    return this.makeRequest({
      url: `${this.serverURL}products`,
      method: "POST",
      data,
    });
  },

  updateProducts(data) {
    return this.makeRequest({
      url: `${this.serverURL}products/${data.id}`,
      method: "PUT",
      data,
    });
  },

  getClients() {
    return this.makeRequest({
      url: `${this.serverURL}clients`,
    });
  },

  deleteClients(id) {
    return this.makeRequest({
      url: `${this.serverURL}clients/${id}`,
      method: "DELETE",
    });
  },

  addClients(data) {
    return this.makeRequest({
      url: `${this.serverURL}clients`,
      method: "POST",
      data,
    });
  },

  updateClients(data) {
    return this.makeRequest({
      url: `${this.serverURL}clients/${data.id}`,
      method: "PUT",
      data,
    });
  },
};

export default API;
