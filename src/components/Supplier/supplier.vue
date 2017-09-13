<template>
  
  <v-container>
    <v-layout row wrap class="mb-2" v-for="supplier in suppliers" :key="supplier.id">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="secondary">
          <v-container fluid>
            <v-layout row wrap> 
              <v-flex xs5 sm4 md3 >
                <v-card-media class=""
                      :src="supplier.imageUrl"
                      height="180px"
                      
                ></v-card-media>
              </v-flex>
              <v-flex xs5 sm5 md7>
                <v-card-title primary-title>
                  <div>
                    <h6 class="">{{supplier.name}}</h6>
                    
                     <div class="mt-0 "> 
                       Rating:
                       <div> <star-rating 
                       v-model="supplier.rating"
                       class="mt-0 ml-2"
                       v-bind:star-size="18" 
                       :increment="0.5"
                       :inline = "true"
                       :show-rating="false"
                       active-color="#d32f2f" 
                       ></star-rating></div>
                     </div>
                     
                      <div class="mt-2 ">    
                      <v-icon >location_on</v-icon>{{supplier.location}}
                      </div> 
                      <div class="">   
                      Services: 

                      <v-chip v-for="feature in supplier.features" :key='feature.id'>{{feature}}</v-chip>
                      </div>
                  </div>
                </v-card-title>
              </v-flex>
                <v-flex xs2 sm3 md1 >
                  <v-card-text class="primary--text" style="text-decoration: line-through;">Rs.{{supplier.originalPrice}}</v-card-text>
                  <v-card-text class="info--text">Rs.{{supplier.discountPrice}}</v-card-text>
                  <v-card-actions >
                <v-btn class="success">Buy now</v-btn>
              </v-card-actions>
                </v-flex>
                
              
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        chip1: true,
        chip2: true,
        isDisabled: false,
        activeBtn:''
      }
    },
    computed: {
      suppliers () {
          return this.$store.getters.loadSuppliers
      }
    }
  }
</script>

<style scoped>
.mt-0{
    display: inline-flex;
}
</style>



