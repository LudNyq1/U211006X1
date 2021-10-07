exports.index = (req, res) => {
    res.sendfile('public/html/cars.html');
};

exports.car_by_id = (req, res) => {
    const cars = require('../public/data/cars.json');

    let car_data = cars.find( x => {
        return x.Id == req.params.Id;
    });
    //Converts car_data into document readable raw text
    var data = 'ID: ' + car_data.Id + ' Make: ' + car_data.Make + ' Model: ' + 
    car_data.Model + ' Color: ' + car_data.Color+ ' Km: ' + 
    car_data.Km+ ' Price: ' + car_data.Price+ '$ Year: ' + car_data.Year;

    res.send(data);
};