// Smooth scrolling for navigation links


// Navbar scroll effect


// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your submission! We will get back to you soon.');
            form.reset();
        });
    });
});

// Add active class to current section in navigation


// Animation on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Mobile Dropdown Navigation


// Cookie consent
const cookieConsent = function() {
    const cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-banner';
    cookieBanner.innerHTML = `
        <p>We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <button id="accept-cookies">Accept</button>
    `;

    if (!localStorage.getItem('cookieConsent')) {
        document.body.appendChild(cookieBanner);
    }

    document.getElementById('accept-cookies')?.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        cookieBanner.remove();
    });
}

document.addEventListener('DOMContentLoaded', cookieConsent);


// Service details data
const serviceDetails = {
    'mobile-patrol': {
        title: 'Mobile Patrol Services',
        description: 'Our mobile patrol services provide comprehensive security coverage through dedicated patrol cars and commando teams. All posts and sites secured by Niteforce Security Services Ltd are surveilled by patrol teams who perform random area security checks throughout the day.',
        features: [
            '24/7 patrol coverage',
            'Dedicated commando teams',
            'Random area security checks',
            'Exclusive client booking options',
            'Rapid response capabilities'
        ]
    },
    'reception': {
        title: 'Reception & Caretaker Services',
        description: 'We extend beyond security guards in providing professionalism through our trained receptionists. Our services are available for offices, embassies, and commercial buildings.',
        features: [
            'Professional receptionists',
            'Trained caretaker services',
            'Office management',
            'Embassy services',
            'Commercial building support'
        ]
    },
    'driver': {
        title: 'Driver Services',
        description: 'Our driver services provide secure and professional transportation solutions. We offer qualified and experienced drivers for both short-term and long-term contracts.',
        features: [
            'Qualified drivers',
            'Experienced professionals',
            'Short-term contracts',
            'Long-term contracts',
            'Secure transportation'
        ]
    },
    'detection-dogs': {
        title: 'Detection Dogs',
        description: 'Our detection dogs receive specialist training on particular substances which make up the composition of explosives. Some dogs are specifically trained to detect flares. All dogs undergo continuous training to ensure the highest level of results while working discreetly.',
        features: [
            'Explosive detection',
            'Specialized substance training',
            'Continuous skill development',
            'Discreet operation',
            'Public-friendly approach'
        ]
    },
    'response-unit': {
        title: 'Mobile Response Unit',
        description: 'Our mobile response unit provides immediate deployment of fully trained dog units when an alarm is activated. Upon arrival, the dog unit completes a full perimeter search, ensuring no intruder can hide from our highly trained detection dogs.',
        features: [
            'Immediate response',
            'Full perimeter searches',
            'Trained dog units',
            '24/7 availability',
            'Rapid deployment'
        ]
    },
    'residential': {
        title: 'Residential Security',
        description: 'We offer professional residential security services that are flexible, highly reliable, and extremely cost-effective. Our services cover all types of residential properties and diplomatic missions.',
        features: [
            'Private home security',
            'Property protection',
            'Diplomatic mission security',
            'Flexible service options',
            'Cost-effective solutions'
        ]
    },
    'security-dogs': {
        title: 'Security Dog Services',
        description: 'Our dog teams are specially trained to search people, vehicles, and buildings to safeguard your business premises, festival, or event. These highly trained units provide an additional layer of security to any location.',
        features: [
            'People screening',
            'Vehicle inspection',
            'Building searches',
            'Event security',
            'Business premises protection'
        ]
    },
    'static-dogs': {
        title: 'Static Security Dogs',
        description: 'Our static dog units serve as an extremely high visual deterrent and can reduce the manpower needed in static guarding. Our GP security dogs are trained in article tracking, building searches, find and locate operations, and handler protection.',
        features: [
            'Visual deterrent',
            'Article tracking',
            'Building searches',
            'Handler protection',
            'Find and locate operations'
        ]
    },
    'corporate': {
        title: 'Corporate Services',
        description: 'Our corporate security services are professional, flexible, and highly reliable. We offer customized security programs that include comprehensive management and reporting systems.',
        features: [
            '24-hour Management Supervision',
            'Immediate Personnel Replacement',
            'Detailed Security Orders',
            'Daily Security Reports',
            'Alarm Installation',
            'Cash Escort Services',
            'Private Investigation'
        ]
    }
}; 