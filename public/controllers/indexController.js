exports.index = (req, res) =>{
    const data = require('public/html/index.html');
    res.sendfile(data);
}