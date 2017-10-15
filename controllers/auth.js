class AuthController {

    isAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    isAuthorizedAsync(roles, neededRole, callback) {
        setTimeout(() => {callback(roles.indexOf(neededRole) >=0 )}, 2100);
    }
}

module.exports = AuthController;