<h1>Introduction</h1>
<p>
Are you ready to play a classic game? Tic-Tac-Toe, also known as Noughts and Crosses, is a timeless game played by two players on a 3x3 grid. This project is all about creating a fun and interactive version of Tic-Tac-Toe that you can play with a friend on the same computer. By leveraging HTML, CSS, vanilla JavaScript, and DOM manipulation, I've created a dynamic game that is easy to play and visually appealing while following best coding practices (Don't Repeat Yourself). So, get ready to experience the classic game like never before.
</p>
<h2>Installation</h2>
<p>
No installation is needed to play the game. The application can be played in the browser of your choice by clicking
the following link: (*Add deployed page*)
</p>
<h1>The Planning Process</h1>
<h2>Prioritizing the User Stories</h2>
<p>
Planning before writing code and starting a project is crucial to ensure its success. This process helps define the project's objectives, identify the requirements, and reduce scope creep. As a developer, I started by identifying the MVP (Minimum Viable Product); the bare minimum required to deliver the desired outcome.
</p>
<p>
In the case of building a Tic-Tac-Toe board, the acceptable MVP consists of an HTML page with a table of nine cells, enough Javascript to display the current player, and a touch of CSS to make the cells visible. Focusing on the MVP first allowed me to get a good understanding of the required <strong>user stories</strong> needed to build the game:
<ul>
<li>As a user, I should be able to start a new tic tac toe game.✅</li>
<li>As a user, I should be able to click on a square to add X first and then O, and so on.✅</li>
<li>As a user, I should be shown a message after each turn for if I win, lose, tie or who's next.✅</li>
<li>As a user, I should not be able to click the same square twice.✅</li>
<li>As a user, I should be shown a message when I win, lose or tie.✅</li>
<li>As a user, I should not be able to continue playing once I win, lose, or tie.✅</li>
<li>As a user, I should be able to play the game again without refreshing the page.✅</li>
</ul>
</p>
<h2>Wireframing</h2>
<p>A successful game requires preparation and close attention to detail. I made a simple wireframe of the game's interface before diving into the code to help me visualize likely issues and areas for improvement. I was able to evaluate the user experience and make sure that every element of the interface would function in unison by dissecting each component separately.
</p>
<p>
I also made a simple Tic-Tac-Toe flow chart to further polish the game's reasoning. This method was also useful for writing the game's pseudocode. Overall, this gave me the ability to create a game that not only achieved the project's goals but also provides a positive user experience.
</p>
<p align="center">
<img align="center" width="500" height="300" src="images/Interface.png" alt="wireframe">
</p>
<h2>Project Management</h2>
I prioritized the user stories using the Projects tool in GitHub after building the UI wireframe, flowchart, and analyzing the necessary user stories. This method was very useful because it allowed me to keep track of my progress by grouping and sorting the user stories according to their level of difficulty.
<p align="center">
<img align="center" width="520" height="400" src="images/gitprojects.png" alt="projects">
</p>
<h1>Building the Game</h1>
 <h2>Technical Requirements</h2>
 <ul>
<li>Build a web app from scratch with semantic markup for HTML, CSS & JavaScript (DOM manipulation).✅</li>
<li>Build a dynamic game that allows two players to compete from the same computer.✅</li>
<li>Separate HTML, CSS, and JavaScript files in the application.✅</li>
<li>Leverage DRY (Don't Repeat Yourself) principles.✅</li>
<li>The application renders in various browsers (Chrome & Edge) and runs without errors.✅</li>
<li> The project should be deployed to GitHub Pages or a custom domain.✅</li>
<li>The repo must have a README that adequately documents the project.✅</li>
</ul>
 <h2>Technologies & Tools Used 🛠️</h2>
<ul>
 <li><strong>Project Management</strong></li>
 📋Github Projects (Kanban Board)
 <li><strong>Version Control</strong></li>
 🕛GitHub
 <li><strong>Developer Tools</strong></li>
⬛Git Bash (Command Line)
⬛Visual Studio Code (Text Editor)
💻Chrome Developer Tools
 <li><strong>Wireframing</strong></li>
 🎨Canva
 <li><strong>Languages & Frameworks</strong></li>
➕HTML
➕CSS
➕Bootstrap (CSS Framework)
➕JavaScript
 <li><strong>Royalty Free Images, Fonts & Audio</strong></li>
🖼️Pixabay
 ➰Google Fonts
 🎵Soundstripe
 <li><strong>Deployment</strong></li>
 🖥️GitHub Pages
</ul>
 <h2>Project Challenges😖</h2>
<p>◾One hurdle for me was figuring out how to implement some of the GOLD product features such as local storage and playing against the computer (AI). This was frustrating because I wanted to add these advanced features to the finished product, but time was not on my side. I needed more
time to research the implementation process and to write the code.
</p>
<p>◾I encountered another challenge during this project while working on CSS styling. I had envisioned a vibrant, gradient background with perfectly positioned buttons. However, CSS can be quite tricky and requires a lot of trial and error to get the desired layout. To overcome this obstacle, I made the decision to incorporate Bootstrap styling for the 'Reset Game' button and opted for a full-width image to serve as the background. By doing so, I was able to achieve the aesthetic I was aiming for while saving myself a great deal of time and frustration in the process.
</p>
 <h2>Project Wins🏆</h2>
<p>◾Leveraging the project tools in Github proved to be a huge win for me! As someone who isn't quick to dive into coding, I require structure and guidance with a clear plan of action complete with start and due dates to keep me on track. I'm proud to say that by committing my work to Github regularly, I was able to meet all of my project deadlines and achieved a great sense of accomplishment throughout the process.
</p>
<p>◾I'm thrilled to say that I was able to take my game beyond the MVP (Minimum Viable Product) stage and create a fully functional, interactive experience. One of my biggest accomplishments was incorporating audio and emoji features that took the game to a whole new level. By conducting thorough research and careful planning, I was able to push the product features to a SILVER level, exceeding my initial expectations. I'm extremely proud of the end result and the amount of effort that went into making it happen.
</p>
<h1>The Finished Product</h1>
<h2>Galaxy Tic-Tac-Toe</h2>
<h4>Desktop Screenshot</h4>
<img width="1600" height="600" src="images/desktop.png" alt="desktop">
<h4>Tablet Screenshot</h4>
<img width="520" height="500" src="images/tablet.png" alt="tablet">
<h4>Mobile (iPhone) Screenshot</h4>
<img width="280" height="510" src="images/mobile.jpg" alt="mobile">
<h2>Current Features</h2>
<ul>
<li>Emojis are used for Player X (👽) and Player O (👾) to make the game fun and engaging.</li>
<li>The user will hear various click sounds when the cells and 'Reset Game' button are clicked.</li>
<li>Each cell changes color when the player hovers over with their cursor. </li>
</ul>
