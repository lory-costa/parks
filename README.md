# Parks

> Explore and find your new favorite parks
 
### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## CSS
Tailwind.css has been added to the project.
Please refer to the documenation: https://tailwindcss.com/docs

## User stories (from highest priority)
1. As a member, I want to view a map of parks
    - Park home page displays a map with clickable parks which will lead to park details page
2. As a member, I want to view a park details page
    - Park Details will display information as well as a rating, comments, photos
3. As a member, I want to rate a park
    - From the park details page, the user can select and update their rating
4. As a member, I want to track parks I have been to or want to go to
    - From the park details page, the user can select that they have been to a park or select that they want to go to a park
5. As a member, I want to see a "history" of visited parks and parks to visited
    - From the user's personal profile page, they can view lists of their visited/to visit parks
6. As a member, I want to be able to filter the map of parks
    - From the park home page, the member can use drop down lists to filter for parks that meets their requirements
7. As a member, I want to suggest a park to be added
    - From the park home page (when logged in), the member can open a page which has a form to add a park
8. As an admin, I want to be able to moderate and verify user park suggestions
    - From an admin page, the admin should see a list of user suggestions and select to accept or decline the new page


## User interface (proposal)

![Homepage](docs/home.png)
![MapPage](docs/mapPage.png)
![ParkDetails](docs/parkDetails.png)

## API routes (proposal)


## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)
