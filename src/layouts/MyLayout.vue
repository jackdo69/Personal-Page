<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <div class="q-pa-sm full-width row">
          <div class="col-6 relative-position">
            <q-avatar class="q-pb-md absolute-center" size="60px">
              <img src="https://i.imgur.com/4LD0lMn.jpg" />
            </q-avatar>
          </div>

          <div class="col-6" id="line-menu">
            <q-tabs v-model="tab" class="text-teal">
              <a href="/#welcome-section"><q-tab name="mails" icon="assignment_ind" label="About" /></a>
              <a href="/#projects"><q-tab name="alarms" icon="toys" label="Projects" /></a>
              <a href="/#contact"><q-tab name="movies" icon="question_answer" label="Contact" /></a>
              
            </q-tabs>

            <!-- <q-btn class="q-ma-sm" color="teal-4" dense flat label="About" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Projects" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Contact" />-->
          </div>
          <div class="col-6" id="drop-down-menu">
            <q-btn color="teal-4" icon="dehaze" class="float-right">
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>About</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Projects</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Contact</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
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
      tab: 'mails'
    };
  },
  methods: {
    toWelcome() {

    }
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