# CueFlow Landing Page Analysis and Features

This document provides an analysis of the CueFlow landing page code located in the `old-src` directory and highlights the key features of the CueFlow application as described.

## Code Structure and Functionality (old-src)

The `old-src` directory contains the source code for the CueFlow landing page, a single-page application built with React and Vite.

*   **`App.tsx`**: The main component, structuring the landing page layout and content across different sections (header, features, use cases, installation guide, footer). It leverages `react-i18next` for localization and `framer-motion` for animations.
*   **`main.tsx`**: The application's entry point, responsible for rendering the React app and configuring client-side routing using `react-router-dom`.
*   **`index.css`**: Contains the primary styling, utilizing Tailwind CSS directives and custom CSS variables.
*   **`i18n.ts`**: Configures internationalization with `i18next`, loading translations from JSON files (`en.json`, `zh-CN.json`).
*   **`vite-env.d.ts`**: TypeScript declaration file for Vite environment variables.
*   **Supporting Directories**: `assets/`, `cases/`, `components/`, `lib/`, `locales/` contain images, specific use case components, reusable UI components, utility functions, and translation files respectively.

The application functions as a comprehensive landing page to introduce CueFlow, detailing its capabilities and guiding users. Routing is handled client-side, allowing for navigation to specific use case detail pages (though only "Live Stream Interaction" and "Job Interview" are currently linked). Styling is managed with Tailwind CSS, and animations are provided by Framer Motion.

## Key Features of CueFlow

Based on the analysis and user feedback, the key features and selling points of the CueFlow application include:

*   **Private First:** Strong emphasis on data privacy, particularly through **local voice transcription** which prevents privacy leakage by processing audio locally.
*   **Real-time AI Assistance:** Provides **real-time AI suggestions** and contextual hints during conversations.
*   **Versatile Application:** Useful in a variety of scenarios, including:
    *   Assisting in **meetings** (real-time help, post-meeting review).
    *   Helping with **lectures** or classes.
    *   Supporting **user calls**.
    *   Aiding in **candidate screening** and **interview preparation**.
*   **Contextual Prompts:** Ability to provide timely prompts and suggestions based on the **current situation**.
*   **Post-Conversation Review:** Facilitates **meeting review** and analysis after the conversation concludes.
*   **Multi-language Support:** Supports **multiple languages**.
*   **Flexible LLM Configuration:** Allows users to **flexibly configure their preferred LLM providers**.

This document summarizes the technical structure of the landing page code and the core functionalities of the CueFlow application it describes.