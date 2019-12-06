<template>
    <div class="col-xs-10 col-sm-5 col-md-4 q-pa-md">
              <q-card class="my-card">
                <img 
                :src="project.imgURL" />
                <q-card-section>
                  <div class="text-h6">{{project.name}}</div>
                </q-card-section>
                <q-card-actions align="around">
                  <a 
                  :href="project.codeURL">
                  <q-btn
                    color="secondary"
                    icon-right="img:https://i.imgur.com/gA2DgP3.png"
                    label="Code"
                  />
                  </a>
                  
                  <a 
                  :href="project.demoURL">
                    <q-btn
                    color="red"
                    icon-right="img:https://i.imgur.com/fhlgfX6.png"
                    label="Demo" />
                  </a>
                  
                </q-card-actions>
              </q-card>
            </div>
</template>

<script>
export default {
    props: ['project']
    
}
</script>