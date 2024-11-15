
        const heartTrail = document.getElementById('heart-trail');
        const rippleButton = document.getElementById('trigger-button');
        const textContainer = document.querySelector('.container');
        const loveLetter = document.getElementById('love-letter');
        const loveMeButton = document.getElementById('love-me-button');
        const yesButton = document.getElementById('yes-button');
        const noButton = document.getElementById('no-button');
        const images = document.querySelectorAll('#image-display img');
        let imageIndex = 0;
    
        const words = ["You", "Your Smile", "Your Lips", "Your Eyes"];
        let wordIndex = 0, charIndex = 0;
    
        // Function to change background color
        function changeBackgroundColor() {
            const colors = ["#111", "#FF69B4", "#8A2BE2", "#FF4500", "#48D1CC"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = randomColor;
            images[imageIndex].style.opacity = 0; // Hide current image
            imageIndex = (imageIndex + 1) % images.length;
            images[imageIndex].style.opacity = 1;
        }
    
        function updateText() {
            charIndex++;
            textContainer.innerHTML = `<h1>I Love ${words[wordIndex].slice(0, charIndex)}</h1>`;
            if (charIndex === words[wordIndex].length) {
                wordIndex = (wordIndex + 1) % words.length;
                charIndex = 0;
            }
            setTimeout(updateText, 400);
        }
    
        function startHeartTrail() {
            heartTrail.addEventListener('mousemove', (event) => {
                const span = document.createElement('span');
                span.style.left = `${event.clientX}px`;
                span.style.top = `${event.clientY}px`;
                const size = Math.random() * 80 + 20;
                span.style.width = `${size}px`;
                span.style.height = `${size}px`;
                heartTrail.appendChild(span);
                setTimeout(() => span.remove(), 3000);
            });
        }
    
        // Show "Yes" and "No" buttons on "Do you love me?" click
        loveMeButton.addEventListener('click', () => {
            changeBackgroundColor(); // Change background color
            loveMeButton.style.display = 'none';
            yesButton.style.display = 'inline-block';
            noButton.style.display = 'inline-block';
        });
    
        // Show "Click Me" button on "Yes" click, alert on "No" click
        yesButton.addEventListener('click', () => {
            changeBackgroundColor(); // Change background color
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            rippleButton.style.display = 'inline-block';
        });
    
        noButton.addEventListener('click', () => {
            changeBackgroundColor(); // Change background color
            alert("Wrong choice!");
        });
    
        // Ripple and animation effects for "Click Me" button
        rippleButton.addEventListener('click', (event) => {
            const x = event.pageX - rippleButton.offsetLeft;
            const y = event.pageY - rippleButton.offsetTop;
            rippleButton.style.setProperty('--xpos', `${x}px`);
            rippleButton.style.setProperty('--ypos', `${y}px`);
            rippleButton.style.display = 'none';
            loveLetter.style.opacity = 1;
    
            startHeartTrail();
            updateText();
    
            // Change to the next image
            images[imageIndex].style.opacity = 0; // Hide current image
            imageIndex = (imageIndex + 1) % images.length;
            images[imageIndex].style.opacity = 1;
        });
    
    