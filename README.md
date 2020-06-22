# Voyageurs

![alt text](https:// ),

### Creators:

- Joshua Soave
- Roy Sanfilipo
- Bobby Tazioli

## About:

[Voyageurs](https://v-o-y-a-g-e-u-r-s.herokuapp.com/) is a single page web application that is used to organize National Parks that the user would like to visit or has already visited.

## Featured:
The user can:
- Create a username and password
- log in and log out
- Create and add a National Park to their collection of parks
- Edit a National Park
- Delete a National Park
- Search through their National Parks collection
- Sort their National Parks by the priority that they would like to visit them

## The Build:
Languages:
- Javascript
- HTML5
- CSS
Technologies:
- NodeJS
- AngularJS
- Express
- Express-session
- Mongoose
- Bcrypt

## Git Strategy

1. No pushes to git origin dev or git origin master. EVER.
2. When you are finished working on changes to your local feature, do a git push origin <name_feature>
3. Any merge will be done on the site itself by comparing name_feature with dev branch.
4. Group member who is ready to merge changes should send message in Slack to other group members so we can go over the merge together.
5. Delete branch once it's been merged.
6. Whenever any sort of merge is done in github, make sure to do a git pull origin dev.

## Want to make your own improvements?
- Visit our [Github](https://github.com/joshuasoave/national-parks)
- Clone or download the repository
- Open the project in terminal and your text editor of choice
- Run ```npm install```
- Run ```mongod```
- In new terminal tab run ```nodemon```
- Get to coding!

## Wins:
- We came up with a workflow that made sense to us. 

## Challenges:
- Initial Heroku setup - we misinterpreted the setup instructions. We finally realized that the mongo variables weren't matching up.
- When we sorted the data by priority we realized that we needed to set the values of 'priority' to 3, 2, and 1 instead of High, Medium, and Low so that it wouldn't sort alphabetically.
- Clearing the form data after you create a park
-

## Future Features:
- Utilize the National Parks API to give the user the option to search and import that data when adding a park.
-
