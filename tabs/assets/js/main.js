
const myButton = Array.from(document.getElementsByTagName('button'));
for(i = 0; i < myButton.length; i++){
    myButton[i].addEventListener("click", (e) => {

        let i , tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(`Tab${i}`).style.display = "block";
    });
}
