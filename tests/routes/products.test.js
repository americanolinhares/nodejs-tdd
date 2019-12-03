const expect = require('chai').expect;

const { get, getById, post } = require('../../routes/productsController');

let req = {
    body: {
        id: 2,
        name: 'Product 2',
        description: 'Product 2',
        price: 30.00
    },
    params: {},
};

let reqInvalidDescription = {
    body: {
        id: 3,
        name: 'Product 3',
        description: "Des",
        price: 10
    }
};

let reqInvalidPrice = {
    body: {
        id: 4,
        name: 'Product 4',
        description: 'Product4 description',
        price: 0.00
    }
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
    }),
    describe('post() function', function() {

        it('should add Product', function() {
            post(req, res);
            expect(res.jsonCalledWith).to.be.eql({ success: 'Product received!'});
        });

        it('should not add Product - invalid price', function() {
            post(reqInvalidPrice, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'Invalid Input'});
        });

        it('should not add Product - invalid description', function() {
            post(reqInvalidDescription, res);
            expect(res.jsonCalledWith).to.be.eql({ error: 'Invalid Input'});
        });
    })
});




/*
        it('should not add Product', function() {  
            post(req, res);
            expect(res.jsonCalledWith).to.be.have.key('error')
        });
*/