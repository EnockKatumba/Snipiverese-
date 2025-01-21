function copyCode(snippetId) {
  const snippetContent = document.getElementById(snippetId).innerText;
  navigator.clipboard.writeText(snippetContent)
    .then(() => alert('Code copied to clipboard!'))
    .catch((err) => alert('Failed to copy code: ', err));
}
function togglePanel() {
  const panel = document.getElementById("customization-panel");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}
function togglePanel() {
  const panel = document.getElementById("customization-panel");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}
  // Automatically set the current year
  document.getElementById("year").textContent = new Date().getFullYear();


    function showCode() {
  const codeSnippet = `
  // Your code starts here
  const x = 10;
  let y = 20;
  console.log(x + y);
  // Your code ends here
  `;

  const container = document.getElementById('code-container');
  let lines = codeSnippet.split('\n');
  let index = 0;

  function displayLine() {
    if (index < lines.length) {
      const line = document.createElement('div');
      line.textContent = lines[index];
      container.appendChild(line);
      index++;
      setTimeout(displayLine, 500); // Adjust the speed here
    }
  }

  displayLine();
}
    

function toggleSnippet(id) {
    var snippet = document.getElementById(id);
    snippet.classList.toggle('expanded');
}

// Handling search container resizing and toggling
const searchInput = document.getElementById('search');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchInput.addEventListener('input', () => {
    const inputLength = searchInput.value.length;

    // Gradual resizing of the form based on input length
    if (inputLength === 0) {
        searchContainer.style.width = '250px'; // Shrink back to initial size
    } else {
        // Elastic increase based on input length
        const newWidth = 250 + inputLength * 10; // Increase width based on length
        searchContainer.style.width = `${Math.min(newWidth, 350)}px`; // Limit the max width
    }
});

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    document.querySelector('.search-input').focus(); // Auto-focus input
});
        window.addEventListener('scroll', function() {
  const designElement = document.querySelector('.design');
  const rectangle = designElement.querySelector('::before');
  const rect = designElement.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // Element is in view
    designElement.classList.add('hovered');

    // Remove after 2 seconds if still in view
    setTimeout(() => {
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        designElement.classList.remove('hovered');
      }
    }, 2000); // Wait for 2 seconds
  }
});
// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Customization Panel Visibility
    const customizationPanel = document.getElementById('customization-panel');
    document.querySelector('.customization-icon').addEventListener('click', () => {
        customizationPanel.classList.toggle('show');
    });

    // Live Update: Button Color
    const btnColor = document.getElementById('btn-color');
    btnColor.addEventListener('input', (e) => {
        document.querySelector('.user-profile-form button').style.backgroundColor = e.target.value;
    });

    // Live Update: Border Radius
    const borderRadius = document.getElementById('border-radius');
    borderRadius.addEventListener('input', (e) => {
        document.querySelectorAll('.user-profile-form input, .user-profile-form button').forEach(el => {
            el.style.borderRadius = `${e.target.value}px`;
        });
    });

    // Live Update: Font Size
    const fontSize = document.getElementById('font-size');
    fontSize.addEventListener('input', (e) => {
        document.querySelector('.user-profile-form').style.fontSize = `${e.target.value}rem`;
    });

    // Reset Customizations
    document.getElementById('reset-btn').addEventListener('click', () => {
        document.querySelector('.user-profile-form button').style.backgroundColor = '#28a745';
        document.querySelectorAll('.user-profile-form input, .user-profile-form button').forEach(el => {
            el.style.borderRadius = '6px';
        });
        document.querySelector('.user-profile-form').style.fontSize = '1rem';

        btnColor.value = '#28a745';
        borderRadius.value = 6;
        fontSize.value = 1;
    });
});