Package.describe({
  name: 'zodiase:mdl-prompt',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple prompt solution with mdl for meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-mdl-prompt.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('blaze-html-templates');
  api.use('reactive-var');
  api.use('zodiase:mdl@1.0.6_2');
  api.addFiles([
    'template.html',
    'mdl-prompt.css',
    'mdl-prompt.js'
  ], 'client');
});
