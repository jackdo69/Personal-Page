<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <div class="q-pa-sm full-width row">

          <div class="col-6">
            <q-avatar class="q-ma-sm" size="60px">
              <img src="https://i.imgur.com/4LD0lMn.jpg" />
            </q-avatar>
          </div>

          <div class="col-6" id="line-menu">
            <q-btn class="q-ma-sm" color="teal-4" dense flat label="About" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Personal projects" />

            <q-btn class="q-ma-sm" color="teal-4" dense flat label="Contact" />
          </div>
          <div class="col-6" id="drop-down-menu" >
            <q-btn color="teal-4" icon="dehaze" class="float-right">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Personal Project</q-item-section>
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
      leftDrawerOpen: false
    };
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  #drop-down-menu {
    display: none
  }
}

@media screen and (max-width: 768px) {
  #line-menu {
    display: none
  }
}
</style>