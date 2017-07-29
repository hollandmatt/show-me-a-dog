module.exports = `
<html>
  <head>
    <title>Show Me A Dog</title>
  </head>
  <body>
    <h1>Show Me A...</h1>
    <div>
      <ul>
        {{#each breeds}}
          <li>{{this}}</li>
        {{/each}}
      </ul>
    </div>
  </body>
</html>
`;
