const assert = require('assert');
const expect = require('chai').expect;

describe('Basic Mocha Test', () => {

    var objA = {name: 'Vina', gender: 'male'};

    it('should throw errors', () => {
        assert.equal(3,3);
    });

    it('should verify equal objects', () => {
        var objB = {name: 'Vina', gender: 'male'};
        expect(objA).to.be.deep.equal(objB);
        // if "deep" is not specified, chai will expect objects to have the same memory address
    });

    it('should verify if object does not have property', () => {
        expect(objA).to.not.have.property('role');
    });

    it('should verify if object has property', () => {
        expect(objA).to.have.property('gender');
    });

    it('should allow testing nulls', () => {
        var iAmNull = null;
        expect(iAmNull).to.not.exist;
    });
});