  const sentences = [
    { text: "I’m a hands-on learner with a heart to serve.", color: "#ff6347" },  // Tomato
    { text: "I repair and troubleshoot computer systems.", color: "#3b82f6" },    // Blue
    { text: "I serve in the multimedia and IT team at church.", color: "#32cd32" }, // Lime Green
    { text: "I edit videos for church events and presentations.", color: "#ff4500" }, // Orange Red
    { text: "I design websites and posters with purpose.", color: "#8a2be2" },   // Blue Violet
    { text: "I founded Luwas Threads, a Christian clothing brand.", color: "#f39c12" }, // Yellow Orange
    { text: "I believe in working hard and staying humble.", color: "#e74c3c" },  // Red
    { text: "I am passionate about creativity and technology.", color: "#2ecc71" }, // Emerald
    { text: "I use my skills to glorify God and serve others.", color: "#f1c40f" }, // Yellow
    { text: "Every project is a new chance to grow and learn.", color: "#e67e22" }  // Carrot
  ];

  let index = 0;
  const rotator = document.getElementById("rotatingText");

  function rotateText() {
    const sentence = sentences[index];
    rotator.textContent = "";
    rotator.style.animation = "none"; // Reset animation
    setTimeout(() => {
      rotator.style.color = sentence.color;
      rotator.textContent = sentence.text;
      rotator.style.animation = "typewriter 4s steps(40) 1s 1 normal both, blink 0.75s step-end infinite"; // Typewriter and blinking cursor
    }, 100);

    index = (index + 1) % sentences.length;
  }

  // Start rotation
  rotateText();
  setInterval(rotateText, 6000); // Change every 5 seconds



// burger Js
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

// javascript 2 

window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// javascript 3

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// JAVASCRIPT 4


  function handleContactSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("form-feedback");

    if (!name || !email || !message) {
      feedback.textContent = "Please fill out all fields.";
      feedback.style.color = "red";
      return false;
    }

   

    feedback.textContent = "Message sent! Thank you.";
    feedback.style.color = "lightgreen";

    name.value = "";
    email.value = "";
    message.value = "";  
    return false; // Prevent form reload
  }

