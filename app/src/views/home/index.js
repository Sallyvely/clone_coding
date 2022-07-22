var que = document.getElementsByClassName("faq-question");
var i;
for (i=0; i < que.length; i++){
    que[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementsSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }      
    });
}