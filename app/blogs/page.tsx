import "../resourcescss/blogstyle.css";
import Contributors from "../components/contributors";
export default function Blogs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-5 bg-yellow-300">
      <h1 className="heading2">DeoCodingTech Blog!</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">
            <span className="fa-solid fa-file-code"></span>
          </div>
          <h3 className="card-title">Web Development</h3>
          <p>
            Website development refers to the process of creating and building websites that are accessible via the internet. It involves various
            tasks and disciplines, including web design, web programming, content creation, and server configuration.
          </p>
          <a href="/blogs/webdev">
            Read more<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>

        <div className="card">
          <div className="card-icon">
            <span className="fa-solid fa-envelope-circle-check"></span>
          </div>
          <h3 className="card-title">Email Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt beatae earum quo culpa laborum. Iusto nisi cumque earum impedit
            perspiciatis fuga, suscipit molestias reiciendis.
          </p>
          <a href="#">
            Read more<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>

        <div className="card">
          <div className="card-icon">
            <span className="fa-solid fa-magnifying-glass-chart"></span>
          </div>
          <h3 className="card-title">SEO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt beatae earum quo culpa laborum. Iusto nisi cumque earum impedit
            perspiciatis fuga, suscipit molestias reiciendis.
          </p>
          <a href="#">
            Read more<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>

        <div className="card">
          <div className="card-icon">
            <span className="fa-solid fa-person-running"></span>
          </div>
          <h3 className="card-title">Animations</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt beatae earum quo culpa laborum. Iusto nisi cumque earum impedit
            perspiciatis fuga, suscipit molestias reiciendis.
          </p>
          <a href="#">
            Read more<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>

        <div className="card">
          <div className="card-icon">
            <span className="fa-solid fa-paint-roller"></span>
          </div>
          <h3 className="card-title">Tools</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt beatae earum quo culpa laborum. Iusto nisi cumque earum impedit
            perspiciatis fuga, suscipit molestias reiciendis.
          </p>
          <a href="#">
            Read more<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Contributors />
      </div>
    </main>
  );
}
