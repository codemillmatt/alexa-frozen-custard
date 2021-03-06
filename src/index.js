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
{ 'date': '09-30-2016', 'flavor': 'Pumpkin'},
{ 'date': '10-01-2016', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '10-02-2016', 'flavor': 'Raspberries and Cream'},
{ 'date': '10-03-2016', 'flavor': 'Managers Choice and Vanilla Chocolate Chip'},
{ 'date': '10-04-2016', 'flavor': 'Butter Pecan and Black Forest'},
{ 'date': '10-05-2016', 'flavor': 'Brownies and Cream and Rocky Mountain'},
{ 'date': '10-06-2016', 'flavor': 'Chocolate Malt and Peanut Butter Cookie Dough'},
{ 'date': '10-07-2016', 'flavor': 'Mint Oreo'},
{ 'date': '10-08-2016', 'flavor': 'Pumpkin  '},
{ 'date': '10-09-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '10-10-2016', 'flavor': 'Chocolate Almond and Mint Chocolate Chip'},
{ 'date': '10-11-2016', 'flavor': 'Caramel Cashew and Cake Roll'},
{ 'date': '10-12-2016', 'flavor': 'Espresso and Bear Claw'},
{ 'date': '10-13-2016', 'flavor': 'Pumpkin Caramel Pecan and Peanut Butter Cup'},
{ 'date': '10-14-2016', 'flavor': 'Chocolate English Toffee'},
{ 'date': '10-15-2016', 'flavor': 'Badger Tracks'},
{ 'date': '10-16-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '10-17-2016', 'flavor': 'Managers Choice and Cookie Dough'},
{ 'date': '10-18-2016', 'flavor': 'Caramel Pecan Drizzle and Peanut Butter Cookie Dough'},
{ 'date': '10-19-2016', 'flavor': 'Moose Tracks and Chocolate Chocolate Chip'},
{ 'date': '10-20-2016', 'flavor': 'Brownies and Cream and Caramel Drizzle Cake Roll'},
{ 'date': '10-21-2016', 'flavor': 'Pumpkin'},
{ 'date': '10-22-2016', 'flavor': 'Roca Crunch'},
{ 'date': '10-23-2016', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '10-24-2016', 'flavor': 'Chocolate Pecan and I Love Elvis'},
{ 'date': '10-25-2016', 'flavor': 'Almond Candy Bar and Elephant Tracks'},
{ 'date': '10-26-2016', 'flavor': 'Peanut Butter Oreo and Chocolate Espresso Almond'},
{ 'date': '10-27-2016', 'flavor': 'Mint Brownie and Vanilla Chocolate Chip'},
{ 'date': '10-28-2016', 'flavor': 'Chocolate Malt'},
{ 'date': '10-29-2016', 'flavor': 'Badger Tracks'},
{ 'date': '10-30-2016', 'flavor': 'Peanut Butter Cup'},
{ 'date': '10-31-2016', 'flavor': 'Pumpkin and Vanilla Chocolate Chip'},
{ 'date': '11-02-2016', 'flavor': 'French Silk and Brownies and Cream'},
{ 'date': '11-03-2016', 'flavor': 'Roca Crunch and Caramel Drizzle Cake Roll'},
{ 'date': '11-04-2016', 'flavor': 'Cookie Dough'},
{ 'date': '11-05-2016', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '11-06-2016', 'flavor': 'Raspberries and Cream'},
{ 'date': '11-07-2016', 'flavor': 'Managers Choice and Chocolate Pecan'},
{ 'date': '11-08-2016', 'flavor': 'Caramel Cashew and Rocky Mountain'},
{ 'date': '11-09-2016', 'flavor': 'Peanut Butter Fudge Cake and Espresso'},
{ 'date': '11-10-2016', 'flavor': 'Mint Oreo and Bear Claw'},
{ 'date': '11-11-2016', 'flavor': 'Pumpkin'},
{ 'date': '11-12-2016', 'flavor': 'Badger Tracks'},
{ 'date': '11-13-2016', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '11-14-2016', 'flavor': 'Chocolate Peanut Butter and Cookie Dough'},
{ 'date': '11-15-2016', 'flavor': 'Coffee Toffee Almond and Chocolate Chocolate Chip'},
{ 'date': '11-16-2016', 'flavor': 'Chocolate Malt and Cake Roll'},
{ 'date': '11-17-2016', 'flavor': 'Peppermint Bark and Elephant Tracks'},
{ 'date': '11-18-2016', 'flavor': 'Death By Chocolate'},
{ 'date': '11-19-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '11-20-2016', 'flavor': 'Coffee Oreo'},
{ 'date': '11-21-2016', 'flavor': 'Managers Choice and Cinnamon'},
{ 'date': '11-22-2016', 'flavor': 'Butter Pecan and Black Forest'},
{ 'date': '11-23-2016', 'flavor': 'Pumpkin and Oreo'},
{ 'date': '11-24-2016', 'flavor': 'Closed'},
{ 'date': '11-25-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '11-26-2016', 'flavor': 'Badger Tracks'},
{ 'date': '11-27-2016', 'flavor': 'Cookie Dough'},
{ 'date': '11-28-2016', 'flavor': 'Milk Chocolate Almond and Brownies and Cream'},
{ 'date': '11-29-2016', 'flavor': 'Caramel Drizzle and Vanilla Chocolate Chip'},
{ 'date': '11-30-2016', 'flavor': 'Elephant Tracks and Raspberry'},
{ 'date': '12-01-2016', 'flavor': 'Coffee Oreo and Bear Claw'},
{ 'date': '12-02-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '12-03-2016', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '12-04-2016', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '12-05-2016', 'flavor': 'Managers Choice and Chocolate Espresso Almond'},
{ 'date': '12-06-2016', 'flavor': 'Caramel Cashew and Peanut Butter Oreo'},
{ 'date': '12-07-2016', 'flavor': 'Cherry Amaretto and Black Forest'},
{ 'date': '12-08-2016', 'flavor': 'Roca Crunch and Caramel Drizzle Cake Roll'},
{ 'date': '12-09-2016', 'flavor': 'Chocolate English Toffee'},
{ 'date': '12-10-2016', 'flavor': 'Raspberry'},
{ 'date': '12-11-2016', 'flavor': 'Oreo'},
{ 'date': '12-12-2016', 'flavor': 'Chocolate Almond and Cake Roll'},
{ 'date': '12-13-2016', 'flavor': 'Butter Pecan and Cookie Dough'},
{ 'date': '12-14-2016', 'flavor': 'Mint Brownie and Chocolate Chocolate Chip'},
{ 'date': '12-15-2016', 'flavor': 'Chocolate Cherry Torte and French Silk'},
{ 'date': '12-16-2016', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '12-17-2016', 'flavor': 'Espresso'},
{ 'date': '12-18-2016', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '12-19-2016', 'flavor': 'Managers Choice and Chocolae Pecan'},
{ 'date': '12-20-2016', 'flavor': 'Caramel Cashew and Rocky Mountain'},
{ 'date': '12-21-2016', 'flavor': 'Coffee Oreo and Vanilla Chocolate Chip'},
{ 'date': '12-22-2016', 'flavor': 'Cinnamon and Bear Claw'},
{ 'date': '12-23-2016', 'flavor': 'Chocolate Espresso Almond'},
{ 'date': '12-24-2016', 'flavor': 'Peppermint  '},
{ 'date': '12-25-2016', 'flavor': 'Merry Christmas'},
{ 'date': '12-26-2016', 'flavor': 'Milk Chocolate Almond and Oreo'},
{ 'date': '12-27-2016', 'flavor': 'Caramel Pecan Drizzle and Elephant Tracks'},
{ 'date': '12-28-2016', 'flavor': 'Chocolate Peanut Butter and Cookie Dough'},
{ 'date': '12-29-2016', 'flavor': 'Mint Chocolate Chip and Peanut Butter Cup'},
{ 'date': '12-30-2016', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '12-31-2016', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '01-01-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-02-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-03-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-04-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-05-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-06-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-07-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-08-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-09-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-10-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-11-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-12-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-13-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-14-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-15-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-16-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-17-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-18-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-19-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-20-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-21-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-22-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-23-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-24-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-25-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-26-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-27-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-28-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-29-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-30-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '01-31-2017', 'flavor': 'Sorry - I took the month of January off'},
{ 'date': '02-01-2017', 'flavor': 'Coffee Toffee Almond'},
{ 'date': '02-02-2017', 'flavor': 'Butter Pecan'},
{ 'date': '02-03-2017', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '02-04-2017', 'flavor': 'Peanut Butter Melt Away'},
{ 'date': '02-05-2017', 'flavor': 'Raspberry'},
{ 'date': '02-06-2017', 'flavor': 'Vanilla Pecan'},
{ 'date': '02-07-2017', 'flavor': 'Chocolate Almond'},
{ 'date': '02-08-2017', 'flavor': 'Brownies and Cream'},
{ 'date': '02-09-2017', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '02-10-2017', 'flavor': 'Mint Brownie'},
{ 'date': '02-11-2017', 'flavor': 'Coffee Oreo and Blue Moon'},
{ 'date': '02-12-2017', 'flavor': 'Cookie Dough'},
{ 'date': '02-13-2017', 'flavor': 'Chocolate Peanut Butter'},
{ 'date': '02-14-2017', 'flavor': 'Dark Chocolate Passion'},
{ 'date': '02-15-2017', 'flavor': 'Cherry Amaretto'},
{ 'date': '02-16-2017', 'flavor': 'Elephant Tracks'},
{ 'date': '02-17-2017', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '02-18-2017', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '02-19-2017', 'flavor': 'Oreo'},
{ 'date': '02-20-2017', 'flavor': 'Roca Crunch'},
{ 'date': '02-21-2017', 'flavor': 'Chocolate Pecan'},
{ 'date': '02-22-2017', 'flavor': 'Raspberries and Cream'},
{ 'date': '02-23-2017', 'flavor': 'French Silk'},
{ 'date': '02-24-2017', 'flavor': 'Peanut Butter Cup'},
{ 'date': '02-25-2017', 'flavor': 'Mint Oreo and Blue Moon'},
{ 'date': '02-26-2017', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '02-27-2017', 'flavor': 'Milk Chocolate Almond'},
{ 'date': '02-28-2017', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '03-01-2017', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '03-02-2017', 'flavor': 'Coffee Oreo'},
{ 'date': '03-03-2017', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '03-04-2017', 'flavor': 'Strawberry'},
{ 'date': '03-05-2017', 'flavor': 'Cookie Dough'},
{ 'date': '03-06-2017', 'flavor': 'Caramel Cashew'},
{ 'date': '03-07-2017', 'flavor': 'Chocolate Pecan'},
{ 'date': '03-08-2017', 'flavor': 'Mint Oreo'},
{ 'date': '03-09-2017', 'flavor': 'Elephant Tracks'},
{ 'date': '03-10-2017', 'flavor': 'Heath'},
{ 'date': '03-11-2017', 'flavor': 'Oreo and Bluemoon'},
{ 'date': '03-12-2017', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '03-13-2017', 'flavor': 'Roca Crunch'},
{ 'date': '03-14-2017', 'flavor': 'Vanilla Pecan'},
{ 'date': '03-15-2017', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '03-16-2017', 'flavor': 'Raspberry'},
{ 'date': '03-17-2017', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '03-18-2017', 'flavor': 'Cookie Dough'},
{ 'date': '03-19-2017', 'flavor': 'Milk Chocolate Almond'},
{ 'date': '03-20-2017', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '03-21-2017', 'flavor': 'Butter Becan'},
{ 'date': '03-22-2017', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '03-23-2017', 'flavor': 'Coffee Oreo'},
{ 'date': '03-24-2017', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '03-25-2017', 'flavor': 'Brownies and Cream'},
{ 'date': '03-26-2017', 'flavor': 'Raspberry'},
{ 'date': '03-27-2017', 'flavor': 'Chocolate Almond'},
{ 'date': '03-28-2017', 'flavor': 'Coffee Toffee Almond'},
{ 'date': '03-29-2017', 'flavor': 'Mint Brownie'},
{ 'date': '03-30-2017', 'flavor': 'Peanut Butter Cup'},
{ 'date': '03-31-2017', 'flavor': 'Heath'},
{ 'date': '04-01-2017', 'flavor': 'Strawberry and Vanilla Chocolate Chip'},
{ 'date': '04-02-2017', 'flavor': 'Cookie Dough and Double Berry'},
{ 'date': '04-03-2017', 'flavor': 'Caramel Cashew'},
{ 'date': '04-04-2017', 'flavor': 'Chocolate Pecan and Raspberry'},
{ 'date': '04-05-2017', 'flavor': 'Mint Oreo'},
{ 'date': '04-06-2017', 'flavor': 'Peanut Butter Cookie Dough'},
{ 'date': '04-07-2017', 'flavor': 'Roca Crunch'},
{ 'date': '04-08-2017', 'flavor': 'Oreo and Bluemoon'},
{ 'date': '04-09-2017', 'flavor': 'Chocolate Chocolate Chip'},
{ 'date': '04-10-2017', 'flavor': 'Roca Crunch'},
{ 'date': '04-11-2017', 'flavor': 'Vanilla Pecan and Strawberry'},
{ 'date': '04-12-2017', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '04-13-2017', 'flavor': 'Raspberry'},
{ 'date': '04-14-2017', 'flavor': 'Mint Chocolate Chip'},
{ 'date': '04-15-2017', 'flavor': 'Cookie Dough'},
{ 'date': '04-16-2017', 'flavor': 'Milk Chocolate Almond'},
{ 'date': '04-17-2017', 'flavor': 'Raspberry Truffle Cheesecake'},
{ 'date': '04-18-2017', 'flavor': 'Butter Pecan'},
{ 'date': '04-19-2017', 'flavor': 'Bavarian Thin Mint'},
{ 'date': '04-20-2017', 'flavor': 'Coffee Oreo'},
{ 'date': '04-21-2017', 'flavor': 'Vanilla Chocolate Chip'},
{ 'date': '04-22-2017', 'flavor': 'Brownies and Cream'},
{ 'date': '04-23-2017', 'flavor': 'Raspberry and Cake Roll'},
{ 'date': '04-24-2017', 'flavor': 'Chocolate Peanut Butter'},
{ 'date': '04-25-2017', 'flavor': 'Coffee Toffee Almond'},
{ 'date': '04-26-2017', 'flavor': 'Mint Brownie'},
{ 'date': '04-27-2017', 'flavor': 'Cherry Amaretto'},
{ 'date': '04-28-2017', 'flavor': 'Coffee Chocolate Chip'},
{ 'date': '04-29-2017', 'flavor': 'French Silk'},
{ 'date': '04-30-2017', 'flavor': 'Mint Chocolate Chip'}
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