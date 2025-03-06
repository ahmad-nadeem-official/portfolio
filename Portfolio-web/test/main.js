document.addEventListener("DOMContentLoaded", function () {
    window.onload = function () {
      // Hide Skeleton Loader
      document.getElementById("skeleton-loader").style.display = "none";
      // Show Actual Content
      document.getElementById("main-content").style.display = "block";
    };
  });