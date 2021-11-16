<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# New Forests

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

- Vue.js
- Nuxt.js
- Vuex
- Video.js
- Google Maps API
- SCSS
- Tailwind UI

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete/production</p>
</div>
</div>
</div>
<div class="project__description">

New Forests are a global leader in providing sustainable forestry investment opportunities. Due to Covid-19 preventing on-site investor tours we were engaged to create a "Virtual Tour" application.

The virtual tour needed to be as close to a real experience as possible in order to give investors a feel for the environment, location & ultimately the long-term viability of the investment opportunity.

From an investor perspective the UI/UX needed to be as clean & simple as possible with most core content including the Virtual Tour requiring authentication. Admins on the client side have full content management capability incl. creating multiple tours, management of tour content (Videos, notifications, supporting content etc), inviting users and moderation of share functionality.

</div>
</div>
</div>
</section>

<section class="project__mobile__grid">
<div class="wrapper">
<div class="grid gap-20 md:grid-cols-3">
<div class="col-span-1 flex justify-center">
<global-image
  src="nf-dash-mobile.png"
  alt="New Forests - dashboard"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="nf-map-mobile-v4.png"
  alt="New Forests Google Map"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="nf-video-mobile.png"
  alt="New Forests - video"
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

We decided on Vue.js as the core front-end framework with the addition of Nuxt.js. Nuxt provides a number of very useful baked-in features and methods that compliment Vue really well. The primary feature that confirmed this was the correct approach for us was the Server Side Rendering (SSR) capability given the importance of SEO (albeit not an immediate requirement due to the lack of public facing content). The server-side of the application was developed in Laravel (integration to the Nova CMS) including exposing a number of RESTful endpoints to consumed by the font-end. From a front-end perspective, we needed to leverage the UI benefits of a modern JavaScript framework and Single Page Application but we also needed to deliver a highly SEO friendly solution over the longer-term.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### A challenge to overcome

</div>
<div class="project__long__description__content">

From the onset Video was going to be a core part of the application. Previously, I had utilised the Vimeo API extensively however due to some fairly complex project requirements (custom bi-lingual subtitles & custom text overlays at predefined times) investigation into another player was required. It was challenging to find something JavaScript based, with the required feature set, that was also open source and had a decent level of developer documentation. Eventually, Video.js was adopted and works very seamlessly in the application.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Key features

</div>
<div class="project__long__description__content">

- Video.js integration in order to provide a highly customisable media player incl. timed video notifications (configurable in the CMS) & custom multilingual captions
- Video completion modals which are configurable in the CMS (i.e. next video in...).
- Google Maps JavaScript API integration. This enables client side admins to display the location(s) of tour stops within the tour.
- Share functionality allowing the ability for users to "Invite" their contacts to a Virtual Tour.
- Hyvor forum integration providing the ability for members to participate in group discussion.

</div>
</div>
</div>
</section>

<section class="project__hero__desktop">
<div class="wrapper">
<global-image
  src="nf-tour-desktop.jpg"
  alt="New Forests - video"
></global-image>
</div>
</section>
