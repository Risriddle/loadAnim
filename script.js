document.addEventListener('DOMContentLoaded', function() {
    const container=document.getElementById('con');
    const status = document.querySelector('h1');
    window.addEventListener('load', () => {
      const handleNetworkChange = () => {
        if (navigator.onLine) {
            status.innerHTML='WELCOME TO WEBSITE';
        } else {
          status.innerHTML='NO INTERNET CONNECTION';
          
          
        }
      };
    
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
    });
    


    const toggleSwitch = document.getElementById('toggleSwitch');
    
    const title=document.querySelector('h1');
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        // Perform actions when switch is toggled on
        document.body.style.background = "#000000";
        container.style.backgroundColor="#FFFFFF";
        title.style.color="white";
        document.getElementsByTagName("button").style.borderColor = "black";
        console.log('Switch is ON');
      } else {
        // Perform actions when switch is toggled off
        document.body.style.background = "#FFFFFF";
        container.style.backgroundColor="#000000";
        title.style.color="black";
        document.getElementsByTagName("button").style.borderColor = "white";
        console.log('Switch is OFF');
      }
    });
    var show=document.getElementById('show');
   
    
    var stopp = document.getElementById('start');
    stopp.addEventListener("click", function() {
      // Disable the button to prevent multiple clicks
      if (stopp.innerHTML=="START"){
      show.style.display="block";
      stopp.innerHTML="STOP";}
      else{
        stopp.innerHTML="START";
      show.style.display="none";
      }
    });
  });
  
  const color=document.getElementById("favcolor");
  const cont=document.getElementById('con');
 
  
  color.addEventListener("input", () => {
    const chosenColor = color.value;
    cont.style.backgroundColor = chosenColor;
  });