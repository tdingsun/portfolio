import { Project } from './project'

export const PROJECTS: Project[] = [
    {   name: 'Miscellaneous Posters',
        type: 'Poster',
        season: 'Ongoing',
        imgRoot: 'misc-posters',
        imgs: [
            'j.jpg', '1.jpg', '2.png', 'd.jpg', 'g.jpg', 'h.jpg', 'i.jpg', 'f.jpg',
            'a.jpg', 'b.jpg', '4.jpg',
            '3.jpg', 'c.jpg', '5.jpg',
            '6.jpg', '7.jpg', '8.jpg', '9.jpg',
            '10.jpg', '11.jpg', '12.jpg', '13.jpg',
            '14.jpg', '15.jpg', '16.jpg', '17.jpg',
            '18.jpg', '19.jpg', '20.jpg', '21.jpg',
            '22.jpg', '23.jpg', '24.jpg', '25.jpg',
            '26.jpg', '27.jpg', '28.jpg', '29.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: null,
        smallerImgs: true
    },

    {   name: 'I Never Want to See the Same Image Twice',
        type: 'Websites',
        season: 'Spring 2019',
        imgRoot: 'dp',
        imgs: [
            '1.jpg',
        ],
        hasVideo: true,
        videoLinks: ['https://tdingsun.github.io/dp/'],
        description: [
            "<a href='http://tdingsun.github.io/dp/'>A series of 18 websites</a> that explore different ways of presenting text, narrative, and poetry in digital space. Can text be ambient? Non-linear? Performed by a website? Performed by user interaction?",

            "<a href='../../assets/dp/dpbook_final.pdf' target='_blank'>PDF of print documentation</a>"
        ],
        smallerImgs: true
    },

    {   name: 'Save Point',
        type: 'Branding',
        season: 'Fall 2019',
        imgRoot: 'save-point',
        imgs: [
            '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "Branding proposal for Save Point: Foundation for the Preservation of Video Games"
        ],
        smallerImgs: false
    },

    {   name: 'UFO Museum Branding',
        type: 'Branding',
        season: 'Fall 2019',
        imgRoot: 'ufo-museum',
        imgs: [
            '1.png', '2.gif', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "Branding proposal for the Roswell UFO Museum"
        ],
        smallerImgs: false
    },

    // {
    //     name: 'BASC',
    //     type: 'Branding',
    //     season: 'Summer 2019',
    //     imgRoot: 'basc',
    //     imgs: [
    //         '1.jpg', '2.png', '3.jpg', '4.jpg', '5.jpg'
    //     ],
    //     hasVideo: false,
    //     videoLinks: [],
    //     description: [
    //         "Branding for the Brown Arts Student Council"
    //     ],
    //     smallerImgs: false

    // },

    {
        name: 'Critical Resistance Re-branding',
        type: 'Branding',
        season: 'Fall 2018',
        imgRoot: 'critical-resistance',
        imgs: [
            '1.png', 'h.jpg', '2.png', '3.png', '4.png', '5.jpg',
            'a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "A speculative re-branding for the national, grassroots prison abolition organization Critial Resistance, founded by Angela Davis, Ruth Wilson Gilmore, and Rose Braz. The impetus for this re-branding was to generate fresher looking merchandise that would appeal to a Millennial / Gen-Z creative class, in order to reach out and engage with this new demographic, while also generating a profit that could go into prison abolition organizing.",

            "I created a limited run of these T-shirts and tote bags, and donated all of the profits to Critical Resistance.",

            "I also re-designed an existing infographic that Critical Resistance created, focusing on organizing dense information about police reform vs. police abolition in an easy to refer to manner.",

            "More information about CR can be found at  <a href='http://criticalresistance.org' target='_blank'>criticalresistance.org</a>",

            "Special Thanks to <a href='https://rainawellman.com' target='_blank'>Raina Wellman</a> and <a href='https://jayoonlee.com' target='_blank'>Ja Yoon Lee</a> for modeling."
        ],
        smallerImgs: false

    },

    {   name: 'Album Posters',
        type: 'Poster',
        season: 'Summer 2018',
        imgRoot: 'album-posters',
        imgs: [
            '1.jpg', '2.jpg', '3.jpg', '4.jpg',
            '5.jpg', '6.jpg', '7.jpg', '8.jpg',
            '9.jpg', '10.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            'Poster Series inspired by my top 10 favorite albums of 2018 (in no particular order).'
        ],
        smallerImgs: true
    },

    {   name: 'A Degree of Rage, History, Her',
        type: 'Book',
        season: 'Spring 2017',
        imgRoot: 'rage',
        imgs: [
            '1.jpg', 'a.gif', '2.jpg', '3.jpg', '4.jpg', 
            '5.jpg', '6.jpg', '7.jpg', '8.jpg',
            '9.jpg', '10.jpg', '11.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "<a href='../../assets/rage/a-degree-of-rage.pdf' target='_blank'>Full PDF</a>",
            "From the preface:",

            "This project was originally going to be about margins.",
            
            "But if the margin is there to be at the service of the center, perhaps it is necessary to reformulate the margin—to recast both its geographical and psychological implications. Or perhaps, the goal is to reiterate the margin as ultimately unknowable, its territory ambiguous, the boundaries between its paratext and the central text unresolvably blurry. Margins, after all, only become possible objects when a political distinction is made between the margin and the center.",
            
            "But even this goal of ambiguity may be an act of totalization, an act of cementing the margin’s inherenty quality as something that is unknowable. We learn from Said (and, perhaps, the way that imperialism has infiltrated the most minute details of our day-to-day interactions) that the western imperialist perceives the subaltern as “knowable and unknowing”. This is the idea that through colonialism, one can conceivably understand all aspects of a culture; a culture that is perhaps too underdeveloped, immature, or ignorant to understand themselves. On the other hand, it is often the case that the well-meaning post-colonial theorist becomes complicit in an epistemological othering, and posits the subaltern as unknowable and disenfranchised from knowing. Both ultimately leave no space for the “third world woman” to speak for herself.",
            
            "I began this project with a desire to reposition these texts from margin to center. But I soon became paralyzed with insecurity and uneasiness that I myself, while reading and compiling all of this postcolonial feminist theory, was buying into the voyeuristic impulse of aestheticizing and fetishizing marginality and the “third world woman.” I felt uneasy even with the act of anthologizing, of bringing texts together. I felt uneasy with the possibility that I was essentializing all discourse about the “third world women” as a monolithic text block — a literal volume, with distinct boundaries.",
            
            "Ostensibly, the texts in this book center around the figure of the “third world woman,” but it is worth taking the time now to point out that this analytic category of “third world woman” is colonialist for two reasons: one, it is a homogenizing categorization, and ignores the huge amount of heterogeny between actual “third world women”; two, the composite “othering” of third world women helps western feminism centralize and define itself against the backdrop of a margin.",
             
            "While I was working on this project, someone suggested to me that this anthology is also a project about pushing back against the splintering of knowledge — through compiling these texts, I am also breaking through pay-walls, dead links, and unsearchable PDFS, to make them more accessible. And while that provided some reassurance that what I was doing wasn't totally useless, the question still remained. This act of anthologizing, of consolidation: is it perhaps more harmful than it is productive?",
        ],
        smallerImgs: true
    },

    {   name: 'I Guess I Hate Banter',
        type: 'Video',
        season: 'Fall 2017',
        imgRoot: 'banter',
        imgs: [],
        hasVideo: true,
        videoLinks: ['https://player.vimeo.com/video/262442718'],
        description: [
            'A tale of racial frustration.'
        ],
        smallerImgs: false
    },

    {   name: 'Sound and Vision',
        type: 'Video, Sound',
        season: 'Winter 2019',
        imgRoot: 'sound-vision',
        imgs: [
        ],
        hasVideo: true,
        videoLinks: [
            'https://player.vimeo.com/video/315146234',
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/560492247&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            'https://player.vimeo.com/video/315496159',
            'https://player.vimeo.com/video/315139758'
        ],
        description: [
            "Work created with Max/MSP during Winter 2019",

            "<i>1. Unincorporated Territory</i>",
            
            "Based on the movie Brokeback Mountain, two separate texts of different lengths cycle through on the top and bottom of the videos, constantly creating new meanings. The subjectivity of the cowboy is interesting to me because it seems to be the locus of both colonial fantasy and homoeroticism.",

            "<i>2. Ancient Forgotten Animal Vines</i>",

            "Music created with a custom arpeggiator made in Max/MSP. Meant to be paired with an endless stream of vine compilations on youtube.",
            
            "<i>3. A Day at the Beach</i>",
            
            "An instrument for reading and writing semi-improvisationally. The three windows are dragged and resized to reveal more of the text that exists on an underlying hidden matrix. The performer is meant to constantly reposition the windows to create new tones and new meanings, while also writing in a loose way that responds to the text that is already on the screen.",
            
            "<i>4. One Common Red Flat Sharp</i>",
            
            "Lists of sensorial words come together. Words that look good, that sound good, that smell good. In pairs, they flash on screen to create a rapid fire sequence of short 'reading events' — moments of minor synesthesia. Typeset in Corpus Regular, designed by me"
        ],
        smallerImgs: false
    },

    {   name: 'Corpus',
        type: 'Typeface',
        season: 'Fall 2018',
        imgRoot: 'corpus',
        imgs: [
            '1.jpg', '2.jpg', '3.jpg', '4.jpg',
            '5.jpg', '6.jpg', '7.jpg', '8.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "Corpus is a text weight typeface based on 'Beijing Comrades,' an erotic gay novel published anonymously in China on the Internet in 1998. Its steep serifs and supple curves evoke the the danger and allure of homo-romanticism in the midst of China's rapid economic development.",
            "Email me at tiger.dingsun@gmail.com if you are interested in using this typeface!"
        ],
        smallerImgs: true
    },

    {   name: 'Documenta 2022',
        type: 'Branding, Web',
        season: 'Fall 2017',
        imgRoot: 'documenta',
        imgs: [
            '1.jpg', '2.jpg', '3.jpg', '4.jpg',
            '1.gif',
            // '5.jpg',
            // '6.jpg',
            '7.jpg', '8.jpg', '9.jpg', '10.jpg',
            '11.jpg', '12.jpg', '13.jpg', '14.jpg',
            '15.jpg', '16.jpg', '17.jpg', '18.jpg'
        ],
        hasVideo: true,
        videoLinks: ['https://tdingsun.github.io/documenta/'],
        description: [
            "A multi-media speculative branding system for the art festival documenta, for the year 2022. documenta is known for being a reflection of the politics of the contemporary art world.",

            "However, documenta 14, which happened in 2017 and took place in both Kassel, Germany and Athens, Greece, was critiqued for it's neocolonial undertones and condescending attitude towards Athens (the Athens portion of the exhibit was called Learning from Athens). Its theory was pristine -- documenta 14 featured many works addressing issues ranging from the refugee crisis to transgender rights. But what does it mean for a Western European institution to depict (and generate revenue from) the suffering of marginalized bodies?",
            "Although I am not so naive to think that a branding system can do much to answer this question, I chose to use the branding as a platform to engage in self-reflective institutional critique. I used a stock image of the ocean and a bright red, constantly shifting '15' as my central visual identity. The ocean both ties into issues of climate change and human displacement, as well as the relationship that these two things have. The '15' points to the instability and constant shifting of geographical, political, and social borders, and the risks people take to cross them.",
            
            "The <a href='https://tdingsun.github.io/documenta/'>website</a> situates the user in the middle of an expansive canvas. The user can then scroll in all directions to find the relevant information about documenta. The large red '15' in the middle is an Easter egg -- the user can click and hold on it to distort its edges."
        ],
        smallerImgs: false
    },

    {   name: 'Your Body is your Greatest Treasure',
        type: 'Book',
        season: 'Spring 2018',
        imgRoot: 'fka-twigs',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
            '9.jpg',
            '10.jpg',
            '11.jpg',
            '12.jpg',
            '13.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "A poetic interpretation of FKA Twigs' 2015 EP titled 'M3LL155X'. Through writing, I work through themes of power, body, creativity, intimacy, and feminine energy. Each copy is hand-bound with braided embroidery thread. The thread wraps around your finger and you forge an intimate connection with the book itself. The pages are bound in a way that reveals the inner pages. RISO Printed. "
        ],
        smallerImgs: false
    },

    {   name: 'In The Mood for Love',
        type: 'Branding',
        season: 'Fall 2018',
        imgRoot: 'in-the-mood-for-love',
        imgs: [
            '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "Branding for an exhibition called In the Mood for Love, featuring artists from the Asian Diaspora. Curated by Tinan Nguyen, Emi Chun, and Christine Cho. Photographs by Aayushi Khowala"
        ],
        smallerImgs: false
    },

    {   name: 'A Lexicon of Hesitation',
        type: 'Poster',
        season: 'Summer 2018',
        imgRoot: 'lexicon-of-hesitation',
        imgs: [
            '1.jpg',
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "A poster created for a performance created with <a href='http://www.federicoperezvilloro.com'>Federico Perez Villoro</a>. Illustrations by <a href='https://cargocollective.com/anarivera'>Ana Rivera</a>, Typography by me.",
            "Performed/Displayed at Paul Kasmin Gallery (NYC) in the summer of 2018, as part of the exhibition 'Almost Solid Light: New Work From Mexico.'"
        ],
        smallerImgs: false
    },

    {   name: 'Notes on Western Queerness',
        type: 'Installation',
        season: 'Fall 2018',
        imgRoot: 'note-on-western-queerness',
        imgs: [
            '1.jpg',
            '2.png',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "To my parents, the construction of “queerness” is completely foreign, an entirely Western corruption. I too, don’t always identify fully with this idea of what it means to be queer in the West that has emerged within the last 20 years or so. I long to be able to reconcile the category of ‘queer’ with Eastern notions of filial piety. Both seem important to me. I seem to exist between the space that the social construction of ‘fag’ occupies and the space that the ‘fob’ (fresh off the boat) occupies. FAG + FOB = FOG. And ‘fog’ seems like the right word to describe this non-space.",

            "But at the same time, this makes me feel uneasy. When I make work about my queerness or my asian-ness, it feels like I am exploiting both for the sake of a specific (white? Liberal?) audience. There’s an epistemic market for these metaphors for overlapping axes of power (intersection, dichotomy, constellation, fog, etc.) and here I am, serving them up, reiterating yet again the incomprehensibility of my otherness.",

            "Installation 1 was done in collaboration with Jason Yuan",

            "Installation 2 was done for a group show called In the Mood for Love",

            "Adapted poster related for the project done for the 2019 Dual Degree Exhibition"
        ],
        smallerImgs: true
    },

    {   name: 'It Slowly Renders a Fire',
        type: 'Posters',
        season: 'Fall 2018',
        imgRoot: 'slowly-renders-a-fire',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "see: <a href='http://www.typomag.com/issue18/james.html'>My Entire Oeuvre is Against the Police, by Miguel James</a>",

            "<blockquote><i>My entire Oeuvre is against the police</i></blockquote>",
            "<blockquote><i>If I write a Love poem it’s against the police</i></blockquote>",
            "<blockquote><i>And if I sing the nakedness of bodies I sing against the police</i></blockquote>",
            "<blockquote><i>And if I make this Earth a metaphor I make a metaphor against the police</i></blockquote>",
            "<blockquote><i>If I speak wildly in my poems I speak against the police</i></blockquote>",
            "<blockquote><i>And if I manage to create a poem it’s against the police</i></blockquote>",
            "<blockquote><i>I haven’t written a single word, a verse, a stanza that isn’t against the police</i></blockquote>",
            "<blockquote><i>All my prose is against the police</i></blockquote>",
            "<blockquote><i>My entire Oeuvre</i></blockquote>",
            "<blockquote><i>Including this poem</i></blockquote>",
            "<blockquote><i>My whole Oeuvre</i></blockquote>",
            "<blockquote><i>Is against the police.</i></blockquote>"
        ],
        smallerImgs: true
    },

    {   name: 'True North',
        type: 'Video',
        season: 'Summer 2018',
        imgRoot: 'true-north',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg'
        ],
        hasVideo: true,
        videoLinks: ['https://www.youtube.com/embed/aa_r5OGIRys'],
        description: [
            "In collaboration with <a href='http://www.federicoperezvilloro.com'>Federico Perez Villoro</a> and <a href='http://chrishamamoto.com'>Chris Hamamoto</a>.",

            "I was asked to create a video as part of a project they were doing to explore the differences between 'true north', 'magnetic north', and 'grid north,' and describe the technical histories of the compass, the map, and the GPS. The video accompanied a working digital compass that would speculate on the moving position of the magnetic north in years to come. The project aims to point to the fragility of cartesian logics and conceive a more fluid organization of geography and territories.",

            "This project was on display in an exhibition called <i>Seoul – SeeYouTomorrow – Pyongyang</i> at Dongdaemun Design Plaza, Seoul, Korea in Seoul, September 2018."
        ],
        smallerImgs: true
    },

    {   name: 'Uncommon Sense',
        type: 'Book',
        season: 'Spring 2018',
        imgRoot: 'uncommon-sense',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg'
        ],
        hasVideo: false,
        videoLinks: [],
        description: [
            "<a href='http://files.cargocollective.com/738361/UC1_PDF.pdf'>Full PDF</a>",

            "<a href='https://www.blurb.com/b/8513132-uncommon-sense'>Buy a physical copy here</a>",
            
            "Uncommon Sense is a publication featuring work that applies a decolonial thinking towards the institutions we exist within. It is co-edited by Nadia Wolff (<a href='https://www.instagram.com/decolonial.daughter/'>@decolonial.daughter</a>) and myself, and designed also by me.",
            
            "I founded Uncommon Sense because I felt that there was a lack in recognition for work that deals with decoloniality. My goal is to uplift voices that actively challenge global hegemonic power, and is sensitive to the historical and contemporary conditions of colonialism and imperialism.",
            
           "Thanks to all who submitted work!",

           "In this issue, you will find:",

           "◊	Work that, instead of merely pointing out the complexities of current systems of power, exploitation, and inequity, reaches towards some way of meaningfully engages with those complexities.",
           
           "◊	Work that defamiliarizes the familiar, the banal, the everyday.",
           
           "◊	Work that confronts epistemic violence, that decenters the West as the primary producer of knowledge.",
           
           "◊	Work that engages with histories, especially marginalized or suppressed histories.",
           
           "◊	Work that defies categorical logic.",
           
           "◊	Work that engages with the continuing legacy of colonialism, and the lasting effects Western hegemony has on society, politics, culture, economies.",
           
           "◊	Work that privileges indigenous knowledge and modes of production.",
           
           "◊	Work that isn't afraid of calling it like it is.",
           
           "◊	Work that challenges current formations of global power.",
           
           "◊	Work that proposes alternate modes of thinking about the world."


        ],
        smallerImgs: true
    },

    {   name: 'Milk and Fresh Snow',
        type: 'Multimedia, Web',
        season: 'Spring 2018',
        imgRoot: 'whiteness-hyperobject',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            'booklet-1/1.jpg',
            'booklet-1/2.jpg',
            'booklet-1/3.jpg',
            'booklet-1/4.jpg',
            'booklet-1/5.jpg',
            'booklet-1/6.jpg',
            'booklet-1/7.jpg',
            'booklet-1/8.jpg',
            'booklet-1/9.jpg',
            'booklet-1/10.jpg',
            'booklet-1/11.jpg',
            'booklet-1/12.jpg',
            'booklet-2/1.jpg',
            'booklet-2/2.jpg',
            'booklet-2/3.jpg',
            'booklet-2/4.jpg',
            'booklet-2/5.jpg',
            'booklet-2/6.jpg',
            'booklet-2/7.jpg',
            'booklet-2/8.jpg',
            'booklet-2/9.jpg',
            'booklet-2/10.jpg',
            'booklet-2/11.jpg',
            'booklet-2/12.jpg',
            'booklet-2/13.jpg',
            'booklet-3/1.jpg',
            'booklet-3/2.jpg',
            'booklet-3/3.jpg',
            'booklet-3/4.jpg',
            'booklet-3/5.jpg',
            'booklet-3/6.jpg',
            'booklet-4/1.jpg',
            'booklet-4/2.jpg',
            'booklet-4/3.jpg',
            'booklet-4/4.jpg',
            'booklet-4/5.jpg',
            'booklet-4/6.jpg',
            'booklet-4/7.jpg',
            'booklet-4/8.jpg',
            'booklet-5/1.jpg',
            'booklet-5/2.jpg',
            'booklet-5/3.jpg',
            'booklet-5/4.jpg',
            'booklet-5/5.jpg',
            'booklet-5/6.jpg',
            'booklet-5/7.jpg',
            'booklet-5/8.jpg',
            'booklet-5/9.jpg',
            'booklet-5/10.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
            '9.jpg',
            '10.jpg',
            '11.jpg',
            '12.jpg',
            '13.jpg',
            '14.jpg',
            '15.jpg',
            '16.jpg',
            '17.jpg',
            '18.jpg',
            '19.jpg',
            '20.jpg',
            '21.jpg',
            '22.jpg',
            '23.jpg',
            '24.jpg',
            '25.jpg',
            '26.jpg',
            '27.jpg',
            '28.jpg',
            '29.jpg'
        ],
        hasVideo: true,
        videoLinks: ['https://tdingsun.github.io/ds2_final/'],
        description: [
            "This is a collection of text and image fragments that all center around whiteness and race. The writing is original, and the images are taken from the internet. The project takes on two forms:",
            "a <a href='http://tdingsun.github.io/ds2_final/'>digital archive</a> through which viewers can drag around and flip virtual cards, and a physical archive consisting of various print media.",
            "Racial discourse often focuses on the non-white other. By turning attention on whiteness itself, I hope to make whiteness no longer invisible, and to encourage white people to talk about race amongst themselves, without necessarily needing the emotional labor of people of color to explain things to them."
        ],
        smallerImgs: true
    },

    {   name: 'On the Media',
        type: 'Branding, Web',
        season: 'Fall 2017',
        imgRoot: 'on-the-media',
        imgs: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
            '9.jpg',
            '10.jpg'
        ],
        hasVideo: true,
        videoLinks: ["https://tdingsun.github.io/otm/index.html"],
        description: [
            "A multi-medium rebranding project.",

            "I reinterpreting the WNYC podcast On the Media into a series of publications as well as a <a href='http://tdingsun.github.io/otm/index.html'>responsive website.</a>",

            "The idea is that a listener to the podcast can follow along to the transcript of the podcast, and easily switch from a print version to a mobile site, to a desktop site. The booklets are 4.5in by 7.5in, designed to feel portable and accessible.",

            "The website is responsive and works in both mobile and desktop sizes."

        ],
        smallerImgs: false
    },

]