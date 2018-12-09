<template>
  <div class="hello">
    {{result}}
    <ChatItems :message="message"></ChatItems>
  </div>
</template>

<script>
// import chatitem from ChatitemsVue
import ChatItems from './Chatitems.vue';
import axios from 'axios'

export default {
  data(){
    return{
      result: "Loading",
      message:{
        user:{
          avatar: "avatar",
          onLine: true,
          name: "adam shah",
          when: "24.01.2011",
          text: "Aliquip fugiat et incididunt reprehenderit qui est."
        },
        created_at: 'Yestarday',
        likes: 2,
      }
    }
  },
  mounted(){
    setTimeout(()=>{
        axios.get('http://127.0.0.1:5000/').then(a=>{
          this.result = a.data
      }); 
    }, 1000)
        
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    ChatItems
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
