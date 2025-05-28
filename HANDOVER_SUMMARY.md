# Project Handover: Your Clean Queen Website

**Date:** May 28, 2025
**Prepared By:** Roo (AI Technical Lead)

## 1. Project Overview

The primary objective of this project is to develop a modern, elegant, and professional single-page website for "Your Clean Queen," a residential cleaning service operating in Poundbury, Dorchester, and surrounding Dorset areas. The website aims to attract new clients, clearly present services, and build trust by reflecting the brand's commitment to high-quality, personalized cleaning with a "regal touch."

A key visual inspiration for the layout and user experience, particularly the Hero section, is `https://www.brightandbeautifulhome.com/`.

### 1.1. Key Visual Characteristics of `brightandbeautifulhome.com` (Inspiration Site)

The `brightandbeautifulhome.com` website serves as a primary visual reference. Its key characteristics to emulate (while adapting to "Your Clean Queen" branding) are:

*   **Modern & Vibrant Aesthetic:** The site feels contemporary, energetic, and professional.
*   **Engaging Hero Section:**
    *   **Layered Design:** Utilizes a full-width background image (often lifestyle or clean home shots) with a prominent, brightly colored (pink in their case) overlay shape. This shape is often a large semi-circle or an organic curve, partially covering the background and housing key text and CTAs.
    *   **Dynamic Elements:** Features a smaller, contrasting callout element (e.g., "Family Run Business" on a light blue circular background) often positioned near or slightly overlapping the main colored overlay, adding depth.
    *   **Clear Information Hierarchy:** Presents a clear headline, introductory text, and prominent Call-to-Action (CTA) buttons within this layered structure.
*   **Clear Sectioning with Varied Backgrounds:**
    *   The page flow is broken up by alternating between white/light neutral backgrounds for some content sections and full-width colored bands (matching their primary accent color) or image-based backgrounds for others. This visually separates content areas effectively.
*   **Card-Based & Columnar Content Presentation:**
    *   Services, benefits, and testimonials are often presented in cards or columns, enhancing scannability. These cards typically feature subtle shadows and rounded corners for a modern look.
*   **Visual Rhythm & Balance:**
    *   Content sections frequently pair text blocks with relevant images or icons, creating balanced and visually interesting compositions (e.g., image on one side, text on the other, alternating down the page).
*   **Strong Visual Anchors & CTAs:**
    *   Key sections, such as "Get a Quote," often feature prominent forms housed within a colored panel, making them stand out.
    *   CTA buttons are visually distinct (using their primary accent color) and are strategically placed throughout the page to guide user action.
*   **Typography & Imagery:**
    *   Uses clean, modern sans-serif fonts with a clear hierarchy established through variations in size, weight, and color.
    *   Employs high-quality photography (a mix of professional stock images and photos of team members/clients).
    *   Utilizes simple, clean icons to visually support services or benefits.
*   **Effective Use of White Space:** Despite vibrant accent colors, the design incorporates ample white space within content blocks to maintain readability and a clean, uncluttered appearance.

The goal for "Your Clean Queen" is to adapt these structural and engagement principles using its own Teal, Accent Gold, and regal branding.

## 2. Branding Guidelines

The website design should consistently adhere to the following branding elements:

*   **Primary Color (Teal):** `#008080` (defined as `teal` in `tailwind.config.ts`)
*   **Secondary/Overlay Color (Light Teal):** `#007791` (defined as `teal-light` in `tailwind.config.ts`)
*   **Accent Color (Accent Gold):** `#F0E68C` (defined as `accent-gold` in `tailwind.config.ts`)
*   **Neutral Colors:**
    *   Crisp White: `#FFFFFF` (Tailwind's `white` or `bg-clean-white`)
    *   Light Cool Grey: `#F4F4F4` (`bg-clean-grey`), `#E8E8E8` (`bg-clean-grey-light`)
*   **Typography:**
    *   Headings: Montserrat (via `font-heading` in `tailwind.config.ts`)
    *   Body Text: Open Sans (via `font-sans` in `tailwind.config.ts`)
*   **Overall Tone & Feel:** Sophisticated, trustworthy, meticulous, professional, approachable, and with a personal, regal touch.

## 3. Key Files Modified & Worked On

The following files were central to the development work undertaken:

*   [`src/app/page.tsx`](src/app/page.tsx:1): Main page component; significant work on Hero section structure and initial styling for other planned sections.
*   [`src/app/globals.css`](src/app/globals.css:1): Global stylesheet; critical for Tailwind CSS setup, Google Font imports, and definition of custom utility classes and base styles.
*   [`tailwind.config.ts`](tailwind.config.ts:1): Configuration file for Tailwind CSS, defining theme extensions (colors, fonts).
*   [`postcss.config.mjs`](postcss.config.mjs:1): PostCSS configuration for integrating Tailwind CSS and Autoprefixer.
*   [`package.json`](package.json:1): Managed project dependencies, notably for the Tailwind CSS version downgrade.
*   [`src/components/Navbar.tsx`](src/components/Navbar.tsx:1): Initial setup and integration.
*   [`src/app/layout.tsx`](src/app/layout.tsx:1): Root layout, ensuring `globals.css` is imported.

## 4. Major Technical Decisions & Changes

### 4.1. Tailwind CSS Version Downgrade

*   **Initial State:** The project was initiated or found to be using Tailwind CSS v4 alpha.
*   **Problem Encountered:** Persistent issues with CSS styles not being applied correctly, particularly custom theme colors and utilities defined in `tailwind.config.ts`. Error messages and behavior pointed towards incompatibilities or complexities with the v4 alpha setup (e.g., `Cannot find module 'autoprefixer'`, incorrect PostCSS plugin usage for v4).
*   **Resolution:** A decision was made to **downgrade Tailwind CSS to the latest stable v3.x version.**
    *   `tailwindcss@^4` and `@tailwindcss/postcss` (v4 specific plugin) were uninstalled.
    *   `tailwindcss@latest` (v3.x), `postcss@latest`, and `autoprefixer@latest` were installed as dev dependencies.
*   **Impact:** This downgrade successfully resolved the primary CSS processing issues, allowing custom theme styles to be applied.

### 4.2. CSS Setup (`src/app/globals.css`)

*   Following the downgrade to Tailwind CSS v3, [`src/app/globals.css`](src/app/globals.css:1) was reverted to the standard v3 setup:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
*   The Google Fonts import (`Montserrat` and `Open Sans`) is included.
*   All previously defined custom utility classes (e.g., `.text-teal`, `.bg-clean-grey`) and base body styles within `@layer utilities` and `@layer base` were restored and are active.

### 4.3. PostCSS Configuration (`postcss.config.mjs`)

*   The [`postcss.config.mjs`](postcss.config.mjs:1) file is now configured for Tailwind CSS v3:
    ```javascript
    export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };
    ```

## 5. Current Development State

*   **CSS Processing:** Functional with Tailwind CSS v3.x. Custom colors, fonts, and utilities defined in `tailwind.config.ts` and `globals.css` are being applied.
*   **Hero Section (`src/app/page.tsx`):**
    *   The structure has been updated to begin implementing a layered design inspired by `brightandbeautifulhome.com`.
    *   It includes a placeholder for a faded background image, a simplified Light Teal overlay block (extending from the left with large rounded corners on the right), and the "Founded by Teal" callout card with an Accent Gold background.
    *   The initial attempt to create a complex curved/semi-circular overlay using only Tailwind utility classes was not visually successful and has been simplified. This remains an area for significant visual refinement.
*   **Other Sections:** Basic structural placeholders and initial content exist for other planned sections (Trust Bar, Services, About, Contact, etc.) in `src/app/page.tsx`.
*   **Imagery:** Currently using placeholder images from `placehold.co`.
*   **Navbar:** A basic Navbar component (`src/components/Navbar.tsx`) is in place and imported into `src/app/page.tsx`.

## 6. Key Challenges & Subtleties During Development

*   **Tailwind CSS v4 Alpha Complexity:** The primary challenge was diagnosing the root cause of CSS styles not applying. The alpha nature of Tailwind CSS v4 introduced unexpected behavior and configuration requirements that were not immediately obvious, leading to significant troubleshooting time. The downgrade to v3 proved to be the most effective solution for stability.
*   **Hero Section Curved Overlay:** Achieving the desired sophisticated, large curved overlay (similar to the pink semi-circle on `brightandbeautifulhome.com`) with pure Tailwind utility classes is difficult. The current implementation is a placeholder. This visual element will require either SVG integration or more advanced CSS techniques (e.g., `clip-path`, pseudo-elements with complex border-radius and transform properties).
*   **Project Stack:** The project is built with Next.js (v15.3.2) and TypeScript.

## 7. Recommended Next Steps for Development

1.  **Hero Section Visual Refinement:**
    *   **Curved Overlay:** Prioritize implementing the Light Teal curved overlay effectively. Explore using an SVG for the shape for optimal control and scalability, or investigate advanced CSS `clip-path` or pseudo-element techniques.
    *   **Background Image:** Integrate a high-quality, faded background image that aligns with the brand's aesthetic.
    *   **Layering & Positioning:** Fine-tune the positioning and layering of the text content, CTA buttons, and the "Founded by Teal" callout to achieve the desired dynamic and professional look.
2.  **Component Implementation:**
    *   Continue building out the remaining sections as outlined in the agreed-upon site structure (Services, Why Choose Us, How It Works, Testimonials, About Teal, Contact Form, Footer).
    *   Ensure consistent application of branding (colors, typography) using the theme defined in `tailwind.config.ts`.
3.  **Imagery:** Replace all `placehold.co` images with professional, brand-appropriate photography.
4.  **Responsive Design:** Thoroughly test and refine the responsiveness of all sections across various screen sizes.
5.  **Contact Form:** Implement the "Book Online" / "Get a Quote" functionality, including form validation and submission handling (details for backend/emailing to be determined).
6.  **UI/UX Enhancements:** Consider adding subtle animations, transitions, and micro-interactions to elevate the user experience and reinforce the "regal" brand feel.
7.  **SEO & Accessibility:** Continue to keep SEO best practices and web accessibility standards in mind during development.
8.  **Code Cleanup:** Remove any commented-out experimental code from `src/app/globals.css` once the theme and utility classes are fully confirmed to be working as expected via `tailwind.config.ts`.

This document should provide a solid foundation for the next developer to continue the project effectively.