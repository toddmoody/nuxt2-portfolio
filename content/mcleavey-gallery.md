<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# McLeavey Gallery

</h1>
</div>
<div>
<h3>

### SilverStripe CMS & UX

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

- SilverStripe v4.7.3
- Adobe xD
- MailGun
- MySQL
- Vimeo
- Webpack
- AWS

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete/production</p>
</div>
</div>
</div>
<div class="project__description">

McLeavey Gallery operate a boutique Gallery in central Wellington and required a refreshed digital presence - with a focus on user experience. This involved a ground-up rethink of the layout and design, creating a seamless experience for the end-user whilst helping to facilitate sales leads. In particular, the client wanted to improve the overall flow between Exhibitions and related Artists & Artworks.

In addition to the front-end, a number of enhancements were identified relating to the SilverStripe platform including updating to the latest stable release and updates to the database relationships to support the UX updates. 

To address a number of other pain points (including slow page load times) and boost SEO a devops phase was implemented including migrating from a slow and restrictive shared hosting platform to Amazon Web Services.

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
  src="mg-twenty-mobile.png"
  alt="McLeavey - Exhibition"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="mg-artists-mobile.png"
  alt="McLeavey - Artists"
></global-image>
</div>
<div class="col-span-1 flex justify-center">
<global-image
  src="mg-early-mobile.png"
  alt="McLeavey - Artwork"
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

To achieve the ultimate goal of improving the general UX, we kicked off by identifying current pain points and gaps in the current flow. Once I had a clear picture of this, I creating a fresh set of wireframes across all key page templates using Adobe xD. This gave us a solid foundation to iterate over until we were able to achieve a high fidelity prototype.

Once this clear view of the revised website had been achieved, I utilised a “bottom-up” approach starting with the devops updates including generating a fresh instance of SilverStripe and configuring AWS hosting and GitHub integration to provide a smooth local development workflow. From there, I refined and extended the existing relationships and controllers to facilitate the new features. Lastly, I moved to the front-end to and feature implementation (see core features below).

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### A challenge to overcome

</div>
<div class="project__long__description__content">

The initial SilverStripe instance that was inherited had been built well from an overall architecture point if view, however it was causing various pain points from a CMS usability perspective. For example, on the front-end artwork relating to an exhibition would be displayed in the order it had been created in the CMS. Given some Exhibitions feature 20+ artworks this was a major pain point as often the artworks would be displayed in an incorrect order. I resolved this issue by implementing a sort index and utilising the  Sortable Grid Field package - providing the client with simple drag & drop sorting functionality for Exhibition artwork and other key areas across the website.

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">


### Key features

</div>
<div class="project__long__description__content">

- Feature artwork click to “pan & zoom” functionality (Viewer JS)
- Sortable CMS dataobjects allowing the client to easily reorder feature works etc (SilverStripe Sortable Grid Field)
- Directly enquiry on artwork (SilverStripe User Forms & MailGun integration)
- Refactored grid (CSS grid)
- Vimeo integration
- Webpack compilation and bundling of SCSS & JS and hot reloading
- AWS hosing and GitHub auto-deploy

</div>
</div>
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Project link

</div>
<div class="project__long__description__content">
<a href="https://mcleaveygallery.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
</div>
    </div>
</div>
</section>

<section class="project__hero__desktop">
<div class="wrapper">
<global-image
  src="mg-desktop.png"
  alt="McLeavey - Exhibition"
></global-image>
</div>
</section>
