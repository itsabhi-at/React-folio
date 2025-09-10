// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId) => {
  const targetElement = document.querySelector(sectionId);
  if (targetElement) {
    // Calculate the offset to account for any fixed header
    const offsetTop = targetElement.offsetTop - 80; // Adjust 80px offset as needed

    // Smooth scroll to the target element
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

// Handle click events for navigation links
export const handleNavClick = (e, sectionId) => {
  e.preventDefault();
  scrollToSection(sectionId);
};
