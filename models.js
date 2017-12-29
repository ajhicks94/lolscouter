const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    p5: String
  });

const playerSchema = new mongoose.Schema({
    account_id: Number,
    summoner_id: Number,
    summoner_name: String,
    games_played: Number,
    wins: Number,
    losses: Number,
    rank: {
        current: {
            season: Number,
            tier: String,
            division: Number
        },

        // List of previous season ranks
        previous: [{

            // Might need to change this structure depending on RIOT API
            season: Number,
            tier: String,
            division: Number
        }]
    },
    champions: [{
        champion_id: Number,
        champion_name: String,
        wins: Number,
        losses: Number,
        games_played: Number,
        kills: Number,
        deaths: Number,
        assists: Number,

        // List of champions played vs
        matchups: [{
            champion_id: Number,
            champion_name: String,
            wins: Number,
            losses: Number,
            games_played: Number,

            // List of keystones used
            keystones: [{
                keystone_id: Number,
                keystone_name: String,
                wins: Number,
                losses: Number,
                games_played: Number,

                // List of keystones played vs
                vs_keystones: [{
                    keystone_id: Number,
                    keystone_name: String,
                    wins: Number,
                    losses: Number,
                    games_played: Number
                }]
            }]
        }]
    }]
})

mongoose.model("Team", teamSchema);
mongoose.model("Player", playerSchema);