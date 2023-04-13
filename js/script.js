"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var filterTags = document.querySelector(".blog__tags");
  var tagsBody = document.querySelector(".tags__items");
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewportWidth >= 1200) {
    console.log(">= 1200");
  }
  if (viewportWidth < 1200) {
    console.log("< 1200");
  }
  filterTags.addEventListener("click", function () {
    if (viewportWidth >= 1200) {
      this.classList.remove("tags-open");
      console.log("not work");
    }
    if (viewportWidth < 1200) {
      if (!this.classList.contains("tags-open")) {
        this.classList.add("tags-open");
        console.log("work");
      } else {
        this.classList.remove("tags-open");
      }
    }
  });
});