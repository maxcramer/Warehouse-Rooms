const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/Warehouse-Rooms';
const secret = process.env.SECRET || 'mrflabernackle';
const port = process.env.PORT || 4000;

module.exports = {
  dbUri, secret, port
};
