import { useState, useCallback, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
// Mock team member data with placeholder images
const teamMembers = [
  {
    id: 1,
    name: "Sanket Bolinjkar",
    position: "Founder & CEO",
    image: "/videos/sanket.png",
    linkedin: "https://www.linkedin.com/in/sanket-bolinjkar-743ba224",
    bio: " He laughs at limits & builds things to blow your mind. Strategist, risk-taker, and calm in every storm, he's always five moves ahead, with the plan, and a backup backup plan.",
    funFact: {
      label: "Superpower",
      value: "Turning caffeine into growth strategies",
    },
  },
  {
    id: 2,
    name: "Jason Dias",
    position: "Director of Growth & Strategy",
    image: "/videos/jason.png",
    linkedin: "https://www.linkedin.com/in/jasondias01/",
    bio: "Sharp with numbers, sharper with narratives. If there's a business problem, Jason's already building the solution with logic, research, and a side of dry humour.",
    funFact: {
      label: "Coffee Order",
      value: "Double espresso with a dash of oat milk",
    },
  },
  {
    id: 3,
    name: "Ekaterina Bolinjkar",
    position: "Head of HR & Finance",
    image: "/videos/ekaterina.png",
    linkedin: "https://www.linkedin.com/in/ekaterina-bolinjkar-8bb33720/",
    bio: " Keeps the data clean and the energy cleaner. She reads numbers like novels and people like pros,with a soft spot for her growing jungle of plants",
    funFact: {
      label: "Most Used Emoji",
      value: "📊",
    },
  },
  /*  {
    id: 5,
    name: "Asmita Chugh",
    position: " Senior Brand Strategist",
    image: "/videos/ashmita.png",
    linkedin: "https://www.linkedin.com/in/asmita-chugh/",
    bio: "She sees brands like puzzles and solves them like Sherlock. If ever something is stuck, or scattered, she's the fix that makes it click.",
    funFact: {
      label: "Coffee Order",
      value: "Cappuccino with a sprinkle of cinnamon"
    }
  }, */
  {
    id: 6,
    name: "Rakesh Mittapelly",
    position: "Performance Marketing Strategist",
    image: "/videos/rakesh.png",
    linkedin: "https://www.linkedin.com/in/rakesh-mittapelly-37423430/",
    bio: "Less buzzwords, more results. Rakesh blends logic, instinct, & platform expertise to make every rupee work harder and achieve the ROAS of your dreams.",
    funFact: {
      label: "Most Used Emoji",
      value: "🚀",
    },
  },
  /*   {
    id: 7,
    name: "Shreyash Patil",
    position: "Social Media & Influencer Manager",
    image: "/videos/shreyash.png",
    linkedin: "https://www.linkedin.com/in/shreyash-patil-0174b21a6",
    bio: "Has reels on repeat and strategy in his sleep. He doesn't just scroll, he sees what'll trend before it does, and turns that into real results.",
    funFact: {
      label: "Hidden Talent",
      value: "Can name every Marvel movie in chronological order"
    }
  }, */
  //   {
  //   id: 8,
  //   name: "Anson Cardoza",
  //   position: "SEO Manager",
  //   image: "/videos/anson.png",
  //   linkedin: "https://in.linkedin.com/in/anson-stanley-cardoza-24ba68103",
  //   bio: "Maps out search strategies like he maps out road trips, precise and the most fun. Anson's all about the journey, whether it's organic traffic growth or the open road with good tunes and better views.",
  //   funFact: {
  //     label: "Hidden Talent",
  //     value: "Can name every Marvel movie in chronological order"
  //   }
  // }, 
  {
    id: 9,
    name: "Sheefa Tonse",
    position: "Copywriter",
    image: "/videos/sheefa.png",
    linkedin: "https://www.linkedin.com/in/sheefa-tonse-246a9a25b",
    bio: "Fueled by coffee, she writes with heart, humour, and a little bit of chaos. She turns briefs into scripts that hit, and phrases that stick.",
    funFact: {
      label: "Hidden Talent",
      value: "Can name every Marvel movie in chronological order",
    },
  },
  // {
  //   id: 11,
  //   name: "Akshata Sahasrabudhe",
  //   position: "HR Manager",
  //   image: "/videos/akshata.png",
  //   linkedin: "https://www.linkedin.com/in/akshata-sahasrabudhe-589390195",
  //   bio: " She hires the right ones, keeps the great ones, and makes sure the whole team stays in sync. Off the clock, she’s either crafting stories on paper or moving to a beat.",
  //   funFact: {
  //     label: "Hidden Talent",
  //     value: "Can name every Marvel movie in chronological order",
  //   },
  // },
  {
    id: 13,
    name: "Siffa Shaikh",
    position: "Account Manager",
    image: "/videos/siffa.png",
    linkedin: "https://www.linkedin.com/in/siffashaik",
    bio: "The bridge between our clients and the agency. She keeps teams aligned, and makes sure the right things get to the right people at the right time.",
    funFact: {
      label: "Hidden Talent",
      value: "Can name every Marvel movie in chronological order",
    },
  },
  
  // {
  //   id: 14,
  //   name: "Saswat Satyadarshi",
  //   position: "Creative Director",
  //   image: "/videos/saswat.png",
  //   linkedin: "https://www.linkedin.com/in/ssatyadarshi",
  //   bio: "He’s the kind who brings depth to every concept and cracks the most scattered brief in the room. Drop a messy idea his way and he’ll shape it into something funnier, impactful and soulful.",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
  // },

  // {
  //   id: 15,
  //   name: "Rosanne Fernandes",
  //   position: "Partnership & Growth Manager",
  //   image: "/videos/rosanne.png",
  //   linkedin: "linkedin.com/in/rosanne-fernandes-859294208?originalSubdomain=in",
  //   bio: "A little nerdy, a little crafty, and the most effortless deal maker in the room. She’ll get the right leads when needed and disappear into a book the moment she’s done.",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
  // },
  {
    id: 16,
    name: "Siddharth Jadhav",
    position: "Head of Client Servicing and Operation",
    image: "/videos/siddharth.png",
    linkedin: "https://www.linkedin.com/in/siddharthsanjayjadhav/",
    bio: "The brain behind smooth operations by day, and the life of every party like there is no Monday",
    funfact: {
      label: "",
      value: "",
    },
  },
  
  // {
  //   id: 17,
  //   name: "Vaibhavi Pednekar",
  //   position: "Accounts Executive",
  //   image: "/videos/vaibhavi.png",
  //   linkedin: "https://www.linkedin.com/in/vaibhavi-pednekar-74605b17a/?originalSubdomain=in",
  //   bio: "Ask her about accounts, she’ll answer in seconds. Ask her where to fly or what you want to eat for dinner, she’ll give you a full thesis. A foodie, a wanderer, and the calmest person in any audit.",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
  // },
  {
    id: 18,
    name: "Mihir Shah",
    position: "Regional Director, UK & EU",
    image: "/videos/mihir.png",
    linkedin: "https://www.linkedin.com/in/mihirshah1987/",
    bio: "Once a tech geek, now the guy steering our UK–EU game. Mihir’s either chasing business goals or mountain trails. If there’s good weather and a long road, he’s already on it.",
    funfact: {
      label: "",
      value: "",
    },
  },
  {
    id: 19,
    name: "Maria Masiri",
    position: "Regional Director, Africa",
    image: "/videos/maria.png",
    linkedin: "https://www.linkedin.com/in/maria-masiri-3b883934/",
    bio: "Maria’s all about connecting dots, growing ideas, and quite literally, growing things from her gardens to communities. She is passionate about Africa, and it shows in everything she builds.",
    funfact: {
      label: "",
      value: "",
    },
  },
  // {
  //   id: 20,
  //   name: "Sakshi Shetty",
  //   position: "Social Media Manager",
  //   image: "/videos/sakshi.png",
  //   linkedin: "https://www.linkedin.com/in/sakshi-shetty-29b045214/",
  //   bio: "Our Bollywood deewani, who’ll call a trend before it’s trending and turn brainstorms into dance numbers. She lives loud, laughs louder, and brings the drama (the fun kind).",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
  // },
  {
    id: 21,
    name: "Julien Cordon",
    position: " Regional Director, GCC",
    image: "/videos/julien.png",
    linkedin: "https://www.linkedin.com/in/julien-r-r-cordon-0a5204ba/",
    bio: "Lives by three rules: build, solve, repeat. Julien’s the calm fixer who keeps things running smoothly. Off the clock, it’s all about family, simple joys, and the rare peace that comes without a to-do list.",
    funfact: {
      label: "",
      value: "",
    },
  },
  // {
  //   id: 22,
  //   name: "Kirk Davids",
  //   position: "Manager Design",
  //   image: "/videos/kirk.png",
  //   linkedin: "https://www.linkedin.com/in/kirk-davids-b9b91a30a/",
  //   bio: "He is the kind who’ll fix your layout and your playlist. His mind’s a mix of grids, gradients, and groovy basslines that makes every brand look as good as it sounds.",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
    
  // },
  // {
  //   id: 23,
  //   name: "Pranav Kamat",
  //   position: "Assistant Manager- Full Stack Development & Automation",
  //   image: "/videos/pranav.png",
  //   linkedin: "https://www.linkedin.com/in/pranav-kamat/",
  //   bio: "He's got PRs in the gym and pulls requests on GitHub. Pranav's the full stack dev who brings athlete energy to every build, whether it's a sprint on the field or a sprint in the dev cycle.",
  //   funfact: {
  //     label: "",
  //     value: "",
  //   },
    
  // },
  {
    id: 24,
    name: "Dylan Fernandes",
    position: "HR & Admin Executive",
    image: "/videos/dylan.png",
    linkedin: "https://www.linkedin.com/in/dylan-fernandes-673a6b218/?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bio: "An HR by profession and an explorer at heart, he balances structure with rhythm from managing operations seamlessly to experimenting in the kitchen. A true foodie, he’s always on the lookout for the next great spot that serves unforgettable flavors.",
    funfact: {
      label: "",
      value: "",
    },
    
  },
  {
    id: 25,
    name: "Souvik Bhattacharjee",
    position: "Senior Manager Content & Copy",
    image: "/videos/souvik.png",
    linkedin: "https://www.linkedin.com/in/souvik-bhattacharjee-770209209/",
    bio: "He brings rhythm to every brand’s voice. Writes like he’s lived a hundred lives, and makes sure every word earned its place.",
    funfact: {
      label: "",
      value: "",
    },
    
  },
  {
    id: 26,
    name: "Kaustubh Shetye",
    position: "Director Creative Strategy & Operations",
    image: "/videos/kaustubh.png",
    linkedin: "https://linkedin.com/in/kaustubhshetye",
    bio: "He crafts winning creative strategies at the intersection of data, culture and content in the office and amigurumi plushies and conspiracy theories when off the clock.",
    funfact: {
      label: "",
      value: "",
    },
    
  },
  {
    id: 27,
    name: "Shaiyam Neupane",
    position: "Tech Executive",
    image: "/videos/shaiyam.png",
    linkedin: "https://www.linkedin.com/in/shaiyam-neupane-750a361b4/",
    bio: "Our web wizard who’ll debug your site faster than you can say “404” and still have time to crush a few levels before lunch.",
    funfact: {
      label: "",
      value: "",
    },
  },
  {
    id: 28,
    name: "Shrutitnya Dhargalkar",
    position: "SEO Executive",
    image: "/videos/shrutitnya.png",
    linkedin: "https://www.linkedin.com/in/shrutitnya-dhargalkar/",
    bio: "She knows how to get businesses noticed and conversations started. Whether she's fine-tuning keyword strategy or discussing the latest series everyone's watching, Shrutinya brings curiosity and energy wherever she goes.",
    funfact: {
      label: "",
      value: "",
    },
  },
  {
    id: 29, 
    name: "Amardeep Singh",
    position: "Associate Director of Client Servicing and Operations",
    image: "/videos/amardeep.png",
    linkedin: "https://www.linkedin.com/in/amardeepsinghgoa/",
    bio: "The guy who knows exactly where projects stand and also where you should be eating next. Amardeep brings calm, structure, and sharp operational thinking to every project, while being everyone's most trusted food guide in his free time.",
    funfact: {
      label: "",
      value: "",
    }
  },
  {
    id: 30,
    name: "Ayusha Bandiwdekar",
    position: "Creative Strategist",
    image: "/videos/ayusha.png",
    linkedin: "https://www.linkedin.com/in/ayushabandiwdekar/",
    bio: "She can switch from an MMA training session to a creative brainstorm without missing a beat. Ayusha turns scattered thoughts into sharp strategies, and somehow still finds time to build worlds out of LEGO.",
    funfact: {
      label: "",
      value: "",
    }
  },
  {
    id: 31,
    name: "Ashna Colaco",
    position: "Design Intern",
    image: "/videos/ashna.png",
    linkedin: "https://www.linkedin.com/in/ashnah-colaco-69a9ba3a3/",
    bio: "A good design is a lot like good music. Ashna brings that balance of creativity and calm into every brief, swapping between canvases, and piano keys without missing a beat.",
    funfact: {
      label: "",
      value: "",
    }
  },
  {
    id: 32,
    name: "Sneha Naik",
    position: "Associate Manager: Social Media",
    image: "/videos/sneha.png", 
    linkedin: "https://www.linkedin.com/in/sneha-naik/",
    bio: "She'll recommend a great book, a hidden travel spot, and your next content idea, all in one conversation. Sneha keeps brands relevant, loves exploring beyond the obvious.",
    funfact: {
      label: "",
      value: "",
    }
  }
  /*  {
    id: 23,
    name: "Maithili Naik",
    position: "AI & Technology Executive",
    image: "/videos/maithili.png",
    linkedin: "https://www.linkedin.com/in/maithili-naik9/",
    bio: "She may not say much, but her systems run smoother than small talk. Off the clock, she adds color to blank canvas and keeps it glitch-free.",
    funfact: {
      label: "",
      value: "",
    },
  }, */
];
// Create columns for carousel effect
const createColumns = (members, columnsCount = 4) => {
  const columns = Array.from({ length: columnsCount }, () => []);
  members.forEach((member, index) => {
    columns[index % columnsCount].push(member);
  });
  return columns;
};
const OurTeam = () => {
  const [membersList, setMembersList] = useState([]);
  const [expandedMember, setExpandedMember] = useState(null);
  const [cardPosition, setCardPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teammembers"));
        if (!querySnapshot.empty) {
          const list = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMembersList(list);
        }
      } catch (err) {
        console.error("Error loading team members:", err);
      }
    };

    fetchTeam();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine number of columns based on screen size
  const getColumnsCount = () => {
    if (windowSize.width < 640) return 2; // sm: 2 columns
    if (windowSize.width < 1024) return 3; // md: 3 columns
    return 4; // lg and above: 4 columns
  };

  const handleCardClick = useCallback((member, event) => {
    const cardElement = event.currentTarget;
    const rect = cardElement.getBoundingClientRect();

    setCardPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });

    setExpandedMember(member);
  }, []);

  const handleCloseModal = useCallback(() => {
    setExpandedMember(null);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && expandedMember) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [expandedMember, handleCloseModal]);

  const columns = createColumns(membersList, getColumnsCount());

  return (
    <section
      className="relative py-8 sm:py-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-80 h-32 sm:h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="relative z-10 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Creative Crew
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            Each of us brings something wild, weird, and wonderful to the table.
            Our team is a mashup of logic and gut, chaos and craft, and a little
            madness in every solution.
          </p>
        </div>
        {/* Carousel Columns */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto justify-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {columns.map((columnMembers, columnIndex) => (
            <CarouselColumn
              key={columnIndex}
              members={columnMembers}
              columnIndex={columnIndex}
              onCardClick={handleCardClick}
              expandedMember={expandedMember}
              windowSize={windowSize}
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      {expandedMember && (
        <InstantModal
          member={expandedMember}
          onClose={handleCloseModal}
          cardPosition={cardPosition}
          windowSize={windowSize}
        />
      )}
      {/* Custom CSS for carousel animations */}
      <style>{`
        @keyframes carousel-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        @keyframes carousel-down {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .carousel-up {
          animation: carousel-up 60s linear infinite;
        }

        .carousel-down {
          animation: carousel-down 60s linear infinite;
        }

        @media (max-width: 1024px) {
          .carousel-up,
          .carousel-down {
            animation-duration: 75s;
          }
        }

        @media (max-width: 640px) {
          .carousel-up,
          .carousel-down {
            animation-duration: 90s;
          }
        }
      `}</style>
    </section>
  );
};
const CarouselColumn = ({
  members,
  columnIndex,
  onCardClick,
  expandedMember,
  windowSize,
}) => {
  // Triple the members for smoother seamless loop
  const triplicatedMembers = [...members, ...members, ...members];
  const isUpDirection = columnIndex % 2 === 0;

  // Determine card height based on screen size
  const getCardHeight = () => {
    if (windowSize.width < 640) return "h-48"; // sm
    if (windowSize.width < 1024) return "h-56"; // md
    return "h-80"; // lg and above
  };

  const cardHeightClass = getCardHeight();

  return (
    <div className="flex-1 max-w-xs overflow-hidden">
      <div
        className={`flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 ${
          isUpDirection ? "carousel-up" : "carousel-down"
        }`}
      >
        {triplicatedMembers.map((member, index) => (
          <TeamCard
            key={`${member.id}-${index}`}
            member={member}
            onClick={(e) => onCardClick(member, e)}
            isExpanded={expandedMember?.id === member.id}
            cardHeightClass={cardHeightClass}
          />
        ))}
      </div>
    </div>
  );
};
const TeamCard = ({ member, onClick, isExpanded, cardHeightClass }) => (
  <div
    className={`group relative ${cardHeightClass} rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
      isExpanded
        ? "opacity-20 scale-95 pointer-events-none"
        : "opacity-100 scale-100"
    }`}
    onClick={onClick}
    style={{
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      willChange: "transform, opacity",
    }}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${member.image})` }}
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Hover Effect */}
    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 text-white">
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">
        {member.name}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-md">
        {member.position}
      </p>
    </div>
  </div>
);
const InstantModal = ({ member, onClose, cardPosition, windowSize }) => {
  const [animationPhase, setAnimationPhase] = useState("initial"); // 'initial', 'enlarged', 'flipped'

  // Determine modal dimensions based on screen size
  const getModalDimensions = () => {
    if (windowSize.width < 640) {
      // sm
      return {
        width: windowSize.width * 0.85,
        height: windowSize.height * 0.65,
      };
    }
    if (windowSize.width < 1024) {
      // md
      return {
        width: windowSize.width * 0.75,
        height: windowSize.height * 0.7,
      };
    }
    return { width: 400, height: 500 }; // lg and above
  };

  const modalDimensions = getModalDimensions();

  useEffect(() => {
    // Phase 1: Enlarge and move to center
    setTimeout(() => setAnimationPhase("enlarged"), 50);

    // Phase 2: Flip after reaching center
    setTimeout(() => setAnimationPhase("flipped"), 600);
  }, []);

  const handleClose = () => {
    setAnimationPhase("initial");
    setTimeout(onClose, 400);
  };

  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 cursor-pointer transition-all duration-600 ${
          animationPhase === "enlarged" || animationPhase === "flipped"
            ? "bg-black/85 backdrop-blur-2xl"
            : "bg-transparent backdrop-blur-none"
        }`}
        onClick={handleClose}
        style={{
          backdropFilter:
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? "blur(25px) saturate(1.8)"
              : "blur(0px)",
        }}
      />

      {/* Modal Card Container with 3D Transform */}
      <div
        className="fixed rounded-2xl overflow-hidden shadow-2xl z-50"
        style={{
          left:
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? centerX - modalDimensions.width / 2
              : cardPosition.x,
          top:
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? centerY - modalDimensions.height / 2
              : cardPosition.y,
          width:
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? modalDimensions.width
              : cardPosition.width,
          height:
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? modalDimensions.height
              : cardPosition.height,
          zIndex: 1000,
          willChange: "transform, left, top, width, height",
          perspective: "1000px",
          transition:
            animationPhase === "enlarged"
              ? "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "all 0.4s ease-out",
        }}
      >
        {/* Glowing Border */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-600 ${
            animationPhase === "enlarged" || animationPhase === "flipped"
              ? "shadow-[0_0_50px_rgba(147,51,234,0.5)] ring-2 ring-purple-400/40"
              : ""
          }`}
        />
        {/* 3D Flip Container */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform:
              animationPhase === "flipped"
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Front Side - Original Card */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow-md">
                {member.position}
              </p>
            </div>
          </div>
          {/* Back Side - Modal Content */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center rounded-2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Content */}
            <div
              className={`text-center text-white transition-all duration-500 ${
                animationPhase === "flipped"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: animationPhase === "flipped" ? "0.3s" : "0s",
              }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                {member.name}
              </h3>
              <p className="text-purple-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 font-medium">
                {member.position}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 md:mb-12 px-2">
                {member.bio}
              </p>
              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-medium transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-xs sm:text-sm md:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
            {/* Close Hint */}
            <p
              className={`text-center text-gray-400 text-xs mt-3 sm:mt-4 md:mt-6 transition-opacity duration-500 ${
                animationPhase === "flipped" ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: animationPhase === "flipped" ? "0.5s" : "0s",
              }}
            >
              Click anywhere to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export const Image = () => {
  return <OurTeam />;
};
export default OurTeam;
