var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production:
    "mongodb+srv://suejohnmo:Seiko@1979@gcluster0.a79zr.mongodb.net/darkroom?retryWrites=true&w=majority",
  development:
    "mongodb+srv://suejohnmo:Seiko@1979@cluster0.a79zr.mongodb.net/darkroom-dev?retryWrites=true&w=majority",
  test:
    "mongodb+srv://suejohnmo:Seiko@1979@cluster0.a79zr.mongodb.net/darkroom-test?retryWrites=true&w=majority",
};
module.exports = config;
