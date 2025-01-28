@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-[#1B2A34] text-[#A8CE78]; /* Dark background and green text */
    font-family: 'Courier New', Courier, monospace; /* Terminal style font */
  }
}

.bg-mesh {
  background: url('your-background-image-path.jpg') no-repeat center center fixed; /* Add a cool nuclear texture as a background image */
  background-size: cover;
  position: relative;
}

.glass {
  @apply bg-[#2D3E49]/70 backdrop-blur-md border border-green-500 shadow-lg transition-all duration-300; /* Green glass border */
}

.highlight-command {
  animation: highlight 2s ease-out forwards; /* Highlight animation for commands */
}

@keyframes highlight {
  0% { background-color: rgba(168, 206, 120, 0.3); }
  100% { background-color: transparent; }
}

input::placeholder {
  @apply text-green-300; /* Placeholder color */
}

/* Button Styles */
.btn-primary {
  @apply bg-gradient-to-r from-green-500 to-green-600 
         hover:from-green-600 hover:to-green-700 
         text-black font-bold px-6 py-3 rounded-lg transition-all duration-200 
         hover:shadow-2xl hover:shadow-green-500/50; /* Bright button colors */
}

.button:hover {
  @apply bg-green-500/10;
}

/* Card Styles */
.card-title {
  font-size: 1.25rem; /* Card title font size */
}

.card-description {
  font-size: 0.875rem; /* Card description font size */
}

.pip-card {
  @apply glass p-4 my-4 rounded-lg border border-green-400/60 transition-all duration-300 hover:bg-[#2C3E50]/50; /* Specific Pip-Boy cards */
}

.loading-spinner {
  @apply animate-spin h-8 w-8 text-yellow-500; /* Loading spinner styling */
}

/* Terminal-style animations */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.float {
  animation: float 5s ease-in-out infinite; /* Float animation */
}

h1, h2, h3 {
  @apply text-yellow-300 mb-4; /* Yellow headings */
}

p {
  @apply text-gray-200; /* Soft p color */
}
