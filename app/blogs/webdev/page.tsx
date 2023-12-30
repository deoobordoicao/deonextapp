// import "../../resourcescss/blogstyle.css";
export default function Blogs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-5 bg-yellow-300">
      <h1 className="md:text-3xl text-xl font-bold mb-4">Website Development Blog</h1>

      <div className="max-w-3xl mx-auto md:px-4 px-0">
        <div className="bg-blue-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Web Design</h2>
          <p className="lg:text-lg text-sm">
            This involves designing the visual layout and user interface (UI) of a website. It includes creating wireframes, choosing color schemes,
            selecting fonts, and arranging visual elements to provide an engaging user experience.
          </p>
        </div>
        <div className="bg-green-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Front-end Development</h2>
          <p className="lg:text-lg text-sm">
            Front-end development focuses on building the client-side of a website. It involves writing HTML, CSS, and JavaScript code to create the
            structure, style, and interactivity of web pages. Front-end developers ensure that websites are responsive, accessible, and compatible
            across different devices and browsers.
          </p>
        </div>
        <div className="bg-yellow-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Back-end Development</h2>
          <p className="lg:text-lg text-sm">
            Back-end development involves building the server-side of a website. It includes writing server-side code using programming languages like
            PHP, Python, Ruby, or JavaScript (with Node.js) to handle data storage, processing, and interactions with databases. Back-end developers
            implement features such as user authentication, database integration, and server-side logic.
          </p>
        </div>
        <div className="bg-purple-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Content Creation</h2>
          <p className="lg:text-lg text-sm">
            Content creation involves writing and organizing textual, visual, and multimedia elements for a website. This includes creating compelling
            copy, optimizing images and videos, and structuring content in a user-friendly manner. Content creators also focus on search engine
            optimization (SEO) to enhance a website's visibility in search engine results.
          </p>
        </div>
        <div className="bg-red-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Website Testing and Deployment</h2>
          <p className="lg:text-lg text-sm">
            Testing is an essential part of website development to ensure functionality, performance, and usability. Developers perform various tests
            such as functionality testing, cross-browser compatibility testing, and performance testing. Once the website is thoroughly tested, it is
            deployed to a web server, making it accessible to users on the internet.
          </p>
        </div>
        <div className="bg-gray-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
          <h2 className="md:text-3xl text-xl font-bold mb-4">Maintenance and Updates</h2>
          <p className="lg:text-lg text-sm">
            After a website is launched, it requires ongoing maintenance and regular updates. This includes fixing bugs, updating content, adding new
            features, and ensuring security measures are in place. Regular maintenance helps keep the website secure, up-to-date, and optimized for
            performance.
          </p>
        </div>
        <h2 className="text-center">flex justify-start</h2>
        <div className="flex justify-start cursor-pointer">
          <div className="bg-red-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
        </div>
        <h2 className="text-center">flex justify-end</h2>
        <div className="flex justify-end cursor-pointer">
          <div className="bg-red-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
        </div>
        <h2 className="text-center">flex justify-around</h2>
        <div className="flex justify-around cursor-pointer">
          <div className="bg-red-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
        </div>
        <h2 className="text-center">flex justify-between</h2>
        <div className="flex justify-between cursor-pointer">
          <div className="bg-red-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
        </div>
        <h2 className="text-center">flex justify-evenly</h2>
        <div className="flex justify-evenly cursor-pointer">
          <div className="bg-red-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
        </div>

      </div>
    </main>
  );
}
