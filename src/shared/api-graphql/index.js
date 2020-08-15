import { createApolloFetch } from "apollo-fetch";

const fetchGraphQL = createApolloFetch({
  uri: "http://localhost:3011/",
});

const clientAllAttributes = `
    id
    name
    address
`;

const productAllAttributes = `
    id
    name
    price
    quantity
`;

function generateID() {
  return parseInt(Math.random() * 100, 10);
}

const API = {
  makeRequest(request, callback) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetchGraphQL({
          query: request.query,
          variables: request.variables,
        });

        if (callback) callback(res.data);

        if (request.customResponseTarget) {
          resolve(res.data[request.customResponseTarget]);
        } else {
          resolve(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  getProducts() {
    return this.makeRequest({
      query: `{allProducts { ${productAllAttributes} }}`,
      customResponseTarget: "allProducts",
    });
  },

  addProduct(data) {
    return this.makeRequest({
      query: `mutation($id: ID!, $name: String!, $price: Int!, $quantity: Int!) {
            createClient(id: $id, name: $name, price: $price, quantity: $quantity) {id}
        }`,
      variables: { id: generateID(), ...data },
    });
  },

  updateProduct(data) {
    return this.makeRequest({
      query: `mutation($id: ID!, $name: String!, $price: Int!, $quantity: Int!) {
            updateProduct(id: $id, name: $name, price: $price, quantity: $quantity) {id}
        }`,
      variables: { id: generateID(), ...data },
    });
  },

  deleteProduct(id) {
    return this.makeRequest({
      query: `mutation {
        removeProduct(id: "${id}")
      }`,
    });
  },

  getClients() {
    return this.makeRequest({
      query: `{allClients { ${clientAllAttributes} }}`,
      customResponseTarget: "allClients",
    });
  },

  addClient(data) {
    return this.makeRequest({
      query: `mutation($id: ID!, $name: String!, $address: String!) {
            createClient(id: $id, name: $name, address: $address) {id}
        }`,
      variables: { id: generateID(), ...data },
    });
  },

  updateClient(data) {
    return this.makeRequest({
      query: `mutation($id: ID!, $name: String!, $address: String!) {
            updateClient(id: $id, name: $name, address: $address) {id}
        }`,
      variables: { id: generateID(), ...data },
    });
  },

  deleteClient(id) {
    return this.makeRequest({
      query: `mutation {
        removeClient(id: "${id}")
      }`,
    });
  },
};

export default API;
