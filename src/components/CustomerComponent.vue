<template>
  <div class="container">
     <h1>{{message}}</h1>
     <h5 style="color: red; margin-top: 100px;"> ------------ define variable and call function ------------ </h5>
    <div id = "vue_det">
      <h6>Firstname : {{firstname}}</h6>
      <h6>Lastname : {{lastname}}</h6>
      <div>{{getfullname()}}</div>
   </div>

   <h5 style="color: red; margin-top: 100px;"> ------------ api call ------------ </h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id"> 
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
        </tr>
      </tbody>
    </table> 

   <h5 style="color: red; margin-top: 100px;"> ------------ directives examples ------------ </h5>
   <div v-html = "htmlcontent"></div>
   <component v-bind:is = "view"></component>
   <a :href = "hreflink" target = "_blank">Click Me </a>   <br/>
   <div v-bind:class = "{active:isactive}" style="margin-top: 30px"><b>{{bindingtitle}}</b></div>


<!-- computed  example -->
   <!-- <div id = "computed_props" style="margin-top: 100px;">
      <h5 style="color: red; margin-top: 100px;"> ------------ commputed example ------------ </h5>
         FirstName : <input type = "text" v-model = "firstname" /> <br/><br/>
         LastName : <input type = "text" v-model = "lastname"/> <br/><br/>
         <h1>My name is {{firstname}} {{lastname}}</h1>
         <h1>Using computed method : {{getComputedfullname}}</h1>
   </div> -->


      <!-- watch property example-->
      <div id = "computed_props" style="margin-top:30px">
         <h5 style="color: red; margin-top: 100px;"> ------------ watch property example ------------ </h5>
         Kilometers : <input type = "text" v-model = "kilometers">
         Meters : <input type = "text" v-model = "meters">
      </div>

      <!-- events example -->
      <h5 style="color: red; margin-top: 100px;"> ------------ events example ------------ </h5>
      <div id = "databinding" style="margin-top:30px">
         <button @click = "displaynumbers">Click ME</button>
         <h2> Add Number 100 + 200 = {{total}}</h2>
      </div>

      <div style="margin-top:30px" v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div>


      <div id = "databinding123">
         <button v-on:click.once = "buttonclickedonce">Click Once</button>
         Output:{{clicknum}}
         <br/><br/>
         <button v-on:click = "buttonclicked">Click Me</button>
         Output:{{clicknum1}}
         <br>
         <br>
         <a href = "http://www.bing.com" v-on:click = "clickme" target = "_blank">Click Me</a>

         <br><br>
         <input type = "text" v-on:keyup.enter = "showinputvalue" placeholder = "Enter your name"/>
         <h3> input value : {{name}}</h3>
      </div>

      <!-- props example -->
      <div>
         <h5 style="color: red; margin-top: 100px;"> ------------ props example ------------ </h5>
         <p style = "font-size:25px;">Language displayed : <b>{{ languageclicked }}</b></p>
         <component
               v-for = "(item, index) in languages"
               v-bind:item = "item"
               v-bind:index = "index"
               v-bind:key="item.id"
               v-bind:is = "CustomComponent"
               v-on:showlanguage = "languagedisp"></component>
      </div>

      <!-- transion example -->

      <div id = "transion">
         <h5 style="color: red; margin-top: 100px;"> ------------ transion example ------------ </h5>
         <button v-on:click = "show = !show">Click Me</button>
         <transition name = "fade">
            <p v-show = "show" style="color: red">Animation Example</p>
         </transition>
      </div>

      <!-- routing example -->
      <div id = "routing" style="margin-top: 30px">
         <h5 style="color: red; margin-top: 100px;"> ------------ routing examples ------------ </h5>
         <p>
            <router-link to = "/helloworld" style="margin-right: 30px;">go to helloworld</router-link>
            <router-link to = "/">go to home</router-link>
         </p>
      </div>

      <!-- vuex example -->
      <div id = "routing" style="margin-top: 30px">
         <h5 style="color: red; margin-top: 100px;"> ------------ vuex examples ------------ </h5>
         <h1>Number of clicks: {{counter}}</h1>
         <button @click="clicked">click here</button>
      </div>

  </div> 
</template>

<script type = "text/javascript" src = "../js/vue.js"></script>
<script>
import axios from 'axios'
import Vue from 'vue/dist/vue.js'
import Inputs from './Inputs'
import CustomComponent from './CustomComponent'

  export default {
    name: '',

      data: function() {
         return {
            message: 'This is customer page',
            firstname : "cheng",
            lastname  : "jin",
            address    : "Mumbai",
            users: null,
            htmlcontent : "<div><h1>Vue Js Template</h1></div>",
            imgsrc : "assets/img.png",
            view: 'Inputs',
            kilometers : 0,
            meters:0,
            hreflink: "https://cn.bing.com/?mkt=zh-CN",
            bindingtitle: "CLASS BINDING",
            isactive : true,
            num1: 100,
            num2 : 200,
            total : '',
            styleobj : {
               width:"100px",
               height:"100px",
               backgroundColor:"red"
            },

            clicknum : 0,
            clicknum1 :0,
            name: '',
            CustomComponent: 'CustomComponent',
            languageclicked: "",
            languages : ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"],
            show:true,
         };
      },

      methods: {
         getfullname : function() {
            return "I am "+this.firstname +" "+ this.lastname;
         },
         displaynumbers : function(event) {
            console.log(event);
            return this.total =  this.num1+ this.num2;
         },
         changebgcolor : function() {
            this.styleobj.backgroundColor = "green";
         },
         originalcolor : function() {
            this.styleobj.backgroundColor = "red";
         },
         buttonclickedonce : function() {
            this.clicknum++;
         },
         buttonclicked : function() {
            this.clicknum1++;
         },
         clickme : function() {
            alert("Anchor tag is clicked");
         },
         showinputvalue: function(event) {
            console.log(event.target.value);
            this.name = event.target.value;
         },
         languagedisp: function (a) {
                console.log("languagedisp is clicked.");
                this.languageclicked = a;
         },

         clicked: function(event) {
            // this.counter++;
            this.$store.commit('increment');
         }
      },

      created: function() {
         console.log("Hello world!");
         axios
         .get('https://jsonplaceholder.typicode.com/users')
         .then(res => {
            console.log(res.data);
            this.users = res.data;
         })
      },

      components: {
         Inputs,
         CustomComponent,
      },

      computed :{
         getComputedfullname : function() {
            return this.firstname +" "+ this.lastname;
         },

         counter: function() {
            return this.$store.state.counter;
         }

      },

      watch : {
         kilometers:function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
         },
         meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
         }
      },
   
   }

</script>

<style>
  h3 {
    margin-bottom: 5%;
  }

  .active {
      background: red;
   }
   .fade-enter-active, .fade-leave-active {
            transition: opacity 2s,
         }
   .fade-enter, .fade-leave-to /* .fade1-leave-active below version 2.1.8 */ {
      opacity: 0
   }
</style>