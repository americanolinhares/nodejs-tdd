let products = {
    items: [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product1 description',
            price: 19.00
        }
    ]
}

module.exports = {
    get(_, res) {
        res.json({ title: 'Products page' });
    },
    getById(req, res) {
        if (!req.params.id) {
            res.json({ error: 'Should receive an id' })
        }

        res.json({ success: 'Id received!' })
    },
    post(req, res) {
        if (req.body.description.lenght < 10 || req.body.price <= 0) {
            return res.json({ error: 'Invalid Input' });
        }
        else {
            products.items.push(req.body);
           return  res.json({ success: 'Product received!' });
        }
    }
};
