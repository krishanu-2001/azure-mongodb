const createMongoClient = require("../shared/mongo");

module.exports = async function (context, req) {
  const message = req.body || {};

  if (message) {
    context.res = {
      status: 400,
      body: "Message field is empty!",
    };
  }

  const { db, connection } = await createMongoClient();

  const Messages = db.collection("message");

  try {
    const messages = await Messages.insert(message);
    connection.close();

    context.res = {
      status: 201,
      body: message.ops[0],
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "Error creating a new message",
    };
  }
};
