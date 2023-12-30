import "../resourcescss/blogstyle.css";

// Nice border > border-double border-4 border-white-600
export default function Video() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-yellow-300">
        <h1 className="heading">Video Tutorials</h1>

        <div className="card-container">
          <div className="card">
            <div className="card-icon">
              <span className="fa-solid fa-file-code"></span>
            </div>
            <h3 className="card-title">Web Development</h3>
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
      </main>
    </>
  );
}
