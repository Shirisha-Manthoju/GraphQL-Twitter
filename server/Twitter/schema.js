const { gql } = require("apollo-server")

exports.typeDefs = gql`
    type Query {
        Tweet(id:ID!) : Tweet
        Tweets: [Tweet!]!
    }

    type Tweet {
        id: ID!
        body: String
        date: Date
        Author: User
        Stats: Stat
    }

    scalar Date

    type User {
        id: ID!
        username: String
        first_name: String
        last_name: String
        avatar_url: String
        name: String
    }

    type Stat {
        views: Int
        likes: Int
        retweets: Int
        responses: Int     
    }

`
