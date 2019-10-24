const axios = require('axios');
const rootCloudFunc = 'https://us-central1-resumeproj.cloudfunctions.net/';

var corsOptions = {
    origin: 'http://liangpeter.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const apiDef = (app, cors) => { 
    app.get('/api/user', cors(corsOptions), (req, res, next) => {
        console.log('get user');
        try {
            console.log(req.query);
            axios.get(rootCloudFunc + 'user', {params: req.query})
                .then((result) => {
                    console.log(result.data);
                    res.status(200).json(result.data);
                })
                .catch((err) => res.send(err));
        } catch(err) {
        console.log('error:' + req);
        }
    });
    
    app.get('/api/notes', cors(corsOptions), (req, res, next) => {
        console.log('get notes');
        try {
            console.log(req.query);
            axios.get(rootCloudFunc + 'notes', {params: req.query})
                .then((result) => {
                console.log(result.data);
                res.status(200).json(result.data);
                })  
                .catch((err) => res.send(err));
        } catch(err) {
        console.log('error:' + req);
        }
    });

    app.put('/api/notes', cors(corsOptions), (req, res, next) => {
        console.log('update notes');
        try {
            console.log(req.body);
            axios.put(rootCloudFunc + 'notes', req.body)
                .then((result) => {
                console.log(result.data);
                res.status(200).json(result.data);
                })  
                .catch((err) => res.send(err));
        } catch(err) {
            console.log('error:' + req);
        }
    });

    app.post('/api/notes', cors(corsOptions), (req, res, next) => {
        console.log('create notes');
        try {
            console.log(req.body);
            axios.post(rootCloudFunc + 'notes', req.body)
                .then((result) => {
                    console.log(result.data);
                    res.status(200).json(result.data);
                })
                .catch((err) => res.send(err));
        } catch(err) {
            console.log('error:' + req);
        }
    });

    app.delete('/api/notes', cors(corsOptions), (req, res, next) => {
        console.log('delete notes');
        try {
            console.log(req.body);
            axios.delete(rootCloudFunc + 'notes', {data: req.body})
                .then((result) => {
                    console.log(result.data);
                    res.status(200).json(result.data);
                })
                .catch((err) => res.send(err));
        } catch(err) {
            console.log('error:' + req);
        }
    });
}

module.exports = {
    apiDef,
};
