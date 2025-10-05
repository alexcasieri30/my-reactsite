
import "./southamerica.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SouthAmericaTrip({ setBackground }){
    useEffect(() => {
        console.log("setting background to white");
        setBackground("white");
    }, []);
    return (
        <div className="trip-details-container">
            {/* Back button moved above hero for better flow */}
            <div className="sa-back-link-wrapper">
                <Link to="/travel" className="sa-back-link">
                    <span className="sa-back-icon">&#8592;</span>
                    <span className="sa-back-text">Back to All Trips</span>
                </Link>
            </div>
            <div className="sa-hero">
                <img className="sa-hero-img" src="http://localhost:3001/uploads/iguazu-falls-1.jpeg" alt="Buenos Aires Letters" />
                <div className="sa-hero-overlay">
                    <h1 className="sa-header">South America Adventure 2025</h1>
                    <p className="sa-hero-sub">Buenos Aires &bull; Iguazu Falls &bull; Rio de Janeiro</p>
                </div>
            </div>
            <div className="sa-section-header">Buenos Aires</div>
            <div className="sa-trip-section">
                <div className="sa-trip-text-block">
                    <p className="sa-trip-text">
                        In September 2025, I embarked on an unforgettable journey to South America, exploring the 
                        cities of Buenos Aires and Rio de Janeiro, with a stop at the breathtaking Iguazu Falls with my 2 friends Cory and Ryan. 
                        Each place added a different flavor to the trip, creating a variety of experiences that I will cherish forever.
                        Iguazu Falls added a bit of nature and adventure to the trip, while Buenos Aires and Rio de Janeiro provided a mix
                        of culture, history, and vibrant city life, as well as some great people watching. 
                    </p>
                </div>
                <div className="sa-photo-block">
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-letters-1.jpeg" alt="Buenos Aires Letters"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-1.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-2.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        The trip started in Buenos Aires. When we arrived, it first felt like we were in Europe. Buenos Aires felt like a very 
                        modern, westernized city, with a lot of European influence. We did not have an itinerary going into this trip, but rather had a 
                        few things we wanted to see and do in each location. In Buenos Aires, the only thing that I was really excited to see was 
                        La Boca & Caminito Street. This was because it was something super unique looking, and unlike anything I've seen before or anything
                        that we have in the US. The colorful buildings and street art made for a very lively and vibrant atmosphere. A few other things that
                        we had in mind were seeing a Tango show, and to visit the number 1 steakhouse in the world, Don Julio, which we had a reservation for 
                        on our 2nd night, Saturday, 9/14. 
                    </p>
                </div>
                
            </div>
            <div className="sa-trip-section">
                <div>
                    <p className="sa-trip-text">
                        As we walked from our hostel to La Boca & Caminito st., we walked along Puerto Madero, and saw a little bit of nature surrounding
                        the port. This part of the city was somewhat boring to look at and walk through, I must admit. However, as we got closer to La Boca,
                        I started seeing glimpses of the blue and yellow stadium that they played in, towering over the rest of the neighborhood. I knew that 
                        Caminito street was nearby. As we got closer, I started seeing more and more colorful buildings, and street art. The area was bustling with people,
                        and there were many street vendors selling souvenirs, art, and food. We spent some time walking around, taking pictures, and eating some of the street food and pastries.
                        We stopped at a little street vendor selling food in a parking lot, which was covered with murals and graffiti,
                        and there were a few kids kicking around a soccer ball in the lot as well. At this point, Ryan, Cory, and I all 
                        looked at each other and realized that this scene was exactly what we had pictured when we thought of South America; 
                        kids kicking around a soccer ball in a graffiti-covered parking lot. Even at the end of the trip, we all 
                        agreed that this moment felt like the most 'culture' we had experienced the entire trip.
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-3.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-4.jpeg"/>
                </div>
                 <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-5.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-caminito-6.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-boca-1.jpeg"/>
                </div>
            </div>


            <div className="sa-trip-section">
                <div>
                    <p className="sa-trip-text">
                        After a few hours, we started to walk back toward the city center, by Plaza Mayor and el Obelisco, stopping in 
                        the San Telmo neighborhood along the way. We walked through a large park, and saw many locals out enjoying the sunny day.
                        We finally got to the city center, took a few pictures of the scene, then headed back to our hostel. This part of the city
                        felt analogous to Times Square. When we got back to our hostel, we rested for a bit, then got dinner at a local pizza spot,
                        recommended by one of the guys we met at the hostel. After pizza, we headed over to a Tango show, which 
                        definitely exceeded expectations. After the tango show, we headed back to our hostel to get some rest, after a 
                        long day of traveling and walking around the city. Overall, this was a great day that allowed us to see different parts 
                        of the city that we did not expect to see. We originally had nothing planned for this day,
                        but it ended up being one of the best days of the trip.
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-tango-1.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/buenosaires-plazamayor-1.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/tortoni-breakfast-1.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        The next day, we had a few things planned. We planned on getting breakfast at a cafe, then hitting the Ricoleta Cemetery,
                        then walking around Palermo for the rest of the day until our dinner reservation at Don Julio at 11pm that night. 
                        We got breakfast at a cafe called "Café Tortoni", which we found online that was apparently a famous cafe in Buenos Aires. The cafe 
                        had a long line out front, which is usually a good sign. Once we got in, the food was great, but the way they displayed it on the table I 
                        thought was even better. Lots of pastries, coffee, and bread. Something interesting about Argentina is that they serve 
                        orange juice complementary with coffee. All of the orange juice seemed to be freshly squeezed too which was very tasty. 
                        After Tortoni, we headed over to the Ricoleta Cemetery, which featured a small market out front with some clothing and art shops.
                        After browsing, we headed into the cemetery. The cemetery was very large, and featured many elaborate tombs and mausoleums. We walked through
                        the cemetery for a while. The tombs were all so large they towered over us, and it was somewhat similar to walking through a small city.
                    </p>
                </div>
                
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/ricoleta-cemetery-1.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/ricoleta-cemetery-3.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/trade-skybar-1.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/don-julio-1.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/don-julio-2.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        After the cemetery, we walked through Palermo, and headed back to the hostel. We were exhausted,
                        mostly from the day before, but also because we had walked a lot that day up to that point. We rested
                        for about 3 hours and then headed to a rooftop bar for drinks and sushi before our late Don Julio 
                        reservation. The rooftop bar was called Trade Sky Bar. It had great sushi, indoor and outdoor sections, 
                        and a great view of the city. After a few drinks and some sushi inside, we headed outside to take more pics,
                        then ubered over to Don Julio. Our reservation wasn't quite ready, so we waited there and were served complimetary
                        empanadas and glasses of champagne. They also offered us a tour of their wine cellar. When we were finally 
                        seated, we took a brief look at the menu, and ordered a few different cuts, as recommended by our waiter. Much
                        to our surprise, we thought the food was mid. The wine was great, however. We had a bottle of red wine. 
                        The food was a bit overhyped perhaps. It was good, but not as amazing as we expected. After Don Julio, we 
                        walked around Palermo. It was a Saturday night, so we walked by some of the bars, and even stopped at one 
                        for a beer. It was kind of interesting seeing the nightlife in Buenos Aires, and how it really wasn't that much
                        different from what I'd be doing in Chicago on a Saturday night. After a beer and a cig, we went home from the bar. 
                    </p>
                </div>
            </div>

            <div className="sa-section-header">Iguazu Falls</div>

            <div className="sa-trip-section">
                <div>
                    <p className="sa-trip-text">
                        The next day, we had a flight to Iguazu Falls at 1pm. We woke up, got breakfast at a local cafe, then headed to the airport.
                        The airport was very small, and the flight was only about 1.5 hours. When we landed, we took a taxi to our hostel, 
                        which was about a 30 minute drive from the airport. Our driver from the airport offered to drive us the rest of the trip, an offer
                        that we accepted. When we got to our Iguazu Falls airbnb, we left again into town to get some food. Then came back home and went to bed.
                        The next day, we had a full day planned at Iguazu Falls. We woke up early and headed to the falls a bit early for breakfast, and for 
                        our Grand Aventura tour of the falls. The Grand Aventura tour included a boat ride that took us right up to the base of the falls. Due to the 
                        mist from the falls, we didn't get super close to the waterfalls, but the view of the falls from the boat was amazing. After a 45 minute boat ride,
                        we headed back, and went on our journey to the Devil's Throat. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-boat-1.jpeg"/>
                </div>
               
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-devilsthroat-2.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-devilsthroat-3.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-superior-1.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        The Devil's thorat hike required a train ride. Waiting for the train was kind of fun - we saw lots of Coati, and a few monkeys that were
                        hopping around on the roof looking for food. The train ride was about 15 minutes, and took us through the jungle to the start of the hike. The hike
                        was about 30 minutes on a boardwalk toward Devil's throat. The hike was scenic, but nothing compared to the Devil's throat. This is basically the biggest
                        waterfall in the entire Iguazu Falls system. Seeing it for the first time was nothing short of breathtaking. We took lots of photos, stuck around for a bit then
                        walked back to the train. There were 2 other hikes: Inferior and Superior. We did Superior trail first, as that got close to the 2nd largest waterfall in Iguazu,
                        and offered views from above. The Inferior probably had better views, but was a bit further away. Both were amazing and scenic. After that, the park was almost closed, 
                        so we headed back to the airbnb, went out for dinner, then went to bed. 
                    </p>
                </div>
            </div>
            <div className="sa-trip-section"> 
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-brazilianside-3.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        The next day, we had to get up early because we were crossing the border to the Brazilian side of the falls, and then flying to Rio. The border
                        crossing was actually much easier than I had expected, but just took a long time. When we got the park again, we (for some reason) felt comfortable enough to leave our bags
                        with the driver that we just met. This was source of stress for me for pretty much the next few hours. However, the Brazilian side of the falls was somehow even better than the Argentinian side.
                        We couldn't get as close to the falls, but the views were better. We took a bus to the scenic point, walked out on the boardwalk, took so many photos and videos, and
                        then went back to the entrance to find our driver. She drove us to the airport, and we waited for our flight to Rio. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/iguazu-brazilianside-1.jpeg"/>
                </div>
            </div>
            <div className="sa-section-header">Rio De Janeiro</div>
            <div className="sa-trip-section"> 
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-arches-1.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        We landed in Rio in the late afternoon; enough time to get to the airbnb, settle in, and explore the area around our airbnb. We stayed in Copacabana. We 
                        were a bit nervous about pickpocketed when we first got there, because of all the things we have heard about Rio. After dinner near the airbnb, and then 
                        exploring a market, we headed back and went to bed. Luckily for us, the first day was the only day it was cloudy and raining the whole time, so we didn't 
                        spend much time outside. The next day, the plan was to get breakfast, and then head over to Santa Teresa and explore the city center. After breakfast, I ubered
                        us to a random location in Santa Teresa. Since we were obviously new to Rio, we weren't sure what to expect from Santa Teresa, and we didn't know where to get
                        dropped off. We got dropped off in a random location, not too far from what seemed like a bad area of a favela. We were definitely on edge the whole time. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-steps-1.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section">
                <div>
                    <p className="sa-trip-text">
                        When we got out of the sus area, we saw the Lapa Arches and the Selaron Steps. The arches and steps were cool, but the area around still felt a little bit poor and 
                        dirty or rundown. We walked up and then back down the steps, and then toward the city center. We got lunch at Confeitaria Colombo, which was a supposedly famous place
                        that we were recommended to try.  After the city center, we headed toward the Museo De Amanha, which happened
                        to be closed that day. We then walked toward the aquarium, sat for a bit, then headed back to Santa Teresa for dinner and more exploring. We explored more of the area, 
                        which ended up being my favorite area of the city after the 2nd visit. After dinner, we had bought tickets for a Botafogo soccer game, so it was time to head to the stadium. 
                        We ubered there, watched most of the game, then left a bit early to beat the traffic. The stadium wasn't super packed, but was still a fun experience to see how intense the fans
                        were about their team. Then we went home and got ready for the next day. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-cafe-1.jpeg"/>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-mural-1.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section"> 
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-christ-1.jpeg"/>
                </div>
                <div>
                    <p className="sa-trip-text">
                        The next day was the big day; Christ the Redeemer and Sugarloaf Mountain. We woke up early, got breakfast, then got in a van to the base of Christ the Redeemer. Once at the top, 
                        there were tourists everywhere, and the status was amazing. I was a little bit overwhelmed by the size of the statue and the amount of people that were there trying to take 
                        pictures. I got tons of pictures from all different angles, had a coffee and a cig, then headed back down. We chilled at the airbnb for a bit after that, then headed over to 
                        Sugarloaf Mountain. We chose to hike up the mountain to the top, and then take the gandola to the mountain. The hike was kind of fun; we also saw these cool tiny monkeys on the way up. 
                        Once at the top, the view was pretty cool, and there was a DJ and restaurants and tons of people. We waited in line for the gandola to go to sugarloaf mountain, which had even
                        better views. We stayed for the sunset, then took the gandola back, and hiked down the mountain. We went back to the airbnb, got ready, and walked to this authentic Brazilian
                        steakhouse called Churrascaria. The food was surprisingly amazing. It was kind of like Fogo de Chao. We walked back home after that. 
                    </p>
                </div>
               
            </div>
            <div className="sa-trip-section"> 
                
                
                <div>
                    <p className="sa-trip-text">
                        The last full day we had, we planned on going to Ipanema beach. We weren't sure if it was going to be a beach day or an exploring day initially. I think I was the one
                        pushing for an exploring day. That is what it ended up being. We walked along the beach, got breakfast, drank water out of a coconut, and made it all the way to the end of Ipanema beach. 
                        At the end was a lookout, where I took some pictures. Then we walked back through the Ipanema neighborhood, got lunch in Leblon at Boa Praca. After lunch, we walked 
                        to the Lagoon, then made our way over to the start of Ipanema beach, where there were rocks and a solid viewpoint of the whole beach. We hung out here for a bit, took some 
                        pictures, then walked back to our airbnb. For the night plans, we had dinner, then the Roxy Dinner Show. The show was a bit underwhelming for me; kind of felt like a tourist trap. 
                        But it was interesting to see, and afterward we were close to the airbnb, so we called it a night. The next day, the last area we really hadn't explored much was the 
                        Copacabana area. So we got up, got breakfast on the beach, then walked around Copacabana a bit until our checkout at 4pm, and our uber to the airport. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-sugarloaf-1.jpeg"/>
                </div>
            </div>
            <div className="sa-trip-section"> 
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-sugarloaf-2.jpeg"/>
                </div>
                
                <div>
                    <p className="sa-trip-text">
                        Overall, the trip was very eye opening for me. It was really cool to see a new continent, new cultures, some awesome nature, and some different cities. In my mind, a lot of the 
                        cities I've been to kind of blend in together because they are all European coded. Japan was super different from the European cities. I'd say this also was very different from 
                        most of the European cities I've seen. Buenos Aires was similar, but Rio was very different. It didn't end up being as dangerous as we had expected. Pretty much after the first night
                        and the next morning after that, we didn't even discuss or think about safety or being in dangerous areas. Iguazu Falls was truly amazing to see in person. Being back in 
                        Chicago, I'm already thinking about how I can plan my next trip. 
                    </p>
                </div>
                <div>
                    <img className="trip-image" src="http://localhost:3001/uploads/rio-ipanema-1.jpeg"/>
                </div>
                
            </div>
            
        </div>
    )
}