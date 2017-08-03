'use strict';

const fetch = require('isomorphic-unfetch');
const Handlebars = require('handlebars');
const uglifycss = require('uglifycss');

const templateListSource = require('./template-list');
const templateList = Handlebars.compile(templateListSource);
const templateShowSource = require('./template-show');
const templateShow = Handlebars.compile(templateShowSource);

const css = uglifycss.processFiles(['style.css']);

module.exports.list = (event, context, callback) => {
  fetch('https://dog.ceo/api/breeds/list/all').then((response) => {
    return response.json();
  }).then((json) => {
    const breedNames = Object.keys(json.message);

    const context = {
      breeds: breedNames,
      css
    };

    const html = templateList(context);

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
  const breed = event.pathParameters.breed;

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((response) => {
    return response.json();
  }).then((json) => {
    const context = {
      breed,
      css,
      image: json.message
    };

    const html = templateShow(context);

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
