// The WeiFund Categories
Categories = new Mongo.Collection('newcategories', {connection: null});
new PersistentMinimongo(Categories);

// The WeiFund Campaigns
Campaigns = new Mongo.Collection('campaigns', {connection: null});
WeiFund.Campaigns(Campaigns);
new PersistentMinimongo(Campaigns);

// For Holding Account names
Names = new Mongo.Collection('names', {connection: null});
new PersistentMinimongo(Names);

// For Holding Account names
Picks = new Mongo.Collection('picks', {connection: null});
new PersistentMinimongo(Picks);
StaffPicks.Picks(Picks);