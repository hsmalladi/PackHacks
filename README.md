# PackHacks

## Inspiration
As current freshmen, we've found it particularly difficult finding and connecting with others during the COVID-19 pandemic. In normal circumstances, many students make friends through in-person classes and clubs, but we lack these chances to interact and bond with our peers. Carrying this sentiment through our project, we were inspired to apply our computer science skills and develop a website where students can meet others with similar classes, clubs, and interests, giving way to atrium.
## What it does
After logging in with your school email, atrium allows you to build a personalized profile, where you can enter your classes, clubs, and interests. You will then be able to find other students with similar classes, clubs, and interests, along with their linked social media platforms as a way to reach out and connect with them.
## How we built it
We built atrium using ReactJS and a Flask API. We also used the Bulma CSS framework to style our website. After the user fills in their username and password, atrium authenticates them and takes them to their main page. There, a user can customize their profile by adding their classes, clubs, and interests. Once inputted, these values are then sent to our Flask API, which stores the values until the user clicks the classes, clubs, or interests tabs, in which case the website sends another request to the Flask API for the user's specific classes etc. and the user is presented with their classes and people in them.

## Challenges we ran into
Since all of us were new to web development, especially with ReactJS, we ran into many issues with styling our websites and creating components that did not error. We also ran into problems storing our data collected on the profiles page so that we could use it in our classes, clubs, and interests pages. We solved this using a Flask API, when inputting data into the profile page calls the API to store the data, and when opening the classes or similar tabs, the data inputted by the student is displayed along with other students with similar data. We also ran into CORS errors when we used both the ReactJS front-end and Flask API back-end, which we eventually solved.

## Accomplishments that we're proud of
We are proud of creating a fully functional website that authenticates its users and allows them to create personal profiles. We are also proud that we were able to apply our ReactJS skills to create a visually appealing website, especially with cool features like the typewriter text. We are also proud of connecting our website with a back-end, allowing us to store data and create functionality. Finally, we are proud that we implemented such a unique idea that is especially during our current times.

## What we learned
We learned how to properly utilize git to work together on the same project and function as a team. We also gained a deeper understanding of React, html, and Python and their relationship to web development, while also becoming more acquainted with the Bulma CSS framework.
## What's next for atrium
In the future, we plan to implement even more features within atrium. Several features we have already brainstormed include note uploading and sharing, messaging within atrium, and support for schools, clubs, and organizations to create their own profiles.
