<template>
  <div :class="theme ? 'dark__theme' : 'light__theme'" class="default__wrapper">
    <header
      :class="!showNavbar ? 'default__header--hidden' : 'flex'"
      class="default__header"
    >
      <nav>
        <div class="nav__logo__wrapper" tabindex="-1">
          <nuxt-link to="/" aria-label="home"
            ><img src="~/assets/images/tm-brand.svg" class="nav__logo"
          /></nuxt-link>
        </div>
        <div class="nav__menu__wrapper">
          <ol>
            <li>
              <a class="font--plex" href="/#about" aria-label="home">About</a>
            </li>
            <li>
              <a class="font--plex" href="/#projects" aria-label="projects"
                >Projects</a
              >
            </li>
            <li>
              <a class="font--plex" href="/#contact" aria-label="contact"
                >Contact</a
              >
            </li>
          </ol>
          <div>
            <a
              class="btn__resume font--plex"
              href="/resume_todd_moody.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >Resume</a
            >
          </div>
        </div>
        <div class="mobile__menu__wrapper">
          <div>
            <button
              @click="mobileMenu = !mobileMenu"
              aria-label="Menu"
              class="mobile__menu__hamburger"
            >
              <div class="mobile__menu__hamburger__box">
                <div
                  :class="mobileMenu ? 'active' : 'inactive'"
                  class="mobile__menu__hamburger__box__inner"
                ></div>
              </div>
            </button>
            <aside
              :class="mobileMenu ? 'active' : 'inactive'"
              aria-hidden="true"
              tabindex="-1"
            >
              <nav>
                <ol>
                  <li>
                    <a
                      @click="mobileMenu = false"
                      class="font--plex"
                      href="/#about"
                      aria-label="about"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      @click="mobileMenu = false"
                      class="font--plex"
                      href="/#projects"
                      aria-label="projects"
                      >Projects</a
                    >
                  </li>
                  <li>
                    <a
                      @click="mobileMenu = false"
                      class="font--plex"
                      href="/#contact"
                      aria-label="contact"
                      >Contact</a
                    >
                  </li>
                </ol>
                <a
                  @click="mobileMenu = false"
                  class="btn__resume font--plex"
                  href="/resume_todd_moody.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Resume</a
                >
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
    <div orientation="left" class="side__element left">
      <ul class="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
        <li>
          <a
            href="https://github.com/toddmoody"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <title>Theme</title>
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="https://join.slack.com/t/slack-x6a3072/shared_invite/zt-yrs5o8a8-AsFPShFjM8G23VJM2j8zMQ"
            aria-label="Slack"
            target="_blank"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-slack"
            >
              <path
                d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
              ></path>
              <path
                d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
              ></path>
              <path
                d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
              ></path>
              <path
                d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
              ></path>
              <path
                d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
              ></path>
              <path
                d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
              ></path>
              <path
                d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
              ></path>
              <path
                d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/toddmoody1/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle></svg
          ></a>
        </li>
        <li>
          <a
            href="https://codepen.io/toddmoody"
            aria-label="Codepen"
            target="_blank"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-codepen"
            >
              <title>CodePen</title>
              <polygon
                points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
              ></polygon>
              <line x1="12" y1="22" x2="12" y2="15.5"></line>
              <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
              <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
              <line x1="12" y1="2" x2="12" y2="8.5"></line></svg
          ></a>
        </li>
        <li>
          <a
            href="mailto:todd@moodsdigital.co.nz"
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg
          ></a>
        </li>
      </ul>
    </div>
    <div orientation="right" class="side__element right">
      <ul class="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
        <li class="inline-flex">
          <button
            @click="toggleTheme"
            aria-label="Theme"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              v-if="theme"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <main>
      <div class="wrapper">
        <Nuxt />
      </div>
    </main>
    <footer class="default__footer">
      <div class="w-28 h-28">
        <lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
      </div>
      <div class="content__fixed__xs">
        <p class="font--plex text--sm">
          Built by me using Nuxt.js & hosted somewhere in the AWS cloud.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as animationData from '../assets/lottie/developer.json'

export default {
  data() {
    return {
      showNavbar: true,
      mobileMenu: false,
      lastScrollPosition: 0,
      anim: null,
      lottieOptions: { animationData: animationData.default },
    }
  },
  computed: {
    ...mapGetters({
      theme: 'theme',
    }),
  },
  methods: {
    ...mapActions({
      toggleThemeAction: 'toggleThemeAction',
    }),
    toggleTheme() {
      this.toggleThemeAction()
    },
    handleAnimation: function (anim) {
      this.anim = anim
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 35) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
