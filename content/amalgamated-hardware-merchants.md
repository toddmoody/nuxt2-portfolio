<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# Amalgamated Hardware Merchants

</h1>
</div>
<div>
<h3>

### Shopify Plus Full Rebuild

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

- Liquid
- Vue.js (Composition API)
- Pinia Store
- Wishlist API integration (integration with in-house application)
- Wholesale pricing customisation 
- B2B only visibility (elements disabled to public users)
- Cart / Product Recommendations & Predictive Search Ajax API integrations
- Product Search & Filter API integration for collections & filtering
- Shopify CLI v3
- RESTful API / Axios
- SCSS
- Tailwind CSS
- Vite

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete (Go-Live scheduled end of 2023)</p>
</div>
</div>
</div>
<div class="project__description">

New Forests are a global leader in providing sustainable forestry investment opportunities. Due to Covid-19 preventing on-site investor tours we were engaged to create a "Virtual Tour" application.

The virtual tour needed to be as close to a real experience as possible in order to give investors a feel for the environment, location & ultimately the long-term viability of the investment opportunity.

From an investor perspective the UI/UX needed to be as clean & simple as possible with most core content including the Virtual Tour requiring authentication. Admins on the client side have full content management capability incl. creating multiple tours, management of tour content (Videos, notifications, supporting content etc), inviting users and moderation of share functionality.

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
  src="ahm-pdp-mobile.png"
  alt="AHM - PDP"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="ahm-collection-mobile.png"
  alt="AHM - Collection"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="ahm-quick-atc-mobile.png"
  alt="AHM - Quick ATC"
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
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Project link

</div>
<div class="project__long__description__content">
<a href="https://amalgamated-hardware-merchants.myshopify.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
</div>
</div>
</div>
</section>

<section class="project__hero__desktop">
<div class="wrapper">
<global-image
  src="ahm-home-desktop.png"
  alt="AHM - home"
></global-image>
</div>
</section>
