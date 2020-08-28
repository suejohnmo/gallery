var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production:
    "mongodb+srv://suejohnmo:S2L33PHHsu49BIsk@cluster0.a79zr.mongodb.net/darkroom?retryWrites=true&w=majority",
  development:
    "mongodb+srv://suejohnmo:S2L33PHHsu49BIsk@cluster0.a79zr.mongodb.net/darkroom-dev?retryWrites=true&w=majority",
  test:
    "mongodb+srv://suejohnmo:S2L33PHHsu49BIsk@cluster0.a79zr.mongodb.net/darkroom-test?retryWrites=true&w=majority",
};
module.exports = config;
