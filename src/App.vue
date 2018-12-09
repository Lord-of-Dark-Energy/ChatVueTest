<template>
  <div id="app">
    <div :class="{'mainCont': reSiz==false, 'mainCont reSize': reSiz==true}">
      <div class="headPlato">
        <div>Trollbox</div>
        <div class="iconsCont">
          <img style="width: 33%" src="./assets/settings.svg" @click="settingsMenu"/>
          <img style="width: 33%" src="./assets/more.svg" @click="reSize"/>
          <img style="width: 20%" src="./assets/down.svg" @click="hide"/>
        </div>
      </div>

      <div v-show="visible" v-for="(message, i) in messages" :class="{'msgBoard dark': i%2==0, 'msgBoard light': i%2!==0}">
          <span><b>{{message.username}} : </b> {{message.text}}</span>  <span style="padding-left: 2em; color: gray;">{{message.time.substring(16, 24)}}</span>
      </div>

      <input class="vvodPole" v-model="text" type="text"/>
      <button class="btn" @click="send">отправить</button>
    </div>
    

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import io from 'socket.io-client';
import ChatMessage from './js/message.js'

export default {
  name: 'app',
  data(){
    return{
      socket: null,
      text: '',
      messages:[],
      visible: true,
      reSiz: false
    }
  },
  methods:{
    send(){
      let obj = {
        text: this.text,
        username: "Adam",
        time: Date()
      }
      this.text = ""
      let message = new ChatMessage(obj)
      this.socket.emit('chat message', message.prepare());
    },
    hide(){
      console.log("mr. hyde")
      this.visible = !this.visible
    },
    settingsMenu(){
      console.log("it's settings time")
    },
    reSize(){
      console.log("we need re size")
      this.reSiz = !this.reSiz
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
    console.log("_Socket")
    this.socket = io('https://testkeklol.herokuapp.com')
    console.log('this Socket', this.socket);

    // setInterval(()=>{
    //   this.socket.emit("chat message", 'spam');
    // }, 1000);
    this.socket.on('chat message', (msg) => {
      console.log('GET _msg')
      let obj = JSON.parse(msg)
      this.messages.push(new ChatMessage(obj))
      console.log(this.messages)
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #2c3e50;
}
.mainCont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-top: 3em;
}
.reSize{
  width: 100%;
  margin-top: 0em;
}
.headPlato{
  display: flex;
  justify-content: space-between;
  font-family: 'SFUI', sans-serif;
	font-weight: 600;
  padding: .5em;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  background-color: darkorange;
  color: white;
}
.iconsCont{
  width: 20%;
  display: flex;
  justify-content: space-between;
}
.msgBoard{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: .5em;
  padding-bottom: .5em;
  color: black;
  background: white;
}
.dark{
  background: rgb(200, 225, 233);
}
.light{
  background: rgb(235, 231, 231);
}
.vvodPole{
  border: 2px solid #195675;
  border-radius: 10px;
  position: relative;
  margin-top: 5em;
  padding: .5em;
  margin: 5px;
  margin-top: 20px;
  outline: 5;
}
.btn{
  border: 2px solid green;
  border-radius: 10px;
  position: relative;
  margin-top: 5em;
  padding: .5em;
  margin: 5px;
  outline: 5;
}
</style>
