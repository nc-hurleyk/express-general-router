// Dinosaurs don't exist, so this just rejects with an error

module.exports = {
  get() {
    return new Promise((resolve, reject) => {
      reject({
        message: 'Dinosars are extinct'
      })
    });
  },

  getAll() {
    return new Promise((resolve, reject) => {
      reject({
        message: 'Dinosars are extinct'
      })
    });
  }
}