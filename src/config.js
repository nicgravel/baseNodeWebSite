module.exports = {
	cryptoKey: "39472934nkjhf7dyvhskhdfksdf8s7fdsDFSDfsdf9!",
	cookieSecret: process.env.SESSION_SECRET || '!mySecret !s bigger than th@t',
	server: {
		port: process.env.PORT || 3000,
		host: process.env.HOST || 'localhost'
	},
	mysql: {
		connection: {
			connectionLimit: 10,
			database: "dbSchema",
			host: process.env.DB_HOST || 'localhost',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASSWORD || 'allo123',
			supportBigNumbers: 'true',
			insecureAuth: true,
			timezone: 'GMT'
		},
	}

};