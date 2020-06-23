# :evergreen_tree: Voyageurs :evergreen_tree:

![alt text](https:// ),

### :computer: Creators:

- Joshua Soave
- Roy Sanfilipo
- Bobby Tazioli

## :sunrise_over_mountains: About:

[Voyageurs](https://v-o-y-a-g-e-u-r-s.herokuapp.com/) is a single page web application that is used to organize National Parks that the user would like to visit or has already visited.

If you don't have an account, sign up <here>. Once you've logged in, select Add Park to begin adding National Parks to your collection. Add information about each park, such as an image, location, and description, and set a priority from high to low.

Don't be scared of creating too many parks! You can always search for them in the search bar or sort for them by priority.

Happy exploring!

## :star: Features:
The user can:
- Create a username and password
- log in and log out
- Create and add a National Park to their collection of parks
- Edit a National Park
- Delete a National Park
- Search through their National Parks collection
- Sort their National Parks by the priority that they would like to visit them

## :wrench: :nut_and_bolt: :hammer: The Build:
### Languages:
- Javascript
- HTML5
- CSS
### Technologies:
- NodeJS
- AngularJS
- Express
- Express-session
- Mongoose
- Bcrypt

## :sun_with_face: :full_moon_with_face: Our Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Thurs 6/18    | Idea, Mongod cloud setup, Heroku setup, File setup |
| Sat 6/20      | Completed login functionality      |
| Sun 6/21      | Completed park restful routes, Started CSS Styling      |
| Mon 6/22      | CSS work, bug fixes, started README     |
| Tues 6/23     | TBD      |

## :floppy_disk: Git Strategy

1. No pushes to git origin dev or git origin master. EVER.
2. When you are finished working on changes to your local feature, do a git push origin <name_feature>
3. Any merge will be done on the site itself by comparing name_feature with dev branch.
4. Group member who is ready to merge changes should send message in Slack to other group members so we can go over the merge together.
5. Delete branch once it's been merged.
6. Whenever any sort of merge is done in github, make sure to do a git pull origin dev.

## :sparkles: Want to make your own improvements?
- Visit our [Github](https://github.com/joshuasoave/national-parks)
- Clone or download the repository
- Open the project in terminal and your text editor of choice
- Run ```npm install```
- Run ```mongod```
- In new terminal tab run ```nodemon```
- Get to coding!

## :dancer: Wins:
- We came up with a workflow that made sense to us.
- We came up with a way to work on the same files separately and then resolve Git issues efficiently.
- We worked together to problem solve bugs when needed.

## :sweat: Challenges:
- Initial Heroku setup - we misinterpreted the setup instructions. We finally realized that the mongo variables weren't matching up.
- When we sorted the data by priority we realized that we needed to set the values of 'priority' to 3, 2, and 1 instead of High, Medium, and Low so that it wouldn't sort alphabetically.
- Clearing the form data after you create a park. We figured out that we had to TBD
- Footer styling
-

## :pray: Future Features:
- Utilize National Parks API to give the user the option to search and import that data when adding a park.
