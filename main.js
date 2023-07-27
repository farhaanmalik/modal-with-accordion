// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Function to toggle the accordion
  function toggleAccordion(accordionItem) {
    accordionItem.classList.toggle("active");
    const accordionContent = accordionItem.querySelector(".accordion-content");
    if (accordionItem.classList.contains("active")) {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  }
  
  // Add event listeners to open and close the modals
  const modalBtns = document.getElementsByClassName("modal-btn");
  for (let i = 0; i < modalBtns.length; i++) {
    const modalBtn = modalBtns[i];
    const modalId = modalBtn.getAttribute("data-modal");
  
    modalBtn.addEventListener("click", function() {
      openModal(modalId);
    });
  
    const closeIcon = document.querySelector(`#${modalId} .close`);
    closeIcon.addEventListener("click", function() {
      closeModal(modalId);
    });
  
    // Get all the accordion items inside the modal
    const accordionItems = document.querySelectorAll(`#${modalId} .accordion-item`);
    for (const accordionItem of accordionItems) {
      const accordionHeader = accordionItem.querySelector(".accordion-header");
      accordionHeader.addEventListener("click", function() {
        toggleAccordion(accordionItem);
      });
    }
  }
  