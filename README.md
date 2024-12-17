<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Blurred Side Templates</title>
    <style>
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

        .form button {
            background-color: #007BFF;
            color: white;
            cursor: pointer;
        }

        .nova-heading {
            font-size: 32px;
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
    </style>
</head>
<body>
    <div class="nova-heading">Nova</div>
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
            a.download = 'template.html'; // Set the name of the downloaded file

            // Trigger the download by simulating a click
            document.body.appendChild(a);
            a.click();

            // Clean up by removing the <a> element
            document.body.removeChild(a);

            // Revoke the Blob URL to free up memory
            URL.revokeObjectURL(url);
        }
    </script>
</body>
</html>
