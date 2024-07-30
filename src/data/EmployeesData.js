const getEmployees = () => new Promise((resolve, reject) => {
  fetch("/api/employees", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((resolve) => resolve.json())
  .then((data) => resolve(data))
  .catch(reject);
});

const getEmployee = (id) => new Promise((resolve, reject) => {
  fetch(`/api/employees/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((resolve) => resolve.json())
  .then((data) => resolve(data))
  .catch(reject);
});

export {getEmployees, getEmployee};
