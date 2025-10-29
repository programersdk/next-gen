// Toggle between login and signup forms
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active tab
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding form
                const tabType = this.getAttribute('data-tab');
                document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
                document.getElementById(`${tabType}Form`).classList.add('active');
            });
        });

        // Toggle between login and signup via links
        document.querySelector('.switch-to-signup').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelector('[data-tab="signup"]').classList.add('active');
            
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById('signupForm').classList.add('active');
        });

        document.querySelector('.switch-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelector('[data-tab="login"]').classList.add('active');
            
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById('loginForm').classList.add('active');
        });

        // Role selection for login
        document.querySelectorAll('#loginForm .role-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('#loginForm .role-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        // Role selection for signup
        document.querySelectorAll('#signupForm .role-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('#signupForm .role-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                
                // Show corresponding form fields
                const role = this.getAttribute('data-role');
                document.querySelectorAll('.signup-role').forEach(form => form.style.display = 'none');
                document.querySelector(`.signup-role[data-role="${role}"]`).style.display = 'block';
            });
        });

        // Form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would submit the login form
            alert('Login form submitted');
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would submit the signup form
            alert('Signup form submitted');
        });