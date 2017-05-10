
const WikiApp = (function () {

  document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("input");
    const results = document.getElementById("results");
    // all buttons except for first which is link to random article
    const buttons = Array.prototype.slice.apply(document.getElementsByTagName("button")).slice(1);
    let tempscript = null;
    let timeout;

    function startQuery() {
      if (input.value.length === 0)
        clearButtons();
      clearTimeout(timeout);
      timeout = setTimeout(startFetch, 250);
    }

    function startFetch() {
      tempscript = document.createElement("script");
      tempscript.src = "https://en.wikipedia.org/w/api.php"
        + "?action=opensearch"
        + "&format=json&callback=onFetchComplete"
        + "&search=" + input.value;
      document.body.appendChild(tempscript);
      // onFetchComplete invoked when finished through JSONP
    }

    // onFetchComplete must be global to be used as JSONP callback
    window.onFetchComplete = function onFetchComp(data) {
      renderButtons(data);
      document.body.removeChild(tempscript);
      tempscript = null;
    };

    // clears button node
    function clearButtons() {
      buttons.forEach(button => {
        button.innerHTML = "";
        button.removeAttribute("onclick");
      });
      results.style.display = "none";
    }

    function renderButtons(data) {
      buttons.forEach((button, i) => {
        if (!data[1][i])
          button.style.display = "none";
        else {
          button.style.display = "block";
          const wrapper = document.createElement("div");
          const title = document.createElement("h3");
          const description = document.createElement("p");

          title.textContent = data[1][i];
          description.textContent = data[2][i];
          wrapper.appendChild(title);
          wrapper.appendChild(description);
          button.innerHTML = "";
          button.appendChild(wrapper);
          button.onclick = function() { window.open(data[3][i], "_blank"); };
        }
      });
      if (results.style.display === "none")
        results.style.display = "";
    }

    input.addEventListener("input", startQuery);

  });

})();
