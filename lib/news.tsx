// Sourced from public web search — outlet, headline, URL, and image (each
// article's own og:image) are verified. Entries without a confirmed publish
// date show no date rather than a guess. One originally-found article
// (arabiantimesonline.com/.../blockchain-innovation-in-finance) now 404s and
// was dropped rather than linked as dead.
export const NEWS = [
  {
    outlet: "Gulf Times",
    date: "2026",
    title: "Muhammad Umair Saeed unveils Yoojel, IoBM's Next-Generation AI Ecosystem",
    blurb: "Coverage of the Yoojel launch — five platforms (Student, Professional, Business, Enterprise, MovieMaker) unifying education, enterprise, and creative production under one AI ecosystem.",
    url: "https://www.gulf-times.com/article/730493/business/muhammad-umair-saeed-unveils-yoojel-iobms-next-generation-ai-ecosystem",
    image: "https://www.gulf-times.com/gulftimes/uploads/images/2026/08/04/475544.jpeg",
  },
  {
    outlet: "Arab Times Kuwait",
    date: "Jul 30, 2026",
    title: "Billionaire Tech Leader H.E. Muhammad Umair Saeed Launches Yoojel AI Ecosystem",
    blurb: "Kuwait-based coverage of the same Yoojel platform launch, framing Saeed as Chairman of IoBM.",
    url: "https://www.arabtimesonline.com/news/billionaire-tech-leader-h-e-muhammad-umair-saeed",
    image: "https://www.arabtimesonline.com/theme_arabtimes/images/fb_image.jpg",
  },
  {
    outlet: "Gulf News",
    date: "2026",
    title: "IoBM founder Muhammad Umair Saeed launches Yoojel, DigiEx, and Cellisys",
    blurb: "GN Focus feature covering the launch of IoBM's three flagship platforms in AI, post-quantum finance, and synthetic biology.",
    url: "https://gulfnews.com/gn-focus/iobm-launches-yoojel-digiex-and-cellisys-1.500248734",
    image:
      "https://media.assettype.com/gulfnews/2025-08-28/xmc5noba/SU250828UAEBusinessHeadsIoBM-Muhammad-Umair.jpg?rect=0,240,3996,2098&w=1200&ar=40:21&auto=format,compress&mode=crop&enlarge=true",
  },
  {
    outlet: "Gulf Today",
    date: "Apr 23, 2025",
    title: "Securing Tomorrow: Billionaire innovator Muhammad Umair Saeed leads Middle East into the post-quantum era",
    blurb: "On IoBM's \"Digital Tri-Shield\" security framework — post-quantum cryptography, real-time AI threat modeling, and quantum-safe blockchain — deployed across government, DeFi, and critical infrastructure.",
    url: "https://www.gulftoday.ae/business/2025/04/23/securing-tomorrow-billionaire-innovator-muhammad-umair-saeed-leads-middle-east-into-the-post-quantum-era",
    image: "https://www.gulftoday.ae/gulftoday/uploads/images/2025/04/23/954783.jpg",
  },
  {
    outlet: "Outlook India",
    date: null,
    title: "How Muhammad Umair Saeed Built IoBM Into A Billion-Dollar Tech Powerhouse",
    blurb: "A profile on Saeed's early challenges, leadership philosophy, and focus areas — cybersecurity, sustainable innovation, and automation.",
    url: "https://www.outlookindia.com/hub4business/navigating-challenges-cybersecurity-and-sustainable-innovation-how-muhammad-umair-saeed-built-iobm-into-a-billion-dollar-tech-powerhouse",
    image:
      "https://cf-images.assettype.com/outlookindia/2024-10-09/89v1jl5d/9.jpg?w=1200&ar=40:21&auto=format,compress&mode=crop&enlarge=true",
  },
  {
    outlet: "UAE Stories",
    date: null,
    title: "Muhammad Umair Saeed: The Billionaire Tech Architect Powering AI, Drones, Blockchain & Cybersecurity from Dubai to the World",
    blurb: "Profile piece on Saeed's reach across AI, robotics, blockchain, and cybersecurity from Dubai.",
    url: "https://uaestories.com/muhammad-umair-saeed-the-billionaire-tech/",
    image: "https://uaestories.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-11.11.59_920f92f1-e1746426295117.jpg",
  },
  {
    outlet: "Arabian Times",
    date: null,
    title: "Muhammad Umair Saeed: Building the future through vision, innovation & purpose",
    blurb: "Feature on Saeed's approach to purpose-driven innovation.",
    url: "https://arabiantimesonline.com/muhammad-umair-saeed-building-the-future-through-vision-innovation-purpose/",
    image: "https://arabiantimesonline.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-08-07-at-3.11.09-PM-1.webp",
  },
];

export function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-accent/30 to-accent2/30 sm:h-auto sm:w-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
