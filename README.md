## Project Overview
This project implements a video-based reel feature that dynamically adjusts its layout and functionality based on the user's screen size and interaction. The key components and features are detailed below:

### Features: 
#### Responsive Design
It support on multiple devices like mobiles, tablets and desktop.

#### Video Playback Control
Videos automatically play when they are in view (active) and pause when out of view.
Users can manually toggle play and pause via a button overlay on the video.

#### Intersection Observer
Used to track which video is currently in view and dynamically set the active index.
Ensures only the active video plays while others remain paused to optimize performance.

#### Product Tags
Each reel can have product tags displayed at specific positions over the video.
These tags link to product pages and provide interactive functionality.

### Code Highlights:
#### Reel Component
Manages the video state (e.g., play, pause) using the useRef and useState hooks.
Dynamically updates video playback based on the isActive prop using useEffect.

#### VideoPlayer Component
Handles rendering of the video element with Tailwind classes for responsive design.
Automatically plays or pauses the video based on the isActive state.

#### ReelContainer Component: 
Renders the list of reels and maintains the active reel index.
Implements an IntersectionObserver to dynamically update the active index as the user scrolls.

#### ActionButtons Component
Here, we have all the buttons - like, share, product tag, comment.

### Tools and Libraries Used: 
Next JS: For building reusable components and managing state.
Tailwind CSS: For styling and responsive design.
JavaScript: For logic implementation and DOM manipulation.

### Summary
This project demonstrates a robust and responsive implementation of a reel-based video player with smooth scrolling and playback controls. It is optimized for performance and usability across devices and can be further extended with additional features.

