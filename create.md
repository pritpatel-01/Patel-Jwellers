Here is a **single, complete prompt** you can give to an AI agent (like a coding agent) to build your React jewellery showcase website:

---

**PROMPT:**

Build a modern, responsive jewellery showcase website using React (with Vite). This website is for a local jewellery store that wants to display their jewellery items professionally but does not need full e-commerce functionality (no cart or payment system). The main goal is product showcasing and customer enquiries via WhatsApp.

Use the following technical requirements:

* React (Vite setup)
* React Router for navigation
* Tailwind CSS for styling
* Clean component-based architecture
* Fully responsive (mobile-first design)
* Elegant luxury UI (white, black, gold theme)
* Use modern UI/UX practices

Brand style:

* Premium, elegant, minimal
* Colors: White background, black text, gold accent (#C5A047)
* Fonts: Playfair Display for headings, Poppins for body text
* Smooth hover effects and subtle animations
* Professional product image presentation

Pages required:

1. Home Page

   * Hero section with large banner image and tagline
   * Featured Products section (grid layout)
   * Categories section (Gold, Silver, Diamond, Bridal)
   * About preview section
   * Call-to-action section with WhatsApp enquiry button

2. Products Page

   * Product grid layout (3–4 per row desktop, responsive on mobile)
   * Filter by category
   * Each product card must show:

     * Product image
     * Product name
     * Price
     * “View Details” button
     * “Enquire on WhatsApp” button

3. About Page

   * Story of the jewellery store
   * Mission & values
   * Store image

4. Contact Page

   * Contact form (Name, Phone, Message)
   * WhatsApp direct link button
   * Embedded Google Map location
   * Store address and phone number

Components required:

* Navbar (sticky, responsive, mobile menu)
* Footer (social links, quick links, contact info)
* ProductCard component
* CategorySection component
* WhatsApp floating action button
* Reusable Button component

Data handling:

* Store product data in a local products.js file
* Each product must include:
  id, name, category, image, price, description

Extra features:

* Image hover zoom effect
* Smooth transitions
* Lazy loading images
* SEO-friendly structure
* Clean folder structure:
  src/
  components/
  pages/
  data/
  assets/

Do not include backend or payment integration.
Use jewellery images.
Write complete code structure including all main files.
Ensure code is clean, modular, and production-ready.

---


