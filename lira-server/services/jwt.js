const jwt = require('jwt-simple');
const moment = require('moment');

//Esta clave puede ser cualquiera que yo invente y tiene que ser secreta
//Es para el token, y no importa el tamaño
const SECRET_KEY = '*g/m)#E()VHC3h';

//Funcion que crear el acces token
exports.createAccessToken = function(user) {
	const payload = {
		id: user._id,
		name: user.name,
		lastname: user.lastname,
		email: user.email,
		role: user.role,
		createToken: moment().unix(),
		exp: moment().add(3, 'hours').unix()
	};

	return jwt.encode(payload, SECRET_KEY);
};

//Funcion que crear el refresh token
exports.createRefreshToken = function(user) {
	const payload = {
		id: user._id,
		exp: moment().add(30, 'days').unix()
	};

	return jwt.encode(payload, SECRET_KEY);
};

//Funcion para descodificar nuestro token

exports.decodedToken = function(token) {
	return jwt.decode(token, SECRET_KEY, true);
};
