
var restify = require('restify')
var server = restify.createServer()

var lists = require('./lists.js');

server.get('/lists/:listID', function(req, res) {
  const noteID = req.params.listID
  const data = lists.getByID(listID)
  res.setHeader('content-type', 'application/json')
  res.send(data.code, {status: data.status, message: data.message})
  res.end()
})

server.get('/lists', function(req, res) {
  const data = lists.getAll()
  res.setHeader('content-type', 'application/json')
  res.send(data.code, {status: data.status, message: data.message})
  res.end()
})

server.post('/lists', function(req, res) {

})

server.put('/lists/:listID', function(req, res) {

})

server.delete('/lists/:listID', function(req, res) {

})

var port = process.env.PORT || 8080;
server.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('App is ready at : ' + port);
    }
});