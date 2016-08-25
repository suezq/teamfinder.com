var bcrypt = require('bcryptjs')

module.exports = function(db, router) {

	router.post('/api/register', function(req, res) {
		db.User.find({ email: req.body.email }, function(err, result) {
			if (err) return res.status(500).send(err)
			
			if (result.length > 0) {
				return res.status(403).send("User already signed up!")
			}

			if (req.body.password != req.body.password2) {
				return res.status(400).send("Passwords must match!")
			}

			var User = new db.User({
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
				city: req.body.city,
				sport: req.body.sport,
				type: req.body.type,
				league: req.body.league
			})

			User.save(function(err, UserObj) {
				if (err) return res.status(500).send(err)
				return res.status(200).send("User signed up!")
			})
		})
	})

	router.post('/api/login', function(req ,res) {
		db.User.find({ email: req.body.email }, function(err, result) {
			if (err) return res.status(500).send(err)
			if (result.length == 0) {
				return res.status(400).send("User does not exist...")
			}
			if (bcrypt.compareSync(req.body.password, result[0].password)) {
				req.session.User = result[0]
				return res.status(200).send(result[0])
			} else {
				return res.status(403).send("Incorrect password!!!")
			}
		})
	})

	router.patch('/api/user', function(req, res) {
		var User = req.session.User
			User = {
				city: req.body.city,
				sport: req.body.sport,
				type: req.body.type,
				league: req.body.league
			}
		db.User.update({email: req.session.User.email}, User, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send("User updated!")
		})
	})

	router.get('/api/user', function(req, res) {
		db.User.find({ email: req.session.User.email}, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send(result[0])
		})
	})

	return router
}