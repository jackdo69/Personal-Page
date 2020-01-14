<template>
  <q-page class="flex bg-brown-1">
    <div class="q-pa-md">
      <div class="col q-ma-md">
        <!-- START WELCOME SECTION -->
        <div class="text-center">
          <div class="text-h4 text-blue-grey-9">Hi, I am Jack</div>
          <div class="text-subtitle2 text-blue-grey-9">
            A junior web developer
          </div>
        </div>

        <section id="welcome-section" class="welcome-section">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="text-h6 text-italic text-blue-grey-9">About me</div>
          <div class="text-body1" style="width:70%">I am a Vietnamese coder based in Sydney. I mainly work on
            Javascript framework (Vue and React) along with many other tools (Firebase, Wordpress..)
            Besides from coding, I love surfing, hanging out with my mates and reading manga.  
          </div>
          <br />
          <q-img class ="rounded-borders" src="https://i.imgur.com/RithXQF.jpg" style=" max-width: 32em;" />
          <br />
        </section>

        <!-- END WELCOME SECTION -->

        <!-- START PROJECTS SECTION -->

        <section id="projects" class="projects-section">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="text-h6 text-italic text-blue-grey-9">My Projects</div>
          
          <div class="row justify-center" style="width:80%" >

            <project 
              v-for="(project, key) in projects"
              :key="key"
              :project="project" />

            
          </div>
        </section>

        <!-- END PROJECTS SECTION -->

        <!-- START CONTACT SECTION -->

        <section id="contact" class="contact-section">
          <div class="text-h6 text-italic text-blue-grey-9">You can find me on</div>
          <div class="row">
            <div class="col q-ma-md text-red-4">
              <a href="https://github.com/jackdo69"><i class="fab fa-github fa-4x"></i></a>
            </div>
            <div class="col q-ma-md text-red-4">
              <a href="https://www.instagram.com/jack_do68/?hl=en"><i class="fab fa-instagram fa-4x"></i></a>
            </div>
            <div class="col q-ma-md text-red-4">
              <a href="https://www.messenger.com/t/portgas.ace.93/"><i class="fab fa-facebook-messenger fa-4x"></i></a>
            </div>
          </div>
        </section>

        <!-- END CONTACT SECTION -->
      </div>

      <hr />
      <small>&copy; Copyright {{currentYear}} Jack Do. All Rights Reserved.</small>
    </div>
  </q-page>
</template>

<script>

import { mapGetters, mapActions } from 'vuex' 
import { Loading, QSpinnerBall } from 'quasar'

export default {
  
  computed: {
    currentYear() {
      let d = new Date()
      return d.getFullYear()
    },
    ...mapGetters('projects', ['projects'])
  },
  components: {
    'project': require('components/Project.vue').default
  },
  methods: {
    ...mapActions('projects', ['fbReadData'])
  },
  created() {
    this.fbReadData()
  }
}
</script>

<style scoped>
body {
  background-color: #f1ebe5;
}

img {
  display: block;
  width: 100%;
}

/* Styling for welcome section */
.welcome-section {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  /* height: 80vh; */
}

.projects-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80vh;
}
/*End of welcome section */

/*Styling for project section */

/*End of project section */
</style>
