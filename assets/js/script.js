'use strict';

// Add event listener for each branch node
const nodes = document.querySelectorAll(".node");

nodes.forEach(node => {
  node.addEventListener("click", function () {
    const skillsList = this.querySelector(".skills-list");

    // Toggle visibility for skills list
    if (skillsList) {
      skillsList.classList.toggle("active");
      // Expand/Collapse the current branch
      if (skillsList.style.display === "block") {
        skillsList.style.display = "none";
      } else {
        skillsList.style.display = "block";
      }
    }

    // Close other open branches
    nodes.forEach(otherNode => {
      if (otherNode !== this) {
        const otherSkillsList = otherNode.querySelector(".skills-list");
        if (otherSkillsList) {
          otherSkillsList.style.display = "none";
          otherSkillsList.classList.remove("active");
        }
      }
    });
  });
});

// Smooth scroll functionality for navigation links
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.textContent.toLowerCase().trim();

    // Toggle active class for pages
    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    // Toggle active class for navigation links
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");

    // Smooth scroll to the top of the section
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
