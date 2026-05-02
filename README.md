# High-Agency UI/UX Portfolio

Welcome to my premium library of UI/UX experiments and High-Agency Dashboards. This project serves as a showcase of modern frontend development, featuring an interconnected collection of highly interactive, modular dashboards designed with a focus on polished aesthetics and seamless user experiences.

## 🚀 Tech Stack

This project was recently migrated from a vanilla HTML/JS/CSS architecture into a modern Single Page Application (SPA).

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** React Router v7
- **Styling:** Vanilla CSS (Programmatically scoped with `?inline` imports)
- **Formatting:** Prettier

## 🌟 Featured Dashboards

The application features a central "Bento Grid" Portfolio menu that links to 6 distinct, fully-functional interactive dashboard components:

1. **Profile Dashboard:** A personalized resume dashboard featuring a dynamic terminal typewriter animation.
2. **Financial Dashboard:** A clean, professional layout designed for tracking financial statistics and metrics.
3. **Sales Dashboard:** A pipeline board layout for tracking deals and conversion rates.
4. **São Paulo Population:** An editorial-style demographic dashboard with numerical counting animations.
5. **Steam Games:** A brutalist, hacker-themed interface displaying live concurrent gaming metrics.
6. **Banana Market:** A fun, high-motion dashboard featuring hover-based magnetic cursor effects.

## 🧠 Architecture Highlights

- **Custom Hooks for Logic Isolation:** Complex Vanilla JS interactions (like intersection observers, mouse tracking, and typewriter effects) have been encapsulated into reusable React Custom Hooks (e.g., `useProfileLogic.ts`, `useBananaLogic.ts`).
- **Dynamic CSS Injection:** To preserve the original generic CSS rules without conflict, each dashboard dynamically injects its own CSS as a raw string upon mounting and cleans it up upon unmounting via a custom `useDynamicCSS` hook.

## 🛠️ Getting Started

To run this project locally, make sure you have Node.js installed.

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd dashboards
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   _The application will be available at `http://localhost:5173` with Hot Module Replacement._

4. **Build for production:**

   ```bash
   npm run build
   ```

   _This compiles TypeScript and generates the production bundle in the `dist` folder._

5. **Format Code:**
   ```bash
   npm run format
   ```

## 👨‍💻 Author

Created by **Lucas Borges**.
