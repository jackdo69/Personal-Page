<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <div class="q-pa-sm full-width row">
          <div class="col-6 relative-position">
            <q-avatar class="q-pb-md absolute-center" size="4em">
              <img src="https://i.imgur.com/NK3r4nG.jpg" />
            </q-avatar>
          </div>

          <div class="col-6" id="line-menu">
            <q-tabs v-model="tab" class="text-teal">
              <a href="#welcome-section">
                <q-tab name="mails" icon="assignment_ind" label="About" />
              </a>
              <a href="#projects">
                <q-tab name="alarms" icon="toys" label="Projects" />
              </a>
              <a href="#contact">
                <q-tab name="movies" icon="question_answer" label="Contact" />
              </a>
            </q-tabs>

            <!-- <q-btn class="q-ma-sm" color="teal-4" dense flat label="About" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Projects" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Contact" />-->
          </div>
          <div class="col-6 text-center" id="drop-down-menu">
            <q-btn color="teal-4" icon="dehaze">
              <q-menu >
                <q-list class="text-teal" style="min-width: 100px">
                  <q-item clickable v-close-popup >
                    <a href="#welcome-section">
                      <q-item-section >About</q-item-section>
                      </a>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <a href="#projects">
                      <q-item-section>Projects</q-item-section>
                    </a>
                    
                  </q-item>
                  <q-item clickable v-close-popup>
                    <a href="#contact">
                      <q-item-section>Contact</q-item-section>
                    </a>
                  </q-item>
                </q-list>
              </q-menu>

              <!-- <q-tabs v-model="tab" vertical class="text-teal">
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="alarm" label="Alarms" />
                <q-tab name="movies" icon="movie" label="Movies" />
              </q-tabs> -->
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      tab: "mails"
    };
  },
  methods: {
    toWelcome() {}
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  #drop-down-menu {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #line-menu {
    display: none;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>