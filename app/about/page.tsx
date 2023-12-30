import Logo from "../components/logo";
export default function Blogs() {

return (
  <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-5 bg-yellow-300">
    <div className="max-w-3xl mx-auto md:px-4 px-0">
      <div className="bg-blue-500 text-white md:p-6 p-2 rounded-lg md:mb-8 mb-4">
        <h2 className="md:text-3xl text-xl font-bold mb-4">Hello I'm Deo!</h2>
        <a href="https://www.facebook.com/deocodetech" target="_blank" rel="noopener noreferrer">
          <div className="p-2 mt-3 flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
              src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/400505858_299462746299057_292740624100307757_n.jpg?_nc_cat=104&cb=99be929b-b574a898&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHGHzgtRUrxaW7_rKamDzKztgdtDbAtAue2B20NsC0C51oWCYgLwClkiBVkgUPkI3O6NEn8JvyyqCSfd23H9pw1&_nc_ohc=j3iyj6k-LtIAX-rqBHl&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfD_TauHHaLTG91wKadKLHmKcd6ei5dPQLr2nmcRrAfvSw&oe=658F599B"
              alt=""
            />
          </div>
        </a>
        <p className="lg:text-lg text-sm">
          I'm a website developer and a computer science graduate. I have a passion for creating engaging and user-friendly websites. I enjoy staying
          up-to-date with the latest technologies and constantly learning new things in the ever-evolving world of web development. As a freelancer, I
          have the flexibility to work on diverse projects and collaborate with clients from various industries. I take pride in delivering
          high-quality solutions tailored to meet the unique needs of each client. Based in the Philippines, I am excited to contribute my skills and
          knowledge to create impactful and visually appealing websites. Let's bring your digital vision to life!
        </p>
      </div>
    </div>
  </main>
);
}
