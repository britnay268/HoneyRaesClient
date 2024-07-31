const getCustomers = () => new Promise((resolve, reject) => {
  fetch("/api/customers", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((resolve) => resolve.json())
  .then((data) => resolve(data))
  .catch(reject);
});

const getCustomerById = (id) => new Promise((resolve, reject) => {
  fetch(`/api/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((resolve) => resolve.json())
  .then((data) => resolve(data))
  .catch(reject);
});

export {getCustomers, getCustomerById};
