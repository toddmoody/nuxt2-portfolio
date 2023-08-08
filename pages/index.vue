<template>
  <div>
    <section id="intro" class="section__intro">
      <div>
        <h4 class="text--statement">Hi, my name is</h4>
      </div>
      <div>
        <h1 class="text--xl">Todd Moody.</h1>
      </div>
      <div>
        <h1 class="text--xl text--slate">I'm a UI/UX Software Developer.</h1>
      </div>
      <div class="content__fixed__md">
        <p>
          I’m a self-starting Software Developer with a creative, holistic, and
          results driven approach to projects. I love creating user experiences
          on complex projects that appear minimalist and simple to the end user.
          I work across the full development stack - in particular, I thrive on
          the intricacies of Front-End development. I’m passionate about being
          the conduit between the creative vision and technical implementation
          of applications.
        </p>
      </div>
    </section>
    <section id="tech-stack" class="section__tech-stack">
      <div>
        <h2 class="numbered__header">Tech Stack</h2>
      </div>
      <div class="content__fixed__md">
        <p>
          Nothing is ever static in this industry and I enjoy learning new
          languages, tools and frameworks - it’s part of what being is developer
          is all about. Some of of my favourite tech stack right now is…
        </p>
      </div>
      <div class="skills__grid">
        <div v-for="skill in skills" :key="skill.id" class="skills__wrapper">
          <h4 class="text--slate">{{ skill.category }}</h4>
          <span v-for="tag in skill.tags" :key="tag.id" class="skill">{{
            tag.title
          }}</span>
        </div>
      </div>
    </section>
    <section id="projects" class="section__projects">
      <div>
        <h2 class="numbered__header">Projects</h2>
      </div>
      <div class="projects__grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project__wrapper"
        >
          <div
            @click="project.production ? projectRoute(project.slug) : ''"
            :class="project.production ? 'project__inner--production' : ''"
            class="project__inner"
          >
            <header>
              <div class="project__top">
                <div class="project__folder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-folder"
                  >
                    <title>Folder</title>
                    <path
                      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                </div>
                <div v-if="project.production === true" class="project__link">
                  <a
                    href=""
                    aria-label="External Link"
                    class="external"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line></svg
                  ></a>
                </div>
                <div v-else>
                  <span
                    class="
                      inline-flex
                      items-center
                      px-3
                      py-0.5
                      rounded-full
                      text-sm
                      font-medium
                      leading-5
                      bg-slate
                      text-primary
                    "
                  >
                    Coming soon
                  </span>
                </div>
              </div>
              <h5 class="project__title">
                {{ project.brand }} - {{ project.project }}
              </h5>
              <div class="project__snippet">
                <p>
                  {{ project.snippet }}
                </p>
              </div>
            </header>
            <footer>
              <ul class="project__stack">
                <li v-for="tag in project.tags" :key="tag.id">
                  {{ tag.title }}
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section__contact">
      <div>
        <h2 class="numbered__header">Say hi</h2>
      </div>
      <div class="content__fixed__md">
        <p>
          Right now I’m fully committed to project work but it’s always great to
          connect with like-minded people in the tech industry. Please don't
          hesitate to get in touch by
          <a href="mailto:todd@moodsdigital.co.nz">dropping me an email</a> or
          calling <a href="tel:021570010">021 570 010</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { skills, projects } from '~/mixins/utils'

export default {
  layout: 'default',
  mixins: [skills, projects],
  data() {
    return {
      skills: skills,
      projects: projects,
    }
  },
  methods: {
    projectRoute(slug) {
      this.$router.push('projects/' + slug)
    },
  },
}
</script>

<style lang="scss" scoped></style>
