class AuthController {

    isAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    isAuthorizedAsync(roles, neededRole, callback) {
        setTimeout(() => {callback(roles.indexOf(neededRole) >=0 )}, 2100);
    }

    isAuthorizedPromise(roles, neededRole) {
        return new Promise(resolve => {
            setTimeout(() => {resolve(roles.indexOf(neededRole) >=0 )}, 0);
        })
    }
}

module.exports = AuthController;