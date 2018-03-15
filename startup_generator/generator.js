/*
Write a javascript program that randomly generates a startup idea for you. Each time you run it, you should see a random combination from the two arrays below for a great startup idea, e.g. "Skynet for Pandas"

Use the arrays below to get started:
*/

var thisArray = ["Skynet","Digital Music Distribution",
"FitBit","Realtime Data","ManPacks","Landing Page",
"Conversion Funnel","Social Network","Airbnb","SnapChat",
"Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
"Node.js Server","KickStarter","Match.com","Adultfriendfinder",
"Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
"Distributed Social Network","Quadcopter","Daring Fireball",
"Content Distribution Network","Analytics Platform","OpenTable",
"LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
"Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
"Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];

var thatArray = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
"Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
"Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
"Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
"Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];


function indexGenerator(max) {  //function to make random number
  return Math.floor(Math.random() * Math.max(max));
}


function startupPitch() {
  console.log(`Hey, let me tell you about my new startup.\nIt's basically ${thisArray[indexGenerator(thisArray.length)]} for ${thatArray[indexGenerator(thatArray.length)]}.`);
}

function myNewStartUp() { //function to create startup string
  return `${thisArray[indexGenerator(thatArray.length)]} for ${thatArray[indexGenerator(thatArray.length)]}`;
}



// var foo = myNewStartUp();

/*
Extension

Add each random combo that gets generated into an array. When the array contains 5 random combos, print them out in order with a number prefixing each one e.g.

*/
var topFive =[]; //init array to hold ideas

for (i = 0; i < 5; i++) {  // loads idea into array
  topFive.push(`${i+1}. ${myNewStartUp()}`);
  if (topFive.length === 5) {  //if the array holds five ideas console log the ideas
    console.log("Hey let me tell you about my startup ideas.")
    for (j = 0; j < topFive.length; j++) {
      console.log(topFive[j]);
    }
  }
}


/*
Start up ideas just for your mum.

*/

function mumStartUp() {
  return `${thisArray[indexGenerator(89)]} for Your Mum`;
}


var mumFive = [];

function yourMum () {
  for (x = 0; x < 5; x++) {
    mumFive.push(`${x+1}. ${mumStartUp()}`);
    if (mumFive.length === 5) {
      console.log("Hey let me tell you about my startup ideas.")
      for (var j = 0; j < mumFive.length; j++) {
        console.log(mumFive[j]);
      }
    }
  }

}

