<template>
      <div id = "intro" style = "text-align:center;">
         <h1>{{msg}}</h1>
         <h1>{{messages}}</h1>
      </div>
</template>

<script type = "text/javascript">

   export default {
      name: 'intro',
      data: function() {
         return {
            messages: "This is Home Componet."
         }
      },
      props:['msg'], // props receiving
   };

</script>