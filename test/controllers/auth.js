const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require('chai-as-promised')
const AuthController = require('../../controllers/auth');

chai.use(chaiAsPromised);
chai.should();

describe('AuthConroller', () => {
    var authController;
    before(() => {
        authController = new AuthController();
    });

    describe('isAuthorized', () => {
        it('should return false if not authorized', () => {
            var isAuth = authController.isAuthorized(['user'], 'admin')
            expect(isAuth).to.be.false;
        });
        it('should return true if authorized', () => {
            var isAuth = authController.isAuthorized(['user', 'admin'], 'admin');
            expect(isAuth).to.be.true;
        });
    });

    describe.skip('isAuthorizedAsync', () => {
        it('should return false if not authorized', function(done) {
            this.timeout(2500);
            authController.isAuthorizedAsync(['user'], 'admin', (isAuth) => {
                assert.equal(false, isAuth);
                done();
            });
        });
    });

    describe('isAuthorizedPromise', () => {
        it('should return false if not authorized', function() {
            isAuth = authController.isAuthorizedPromise(['root'], 'admin');
            return isAuth.should.eventually.be.false;
        });
    });
});