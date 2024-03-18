document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)

var typed = new Typed(".auto-type", {
    strings: ["Learner Programmer", "Rising Entrepreneur", "Tech Blog Writer", "Online Educator", "Windos OS Expert", "Success Aspirant"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyX3TqCuf2Iz_a4hLZAyXkxy5fGAA0thi9M8E183sdVFeWWo4V8tkDFCD9b47b_gT157Q/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Enquiry Has Been Listed Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

const msg = document.getElementById("msg")