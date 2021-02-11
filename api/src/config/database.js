require('../bootstrap');

module.exports = {
  db: {
    connectionString: process.env.MONGO_URL,
  },
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
