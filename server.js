const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const arr = ['camry', 'corolla' , 'supra' , 'yaris' , 'landcruiser'];
const carDatabase = [
    {'brand':'toyota','model':'camry','year':2012},
    {'brand':'toyota','model':'corolla','year':2020},
    {'brand':'toyota','model':'supra','year':2018},
    {'brand':'toyota','model':'yaris','year':2012},
    {'brand':'toyota','model':'landcruiser','year':2014}
]



app.listen(3000, onStart());
app.get('/car', (req, res)=>{

    var carData = carDatabase.find(car => car.model === req.query.model)
    res.send(carData);
    
    })

function onStart() {
    console.log('hello');
}
