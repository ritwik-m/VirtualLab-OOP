<template>
    <pre>
       
public class Vehicle {
	private final int regNum;
	private String keyStatus;
	
	public Vehicle(int regNum)
	{
		this.regNum=regNum;
		this.keyStatus="available";
	}
	
	public String updateKeyStatus()
	{
		this.keyStatus="not available";
		return this.keyStatus;
	}

	public String getKeyStatus() {
		return keyStatus;
	}

	public void setKeyStatus(String keyStatus) {
		this.keyStatus = keyStatus;
	}

	public int getRegNum() {
		return regNum;
	}
	
}

    </pre>
    </template>
    
    <script>
    
    </script>
    
    
    <style scoped>
      .image{
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 15%;
      height: auto;
      padding: 0;
    }
    
    .identify-box{
      background-color: #fff;
      box-shadow: 2px 3px 10px 2px #D7DFFF;
    }
    
    .to-identify{
      background-color: #F9FAFE;
      box-shadow: 2px 3px 10px 2px #D7DFFF;
     
    }
    .identified{
      background-color: #6D71FA;
      color: white;
    }
    
    h3{
      margin-bottom: 0px;
    }
    
    .unidentified{
      background-color: #fff;
      color: black;
    }
    
    .flex-between{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        width: auto;
        gap: 10px;
    }
    
    .drop-zone {
      display: flex;
      /* width: fit-content; */
      min-width: 20ch;
      max-width: 60ch;
      margin: 5px;
      height: fit-content;
      box-shadow: 2px 3px 10px 2px #D7DFFF;
      max-height: fit-content;
      min-height: 10vh;
      flex-wrap: wrap;
      flex-direction: column;
      border-radius: 10px;
      padding: 5px;
    }
    
    .outer-box{
      padding: 5px;
        background-color: #F9FAFE;
        box-shadow: 1px 2px 5px 1px #D7DFFF;
        max-width: 600px;
        min-width: fit-content;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    .flex-horizontal{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content:flex-start;
    }
    
    .drag-el-horizontal {
      padding-left: 1vh;
      padding-right: 1vh;
      border-radius: 5px;
      margin: 5px;
      text-align: center;
      height: fit-content;
      max-width: inherit;
      box-shadow: 2px 3px 10px 2px #D7DFFF;
      cursor: pointer;
    }
    
    .drop-zone-horizontal {
      display: flex;
      max-width: 1000px;
      min-width: 700px;
      margin: 10px;
      margin-bottom: 25px;
      box-shadow: 2px 3px 10px 2px #D7DFFF;
      background-color: #F9FAFE;
      min-height: 10vh;
      border-radius: 5px;
      max-height: fit-content;
      overflow: auto;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 10px;
    }
    
    .drag-el-horizontal:nth-last-child(){
      margin-bottom: 0;
    }
    
    .drag-el:nth-last-child(){
      margin-bottom: 0;
    }
    
    .flexbox {
      display: flex;
      justify-content: space-between;
    
      height: 100%;
      width: 98%;
    
      overflow: hidden;
    
      margin: 15px;
      padding: 15px
    }
    
    #buttons {
      margin: 0;
      text-align: center;
    }
    
    .relative {
     padding: 10px;
     display: flex;
     width: 100%;
     flex-direction: row;
     justify-content: space-between;
    } 
    .navitem {
      width: 100px; 
      height: 50px;
      padding: 10px;
      text-align: center;
      border: none;
      background-color: #E8562A;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
    }
    
    .navitem:hover {
      background-color: #fff;
      color: #E8562A;
      border: 1px solid #E8562A;
      cursor: pointer;
      font-weight: bold;
    }
    </style>