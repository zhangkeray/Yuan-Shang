 <template>
  <div>
    <v-container class="grey lighten-5">
      <v-row
        style="height: 150px;"
      >
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
        >
          <v-card
            class="pa-0"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
 
  <script>
  export default {
    name: 'PermissionPage',

    data: () => ({
      alignments: [
        
      
        'end',
      ],
    }),
  }
</script>

