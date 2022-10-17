---
title: 'Onsplash'
intro: 'Onsplash is a clone/recreation of the image-sharing platform Unsplash. In addition to replicating Unsplash’s iconic gallery design, Onsplash enables users to perform CRUD operations on their own and other’s images.'
tags:
  - Next.js
  - GraphQL
  - Typescript
slug: 'onsplash'
coverImage: '/images/onsplash.png'
liveUrl: 'https://onsplash.vercel.app/'
repoUrl: 'https://github.com/MartinP460/onsplash'
priority: 2
---

Like other projects, _Onsplash_ is an attempt at improving my skills in developing frontend applications. Onsplash is my first larger project and it implements several common core functionalities that many web applications have, i.e. user authentication and CRUD operations. More specifically, after a user signs up, they are able to "upload" an image which will be displayed publicly. Users will then be able to like that image and view it on the owner's page. All users are able to view, download and search for images.

I was not going for originality when naming this project _Onsplash_. Onsplash is, as the name maybe implies, a clone or recreation of [Unsplash](https://unsplash.com/). And if it wasn't immediately obvious, this is **not** an attempt at creating a competing product to Unsplash. I am crossing my fingers that I won't get sued, but I'll take my chances!

This was also my first project using Typescript in React and GraphQL for querying and mutating data, and the point of using these was to get a better grasp of them.

Another motivation for creating this project was to try to build and manage a fullstack application. Although I was using a "backend-as-a-service" ([Nhost](https://nhost.io/) and subsequently [Hasura](https://hasura.io/)), this would serve as a great introduction to relational databases.

Lastly, the challenge of creating the actual UI with CSS was another motivation. Especially the thought of recreating the iconic gallery design seen on Unsplash was something that really sparked my interest.

In summary, the main motivations for creating the project were:

- Learning Typescript
- Learning GraphQL
- Creating common web-app functionality, such as user authentication and search
- Managing a fullstack application
- Organizing a larger project
- Recreating the UI with CSS

## Analysis

### Organizing the project

Organizing how to execute a project is one of the most important aspects of creating any larger project. My primary management "weapon of choice" was a [kanban board](https://www.atlassian.com/agile/kanban/boards). The kanban board I used (and continue to use for most of my projects) is a simple 3-column board with the columns "to-do", "in progress" and "completed".

![Photo of kanban board](/images/kanban-board.png)

The nature of kanban board allows for multiple people to collaborate, hence the popularity of these boards within agile project management. However, it's also beneficial for a single developer to organize what needs to be done and when.

On a different note, frontends will typically need to be designed before being built, but in the case of Onsplash there was no need for that. I was able to refer to the Unsplash website since I was literally recreating it. My intention was not to recreate Unsplash pixel-perfectly, so I still had to make smaller design decisions but overall I saved a lot of time not having to do designing.

I began the project by mapping out all the pages needed in Onsplash. I then implemented the core functionality in each page, starting with the signup page where the core functionality was for the users to be able to - you guessed it - sign up as a user.

### Main challenges

#### Persisting data

Implementing the main features posed the biggest challenges in building Onsplash. One of these challenges was to persist data. I used Hasura to create an instant GraphQL API which was connected to a PostgreSQL database to query and mutate data. Alternatively, I could have created the backend manually but since this is primarily a frontend project, I chose the easy way.

I also had to decide whether to allow users to upload images themselves like you do on Unsplash and thereby possible pay hosting fees, or have users reference a URL to an externally hosted image and store that URL on the database. I chose the latter where users reference an external image, preferably through Unsplash. Fortunately, Unsplash has an endpoint where you can get random images uploaded to Unsplash, so if you try to upload an image, you will see a link to randomly generate an image from Unsplash which you can then reference when filling in the form to submit an image. I probably could have chosen to self-host the images without any costs but having the images filtered through Unsplash first is another advantage.

#### Creating the image gallery

Another challenge was creating the image gallery like the one on Unsplash:

![Photo of Unsplash's image gallery](/images/unsplash-gallery.png)

I tried to recreate the Unsplash image gallery as accurately as possible. The gallery has several features that I needed to recreate:

- It had to maintain the aspect ratio of the image and the image had to be fully visible.
- There had to be a gap between images.
- The images had to be randomly placed so it wouldn't look like a fixed grid.

In order to do this, I used the same approach as Unsplash. I created a three-column grid which would each have a child element that would hold the images that needed to be presented. Those child elements would simply be another grid with, although it may aswell have been a flexbox. I used TailwindCSS for the styling, so the code for it is a little like this:

```html
<div className="grid grid-cols-3 grid-rows-1 gap-5">
  <div className="grid grid-cols-1 h-fit gap-5">
    <img src="/images/image1" />
  </div>
  <div className="grid grid-cols-1 h-fit gap-5">
    <img src="/images/image2" />
  </div>
  <div className="grid grid-cols-1 h-fit gap-5">
    <img src="/images/image3" />
  </div>
</div>
```

The grid layout was not the only challenge in implementing the gallery. Since the images that needed to be presented were returned from the API as an array of objects, I couldn't simply map over the array to display them on the screen. So I decided to split the array into three sub-arrays, which I could then map over in a nested fashion. This is the simplified JSX for the Gallery component:

```jsx
import { splitArrayToThreeSubArrays } from 'common/utils/helpers'

const Gallery = ({ posts }) => {
  const threeArrayPosts = splitArrayToThreeSubArrays(posts)

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-5">
      {threeArrayPosts.map((splitPosts, i) => (
        <div key={i} className="grid grid-cols-1 h-fit gap-5">
          {splitPosts.map((post) => (
            <image
              key={post.id}
              src={post.url}
            />
          )
      )}))}
    </div>
  )
}
```

The `splitArrayToThreeSubArrays` function split the array into three equally sized sub-arrays each containing image objects. This approach presented another problem, however. At the end of the gallery, when there were no more images to display, the columns of images did not end at roughly same place. Instead, some columns of images were longer than others, like this:

![The visual glitch in the gallery](/images/unsplash-gallery-glitch.png)

The reason for this visual glitch was that, despite each array being equally sized, the height of the images in the sub-arrays were all random which resulted in each column having a somewhat random height. To fix this, I added a height property to the image object and split the arrays depending on the height of each image. This is the code for the `splitArrayToThreeSubArrays` function, modified to account for the change. I will explain it in more detail.

```js
const splitArrayToThreeSubArrays = (arr) => {
  // initiate sub arrays corresponding to each column
  const result = [[], [], []]
  // initiate array of heights for each column
  const heights = [0, 0, 0]

  arr.forEach((_, i) => {
    // find the column with the lowest height
    const lowestSubArrayIndex = heights.indexOf(Math.min(...heights))

    // add the post to the column with the lowest height
    result[lowestSubArrayIndex].push(arr[i])

    // update the height of the column with the lowest height
    heights[lowestSubArrayIndex] =
      heights[lowestSubArrayIndex] + arr[i].image.height
  })

  return result
}
```

The function initiates two arrays - one is an array of three sub-arrays for the result, and the other is an array of heights representing the height of each column. The function then loops over the array of posts (the array has to be an array of posts) and initially finds the shortest column, which is the index of the smallest integer within the `heights` array. This index is then stored as `lowestSubArrayIndex`. The image object in the current iteration is then appended to the sub-array within the `result` array. Lastly, the height of the column is updated to account for how much height the new image adds to the column. This column is `heights[lowestSubArrayIndex]`. On the next iteration, a new column will then be the shortest and another image is appended to that column. This results in each column having roughly the same height:

![Gallery without the visual glitch](/images/unsplash-gallery-without-glitch.png)

You definitely could modify the function to make sure the columns have the smallest possible difference in height, but I decided it wasn't worth it.

Note: I omitted Typescript and parts of the Javascript to make the examples simpler (:

### What did you learn?

1. Typescript
2. GraphQL
3. Folder structure

## Discussion

### What would you do differently next time?

I would have server-side rendered everything, instead of having client-side rendered a lot of the application to avoid exposing API endpoints.

### How would you make it better?

There are several ways to improve the project:

1. Remix
2. Refactoring

### What learnings have you taken with you into other projects?

Typescript.
