module.exports = {
    port: process.env.PORT || 4000,
    db: {
        connection: "mongodb://chilito:chilito@ds129462.mlab.com:29462/chilitodb"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xl4zmTKox2T"
}