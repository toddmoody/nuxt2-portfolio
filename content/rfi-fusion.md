<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# RFI Fusion

</h1>
</div>
<div>
<h3>

### Virtual tour application

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

- Figma
- Vue.js / Nuxt.js
- Vuex
- VeeValidate
- RESTful API / Axios
- Tailwind CSS / SCSS
- Laravel 8
- Stripe API
- AWS & S3 buckets

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete/production</p>
</div>
</div>
</div>
<div class="project__description">

RFI Fusion is a collaborative tool designed to streamline the communication between teams during projects. Project stakeholders can easily invite core project members, engage with each other, follow-up outstanding tasks, upload important documents, plus many other key features - all to help ensure a smooth project workflow.

At the core, RFI Fusion solves a problem many constructon related businesses face which is the B2B "Request For Information" process very time-consuming, cumbersome, and typicaly 100% paper-based. It's estimated that approximately 1% of construction related business costs are related to arduous RFI processes.

Initially prototyped and released at an MVP application for internal usage, we're excited to be nearing the commercial BETA release of RFI Fusion!

<a href="#long-description">Stack, approach & more</a>
</div>
</div>
</div>
</section>

<section class="project__mobile__grid">
<div class="wrapper">
<div class="grid gap-20 md:grid-cols-3">
<div class="col-span-1 flex justify-center">
<global-image
  src="rf-notifications-mobile.png"
  alt="RFI Fusion - notifications"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="rf-preferences-mobile.png"
  alt="RFI Fusion - preferences"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="rf-create-mobile.png"
  alt="RFI Fusion - create RFI"
></global-image>
</div>
</div>
<div class="col-span-1 flex justify-center">
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

I managed the design, prototyping and full-stack development of this application. I could see the potential in this application and I wanted to utilise a technology stack that would not only meet the immediate needs of the application but would also provide the flexibility required for feature releases in subsequent project phases. Additionally, if the application got larger than I was able to manage as a freelance developer, it was critical that code to be well documented and as maintainable as possible in order to able to easily brief out features to external developers. Therefore, I decided to use Vue.js as the front-end framework along with Nuxt.js to take advantage of Server Side Rendering with the back-end developed in Laravel 8. The entire solution is hosted on AWS including file uploads utilising S3 buckets.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### A challenge to overcome

</div>
<div class="project__long__description__content">

With a project of this scale there have been various challenges along the way. I think using an agile process and staggering deployments has really helped keep the evolution of the application both efficient and effective - as has the underlying technology stack and the development workflow I have established (incl. auto-deploy from my GitHub master branch). One recent challenge has been allowing individual companies to control the level of visibility they have across the application. Typically this would be quite straightforward but given the core application has been designed for communication between companies (i.e. being as viral as possible) it has been challenging to isolate these preferences and ensure the flow remains optimal across the front-end. Luckily, I had previously built a commmunications preference center for controlling email notifications that I was able to extend an isolate to the group that has privillages to control the companies visibility.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Key features

</div>
<div class="project__long__description__content">

- Multi-tier user permission levels to enable relevant data to displayed to various user groups. CRUD operations determined by permission level.
- Free and paid user registration process integrated with the Stripe JavaScript payment API. Ability for users to update their subscription in the application.
- Supporting document uploads for RFI’s - stored in a secure AWS S3 bucket. 
- Notifications displayed in real-time and views are customised based on notification type. 
- Integration to Laravel email notifications across the application in order to notify users of key events e.g. You have been allocated an RFI etc.
- Dynamic form validation via VeeValidate to ensure the best possible experience across multiple forms in the application. 
- Bulk export of RFI data - JSON -> CSV (upcoming deployment).

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Project link

</div>
<div class="project__long__description__content">
<a href="https://rfifusion.nz" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
</div>
</div>
</div>
</section>

<section class="project__hero__desktop">
<div class="wrapper">
<global-image
  src="rf-desktop.png"
  alt="RFI Fusion - Dashboard"
></global-image>
</div>
</section>
