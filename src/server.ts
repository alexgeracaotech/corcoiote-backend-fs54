import express from 'express';

const app = express();

app.use(express.json());

app.get('/customers', (request, response) => {
    const customers = [{
        name: 'Alex Bessa',
        status: true
    }, {
        name: 'Valdiana Bessa',
        status: true
    }, {
        name: 'Ana Bessa',
        status: false
    }];

    response.status(200).json(customers);
});

app.listen(3000);
