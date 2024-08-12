document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
        const progress = bar.querySelector(".progress");
        const valueText = bar.querySelector(".progress-value");
        let width = parseFloat(progress.style.width);

        // Reset width for animation
        progress.style.width = "0%";
        valueText.textContent = "0%";

        // Animate to original width
        setTimeout(() => {
            progress.style.width = width + "%";
            valueText.textContent = width + "%";
        }, 100);

        // Increase width by 0.1% on hover
        bar.addEventListener("mouseover", () => {
            if (width < 100) {
                width += 0;
                progress.style.width = width + "%";
                valueText.textContent = width.toFixed(1) + "%";
            }
        });
    });
});
