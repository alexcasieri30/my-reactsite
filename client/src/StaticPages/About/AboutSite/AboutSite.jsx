import './aboutsite.scss';

function AboutSite(){
            return (
                <div className="about-page-subsection">
                    <div className="about-site-section-card">
                        <div className="about-site-section-title">Home</div>
                        <div className="about-site-section-desc">
                            This is the main page that I started out with when creating this site. From the start, I wanted to have the theme
                            be something typewriter related. This was the pre-generative AI days, so I needed to figure out how to make the
                            typewriter effect myself. I found a great tutorial online that helped me get started, and I built the rest of the
                            site around the tech theme. I also wanted to have a little description about me on the page, and show the site's full
                            functionality on the home page. I made sure to include all the key features and elements that I wanted to showcase. However,
                            these were refined with new css once I got access to Copilot's help with styling.
                        </div>
                    </div>
                    <div className="about-site-section-card">
                        <div className="about-site-section-title">Games</div>
                        <div className="about-site-section-desc">
                            This section was originally what I wanted to build the site around. I had all of these games from college
                            web development classes and from the Odin Project, and I wanted to aggregate them somewhere. They were all separate repositories in my github account,
                            and they also were made with vanilla javascript. So before I could aggregate them, I had to turn them all into
                            React components. This wasn't too tricky for the smaller games like tictactoe, but was quite tricky for some of the
                            college webdev projects. Therefore, I sort of came up with a hacky solution and just stored these at the
                            fullscreengames endpoint, so that I could keep the html/css/vanillaJS intact in an index.html endpoint, without
                            having to refactor the entire game into React. Tictactoe, CV Project, Memory, and Battleship were Odin Project games.
                            The Etchasketch project was something I found on YouTube, I just added some extra features like being able to save images,
                            choosing a pen size and color, and adding an eraser. The ML section of the Games page was 2 machine learning projects that I
                            wanted to include in this somehow. Since these are obviously mainly a backend / data analysis project, I originally wasn't sure how.
                            However, I decided to use the Titanic project and just have the user fill out a form and use the model's results, and then creating
                            the Etchasketch project made me realize that I could use similar functionality for predicting numbers given a user drawn matrix. This is
                            currently not functional because it was originally made so long ago there are lots of dependency issues with the
                            ML libraries. I am working on a fix...
                        </div>
                    </div>
                    <div className="about-site-section-card">
                        <div className="about-site-section-title">Photo Gallery</div>
                        <div className="about-site-section-desc">
                            Photo gallery section is a more recent project, as photography is a much newer hobby of mine. I wanted somehwere to display my photos,
                            and I wanted to integrate it with a portfolio website or my tech skills somehow. Therefore, with the help of AI, I was able to create different
                            components to display photos in a gallery, and also have a typewriter effect for the title. There is still a lot of work to do here, as I have different
                            component ideas, and lots more photos to include.
                        </div>
                    </div>
                    <div className="about-site-section-card">
                        <div className="about-site-section-title">Travel</div>
                        <div className="about-site-section-desc">
                            This is also a newer section because my love for traveling is a newer one, and is also tied to my love for taking
                            photos. I wanted this section to display each of the big trips I've gone in recent memory, and also to do so in a unique style. 
                            The South America trip is a fairly basic style, as I just included my photos and told the story of our trip as you scroll down the page. 
                            The Hawaii / Japan trip is a bit different, as I was alone and doing a lot of journaling at the time. Therefore, I wanted to incorporate
                            my journal entries into the trip page, and display them with a journal entry effect. The Prague trip is a work in progress...
                        </div>
                    </div>
                    
                    <div className="about-site-section-card">
                        <div className="about-site-section-title">
                            Settings
                        </div>
                        <div className="about-site-section-desc">
                            This is a section that doesn't really have any real functionality, but it does have some random features that I was thinking of adding
                            awhile back. The features will stay here, and probably will not be used for anything, but I think its cool to see what I was thinking about
                            long ago when I was first building the site. 
                        </div>

                </div>
                <div className="about-site-section-card">
                    <div className="about-site-section-title">
                        Terminal
                    </div>
                    
                    <div>
                        The terminal is the icon on the bottom right of the page. You can use this terminal to navigate to different sections of the site. 
                    </div>
                </div>
            </div>
        );
}

export default AboutSite;