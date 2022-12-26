<template>
    <main class="app">
        <div class="box">
            <h1>Instructions</h1>
            <ol>
                <li class="arrow">Thing 1</li>
                <li class="arrow">Thing 2</li>
                <li class="arrow">Thing 3</li>
            </ol>
        </div>
    </main>
</template>


<script>

</script>

<style scoped>

.app{
  background-color: #F9FAFE;
  min-height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box{
    height: 80%;
    min-height: 768px;
    width: 100%;
    padding: 25px;
    border-radius: 10px;
    margin: 25px;
    margin-top: 15px;
    line-height: 60px;
    background-color: #F9FAFE;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

            
            
ol {
  line-height: 3;
}

ol li {
  list-style-type: none;
  counter-increment: item;
}

ol li:before {
  content: counter(item);
  display: inline-block;
  width: 15px;
  height: 25px;
  margin-right: 5px;
  background-color: #f9dd94;
  color: #7eb4e2;
  font-weight: bold;
  font-size: 140%;
  text-align: center;
  vertical-align: end;
  padding: 0 8px 8px;
  border-radius: 3px;
  line-height: 1.3;
}
    
    


</style>