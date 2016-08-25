module.exports = function(mongoose) {
	return mongoose.model(
		'User',
		{
			'email': String,
			'password': String,
			'city': String,
			'sport': String,
			'type': String,
			'league': String
		}
	)
}