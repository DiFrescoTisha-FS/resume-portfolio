# mytCreative Application Starter Kit (ASK)

A production-ready foundation for all **mytCreative Tier 3** custom development projects. This template uses the standard **MTE Go-To Technology Stack** and is designed for maximum reusability, scalability, and adherence to our educational mission.

## 🎯 Guiding Principles

This **Application Starter Kit (ASK)** embodies the **MTE - Standard for AI-assisted Development** principles:

1.  **Education First:** Code includes educational comments explaining the "why" for **Digital GAP Program** participants.
2.  **Best Practices by Default:** Pre-configured with industry-standard tools for quality and maintainability.
3.  **Scalability in Mind:** Designed to grow from MVP to enterprise-scale applications.
4.  **Developer Experience:** Optimized tooling (Vite, HMR) to focus on building features.

For complete standards, refer to our [MTE - Standard for AI-assisted Development](link-to-standards-doc).

***

## 🚀 Features (mytCreative Go-To Technology Stack)

The ASK is a minimal shell built on our approved stack:

* ⚡️ **Vite** - Lightning fast HMR and build times.
* ⚛️ **React 18** with **TypeScript** for type-safe development.
* 🎨 **Tailwind CSS** + **Shadcn UI** for beautiful, consistent UI.
* 🔄 **Zustand** - The approved pattern for project-specific state management.
* 🎭 **Framer Motion** - Pre-configured for smooth animations.
* 🔍 **React Helmet Async** for SEO management.
* 📦 **Organized folder structure** for scalability.
* 🔧 **ESLint + Prettier** for code quality.

***

## 🛠️ Getting Started (Cloning the Template)

1.  **Clone this repository** (and immediately rename the folder for your project, e.g., `project-digital-signage`):

    ```bash
    git clone [https://github.com/mytcreative/myt-ask-template.git](https://github.com/mytcreative/myt-ask-template.git) your-new-project-name
    cd your-new-project-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**

    ```bash
    cp .env.example .env.local
    ```
    Configure API credentials in `.env.local` as needed for your specific project.

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

***

## 📁 Project Structure (The Clean Shell)

The following directories are set up for **Integration-Ready Architecture** but are intentionally **empty of implementation logic** to ensure a clean start for every project:

| Directory | Purpose | ASK Template Status |
| :--- | :--- | :--- |
| `src/pages/HomePage.tsx` | Main entry point | **Cleaned Placeholder** |
| `src/components/common/` | Global structure (Layout, Header, Footer) | **Kept** |
| `src/services/` | API services and configurations | **Empty (Ready for implementation)** |
| `src/store/` | Zustand state management | **Empty (Ready for project state)** |
| `src/hooks/` | Custom React hooks | **Cleaned** |

### Understanding the Architecture

* **ASK is a Shell:** The `services/` and `store/` directories are intentionally **empty** in this template. Your first project steps (like for the Digital Signage app) will involve creating the necessary files here (e.g., `wordpress.service.ts`, `appStore.ts`).
* **Services:** Centralize API logic using the Singleton pattern.
* **Store:** Global state management using Zustand's slice pattern.

***

## 🔧 Available Scripts

* `npm run dev` - Start development server with hot reload
* `npm run build` - Build for production (type-check + bundle)
* `npm run lint:fix` - Auto-fix ESLint issues
* `npm run format` - Format code with Prettier
* `npm run type-check` - Run TypeScript compiler checks

***

## 📚 Learning Resources

### For Digital GAP Program Participants

This boilerplate includes extensive inline documentation. Look for:

* `LEARNING NOTE:` - Explains concepts and patterns.
* `BEST PRACTICE:` - Industry standards to follow.
* `PATTERN:` - Design patterns being demonstrated.

***

**Built with ❤️ by mytCreative**
*Advancing future generations of digital creative minds*