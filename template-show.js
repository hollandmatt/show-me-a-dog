module.exports = `
<html>
  <head>
    <title>Show Me A Dog</title>
    <style>{{{css}}}</style>
  </head>
  <body>
    <h1>Here is your {{breed}}!</h1>
    <div><img src="{{image}}"></div>
    <div>
      <a href="javascript:window.location.reload(false);">Another?</a>
      <a href=".">Change breed?</a>
    </div>
  </body>
</html>
`;
