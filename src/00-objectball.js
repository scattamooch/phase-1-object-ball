function gameObject() {
    return {home: {
        teamName: 'Brooklyn Nets' ,
        colors: ['black', 'white'], 
        players: {'Alan Anderson': {Number: 0, shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, slamDunks: 1},
                  'Reggie Evans': {Number: 30, shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, slamDunks: 7},
                  'Brook Lopez': {Number: 11, shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, slamDunks: 15},
                  'Mason Plumlee': {Number: 1, shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, slamDunks: 5},
                  'Jason Terry': {Number: 31, shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, slamDunks: 1}  
                }
    },
    away: {
        teamName: 'Charlotte Hornets' ,
        colors: ['turquoise', 'purple'], 
        players: {'Jeff Adrien': {Number: 4, shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, slamDunks: 2},
                  'Bismak Biyombo': {Number: 0, shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, slamDunks: 10},
                  'DeSagna Diop': {Number: 2, shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, slamDunks: 5},
                  'Ben Gordon': {Number: 8, shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, slamDunks: 0},
                  'Brendan Haywood': {Number: 33, shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, slamDunks: 12}  
                }
    }
    }
}

function numPointsScored(playerName) {
    let stats = gameObject();
    for (let player in stats.home.players) {
        if (player === playerName) {
            return stats.home.players[player].Points;
        }
    }
    for (let player in stats.away.players) {
                if (player === playerName) {
                    return stats.away.players[player].Points
        }
    }
}

//console.log(numPointsScored('Brendan Haywood'));