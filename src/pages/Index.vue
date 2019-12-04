<template>
  <q-page class="flex bg-brown-1">
    <div class="q-pa-lg">
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
          <div class="text-body2">I am a Vietnamese coder based in Sydney. I mainly work on
            Javascript framework (Vue and React) along with many other tools (Firebase, Wordpress..)
            Besides from coding, I love surfing, hanging out with my mates and reading manga.  
          </div>
          <br />
          <q-img src="https://i.imgur.com/kBOdrsX.jpg" style="height: 18em; max-width: 24em;" />
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
          
          <div class="row justify-center">
            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/Gbw8Caj.png" />
                <q-card-section>
                  <div class="text-h6">[Firebase-VueJS] Post-it Notes</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/lm1sJzB.png" />
                <q-card-section>
                  <div class="text-h6">[Wordpress] Business Website</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>

            

            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/jpPdKcQ.png" />
                
                <q-card-section>
                  <div class="text-h6">[FCC-ReactJS] Pomodoro Clock</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>
          </div>

          <div class="row justify-center">
            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/c45p7xT.png" />
                <q-card-section>
                  <div class="text-h6">[FCC-ReactJS] Random Quote</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/JOXdPer.png" />
                <q-card-section>
                  <div class="text-h6">[FCC-ReactJS] Drum Machine</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xs-10 col-sm-5 col-md-3 q-pa-md">
              <q-card class="my-card">
                <img src="https://i.imgur.com/fKuhUOS.png" />
                <q-card-section>
                  <div class="text-h6">[FCC-ReactJS] Calculator</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  <q-btn color="red" icon-right="img:https://i.imgur.com/fhlgfX6.png" label="Demo" />
                </q-card-actions>
              </q-card>
            </div>
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
    </div>
  </q-page>
</template>

<script>


export default {

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
  height: 80vh;
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
