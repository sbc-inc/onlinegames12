// siteWide.js (assuming this is where newHeaderHtmlString is defined)

const oldHeader = document.querySelector('header'); // Get the existing header element
const oldFooter = document.querySelector('footer');

// 1. Define your new header HTML as a string
const newHeaderHtmlString = `
    <header class="sticky top-4 z-50 mx-4 md:mx-auto max-w-7xl">
        <nav class="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg border border-gray-200">
            <a href="/" class="flex-shrink-0">
                <img src="/logo.png" alt="Logo" class="h-10 w-10">
            </a>

            <div class="flex items-center space-x-6 md:space-x-8">
                <a href="/failed/" id="a_b_testing_link_header" class="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md">Sign In</a>
            </div>
        </nav>
    </header>
`;

const newFooterHtmlString = ` <footer class="bg-gray-800 text-white py-8 mt-16 min-w-full absolute bottom-0 left-0">
        <div class="container mx-auto px-4 md:px-0 text-center text-sm">
            <p>Your AB Code: <code class="ab_code">wsv_oko</code></p><br><br>
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4">
                <a class="hover:text-blue-400 transition-colors duration-200">About Us</a>
                <a class="hover:text-blue-400 transition-colors duration-200">Contact</a>
                <a class="hover:text-blue-400 transition-colors duration-200">FAQ</a>
                <a class="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            </div>
            <p>&copy; 2025 SBC Revisory. All rights reserved.</p>
        </div>
    </footer>`

// 2. Create a temporary container (like a div) to parse the HTML string
const tempContainer = document.createElement('div');
tempContainer.innerHTML = newHeaderHtmlString;
const tempContainer2 = document.createElement('div');
tempContainer2.innerHTML = newFooterHtmlString;

// 3. Get the actual DOM element (the <header> tag) from the temporary container
const newHeaderElement = tempContainer.firstElementChild;
const newFooterElement = tempContainer2.firstElementChild;

// 4. Perform the replacement if both elements exist
if (oldHeader && newHeaderElement) {
    oldHeader.replaceWith(newHeaderElement);
}
if (oldFooter && newFooterElement) {
    oldFooter.replaceWith(newFooterElement);
}

const abCode = localStorage.getItem('sbc_ab_testing');
oldFooter.querySelector(".ab_code").innerHTML = abCode;

// Adding Tailwind CSS if not present in <head>
if (!document.querySelector('script[src*="tailwind"]')) {
    const errorMessage = document.createElement('div');
    errorMessage.style.position = 'fixed';
    errorMessage.style.top = '0';
    errorMessage.style.left = '0';
    errorMessage.style.width = '100%';
    errorMessage.style.padding = '1rem';
    errorMessage.style.backgroundColor = '#fef2f2';
    errorMessage.style.color = '#b91c1c';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.fontSize = '1.25rem';
    errorMessage.style.borderBottom = '2px solid #b91c1c';
    errorMessage.style.zIndex = '9999';
    errorMessage.innerHTML = '⚠️ **Error:** Missing essential stylesheet. Please enable Tailwind CSS for the page to display correctly.';
    document.body.prepend(errorMessage);
    throw new Error('IMPORT ERROR: Tailwind CSS is not imported. Please ensure it is imported in the <head> or the page may not render correctly.');
}


const backButton = document.createElement('button');
backButton.textContent = '=>';
backButton.className = 'fixed top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600';
backButton.onclick = () => {
    window.history.back();
}
backButton.style.zIndex = '1000';
backButton.style.fontSize = '24px';
backButton.style.position = 'absolute';

// Hide button if body has data-no-back-button
if (document.body.hasAttribute('data-no-back-button')) {
    backButton.style.display = 'none';
}

document.body.appendChild(backButton);
