# RECIPEHERE Web App

### Github Repository: [https://github.com/pjotrs-osnovskis/recipe-app-ms3-po](https://github.com/pjotrs-osnovskis/recipe-app-ms3-po)

### Deployed Project (Heroku): [https://recipe-app-ms3-po.herokuapp.com/](https://recipe-app-ms3-po.herokuapp.com)

<br>

---
## **Idea/Description**
<br>

I took idea from the list that was offered by Code Institute. It's a recipe application where users can create own accounts, log in and out from their accounts, view, search recipes. In addition, when user is logged in, they have own profile page where they can view, create, edit and delete own recipes. On landing page, there is a scrollable category list for users convenience, so they can browse recipes in their desired categories. Also there is a search option, that looks in to recipe name, description, ingredients and category to show best possible matches to users enquiry. Also recipe information is grouped in to cards or blocks, where user can see a picture, recipe name, description, ingredients list, additional information about cooking times and how many servings is current recipe for. When logged in, user can create or edit recipes using form that has input fields according to recipe view description mentioned above. Every recipe had a unique id, so can be shared between users easily by using a link from URL field in their browser.

<br>

### **Access**

Please see project submission form or contact me on pjotrs.osnovskis@gmail.com.

<br>

![I am responsive image](static/img/readme-img/amiresponsive.png)

<br>

---
## **Potential Website users**
<br>

This web application was created for users to find, create and share recipes, find new ideas to improve their cooking skills or surprise their loved ones with something new and exciting.

<br>

---
## **Owners goals**
<br>

Application would be owned by the owner and used to attract new users with its simplicity. Potentially adding advertisement or product placement.

<br>

---
## **User Stories**
<br>

1. As a new visitor, I want to:
    * understand what this website is used for;
    * navigate easily and intuitively;
    * have all questions answered before I have any;
2. As a potential user, I want to:
    * find recipes easily using search or categories options;
    * understand how to login or register;
    * understand how to create a new recipe or update a new one;
3. As a returning user, I want to:
    * login to own account quickly and easy;
    * create or update own recipes using convenient forms;
    * find recipes I am interested in;

<br>

---
## **5 UX Planes**
<br>

> ### 1. **Strategy Plane**

Web application was created for users to be able to find, create and share recipes easily. In table below you can see what this web app should contain for users value, Some ideas might not be included due to time limits for this project.

| Opportunity   | Importance    | Viability/Feasibility |
| ------------- |:-------------:| :-----:|
| Services offered | 5 | 5 |
| Search | 5 | 5 |
| Categories | 4 | 3 |
| Authentication | 4 | 4 |
| Create/Edit | 4 | 4 |
| Recipe Image | 3 | 2 |
| Recipe Video [^1] | 3 | 1 |
| Recipe Rating/comments [^2] | 4 | 3 |

> Ideas marked with a footnote are some of the potential ones that could be implemented if there would be more time for the project.

[^1]: I thought to implement it, but since it is a MongoDB server-less project, you have to upload video to services like YouTube and share a link, same as with pictures. Not sure if it is very convenient for users.

[^2]: Recipe rating, If I will have enough time I will add this to the project, it would be convenient to have reviews and rating for others to see how good it is.


> ### 2. **Scope Plane**

Features that this project should include:
    * All pages must include navigation, search and footer;
    * Landing page with categories and random recipe
    * Login and register page with relevant forms
    * Profile (My Recipes) page with list of users recipes and edit and delete options
    * Create/Edit recipe with relevant forms


> ### 3. **Structure Plane**

All pages have navigation, search, main block and a footer.
Main block content:
- **Landing page** has categories vertical and scrollable list, and a random recipe to bring user an idea to cook something random;
- **Search** page will show a list of recipes containing keywords, if no results it will show a message;
- **Login/Register** pages with relevant forms, register page has password comparison;
- **Profile** page, called "My Recipes" in navigation, shows users recipes with edit/delete options;

Some ideas still remain, but were not implemented due to time frame just yet.

> ### 4. **Skeleton Plane**

Web application is responsive, so it is convenient to use across different devices.

**Wireframes**:

 Page | Desktop | Mobile |
| :--- | :--: | :--: |
| Home | [View](static/img/readme-img/wireframes/wf-home-dsktp.png) | [View](static/img/readme-img/wireframes/wf-home-mob.png) |
| Search | [View](static/img/readme-img/wireframes/wf-search-dsktp.png) | [View](static/img/readme-img/wireframes/wf-search-mob.png) |
| Login | [View](static/img/readme-img/wireframes/wf-login-dsktp.png) | [View](static/img/readme-img/wireframes/wf-login-mob.png) |
| Register | [View](static/img/readme-img/wireframes/wf-register-dsktp.png) | [View](static/img/readme-img/wireframes/wf-register-mob.png) |
| Profile | [View](static/img/readme-img/wireframes/wf-profile-dsktp.png) | [View](static/img/readme-img/wireframes/wf-profile-mob.png) |
| Create/Edit | [View](static/img/readme-img/wireframes/wf-create-dsktp.png) | [View](static/img/readme-img/wireframes/wf-create-mob.png) |
| Recipe Card | [View](static/img/readme-img/wireframes/wf-recipe-card-dsktp.png) | [View](static/img/readme-img/wireframes/wf-recipe-card-mob.png) |


> ### 5. **Surface Plane**

**Colors:**

I decided to keep website simple and did not use any colours apart from CRUD buttons. Simple red, green and dark orange with a little transparency to make it less bright.

**Fonts:**

Used Google Fonts for this project. 

* Lato - Used mainly across whole website
* Josefin - Used for paragraphs

**Navigation/Forms:**

No CSS frameworks used, created everything my own with some code snippets and ideas credited in comments.

<br>

---
 ## **Features**
<br>

**Implemented:**

* Web app contains 8 pages, that has a navigation, search and footer on all of them and unique block content templates:
    * Home - categories vertical list and random recipe
    * Search - has search results ot if none found - a message
    * Login - login form
    * Register - register form
    * Profile - list of own recipes
    * Create recipe - relevant form with recipe name, description, image URL, etc
    * Edit recipe - form same as create recipe, but takes unique id of a recipe that needs editing and pulls out relevant data inside of input fields
    * 404 - in case of "not found" error it contains relevant message and home link
* Created using HTML, CSS, JS, jQuery, Python, Flask, EmailJS and Google Fonts.
* Users can register, login, logout, view, create, edit and delete recipes.

**Potential features:**

* Recipe rating and comments
* Recipe videos
* Social media interactions, like "Share recipe on Facebook"
* Add ingredients to shopping list

<br>

---
## **Technologies Used**
<br>

|Technology|Reason|
| :-- | :-- |
| [HTML](https://www.w3schools.com/html/) | Markup |
| [CSS](https://www.w3schools.com/css/) | Styling |
| [JavaScript](https://www.w3schools.com/js/) | Interactive Frontend |
| [jQuery 3.6](https://jquery.com/) | DOM manipulation in some cases |
| [Python](https://www.python.org/) | Backend |
| [Flask](https://palletsprojects.com/p/flask/) | Backend framework |
| [EmailJS](https://www.emailjs.com/)  | Contact Us functionality |

<br>

---
## **Resources**
<br>

### **Resources used**
* Code Institute Course Material
* Code Institute's Slack Community
* [W3Schools](https://www.w3schools.com/) - Minor CSS and JavaScript code ideas
* [Stack Overflow](https://stackoverflow.com/) - Problem resolution, credited in the code
* [jQuery](https://learn.jquery.com/using-jquery-core/) - jQuery documentation
* [Flask](https://flask.palletsprojects.com/en/2.0.x/) - Flask documentation
* [EmailJS](https://www.emailjs.com/) - EmailJS documentation


### **Tools Used**
* [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) - Local Repository/Version Control
* [GitHub](https://github.com/) - Remote repository and deployment
* [VSCode](https://code.visualstudio.com/) - IDE
* [HTML Validator](https://validator.w3.org/) - HTML Validation
* [CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS Validation
* [JS Validator](https://jshint.com/) - JS Validation
* [PEP8 Validator](https://jigsaw.w3.org/css-validator/) - Python Validation
* [Am I Responsive](http://ami.responsivedesign.is/) - Responsive Webpage Presentation
* [Balsamiq](https://balsamiq.com/wireframes/) - Creating wireframes
* [MS Paint](https://support.microsoft.com/en-us/windows/get-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9) - Cutting out wireframes and screenshots
* [PowerMapper](https://www.powermapper.com/) - Browser compatibility checks
* [removebg](https://www.remove.bg/) - Remove category image background

<br>

---
## **Testing**
<br>

### **Pre-testing**
During the development of this project I used Chrome Dev Tools to test and check for responsiveness across various devices. To double check I used Heroku deployed project on Android Chrome on my phone, what helped a lot as discovered few positioning errors that were fixed.

<br>

### **Main Testing**

* **HTML** - as this is an Flask application, HTML validator won't pick up Flask template references and shows up errors due to that reason as well as *lang* warnings. Apart from that here are some errors found while validating the code:

    * **add_recipe.html** - invalid attribute for text area "type", had duplicate ID, unnecessary name attribute - fixed. Unfixed errors are connected with `value="¾"`, I tried to use html code like `&frac34;` for it, but it won't work with MongoDB.

    * **base.html** - missing heading for search field. There is no need for one.

    * **contact_us.html** - was missing a closing div tag - fixed.

    * **edit_recipe.html** - as it's base was coped from add_recipe.html, I had same errors, that were fixed.

    * **home.html** - categories list section lacks heading, in my opinion it is not necessary, as section is very clear.

    * **login.html** - no heading in flash messages section, there is no need for it.

    * **profile.html** - no errors found

    * **register.html** - no heading in flash messages section, there is no need for it.

    * **search_results.html** - no errors found.



* **CSS** - no errors found

* **JS** - due to some jQuery used for overall author convenience, JS validator shows `$` as an undefined variable. Gives warning about template literal not being available in ES6, but no ES6 was used. Shows `mobileNav`, `goBack` and `remove` as unused variables, altho they are functions and are used in DOM to trigger them.

* **Python** - Errors found on PEP8 validator that were fixed and now shows `"All right"`:
```
W291:4:35:trailing whitespace
E501:38:80:line too long (89 > 79 characters)
E501:48:80:line too long (97 > 79 characters)
W293:49:1:blank line contains whitespace
E501:50:80:line too long (82 > 79 characters)
E201:72:29:whitespace after '('
E202:72:49:whitespace before ')'
E201:85:29:whitespace after '('
E501:90:80:line too long (84 > 79 characters)
E201:95:29:whitespace after '('
E202:95:74:whitespace before ')'
E125:111:5:continuation line with same indent as next logical line
W293:151:1:blank line contains whitespace
E501:204:80:line too long (93 > 79 characters)
E501:255:80:line too long (109 > 79 characters)
E303:273:1:too many blank lines (4)
E302:274:1:expected 2 blank lines, found 4
E231:299:43:missing whitespace after ':'
E501:302:80:line too long (80 > 79 characters)
W292:317:24:no newline at end of file
```
<br>

### **Lighthouse Reports**

> Lighthouse testing done on [**deployed project**](https://recipe-app-ms3-po.herokuapp.com/).


* [**Home Page**](https://recipe-app-ms3-po.herokuapp.com)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 91 | 91 |
| Accessibility   | 100 | 100 |
| Best Practices  | 93 | 100 |
| SEO             | 100 | 100 |

* [**Login**](https://recipe-app-ms3-po.herokuapp.com/login)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 94 | 97 |
| Accessibility   | 100 | 100 |
| Best Practices  | 100 | 100 |
| SEO             | 100 | 100 |

* [**Register**](http://recipe-app-ms3-po.herokuapp.com/register)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 98 | 100 |
| Accessibility   | 90 | 90 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

> **Accessibility** - Missed out label and input connection - fixed. 

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 98 | 100 |
| Accessibility   | 100 | 100 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

* [**Profile (pete1)**](http://recipe-app-ms3-po.herokuapp.com/profile/pete1) (Please login with creds: `Username: pete1` and `password: pete1` or register own account.)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 78 | 97 |
| Accessibility   | 97 | 97 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

> **Performance (Mobile)** - Category images too large, fixed by resizing images to 100x100 pixels.

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 95 | 99 |
| Accessibility   | 97 | 97 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

* [**Create Recipe**](http://recipe-app-ms3-po.herokuapp.com/add_recipe)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 96 | 99 |
| Accessibility   | 100 | 100 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

* **Admin Panel** (please see superuser credentials above)

| Test | Mobile | Desktop |
| :-- | :--: | :--: |
| Performance     | 96 | 99 |
| Accessibility   | 100 | 100 |
| Best Practices  | 93 | 93 |
| SEO             | 100 | 100 |

<br>

### **Web Browser Compatibility**

During the development I mainly used Google Chrome on Windows 10 and Android Platforms. During final testing I used [PowerMapper](https://www.powermapper.com/products/sortsite/checks/browser-compatibility/) to check website compatibility across variety of browsers.

![Browser Compatibility Image](static\img\readme-img\brwsr-cmptblty.png)

<br>

### **Functionality Test**

Tested all links and buttons on the web application by clicking on all of them. Search is working great, tested on variety of requests, category list items are working great too, register, login working as needed, edit, delete recipes working as needed, back button on edit recipe works as needed, WITHOUT submitting the form. Admin panel users CRUD links work as needed, navigation links work as needed, footer links work as needed.

<br>

### **User Story Testing**

As a new visitor, potential/interested client or a returning user, once open a web app, I can see:

* that this is clearly a recipe website;
* navigation at the top and understand what every link is for;
* where to login or register a new account with an easy and simple form;
* search field with an informative placeholder, so I understand what I am searching;
* categories list, and understand that it is clickable and scrollable horizontally;
* a random recipe with a message above to get another random recipe;
* clear message and a link offering to create a message if I just registered or logged in as a new user.;
* list of own recipes in separate cards with Edit and Delete options when I have created at least one recipe;
* a simple and understandable form when I open Create or Edit Recipe;
* an understandable messages in register and login pages if I try to submit the form with invalid data;
* a clear message in login form when I logout from my account;
* social media links and contact us page in the footer of the website;
* a clear and understandable contact form, once i click on the link in the footer.

<br>

### **Other testing, fixes and solutions**

During the production of this project I used Code Institutes Tutors to help me with Flask and Python, mainly to understand how it works with MongoDB and how to pass a Array of objects, like ingredients with name, quantity and units. But before contacting tutors, I 'googled' the issue first, most solutions I found myself, please see credits in comments by the code. While writing the code, I always tested new features in desktop and mobile view for positioning, connections between languages and templates, links, buttons, etc., before moving forward and if any issue was found - fixed it first. This you can see in the frequency and amount of commits in [my Github repository](https://github.com/pjotrs-osnovskis/recipe-app-ms3-po).

<br>

---
## **Version Control**
<br>

I used [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) as a local repo and [GitHub](https://github.com/) as a remote one. 

 I started my project locally on Windows 10 machine in **VSCode** IDE. Used **VSCode** terminal, changed directory to projects destination, used command `git init`. Created and updated `.gitignore` file, so sensitive information is not pushed to GitHub, then `git add .` (to add all files I created to local repo) and made my **Initial commit** with command `git commit -m "Initial Commit"`. Then I created a remote repository on GitHub by pressing **New** on main page and followed these steps:

 1. Used HTTPS link and then entered `"git remote add origin <REMOTE_HTTPS_URL>"` in terminal,
 2. Then pushed my project to remote repository with `"git push origin master"`,
 3. Used `"git add ."`, `"git commit -m '<COMMIT_MESSAGE>'"`, `"git push origin master"` commands in the terminal to push further changes.
 
<br>

---
## **Deployment**
<br>

Before deployment make sure some steps are taken for application to work properly:

* create **virtual environment**:

    1. In terminal ensure you are in your app's directory, if not use `"cd <APP_PATH>"` command to target it,
    2. Then execute `"python3 -m venv /path/to/new/virtual/environment"` command to create a virtual environment. (In some cases need to use `"py"` or `"python"` instead of `"python3"` to execute command correctly),
    3. Once virtual environment (`venv`) is created, we need to activate it,
    4. To activate your apps virtual environment use `"venv\Scripts\activate.bat"` command, to indicate that you are working in virtual environment, in your CMD you will see a line like `(venv)<APPLICATION_PATH>`,
    5. Next, install any necessary Python frameworks for your application.
    6. In case you need to de-activate (exit) your virtual environment, use `"deactivate"` command in terminal.

* create **requirements.txt** file:

    1. Create **requirements.txt** file using `"pip3 freeze --local > requirements.txt"` command.

* create a **Procfile**:
    1. To create a Procfile use `"echo web: python <PYTHON_FILE_NAME> > Procfile"` command,
    2. Now, open Procfile in IDE and sure that it has `UTF-8` encoding and `web: python <PYTHON_FILE_NAME>` is in one line with no trailing whitespace, otherwise it can create a failure in deployment.

<br>

Now project is ready to be deployed to [Heroku](https://www.heroku.com/). I followed these steps:

1. Sign in to Heroku account and press **New** button, then select **Create New App**,
2. Enter a unique app name, select Europe region and click **Create App**,
3. Once application is created, in **Deploy** tab, **Deployment Method** section select **GitHub** to link GitHub repository with Heroku.
4. Then in **Connect to GitHub** section, click **Connect to GitHub** button,
5. Enter your GitHub repository name to **repo-name** input field and click **Search**,
6. Then click **Connect** button to link your GitHub repository with Heroku,
7. For application to work properly, need to add variables that are not pushed to GitHub. In **Settings** tab **Config Vars** click **Reveal Config Vars**.
8. Enter necessary **keys** and **values**:

| KEY | VALUE |
| :--: | :--: |
| IP | 0.0.0.0 |
| PORT | 5000 |
| MONGO_URI | <MONGODB_LINK> |
| MONGO_DBNAME | <DATABASE_NAME> |
| SECRET_KEY | <SECRET_KEY> |

9. Back in **Deploy** tab, in **Automatic deploys** section, make sure your master/main branch is selected and click **Enable Automatic Deploys**
10. In **Manual deploy** section click **Deploy Branch** to do a first deployment,
11. From this point onward use **step 3** from **Version Control** to commit and push changes to GitHub and it will be automatically deployed to Heroku.


---
## **Credits**
<br>

### **Code**

All code snippets used are credited in comments in the code. Most of them are taken from:
 * [w3Schools](https://www.w3schools.com/) - used code snippets for JavaScript and some memory refresher for CSS.
  * [StackOverflow](https://stackoverflow.com/) - used some code for JavaScript  solutions.
* [Code Institute](https://learn.codeinstitute.net/login?next=/) - Working with Flask and EmailJS.

### **Media**

* Categories images taken from https://www.flaticon.com/
* Recipe image links taken from https://www.allrecipes.com/

### **Content**

Main website content was created by me, recipes taken from https://www.allrecipes.com/

---
## **Contributors**
<br>

> Pjotrs Osnovskis

---
## **Acknowledgements**
<br>

I would like to thank my mentor Spencer Barriball for support and help during this project. Also huge "Thank You!" to Code Institute and CyC Slack community for support and all tutors who helped me with difficulties I faced during production of this project and also who worked hard on the study material that got me to this point. And of course Assessors who will assess this project.

