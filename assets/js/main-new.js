$(document).ready(function(){
  $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

  $("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
  });

$('.btn-plus, .btn-minus').on('click', function(e) {
  e.preventDefault()
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.sumar').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

// agrregar lo más visto
$('.btn-plus2, .btn-minus2').on('click', function(e) {
  e.preventDefault()
  const isNegative = $(e.target).closest('.btn-minus2').is('.btn-minus2');
  const input = $(e.target).closest('.sumar2').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

// agrregar detalla
$('.btn-plus3, .btn-minus3').on('click', function(e) {
  e.preventDefault()
  const isNegative = $(e.target).closest('.btn-minus3').is('.btn-minus3');
  const input = $(e.target).closest('.sumar-deta').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

});//fin

// microfono
const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  // recognition.lang = "en-US";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button" class="voiceicon"><span class="of-voice"></span></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("of-voice")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("of-voice");
    micIcon.classList.add("of-voice-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("of-voice-slash");
    micIcon.classList.add("of-voice");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="stop recording") {
      recognition.stop();
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="go") {
        searchForm.submit();
      }
      else if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }
  
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}









