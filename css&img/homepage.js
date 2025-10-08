function uptop(){
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleCursorBtn");
    let beeMode = false;
  
    button.addEventListener("click", () => {
      beeMode = !beeMode;
  
      if (beeMode) {
        document.body.classList.add("bee-cursor");
        button.textContent = "🔙 Revert Cursor";
      } else {
        document.body.classList.remove("bee-cursor");
        button.textContent = "🐝 Toggle Bee Cursor";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.getElementById("arrow");
    const target = document.getElementById("target");
    const toggleBtn = document.getElementById("toggleArrowBtn");
  
    let mouseX = 0;
    let mouseY = 0;
    let arrowVisible = true;
  
    // Track mouse position
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    // Update arrow position and rotation
    function updateCursor() {
      requestAnimationFrame(updateCursor);
  
      if (!arrowVisible) return;
  
      const offsetX = 20;
      const offsetY = 20;
  
      arrow.style.left = (mouseX + offsetX) + "px";
      arrow.style.top = (mouseY + offsetY) + "px";
  
      const arrowRect = arrow.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
  
      const arrowCenterX = arrowRect.left + arrowRect.width / 2;
      const arrowCenterY = arrowRect.top + arrowRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
  
      const xDiff = targetCenterX - arrowCenterX;
      const yDiff = targetCenterY - arrowCenterY;
      const angleRad = Math.atan2(yDiff, xDiff);
      const angleDeg = angleRad * (180 / Math.PI);
  
      arrow.style.transform = `rotate(${angleDeg}deg)`;
    }
  
    updateCursor();
  
    // Toggle arrow visibility
    toggleBtn.addEventListener("click", () => {
      arrowVisible = !arrowVisible;
      document.body.classList.toggle("hide-arrow", !arrowVisible);
      toggleBtn.textContent = arrowVisible ? "🔽 Hide bee Arrow & bee cursor" : "▶ Show bee Arrow & bee cursor";
    });
  });
