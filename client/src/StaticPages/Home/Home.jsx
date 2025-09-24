import { Link } from 'react-router-dom';
import ProjectNavbar from "../../Components/ProjectNavbar/ProjectNavbar";
import { useEffect, useState } from "react";
import "./home.scss";
import mario from '../../Assets/Gifs/5UKF.gif';
import Me from '../../Assets/Images/me.jpg';

const NUMGIFS = 6;

function App( { setBackground } ){
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    if (!running){
      setRunning(true)
    }
    setBackground("white");

    setInterval(function(){
      let gifs = document.querySelectorAll(".games-gif");
      for (let i = 0; i < gifs.length; i++){
        gifs[i].classList.add("hidden");
      }
      let random = Math.floor((Math.random() * NUMGIFS) + 1).toString();
      let randomId = 'gif' + random;
      let gif = document.getElementById(randomId);
      if (gif){
        gif.classList.remove('hidden');
      }
    }, 3000)
  }, [setBackground]);

    return (
    <div className="home-page-wrapper">
      <div className="home-page">
        <div className="home-page-init">
          <div className="typewriter-animation-section">
            <div className="typewriter-animation-section-child1">
              <h1>Hello, my name is Alex.</h1>
              <h3 className="home-page-subtitle">welcome to my website.</h3>
            </div>
            <div className="typewriter-animation-section-child2">
              <div className="image-container-div" id="image1">
              </div>
              <div className="image-container-div" id="image6">

              </div>
            </div>
          </div>
          <div className="lower-section">
            <div className="image-container-div" id="image2">
            </div>
            <div className="image-container-div" id="images3and4">
              <div className="image-container-div" id="image3">
              </div>
              <div className="image-container-div" id="image4">
              </div>
            </div>
            <div className="image-container-div" id="image5">
            </div>
          </div>
        </div>

        <div className="home-page-intro">
          <div className="home-page-intro-toplevel">
            <div className="home-page-intro-title">
            </div>
            <div className="home-page-intro-image-level">
              <div className="home-page-intro-image">
                <img id="home-page-me" src={Me} alt="" />
              </div>
              <div className="home-page-intro-whoami">
                <div className="home-page-intro-whoami-wrapper">
                  <div className="home-page-intro-whoami-static-txt">
                    I'm a
                  </div>
                  <ul className="dynamic-txts">
                    <li><span>Developer</span></li>
                    <li><span>Designer</span></li>
                    <li><span>Creator</span></li>
                    <li><span>Scholar</span></li>
                  </ul>
                </div>
                  <div className="home-page-intro-whoami-circles">
                  <div id="circle1" className="circle"></div>
                  <div id="circle2" className="circle"></div>
                  <div id="circle3" className="circle"></div>
                  <div id="circle4" className="circle"></div>
                  <div id="circle5" className="circle"></div>
                  <div id="circle6" className="circle"></div>
                  <div id="circle7" className="circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-intro-bottomlevel">
            <div className="home-page-intro-myskills">
              <div className="home-page-intro-myskills-title">SKILLS</div>
              <div className="home-page-intro-myskills-cloud">
                {[
                  'React', 'JavaScript', 'SASS', 'GIT', 'Angular', 'Python', 'Flask', 'Java',
                  'ExpressJS', 'Django', 'Kubernetes', 'Docker', 'Data Analysis', 'Machine Learning',
                  'MongoDB', 'SQL', 'PgAdmin', 'Postman'
                ].map((skill, i) => (
                  <span className={`myskill-pill myskill-pill-${i % 6}`} key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="home-page-about-card">
          <div className="about-card-content">
            <img src={Me} alt="Alex Casieri" className="about-profile-img" />
            <div className="about-card-text">
              <div className="about-card-title">A little about me</div>
              <div className="about-card-body">
                Hi! I'm Alex, a lifelong explorer, creator, and learner from Deerfield, Illinois. My curiosity and passion for building things led me to a career in computer science, where I now work as a full stack software engineer. I love tackling new challenges, collaborating with others, and finding creative solutions. <span className="about-card-highlight">Let’s connect and create something awesome!</span>
              </div>
              <div className="about-card-readmore">
                <Link to="/about">
                  <button className="about-card-btn">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Interests Section */}
        <div className="home-page-interests-section">
          <div className="home-page-interests-title">My Interests</div>
          <div className="home-page-interests-body">
            <ul className="interests-list">
              <li>Software Engineering + Tech</li>
              <li>Photography</li>
              <li>Basketball</li>
              <li>Jiu Jitsu + Martial Arts</li>
              <li>Hiking, running, and outdoor adventures</li>
              <li>Traveling</li>docker
              <li>Being Outdoors</li>
            </ul>
          </div>
        </div>
        {/* Photo Gallery Preview */}
        <div className="home-page-gallery-preview">
          <div className="home-page-gallery-title">Photo Gallery Preview</div>
          <div className="home-page-gallery-images">
            {/* Replace with your favorite/sampled images */}
            <img src="http://localhost:3001/uploads/chicago-sunset-1.jpeg" alt="Chicago Sunset" className="gallery-preview-img" />
            <img src="http://localhost:3001/uploads/chicago-sunset-4.jpeg" alt="Chicago Sunset" className="gallery-preview-img" />
            <img src="http://localhost:3001/uploads/chicago-sunset-5.jpeg" alt="Chicago Sunset" className="gallery-preview-img" />
            <img src="http://localhost:3001/uploads/chicago-sunset-3.jpeg" alt="Chicago Sunset" className="gallery-preview-img" />
            <img src="http://localhost:3001/uploads/chicago-sunset-6.jpeg" alt="Chicago Sunset" className="gallery-preview-img" />
          </div>
          <div className="gallery-preview-link">
            <Link to="/photo-gallery">
              <button className="gallery-preview-btn">See Full Gallery</button>
            </Link>
          </div>
        </div>
        {/* Travel Preview */}
        <div className="home-page-travel-preview">
          <div className="home-page-travel-title">Travel Preview</div>
          <div className="home-page-travel-icons">
            <Link to="/travel/hawaii" className="travel-preview-icon">Hawaii</Link>
            <Link to="/travel/southamerica" className="travel-preview-icon">South America</Link>
            <Link to="/travel/prague" className="travel-preview-icon">Prague</Link>
          </div>
          <div className="travel-preview-link">
            <Link to="/travel">
              <button className="travel-preview-btn">See All Travels</button>
            </Link>
          </div>
        </div>
        <div className="home-page-site-features-snippet">
          <div className="home-page-site-features-title">Games</div>
          <div className="games-feature-creative">
            <Link className="features-link" to="/games">
              <div className="games-mario-block">
                <img className="games-mario-img" src={mario} alt="Mario" />
                <div className="games-block-bounce">
                  <span className="games-block-question">?</span>
                </div>
                <span className="games-link-text">Play My Games!</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="about-site-readmore">
          <Link to="/about">
            <button id="read-more">
              Read More
            </button>
          </Link>
        </div>

      <div className="home-page-footer"></div>
      <div className="home-page-footer-end">
        <div className="social-media-icons">
          <div className="social-media-icon">
            <a href="https://www.linkedin.com/in/alexander-casieri-52b02b19b/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://github.com/alexcasieri30">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://twitter.com/casieri_alex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://instagram.com/alex.casieri" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6.4-7.92a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM21.6 7.2c-.048-1.008-.272-1.904-.992-2.624C19.704 3.472 18.808 3.248 17.8 3.2 16.76 3.152 16.44 3.12 12 3.12s-4.76.032-5.8.08c-1.008.048-1.904.272-2.624.992C3.472 4.296 3.248 5.192 3.2 6.2c-.048 1.04-.08 1.36-.08 5.8s.032 4.76.08 5.8c.048 1.008.272 1.904.992 2.624.72.72 1.616.944 2.624.992 1.04.048 1.36.08 5.8.08s4.76-.032 5.8-.08c1.008-.048 1.904-.272 2.624-.992.72-.72.944-1.616.992-2.624.048-1.04.08-1.36.08-5.8s-.032-4.76-.08-5.8zM12 17.6a5.6 5.6 0 1 1 0-11.2 5.6 5.6 0 0 1 0 11.2zm7.2-10.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z" fill="#000"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
