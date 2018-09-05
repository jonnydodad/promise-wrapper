const promiseWrapper = promise => (
  promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ error, data: null }))
);

module.exports = promiseWrapper;