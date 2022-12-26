<template>
  <main class="app">
    <div class="codebox" style="align-items: center; justify-content: center; display: flex;">
<img src="src\assets\ans.jpg">

    </div>  
    </main>
    </template>
    
    <script>
    
    </script>
    
    
    <style scoped>
        * {
  box-sizing: border-box;
  background-color: #F9FAFE;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(.\fonts\Montserrat-VariableFont_wght.ttf) format("truetype");

  /* add a terminal font here - inconsolata? */
}

h1,
h2,
p {
  font-family: 'Montserrat', sans-serif;
  color: rgb(0, 3, 40);
}


.codebox {
  height: 80%;
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  margin: 25px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.app{
  background-color: #F9FAFE;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
    </style>