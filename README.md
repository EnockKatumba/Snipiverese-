<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Showcase</title>
    <style>
        /* General Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 28px;
        }

        /* Template Wrapper */
        .template-wrapper {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Demo Section */
        .demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eaeaea;
        }

        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .form input {
            margin: 6px;
            padding: 8px;
            width: 95%;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .button {
            padding: 8px 16px;
            width: 95%;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
        }

        /* Button Styles */
        .lavender button { background-color: #E6E6FA; }
        .mint button { border:1px solid #98FF98;background-color: #98FF98; }
        .blue button { border:1px solid lightblue;background-color: lightblue; }
        .red button { background-color: lightred; }

        .form button:hover { opacity: 0.8; }

        /* Snippet Section */
        .snippet {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: "Courier New", Courier, monospace;
            font-size: 14px;
            line-height: 1.4;
            color: #333;
            height: 120px; /* Initial reduced height */
            overflow: hidden;
            transition: height 0.3s ease;
        }

        /* Expanded state of the snippet */
        .snippet.expanded {
            height: auto; /* Allow full content to be visible */
        }

        /* Expand button */
        .expand-btn {
            color: #007bff;
            cursor: pointer;
            margin-top: 10px;
        }

        .snippet pre {
            margin: 0;
        }
       
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            overflow-x: hidden;
        }

        .carousel-container {
            width: 100%;
            overflow-x: auto;
            display: flex;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 20px 0;
            scroll-behavior: smooth;
        }

        .carousel {
            display: flex;
            gap: 15px;
        }

        .template {
            position: relative;
            width: 250px;
            height: 350px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            text-align: left;
            scroll-snap-align: center;
            opacity: 0.5;
            filter: blur(5px);
            transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
        }

        .template.active {
            transform: scale(1.1);
            opacity: 1;
            filter: blur(0);
        }

        .template img {
            width: 80px;
            height: auto;
            border-radius: 50%;
            margin-bottom: 10px;
            position: relative;
            left: -10px;
        }

        .template h3 {
            margin-bottom: 10px;
        }

        .form input, .form button {
            margin: 6px 0;
            padding: 8px;
            width: 90%;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        .carousel button {
            background-color: #007BFF;
            color: white;
            cursor: pointer;
        }

        .nova-heading {
            font-size: 1065px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }

        .description {
            font-size: 14px;
            color: #555;
            margin-bottom: 10px;
        }

        /* Pagination styling */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }

        .pagination .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: lightblue;
            opacity: 0.5;
            transition: all 0.3s ease;
        }

        .pagination .active {
            width: 15px;
            height: 15px;
            background-color: lightgrey;
            opacity: 1;
        }
        
        .copy-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: bold;
            color: grey;
            background-color: transparent;
            border: 1px solid grey;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
.container {
  width: 100%;
  height: 150px; /* Reduced container height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.nova-heading {
  display: flex;
  font-size: 20700px; /* Font size */
  font-weight: bold;
  opacity: 0;
}

.letter {
  display: inline-block;
  opacity: 0;
  position: relative;
  animation: moveIn 0.5s ease-out forwards;
}

/* Normal animations for the first three letters */
.letter:nth-child(1) {
  animation-delay: 0.2s;
  animation-name: slideFromLeft;
}

.letter:nth-child(2) {
  animation-delay: 0.4s;
  animation-name: slideFromBottom, bounceInBottom;
}

.letter:nth-child(3) {
  animation-delay: 0.6s;
  animation-name: slideFromRight;
}

/* Add unique animation for the last letter "a" */
.letter:nth-child(4) {
  animation-delay: 1s; /* Adding delay for the last letter */
  animation-name: slideFromTop, bounceInTop, slideInFromRight, rotateEffect;
}

/* Slide-in effects */
@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromTop {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Bounce effect for letters coming from top and bottom */
@keyframes bounceInBottom {
  0% {
    transform: translateY(50px);
  }
  60% {
    transform: translateY(-10px); /* Soft bounce effect */
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes bounceInTop {
  0% {
    transform: translateY(-50px);
  }
  60% {
    transform: translateY(10px); /* Soft bounce effect */
  }
  100% {
    transform: translateY(0);
  }
}

/* Unique animation for the last letter "a" */
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(200px); /* Start from the far right */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* End at the original position */
  }
}

@keyframes rotateEffect {
  0% {
    opacity: 0;
    transform: rotate(360deg);
  }
  60% {
    opacity: 1;
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
    </style>

<body>
    <h1>Template Showcase</h1>

    <!-- Lavender Sign Up Template -->
    <div class="template-wrapper">
        <div class="demo lavender">
            <h3>Create Account</h3>
            <div class="form">
                <input type="text" placeholder="Full Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button type="submit">Sign Up</button>
            </div>
        </div>
        <div class="snippet" id="lavender-snippet">
            <pre>&lt;!-- Lavender Template --&gt;
&lt;style&gt;
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.form input {
    margin: 6px;
    padding: 8px;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.form button {
    padding: 8px 16px;
    width: 95%;
    background-color: #E6E6FA;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.form button:hover { opacity: 0.8; }
&lt;/style&gt;

&lt;div class="form"&gt;
    &lt;input type="text" placeholder="Full Name"&gt;
    &lt;input type="email" placeholder="Email"&gt;
    &lt;input type="password" placeholder="Password"&gt;
    &lt;button type="submit"&gt;Sign Up&lt;/button&gt;
&lt;/div&gt;</pre>
        </div>
        <span class="expand-btn" onclick="toggleSnippet('lavender-snippet')">Show Full Code</span>
    </div>

    <!-- Mint Login Template -->
    <div class="template-wrapper">
        <div class="demo mint">
            <h3>Login</h3>
            <div class="form">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button type="submit">Login</button>
            </div>
        </div>
        <div class="snippet" id="mint-snippet">
            <pre>&lt;!-- Mint Template --&gt;
&lt;style&gt;
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.form input {
    margin: 6px;
    padding: 8px;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.form button {
    padding: 8px 16px;
    width: 95%;
    background-color: #98FF98;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.form button:hover { opacity: 0.8; }
&lt;/style&gt;

&lt;div class="form"&gt;
    &lt;input type="email" placeholder="Email"&gt;
    &lt;input type="password" placeholder="Password"&gt;
    &lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/div&gt;</pre>
        </div>
        <span class="expand-btn" onclick="toggleSnippet('mint-snippet')">Show Full Code</span>
    </div>

    <!-- Blue Create Account Template -->
    <div class="template-wrapper">
        <div class="demo blue">
            <h3>Create Account</h3>
            <div class="form">
                <input type="text" placeholder="Username">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button type="submit">Create Account</button>
            </div>
        </div>
        <div class="snippet" id="blue-snippet">
            <pre>&lt;!-- Blue Template --&gt;
&lt;style&gt;
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.form input {
    margin: 6px;
    padding: 8px;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.form button {
    padding: 8px 16px;
    width: 95%;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.form button:hover { opacity: 0.8; }
&lt;/style&gt;

&lt;div class="form"&gt;
    &lt;input type="text" placeholder="Username"&gt;
    &lt;input type="email" placeholder="Email"&gt;
    &lt;input type="password" placeholder="Password"&gt;
    &lt;button type="submit"&gt;Create Account&lt;/button&gt;
&lt;/div&gt;</pre>
        </div>
        <span class="expand-btn" onclick="toggleSnippet('blue-snippet')">Show Full Code</span>
    </div>

    <!-- Forgot Password Template -->
    <div class="template-wrapper">
        <div class="demo red">
            <h3>Forgot Password</h3>
            <img src="forgot.png" alt="Forgot Password Illustration" style="width: 80px; margin-bottom: 10px;">
            <div class="form">
                <input type="email" placeholder="Enter your email">
                <button type="submit">Reset Password</button>
            </div>
        </div>
        <div class="snippet" id="forgot-snippet">
            <pre>&lt;!-- Forgot Password Template --&gt;
&lt;style&gt;
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.form input {
    margin: 6px;
    padding: 8px;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.form button {
    padding: 8px 16px;
    width: 95%;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.form button:hover { opacity: 0.8; }
&lt;/style&gt;

&lt;div class="form"&gt;
    &lt;img src="forgot.png" alt="Forgot Password Illustration" style="width: 80px; margin-bottom: 10px;"&gt;
    &lt;input type="email" placeholder="Enter your email"&gt;
    &lt;button type="submit"&gt;Reset Password&lt;/button&gt;
&lt;/div&gt;</pre>
        </div>
        <span class="expand-btn" onclick="toggleSnippet('forgot-snippet')">Show Full Code</span>
    </div>
<div class="container">
  <span class="letter">N</span>
  <span class="letter">o</span>
  <span class="letter">v</span>
  <span class="letter">a</span>
</div>
    <div class="carousel-container" id="carouselContainer">
        <div class="carousel" id="carousel">
            <!-- Templates -->
            <div class="template lavender">
                <div class="copy-btn" onclick="downloadTemplate(this)">Download</div>
                <img src="signup.png" alt="Cartoon 1">
                <div class="description">Join us and start your journey today.</div>
                <div class="form">
                    <h3>Create Account</h3>
                    <input type="text" placeholder="Full Name">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Sign Up</button>
                </div>
            </div>

            <div class="template mint">
                <div class="copy-btn" onclick="downloadTemplate(this)">Download</div>
                <img src="login.png" alt="Cartoon 2">
                <div class="description">Welcome back! Log in to continue.</div>
                <div class="form">
                    <h3>Login</h3>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Login</button>
                </div>
            </div>

            <div class="template blue">
                <div class="copy-btn" onclick="downloadTemplate(this)">Download</div>
                <img src="account.png" alt="Cartoon 3">
                <div class="description">Create an account and explore new possibilities.</div>
                <div class="form">
                    <h3>Create Account</h3>
                    <input type="text" placeholder="Username">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Create Account</button>
                </div>
            </div>

            <div class="template red">
                <div class="copy-btn" onclick="downloadTemplate(this)">Download</div>
                <img src="forgot.png" alt="Cartoon 4">
                <div class="description">Forgot your password? Let's reset it.</div>
                <div class="form">
                    <h3>Reset Password</h3>
                    <input type="email" placeholder="Email">
                    <button>Reset Password</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination -->
    <div class="pagination" id="pagination"></div>

    <script>
        function toggleSnippet(snippetId) {
            const snippet = document.getElementById(snippetId);
            snippet.classList.toggle('expanded');
            const isExpanded = snippet.classList.contains('expanded');
            const button = snippet.nextElementSibling;
            button.textContent = isExpanded ? 'Hide Code' : 'Show Full Code';
        }
        const carouselContainer = document.getElementById('carouselContainer');
        const templates = document.querySelectorAll('.template');
        const pagination = document.getElementById('pagination');

        // Create pagination dots
        templates.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            pagination.appendChild(dot);
        });

        const updateTemplateStyles = () => {
            const containerRect = carouselContainer.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;
            const dots = document.querySelectorAll('.pagination .dot');

            templates.forEach((template, index) => {
                const rect = template.getBoundingClientRect();
                const distanceFromCenter = Math.abs(rect.left + rect.width / 2 - centerX);

                if (distanceFromCenter < rect.width / 2) {
                    template.classList.add('active');
                    dots[index].classList.add('active');
                } else {
                    template.classList.remove('active');
                    dots[index].classList.remove('active');
                }
            });
        };

        carouselContainer.addEventListener('scroll', updateTemplateStyles);

        window.addEventListener('load', () => {
            const middleTemplate = templates[0];
            const containerCenter = carouselContainer.clientWidth / 2;
            const templateCenter = middleTemplate.offsetLeft + middleTemplate.clientWidth / 2;

            carouselContainer.scrollLeft = templateCenter - containerCenter;
            updateTemplateStyles();
        });

        function downloadTemplate(button) {
            // Get the template container
            const template = button.parentElement;

            // Get the HTML of the template (including the image tag)
            let templateHTML = template.outerHTML;

            // Ensure the image paths are fully qualified (absolute URLs)
            templateHTML = templateHTML.replace(/src="([^"]+)"/g, function(_, src) {
                if (src.startsWith('http')) {
                    return `src="${src}"`; // Already absolute URL
                }
                return `src="${window.location.origin}/${src}"`; // Convert to absolute URL
            });

            // Create a Blob from the template HTML content
            const blob = new Blob([templateHTML], { type: 'text/html' });

            // Create an object URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a temporary <a> element for downloading the Blob
            const a = document.createElement('a');
            a.href = url;
            a.download = 'temp