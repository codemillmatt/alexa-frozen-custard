var APP_ID = 'amzn1.echo-sdk-ams.app.681413a8-bddd-4731-9af8-a8eb8f728280';

var AlexaSkill = require('./AlexaSkill');
var moment = require('moment');
var _ = require('lodash');

var allFlavors = [  
  { 'date': '05-14-2016', 'flavor': 'Espresso'},
  { 'date': '05-15-2016', 'flavor': 'Cookie Dough'},
  { 'date': '05-16-2016', 'flavor': 'Milk Chocolate Almond'},
  { 'date': '05-17-2016', 'flavor': 'Caramel Pecan Drizzle'},
  { 'date': '05-18-2016', 'flavor': 'Cherry Amaretto'},
  { 'date': '05-19-2016', 'flavor': 'Pina Colada'},
  { 'date': '05-20-2016', 'flavor': 'Coffee Chocolate Chip'},
  { 'date': '05-21-2016', 'flavor': 'Elephant Tracks'},
  { 'date': '05-22-2016', 'flavor': 'Chocolate Chocolate Chip'},
  { 'date': '05-23-2016', 'flavor': 'Managers Choice'},
  { 'date': '05-24-2016', 'flavor': 'Death By Chocolate'},
  { 'date': '05-25-2016', 'flavor': 'Caramel Drizzle Cake Roll'},
  { 'date': '05-26-2016', 'flavor': 'Mint Chocolate Chip'},
  { 'date': '05-27-2016', 'flavor': 'Coconut'},
  { 'date': '05-28-2016', 'flavor': 'Raspberry Truffle Cheesecake'},
  { 'date': '05-29-2016', 'flavor': 'Peanut Butter Cup'},
  { 'date': '05-30-2016', 'flavor': 'Roca Crunch'},
  { 'date': '05-31-2016', 'flavor': 'Bavarian Thin Mint'},
  { 'date': '06-01-2016', 'flavor': 'Coffee Chocolate Chip'},
  { 'date': '06-02-2016', 'flavor': 'Moose Tracks'},
  { 'date': '06-03-2016', 'flavor': 'Mint Oreo'},
  { 'date': '06-04-2016', 'flavor': 'Cookie Dough'},
  { 'date': '06-05-2016', 'flavor': 'Coconut'},
  { 'date': '06-06-2016', 'flavor': 'Managers Choice'},
  { 'date': '06-07-2016', 'flavor': 'Butter Pecan'},
  { 'date': '06-08-2016', 'flavor': 'Strawberry'},
  { 'date': '06-09-2016', 'flavor': 'Peanut Butter Cookie Dough'},
  { 'date': '06-10-2016', 'flavor': 'Vanilla Chocolate Chip'},
  { 'date': '06-11-2016', 'flavor': 'Cake Roll'},
  { 'date': '06-12-2016', 'flavor': 'Bavarian Thin Mint'},
  { 'date': '06-13-2016', 'flavor': 'Chocolate English Toffee'},
  { 'date': '06-14-2016', 'flavor': 'Caramel Cashew'},
  { 'date': '06-15-2016', 'flavor': 'I love Elvis'},
  { 'date': '06-16-2016', 'flavor': 'Death By Chocolate'},
  { 'date': '06-17-2016', 'flavor': 'Brownies and Cream'},
  { 'date': '06-18-2016', 'flavor': 'Elephant Tracks'},
  { 'date': '06-19-2016', 'flavor': 'Chocolate Chocolate Chip'},
  { 'date': '06-20-2016', 'flavor': 'Managers Choice'},
  { 'date': '06-21-2016', 'flavor': 'butter Pecan'},
  { 'date': '06-22-2016', 'flavor': 'Espresso'},
  { 'date': '06-23-2016', 'flavor': 'Blue Moon'},
  { 'date': '06-24-2016', 'flavor': 'French Silk'},
  { 'date': '06-25-2016', 'flavor': 'Raspberries and Cream'},
  { 'date': '06-26-2016', 'flavor': 'Oreo'},
  { 'date': '06-27-2016', 'flavor': 'Chocolate Espesso Almond'},
  { 'date': '06-28-2016', 'flavor': 'Caramel Cashew'},
  { 'date': '06-29-2016', 'flavor': 'Mint Chocolate Chip'},
  { 'date': '06-30-2016', 'flavor': 'Key Lime'},
  { 'date': '07-01-2016', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '07-02-2016', 'flavor': 'Cookie Dough'},
{ 'date': '07-03-2016', 'flavor': 'Double Berry'},
{ 'date': '07-04-2016', 'flavor': 'Freedom'},
{ 'date': '07-05-2016', 'flavor': 'Butter Pecan'},
{ 'date': '07-06-2016', 'flavor': 'French Silk'},
{ 'date': '07-07-2016', 'flavor': 'Raspberries and Cream'},
{ 'date': '07-08-2016', 'flavor': 'Chocolate Malt'},
{ 'date': '07-09-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '07-10-2016', 'flavor': 'Death By Chocolate'},
{ 'date': '07-11-2016', 'flavor': 'Managers Choice'},
{ 'date': '07-12-2016', 'flavor': 'Caramel Cashew'},
{ 'date': '07-13-2016', 'flavor': 'Strawberry'},
{ 'date': '07-14-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '07-15-2016', 'flavor': 'Cake Roll'},
{ 'date': '07-16-2016', 'flavor': 'Oreo'},
{ 'date': '07-17-2016', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '07-18-2016', 'flavor': 'Caramel Pecan Drizzle'},
{ 'date': '07-19-2016', 'flavor': 'Milk Chocolate Almond'},
{ 'date': '07-20-2016', 'flavor': 'Blue Moon'},
{ 'date': '07-21-2016', 'flavor': 'Raspberry'},
{ 'date': '07-22-2016', 'flavor': 'Key Lime'},
{ 'date': '07-23-2016', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '07-24-2016', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '07-25-2016', 'flavor': 'Managers Choice'},
{ 'date': '07-26-2016', 'flavor': 'Butter Pecan'},
{ 'date': '07-27-2016', 'flavor': 'Chocolate Peanut Butter'},
{ 'date': '07-28-2016', 'flavor': 'Roca Crunch'},
{ 'date': '07-29-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '07-30-2016', 'flavor': 'Mint Oreo'},
{ 'date': '07-31-2016', 'flavor': 'Espresso'},
{ 'date': '08-01-2016', 'flavor': 'Cookie Dough'},
{ 'date': '08-02-2016', 'flavor': 'Milk Chocolate Almond'},
{ 'date': '08-03-2016', 'flavor': 'Caramel Pecan Drizzle'},
{ 'date': '08-04-2016', 'flavor': 'Cherry Amaretto'},
{ 'date': '08-05-2016', 'flavor': 'Pina Colada'},
{ 'date': '08-06-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '08-07-2016', 'flavor': 'Elephant Tracks'},
{ 'date': '08-08-2016', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '08-09-2016', 'flavor': 'Managers Choice'},
{ 'date': '08-10-2016', 'flavor': 'Death By Chocolate'},
{ 'date': '08-11-2016', 'flavor': 'Caramel Drizzle Cake Roll'},
{ 'date': '08-12-2016', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '08-13-2016', 'flavor': 'Coconut'},
{ 'date': '08-14-2016', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '08-15-2016', 'flavor': 'Peanut Butter Cup'},
{ 'date': '08-16-2016', 'flavor': 'Roca Crunch'},
{ 'date': '08-17-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '08-18-2016', 'flavor': 'Moose Tracks'},
{ 'date': '08-19-2016', 'flavor': 'Mint Oreo'},
{ 'date': '08-20-2016', 'flavor': 'Butter Pecan'},
{ 'date': '08-21-2016', 'flavor': 'Strawberry'},
{ 'date': '08-22-2016', 'flavor': 'Peanut Butter Cookie Dough'},
{ 'date': '08-23-2016', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '08-24-2016', 'flavor': 'Cake Roll'},
{ 'date': '08-25-2016', 'flavor': 'Chocolate English Toffee'},
{ 'date': '08-26-2016', 'flavor': 'Caramel Cashew'},
{ 'date': '08-27-2016', 'flavor': 'I love Elvis'},
{ 'date': '08-28-2016', 'flavor': 'Brownies and Cream'},
{ 'date': '08-29-2016', 'flavor': 'Espresso'},
{ 'date': '08-30-2016', 'flavor': 'Blue Moon'},
{ 'date': '08-31-2016', 'flavor': 'French Silk'},
{ 'date': '09-01-2016', 'flavor': 'Mint Oreo and Chocolate Chocolate Chip'},
{ 'date': '09-02-2016', 'flavor': 'Elephant Tracks'},
{ 'date': '09-03-2016', 'flavor': 'Raspberry'},
{ 'date': '09-04-2016', 'flavor': 'Espresso'},
{ 'date': '09-05-2016', 'flavor': 'Managers Choice and Mint Chocolate Chip'},
{ 'date': '09-06-2016', 'flavor': 'Caramel Cashew and Death by Chocolate'},
{ 'date': '09-07-2016', 'flavor': 'Roca Crunch and Peanut Butter Oreo'},
{ 'date': '09-08-2016', 'flavor': 'Cherry Amaretto and Cake Roll'},
{ 'date': '09-09-2016', 'flavor': 'Brownies and Cream'},
{ 'date': '09-10-2016', 'flavor': 'Badger Tracks'},
{ 'date': '09-11-2016', 'flavor': 'Oreo'},
{ 'date': '09-12-2016', 'flavor': 'Chocolaate Espresso Almond and Vanilla Chocolate Chip'},
{ 'date': '09-13-2016', 'flavor': 'Butter Pecan and Peanut Butter Cookie Dough'},
{ 'date': '09-14-2016', 'flavor': 'Bavarian Thin Mint and Brownies and Cream'},
{ 'date': '09-15-2016', 'flavor': 'Pumpkin and Bear Claw'},
{ 'date': '09-16-2016', 'flavor': 'Coffee Oreo'},
{ 'date': '09-17-2016', 'flavor': 'Badger Tracks'},
{ 'date': '09-18-2016', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '09-19-2016', 'flavor': 'Managers Choice and Milk Chocolate Almond'},
{ 'date': '09-20-2016', 'flavor': 'Caramel Pecan Drizzle and Pumpkin'},
{ 'date': '09-21-2016', 'flavor': 'Coffee Chocolate Chip and Peanut Butter Cup'},
{ 'date': '09-22-2016', 'flavor': 'Black Forest and Oreo'},
{ 'date': '09-23-2016', 'flavor': 'French Silk'},
{ 'date': '09-24-2016', 'flavor': 'Cake Roll'},
{ 'date': '09-25-2016', 'flavor': 'Cookie Dough'},
{ 'date': '09-26-2016', 'flavor': 'Chocolate Pecan and Caramel Drizzle Cake Roll'},
{ 'date': '09-27-2016', 'flavor': 'Caramel Cashel and Elephant Tracks'},
{ 'date': '09-28-2016', 'flavor': 'Chocolate Peanut Butter and Brownies and Cream'},
{ 'date': '09-29-2016', 'flavor': 'Raspberry Truffle Cheesecake and Cake Roll'},
{ 'date': '09-30-2016', 'flavor': 'Pumpkin'}
];

var FotD = function () {
  AlexaSkill.call(this, APP_ID);
};

FotD.prototype = Object.create(AlexaSkill.prototype);
FotD.prototype.constructor = FotD;

FotD.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session) {
  console.log("FotD onSessionStarted requestId: " + sessionStartedRequest.requestId
      + ", sessionId: " + session.sessionId);
};

FotD.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  console.log("FotD onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
  getWelcomeResponse(response);
};

FotD.prototype.eventHandlers.onSessionEnded = function(sessionEndedRequest, session) {
  console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", SessionID: " + session.sessionId);
};

FotD.prototype.intentHandlers = {
  
  "FindFlavorIntent": function (intent, session, response) {
        handleFlavorRequest(intent, session, response);
    },
  
  "FindNextFlavorDateIntent": function(intent, session, response) {
    handleFindNextRequest(intent, session, response);
  },
  
  "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "You'll be back",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "Goodbye",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    },
    
    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "With the Flavor of the Day Finder, just tell me the date, and I'll tell you the delicious flavor " +
            "that Michael's is serving up. For example, you could say today, or August fifteenth.";
            
        var repromptText = "Which day do you want?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    }     
};

function getWelcomeResponse(response) {
  var speechText = "<p>Digging on some custard? Welcome to Michael's Flavor of the Day Finder!</p><p>What day do you want to know the flavor for?</p>";
  var repromptText = "All you need to do is tell me the date, and I'll tell you the delicious, delicious flavor you could be eating in five minutes! Now what date do you want to know about?";
  
  var speechOutput = {
    speech: "<speak>" + speechText + "</speak>",
    type: AlexaSkill.speechOutputType.SSML
  };
  
  var repromptOutput = {
    speech: repromptText,
    type: AlexaSkill.speechOutputType.PLAIN_TEXT
  };
  
  response.ask(speechOutput, repromptText);
}

function handleFlavorRequest(intent, session, response) {
  var daySlot = intent.slots.day;
  var date;
  
  if (daySlot && daySlot.value) {
    console.log("day has been found: " + daySlot.value);
    date = moment(daySlot.value, 'YYYY-MM-DD');
  } else {
    console.log("day has not been found" + daySlot);
    date = moment().utcOffset(-5);
  }
  
  var formattedDay = date.format("MM-DD-YYYY");
  var theFlavor = _.find(allFlavors, function(f) { return f.date === formattedDay; });
  
  if (theFlavor) {
    response.tell("The flavor on " + formattedDay + " is " + theFlavor.flavor + ", yum!");
  } else {
    response.tell("Oh snap! I couldn't find the flavor. You better go and find out for yourself!");
  }
}

function handleFindNextRequest(intent, session, response) {
  var flavorSlot = intent.slots.flavor;
  var theFlavor = "";
  
  if (flavorSlot && flavorSlot.value) {
    theFlavor = flavorSlot.value.toLowerCase();
    
    var nextUp = _.find(allFlavors, function(f) { return f.flavor.toLowerCase() === theFlavor && moment(f.date, "MM-DD-YYYY").isAfter(moment().utcOffset(-5)); });
    
    if (nextUp) {            
      response.tell(theFlavor + " will next be served on " + nextUp.date + ". Put it on the calendar!");
    } else {
      response.tell("Darn it! My psychic abilities don't tell me when that flavor will be coming up! Why don't you just take your chances today?");
    }
  } else {
    response.tell("Whoa! I don't even recognize that flavor! I bet it would be delicious.");
  }
}

exports.handler = function (event, context) {
  var skill =  new FotD();
  skill.execute(event, context);
}