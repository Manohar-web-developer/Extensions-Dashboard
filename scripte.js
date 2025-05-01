let Body = false; // बाहर declare किया ताकि value याद रहे

function themechange() {
  if (Body === true) {
    document.body.style.background = "#EBF4FD";
    document.getElementById("exheader").style.background = "white";
    Body = false; // अब ये false हो जाएगा और याद भी रहेगा
  } else {
    document.body.style.background = "#070E2A";
    document.getElementById("exheader").style.background = "#1f2535";
    Body = true;
  }
}
console.log(Body);
const moon = document.querySelector(".moon-icon");
const sun = document.querySelector(".sun-icon");

let activeimage = "moon";

function imagechange() {
  if (activeimage == "sun") {
    activeimage = "moon";
    sun.style.display = "none"; // Hide sun
    moon.style.display = "inline"; // Show moon
  } else if (activeimage == "moon") {
    activeimage = "sun";
    moon.style.display = "none"; // Hide moon
    sun.style.display = "inline"; // Show sun
  }
}

const change = document.querySelector("#themeToggle");

let whitelogo = document.querySelector(".white_logo");
let blacklogo = document.querySelector(".Black_logo");

let activelogo = whitelogo;

function logochange() {
  if (activelogo == whitelogo) {
    activelogo = blacklogo;
    blacklogo.style.display = "none"; // Hide sun
    whitelogo.style.display = "inline"; // Show moon
  } else if (activelogo == blacklogo) {
    activelogo = whitelogo;
    whitelogo.style.display = "none"; // Hide moon
    blacklogo.style.display = "inline"; // Show sun
  }
}
change.addEventListener("click", () => {
  themechange();
  imagechange();
  logochange();
  colorchange();
});

function colorchange() {
  if (activelogo == whitelogo) {
    document.querySelectorAll(".menu").forEach((item) => {
      item.style.color = "Black";
    });
    document.querySelector(".Extensions").style.color = "Black";
    document.querySelectorAll(".child").forEach((bgcolor) => {
      bgcolor.style.background = "white";
    });
    document.querySelectorAll(".hed_dec").forEach((textcolr) => {
      textcolr.style.color = "Black";
    });
    document.querySelectorAll(".btn").forEach((remove) => {
      remove.style.color = "#1F2535";
      remove.style.border = "1px solid Black";
    });
    document.querySelectorAll(".menu").forEach((menu) => {
      menu.style.background = "White";
    });
  } else {
    document.querySelectorAll(".menu").forEach((item) => {
      item.style.color = "White";
    });
    document.querySelector(".Extensions").style.color = "White";
    document.querySelectorAll(".child").forEach((bgcolor) => {
      bgcolor.style.background = "#1F2535";
    });
    document.querySelectorAll(".hed_dec").forEach((textcolr) => {
      textcolr.style.color = "White";
    });
    document.querySelectorAll(".btn").forEach((remove) => {
      remove.style.color = "White";
      remove.style.border = "1px solid White";
    });
    document.querySelectorAll(".menu").forEach((menu) => {
      menu.style.background = "#1F2535";
    });
  }
}
window.addEventListener("DOMContentLoaded", () => {
  moon.style.display = "none";
  sun.style.display = "inline-block";
  blacklogo.style.display = "none";
  whitelogo.style.display = "inline-block";
  document.body.style.background = "#EBF4FD";
  document.querySelectorAll(".menu").forEach((menu) => {
    menu.style.background = "white";
  });
  document.getElementById("exheader").style.background = "white";

  blacklogo.style.display = "inline-block";
  whitelogo.style.display = "none";
});
document.querySelectorAll('input[type="checkbox"]').forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const extension = toggle.closest(".child");
    extension.dataset.status = toggle.checked ? "Active" : "Inactive";
    applyTabFilter(currentTab);
  });
});

let currentTab = "All";
document.querySelectorAll(".menu").forEach((tab) => {
  tab.addEventListener("click", () => {
    currentTab = tab.textContent.trim();
    applyTabFilter(currentTab);
  });
});

function applyTabFilter(filter) {
  document.querySelectorAll(".child").forEach((extension) => {
    const status = extension.dataset.status;
    if (filter === "All" || filter === status) {
      extension.style.display = "flex";
    } else {
      extension.style.display = "none";
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".child").forEach((extension) => {
    const toggle = extension.querySelector('input[type="checkbox"]');
    if (extension.dataset.status === "All") {
      toggle.checked = true;
    } else {
      toggle.checked = false;
    }
  });
});

let currentTa = "All";

document.querySelectorAll(".menu").forEach((tab) => {
  tab.addEventListener("click", () => {
    // ✅ Highlight clicked tab
    document.querySelectorAll(".menu").forEach((t) => {
      t.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");

    currentTa = tab.textContent.trim();
    applyTabFilter(currentTa);
  });
});
document.querySelectorAll(".btn").forEach(function (Button) {
  Button.addEventListener("click", function () {
    const card = this.closest(".child");
    if (card) {
      card.remove();
    }
  });
});
