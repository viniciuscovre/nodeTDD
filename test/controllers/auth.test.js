const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const sinon          = require('sinon');
const AuthController = require('../../controllers/auth');

chai.use(chaiAsPromised);

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

    describe('isAuthorizedAsync', () => {
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
            return expect(isAuth).to.eventually.be.false;
        });
        it('should return true if authorized', function() {
            isAuth = authController.isAuthorizedPromise(['root', 'admin'], 'admin');
            return expect(isAuth).to.eventually.be.true;
        });
    });

    describe('getIndex', () => {
        it('should render index', () => {
            var req = {};
            var res = {
                render: sinon.spy()
            };
            authController.getIndex(req, res);
            expect(res.render.firstCall.args[0]).to.equal('index');
        });
    });
});