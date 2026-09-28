const players = []

function add (player) {
    players.push(player)
    return player
}

function listAll() {
    return players
}

module.exports = {
    add,
    listAll
}