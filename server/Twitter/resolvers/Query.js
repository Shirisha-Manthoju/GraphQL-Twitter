exports.Query = {
  Tweets: (parent, args, { db }) => {
    return db.tweets;
  },
  Tweet: (parent, { id: tweetId }, { db }) => {
    const tweet = db.tweets.find((item) => item.id === tweetId);
    return tweet;
  },
};
