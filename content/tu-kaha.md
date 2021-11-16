<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# Tu Kaha Values Programme

</h1>
</div>
<div>
<h3>

### Learning Management Application (SaaS) 

</h3>
</div>
</div>
</div>
</div>
</header>

<section class="project__intro">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__skills">

#### Skills

- Vue.js
- Vuex
- Vimeo API
- Lottie
- RESTful API / Axios
- SCSS  
- Tailwind CSS

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete/production</p>
</div>
</div>
</div>
<div class="project__description">

The Tu Kaha Foundation deliver values-based and culturally relevant learning experiences to decile 1-3 children. Initially facilitated via a mobile classroom, the client required a solution to deliver their programme online - direct to the students whare! 

The architecture is a multi-tenant SaaS application with a Vue.js front-end and Laravel API. The application is designed for maximum flexibility allowing each client to white-label their own instance and apply their brand and enable unique features they have for an LMS. 

For Tu Kaha specifically, key requirements included a modern UI/UX for students with a focus on engagement and interactivity (given the Tu Kaha user base is predominately children). We also needed to provide full content and user management capabilities to admin across various roles across both the public facing and authenticated views.

</div>
</div>
</div>
</section>

<section class="project__mobile__grid">
<div class="wrapper">
<div class="grid gap-20 md:grid-cols-3">
<div class="col-span-1 flex justify-center">
<global-image
  src="tk-values-mobile.png"
  alt="Tu Kaha - Values Programme"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="tk-video-mobile.png"
  alt="Tu Kaha - Classroom"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="tk-recap-mobile.png"
  alt="Tu Kaha - modal"
></global-image>
</div>
</div>
<div class="col-span-1 flex justify-center">
</div>
</div>
</div>
</section>

<section id="long-description" class="project__long__description">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Stack & approach

</div>
<div class="project__long__description__content">

The core tech stack for this application was Vue.js on the front-end consuming a Laravel API. The dashboard and classroom are the core UI elements of the applicaiton and needed to be both interactive and engaging to the audience. This was achieved in a number of ways including Vimeo integration interactive Quiz sections, and event based modals throughout the course incl. fun Lottie animations.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### A challenge to overcome

</div>
<div class="project__long__description__content">

A key challenge in this project was handling an ‘enforced lesson flow’ as we needed students to completed the video and quiz content in sequential order. We utilised events from Vimeo API and Vuex global state to handle ‘Locked’ and ‘Unlocked’ lesson states with tight integration to the back-end of the application. We also needed to prevent users from essentially “Skipping ahead” during video lessons to really provide a classroom based experience. 

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Key features

</div>
<div class="project__long__description__content">

- Non authenticated and authenticated user facing content and dynamic navigation based on user auth state.
- My Journey view displaying course and section status and percentage completed. Locked and unlocked states on section cards.
- Classroom view featuring various lesson types (each created as separate Vue.js components).
- Lottie animations and CSS transitions utilised to deliver a more fun and engaging virtual classroom experience.  
- End of lesson, section and course modals to encourage the user to keep moving through the course to completion.

</div>
</div>
</div>
</section>

<section class="project__hero__desktop">
<div class="wrapper">
<global-image
  src="tk-desktop.png"
  alt="Tu Kaha - Dashboard"
></global-image>
</div>
</section>
