Package.describe({
  summary: "Extended and Extensible JSON library",
<<<<<<< HEAD
  version: '1.1.0'
=======
  version: '1.0.13'
>>>>>>> meteor/devel
});

Package.onUse(function (api) {
  api.use(['underscore', 'base64']);
  api.export('EJSON');
  api.export('EJSONTest', {testOnly: true});
  api.addFiles('ejson.js', ['client', 'server']);
  api.addFiles('stringify.js', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('ejson', ['client', 'server']);
  api.use(['tinytest', 'underscore']);

  api.addFiles('custom_models_for_tests.js', ['client', 'server']);
  api.addFiles('ejson_test.js', ['client', 'server']);
});
