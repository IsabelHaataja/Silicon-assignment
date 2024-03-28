const toggleMenu = () => {
    const element = document.getElementById('menu')
    if (element.style.display === "none") {
        element.style.display = "block";
        element.style.color = "#ffffff";
    }
    else {
        element.style.display = "none";
    }
}

// document.getElementById('theme-toggle-switch').addEventListener('change', function(event){
//     if(event.target.checked) {
//         document.body.classList.add('dark-mode');
//         document.body.classList.remove('light-mode');
//     } else {
//         document.body.classList.add('light-mode');
//         document.body.classList.remove('dark-mode');
//     }
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggleSwitch = document.getElementById('theme-toggle-switch');
//     if (themeToggleSwitch) {
//         themeToggleSwitch.addEventListener('change', function(event) {
//             const isChecked = event.target.checked;
//             const body = document.body;
//             if (isChecked) {
//                 body.classList.add('dark-mode');
//                 body.classList.remove('light-mode');
//             } else {
//                 body.classList.add('light-mode');
//                 body.classList.remove('dark-mode');
//             }
//         });
//     } else {
//         console.error("Element with id 'theme-toggle-switch' not found.");
//     }
// });

export { toggleMenu } 