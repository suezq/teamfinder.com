module.exports = function(mongoose) {
	return mongoose.model(
		'Team',
		{
			'UserEmail': String,
			'pocName': String,
			'pocEmail': String,
			'pocPhone': String,
			'sport': String,
			'type': String,
			'league': String,
			'city': String,
			'logo': String,
			'gallery': Array
		}
	)
}