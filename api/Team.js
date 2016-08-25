module.exports = function(db, router) {

	router.post('/api/team', function(req, res) {
		req.body.UserEmail = req.session.User.email
		var Team = new db.Team(req.body)
		Team.save(Team, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send("Team created!")
		})
	})

	router.get('/api/team', function(req, res) {
		db.Team.find(req.query, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send(result)
		})
	})

	router.get('/api/team/:teamId', function(req,res) {
		db.Team.find({ _id: req.params.teamId }, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send(result[0])
		})
	})

	router.patch('/api/team/:teamId', function(req, res) {
		db.Team.update({ _id: req.params.teamId }, req.body, function(err, result) {
			if (err) return res.status(500).send(err)
			return res.status(200).send('Team updated!')
		})
	})

	return router
}