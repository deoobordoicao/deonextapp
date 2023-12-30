import "./globals.css";
import "./resourcescss/blogstyle.css";
import { FaFaceKissWinkHeart } from "react-icons/fa6";


//  const videoUrl = "https://youtu.be/mkRVHLQmsp4";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-300">
        <h1 className="heading">Welcome to my NextJS 14 Project</h1>
        <h1 className="heading2">why NextJS</h1>

        <div className="card-container">
          <div className="card">
            <div className="card-icon">
              <span className="fa fa-check-circle"></span>
            </div>
            <h3 className="card-title">Server-Side Rendering (SSR) and Static Site Generation (SSG)</h3>
            <p>
              Next.js provides built-in support for server-side rendering and static site generation. This means that pages can be pre-rendered on the
              server, improving performance and enabling search engine optimization (SEO). It allows you to fetch data at build time or runtime and
              generate static HTML files, resulting in faster initial page loads and improved user experience.
            </p>
            <a href="#">
              Read more<i className="fa-solid fa-angles-right"></i>
            </a>
          </div>

          <div className="card">
            <div className="card-icon">
              <span className="fa fa-check-circle"></span>
            </div>
            <h3 className="card-title">Efficient Development and Performance</h3>
            <p>
              Next.js offers a streamlined development experience with features like automatic code splitting, hot module replacement, and optimized
              asset loading. It has built-in support for React Fast Refresh, allowing for instant feedback during development. Next.js optimizes
              assets, lazy-loads components, and provides automatic prefetching, resulting in faster page rendering and improved performance.
            </p>
            <a href="#">
              Read more<i className="fa-solid fa-angles-right"></i>
            </a>
          </div>

          <div className="card">
            <div className="card-icon">
              <span className="fa fa-check-circle"></span>
            </div>
            <h3 className="card-title">Excellent Routing and Dynamic Routes</h3>
            <p>
              Next.js enables easy and flexible routing for your application. It provides a file-based routing system where each file in the pages
              directory becomes a route. You can create dynamic routes by placing brackets [] in the file name, allowing you to handle dynamic data
              and parameters in the URL structure.
            </p>
            <a href="#">
              Read more<i className="fa-solid fa-angles-right"></i>
            </a>
          </div>

          <div className="card">
            <div className="card-icon">
              <span className="fa fa-check-circle"></span>
            </div>
            <h3 className="card-title">API Routes</h3>
            <p>
              Next.js includes API Routes, which allow you to create serverless API endpoints within your Next.js application. It simplifies the
              process of building backend functionality by providing an easy way to handle API requests, authentication, and data processing. This
              helps in creating a unified development experience by combining frontend and backend code within a single project.
            </p>
            <a href="#">
              Read more<i className="fa-solid fa-angles-right"></i>
            </a>
          </div>

          <div className="card">
            <div className="card-icon">
              <span className="fa fa-check-circle"></span>
            </div>
            <h3 className="card-title">Vibrant Ecosystem and Community</h3>
            <p>
              Next.js has a thriving ecosystem with a wide range of plugins, libraries, and community support. The Next.js community is active and
              provides extensive documentation, tutorials, and examples. The framework is maintained by Vercel, a company dedicated to serverless
              deployments, which ensures regular updates, bug fixes, and performance improvements.
            </p>
            <a href="#">
              Read more<i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
