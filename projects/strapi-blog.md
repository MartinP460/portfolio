---
title: 'Strapi blog'
intro: 'A simple blog posts app built using Strapi and Next.js, meant to practice connecting a CMS to a frontend. Includes several blogs with randomly generated titles and filled with dummy text.'
tags:
  - Next.js
  - TailwindCSS
  - Strapi
slug: 'strapi-blog'
coverImage: '/images/strapi-blog.png'
liveUrl: 'https://strapi-blog-ebon.vercel.app/'
repoUrl: 'https://github.com/MartinP460/strapi-blog'
priority: 3
---

This app does not reinvent the wheel. It's a simple blog app that uses [Strapi](https://strapi.io/) as the backend and [Next.js](https://nextjs.org/) as the frontend. If you visit the site, you will see a list of blog posts with randomly generated titles and placeholder text.

### Motivation

There were several motives for building the project. Firstly, a common functionality needed for many websites is some kind of content management system (CMS). For a text-heavy website such as a website containing blog posts, the people writing the blog posts will typically be writers who require some kind of UI, as opposed to editing the HTML tags directly. For this reason, the main motive was to learn to connect a CMS, in this case Strapi, to a frontend.

I used Next.js and subsequently React. React is a Javascript library for building user interfaces, so improving my skills using these technologies was a motive although I've worked with both React and Next.js before.

This was also my first time using TailwindCSS in a real project, so improving my skills using TailwindCSS was another motive.

### Organizing and building the project

Due to the simple nature of the app, I was able to split the project into three different "phases":

- Designing the app
- Configuring Strapi
- Creating the frontend

I begun by designing each of the pages in [Figma](https://www.figma.com/) for mobile and desktop. I could have chosen to jump right into the coding the website and just design it on the fly, but by seperating design and development, you don't have to make design decisions during development which speeds things up.

Next, I configured Strapi. This step was very easy. I ran the command `npx create-strapi-app strapi-blog` to create the project. I could then run it locally and at that point it was just a matter of configuring content types and permissions.

I began building the frontend by implementing the core functionality, which, in this case, meant fetching the posts from the Strapi project. Strapi is self-hosted so to fetch data you simply query an endpoint. However, to filter data you have to pass URL parameters to the specific endpoint. I.e. to only fetch the title of a blog post, one would query the endpoint:

```txt
GET /api/posts?fields[0]=title
```

This notation can make the code bloated when fetching many different fields. The ['qs' library](https://www.npmjs.com/package/qs) helps solve this problem - it can transform an object into a string of URL parameters. Using this, I was able to define a function that takes a list of fields and an object of "relations" to populate (this is required to fetch certain fields in Strapi):

```js
import qs from 'qs'

const defineQuery = (fields, populate) => {
  const query = qs.stringify(
    {
      fields,
      populate
    },
    {
      encodeValuesOnly: true
    }
  )

  return query
}
```

This function could then be called to fetch the desired fields and relations. The code below fetches the data needed for each blog-post page:

```js
const getBlog = async (id) => {
  const query = defineQuery(
    ['title', 'description', 'publishedAt', 'content'],
    { headerImage: '*', author: { populate: '*' } }
  )

  const blog = await axios.get(`${baseUrl}/api/posts/${id}?${query}`)

  return blog.data.data
}
```

The reason for the `blog.data.data` notation is that the 'axios' library used to fetch the posts returns a `data` field but the returned data from Strapi also has a `data` field - which contains the actual data.

After verifying that blog posts could be displayed on each page, I implemented the rest of the frontend. This included styling the pages according to the design and implementing some simple logic like search.

### Learnings

Building the project was a fairly short process but it definitely gave me a better grasp of working with Javascript, React, Next.js and connecting Strapi to a Next.js project.
