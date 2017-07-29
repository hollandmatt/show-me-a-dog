'use strict';

const fetch = require('isomorphic-unfetch');
const Handlebars = require('handlebars');

const templateSource = require('./template');
const template = Handlebars.compile(templateSource);

module.exports.list = (event, context, callback) => {
  fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
    return response.json();
  }).then((json) => {
    const breedNames = Object.keys(json.message);

    const context = {
      breeds: breedNames
    };

    const html = template(context);

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: html
    };

    callback(null, response);
  });
};

module.exports.show = (event, context, callback) => {
};
