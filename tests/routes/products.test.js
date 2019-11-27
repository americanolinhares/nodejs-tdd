const expect = require('chai').expect;

const { get, getById, post } = require('../../routes/productsController');

let req = {
    body: {
        id: 2,
        name: 'Product 2',
        description: 'Produ',
        price: 20.00
    },
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
        it('should return object with title ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.eql({ title: 'Products page'});
        });

        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });

        it('should not add Product', function() {  
            post(req, res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });
    })
});