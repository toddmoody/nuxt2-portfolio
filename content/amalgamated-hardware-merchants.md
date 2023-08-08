<header class="project__banner">
<div class="wrapper">
<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
<div class="pt-8">
<h1>

# Amalgamated Hardware Merchants (AHM)

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
- Wishlist API integration (RESTful API integration)
- Wholesale pricing customisation 
- B2B only visibility
- Cart, Product Recommendations & Predictive Search Ajax integrations
- Boost Product Search & Filter API integration 
- Shopify CLI v3
- SCSS
- Tailwind CSS
- Vite

<div class="mt-6">
<h4>Status</h4>
<div class="flex items-center">
<p>Complete (Go-Live Oct 2023)</p>
</div>
</div>
</div>
<div class="project__description">

Amalgamated Hardware Merchants (AHM) is a leading B2B supplier of hardware, building materials and DIY products with clients such as Bunnings Warehouse, and Mitre 10. We were engaged to rebuild their existing Magento store from the ground up in Shopify Plus.

There was no shortage of pain-points with the existing build that we needed to address, in particular:

- The design was heavily outdated and general UX was a known issue. 
- Over time, B2B pricing requirements had grown to much more complex.
- Users were finding the overall shopping experience to be time consuming and arduous (in particular for repeat orders) leading to a downward trend on conversion rates.
- Due to a large and rapidly expanding product library, searching and filtering products had become very difficult.

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

From early on in the design phase, it was clear that although the front-end would be clean and modular, that there would be various complex UI elements - many of which would have similar variations across the site. We also needed tooling that would allow us to integrate with various API’s in a performant and effective way. 

Utilising the Shopify Storefront API was tempting however in this case, I decided that a hybrid approach of Liquid and Vue composition API would be the ideal combination as most of the more complicated requirements were based on the AHM’s custom data set-up (as opposed to extracting Shopify data). Our existing base theme repo had become a little outdated, in particular from a performance perspective. After much research, I decided to leverage from a [Vite based repo](https://github.com/barrel/shopify-vite/tree/main/packages/vite-plugin-shopify) originally created by the [Barrel agency](https://www.barrelny.com/shopify-plus-ecommerce-agency). 

The base theme was then customised for our needs including Vue 3 support for multiple mounting points, enabling us to target the specific component(s) needed for a particular page. Additionally, I decided to integrate Pinia for global store management. 

</div>
</div>

<div class="flex flex-wrap -mx-5 overflow-hidden">
<div class="project__long__description__title">

### Key features

</div>
<div class="project__long__description__content">

- B2B only visibility. Although the client wanted the general public to be able the access the site, there is various critical B2B only functionality, in particular the pricing data. This was handled on the front-end by extracting the customers auth state (along with other key data as a customer object) and either using this across Liquid sections or passing the object into Vue as needed. From here, we were able to easily toggle the visibility of both Liquid and/or Vue elements as required.
- Tiered pricing levels. The client had a standard Trade Price applicable to some clients but in addition to this many clients have special trade rates. The data for the trade pricing is pushed into Shopify from Netsuite and we recommend a Metafield object schema at the product level. The object essentially includes a UUID for any customers that have special pricing and the applicable trade price. On the PDP (and various other areas of the site where pricing is displayed) we are able to loop over the Metafield data and reveal the relevant price.
- Global customer discounting. A further requirement on top of the trade pricing was the ability to apply global discounting on top of any applicable trade price. Again, a Metafield solution was utilised here with integer data (relating to the applicable discount) being pushed into Shopify via Netsuite.
- Multiple Wishlist integration. The ability to save multiple Wishlist’s was a core feature of the site and would be also facilitate some of the bulk ATC features (more below). Our back-end development team created a Shopify app for this purpose and exposed a number of API endpoints to facilitate CRUD actions which were consumed on the front-end. Key features included, the the ability to name lists (with the default being a sequentially numbered name i.e. Wishlist #1), add single and multiple products to a list and remove items from the list. 
- Bulk add to cart. Another key feature was the bulk ATC functionality that was applied in various variations across the site. In particular, the ability to bulk add products to the cart using a client generated SKU number (Shopfiy Predictive Search API was also utilised here), the ability to bulk add an entire previous order to the cart and the ability to add the entire Wishlist contents to the cart (and the related handling of low stock / out of stock products).

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
