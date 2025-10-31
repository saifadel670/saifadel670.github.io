import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Linkedin, Settings, Clock, Zap, BookOpen,
  Anchor, CheckCircle, Smartphone, Sun, Moon, Feather, Image, Video, AppWindow, Activity, TestTube, Cpu, Layers, HardHat, ChevronsLeft, ChevronsRight, LogIn, LogOut, Menu
} from 'lucide-react';

const ICON_MAP = {
  Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Linkedin, Settings, Clock, Zap, BookOpen,
  Anchor, CheckCircle, Smartphone, Sun, Moon, Feather, Image, Video, AppWindow, Activity, TestTube, Cpu, Layers, HardHat, ChevronsLeft, ChevronsRight, LogIn, LogOut, Menu
};
const SECTION_CONFIG = [
  { id: 'skills', title: 'Technical Skills', iconKey: 'Code', isVisible: true },
  { id: 'experience', title: 'Professional Experience', iconKey: 'Briefcase', isVisible: true },
  { id: 'projects', title: 'Featured Projects', iconKey: 'Smartphone', isVisible: true },
  { id: 'education', title: 'Education & Interests', iconKey: 'GraduationCap', isVisible: true },
];

const SKILL_CATEGORIES = [
  { title: 'Languages & Frameworks', iconKey: 'Code', dataKey: 'languages_frameworks' },
  { title: 'Architecture & Patterns', iconKey: 'Layers', dataKey: 'architecture_patterns' },
  { title: 'Tools & Platforms', iconKey: 'Settings', dataKey: 'tools_platforms' },
  { title: 'Testing', iconKey: 'TestTube', dataKey: 'testing' },
  { title: 'Deployment & CI/CD', iconKey: 'Cpu', dataKey: 'devops' },
  { title: 'Other Expertise', iconKey: 'HardHat', dataKey: 'other_skills' },
];

const PLACEHOLDER_ICONS = {
  image: ICON_MAP.Image,
  video: ICON_MAP.Video,
};

// --- 4. PORTFOLIO DATA (The Content) ---

const PORTFOLIO_DATA = {
  "personal_info": {
    "name": "Saif Adel",
    "image": "/assets/profile_picture.jpeg",
    "title": "Experienced and impact-driven iOS Developer",
    "location": "Dhaka / Bangladesh",
    "location_url": "https://maps.app.goo.gl/1krQDj2sMS3RkN8A9",
    "phone": "+880 1679 112358",
    "email": "saifadel670@gmail.com",
    "linkedin": "https://www.linkedin.com/in/saifadel",
    "summary": "Experienced and impact-driven iOS Developer with over 5 years of hands-on experience building, scaling, and optimizing feature-rich mobile apps for leading tech companies and digital platforms in Bangladesh. Proven success in launching large-scale apps from scratch, accelerating release cycles, and delivering scalable, high-performance solutions. Recognized for leadership and innovation, including Banglalink's \"IMPACT CREATOR\" award for rapid product delivery and app success."
  },
  "technical_skills": {
    "languages_frameworks": ["Swift", "Objective-C", "SwiftUI", "UIKit", "Combine", "RxSwift"],
    "architecture_patterns": ["Clean Architecture", "MVVM", "Coordinator pattern"],
    "tools_platforms": ["Xcode", "Firebase", "Git", "Figma", "REST APIs", "GraphQL"],
    "other_skills": ["Modularization", "Web3 Integration", "Crypto Wallets", "Agile/Scrum", "Jira", "CI/CD", "App Store Deployment", "App Performance Optimization"],
    "testing": ["XCTest", "Quick & Nimble", "Unit & UI Testing"],
    "devops": ["GitHub Actions"]
  },
  "professional_experience": [
    {
      "company": "Brain Station 23 PLC.",
      "role": "Senior Software Engineer II",
      "location": "02, Mohakhali C/A, Dhaka / Bangladesh",
      "dates": "July 2023 - Present",
      "details": "Worked as an augmented resource at Banglalink Digital, playing a pivotal role in launching **RYZE** from concept to reality and helping build the app from scratch. Architected its structure, implemented key features, and ensured seamless backend integration for scalability. Optimized the performance of the **MyBL** app, introducing new features that streamlined user interactions and significantly improved app stability. Accelerated release cycles, leading to increased user engagement, positive app store ratings, and notable revenue growth.",
      "projects": ["ryze", "my_bl"]
    },
    {
      "company": "Anchorblock Technology Limited",
      "role": "Mobile Application Engineer",
      "location": "H# 57, R# 4, B# C, Banani, Dhaka / Bangladesh",
      "dates": "April 2022 - July 2023",
      "details": "Led the mobile app team in building cutting-edge DeFi applications, focusing on integration solutions and cross-functional collaboration to deliver a seamless, high-performance crypto experience.",
      "projects": ["anchor_swap"]
    },
    {
      "company": "Maya Digital Health Pte. Ltd.",
      "role": "Software Engineer (iOS)",
      "location": "Level 9, Plot 96, Bay's Bella Vista, Rd 11, Banani, Dhaka / Bangladesh",
      "dates": "February 2021 - February 2022",
      "details": "Led the revamp of their iOS app, transforming the platform into a seamless and user-friendly digital health solution. Focused on optimizing core features, including video/voice consultations and AI-driven search, contributing to a **30% improvement in app performance**. By redesigning the app's architecture and refining its UI/UX, I streamlined navigation and made health content more accessible.",
      "projects": ["maya"]
    },
    {
      "company": "Obboy Labs Ltd.",
      "role": "Junior Software Engineer (iOS)",
      "location": "Mirpur, Dhaka / Bangladesh",
      "dates": "October 2019 - December 2020",
      "details": "Worked on several iOS-based client apps, focusing on clean UI development, code optimization, and bug fixes. Collaborated in a fast-paced agile team and contributed to both app feature expansion and UI/UX improvements.",
      "projects": []
    }
  ],
  "projects": [
    {
      "name": "RYZE",
      "tag": "ryze",
      "project_info": "Telco app with dashboard-controlled modular features",
      "description": "Spearheaded the development of business-guided modular features, ensuring on-time market launches to drive revenue and enhance user engagement. Driven the evolution of a dashboard-controlled, component-based iOS app, ensuring scalability and maintainability using Clean Architecture and the Coordinator pattern for seamless navigation. Accelerated time-to-market by delivering the MVP within 3 months and achieving a fully functional, business-ready release within 8 months, enabling the app to become a leading telco app in Bangladesh.",
      "appStore": "https://apps.apple.com/us/app/ryze/id6475657753",
      "thumbnail": "/assets/ryze/thumb_image.png",
      "screenshots": ["/assets/ryze/image_1.png", "/assets/ryze/image_2.png", "/assets/ryze/image_3.png", "/assets/ryze/image_4.png", "/assets/ryze/image_5.png", "/assets/ryze/image_6.png"],
      "intro_video": "/assets/ryze/promo_video.mp4",
      "feature_videos": [],
      "tech": ["Swift", "SwiftUI", "UIKit", "Combine", "Clean Architecture", "Coordinator Pattern"]
    },
    {
      "name": "MyBL",
      "tag": "my_bl",
      "project_info": "Banglalink self-care app",
      "description": "Optimized app performance by introducing new features that streamlined user interactions and significantly improved stability. Enhanced codebase efficiency, contributing to accelerated release cycles and quicker time-to-market for new features. Drove increased user engagement, positive app store ratings, and notable revenue growth through effective feature rollout and performance improvements as a key team player.",
      "appStore": "https://apps.apple.com/us/app/mybl/id1454641124",
      "thumbnail": "/assets/mybl/thumb_image.png",
      "screenshots": ["/assets/mybl/image_1.png", "/assets/mybl/image_2.png", "/assets/mybl/image_3.png", "/assets/mybl/image_4.png", "/assets/mybl/image_5.png", "/assets/mybl/image_6.png", "/assets/mybl/image_7.png", "/assets/mybl/image_8.png", "/assets/mybl/image_9.png", "/assets/mybl/image_10.png"],
      "intro_video": undefined, // Explicitly missing video
      "feature_videos": [],
      "tech": ["Swift", "UIKit", "Combine", "MVVM", "Clean Architecture"]
    },
    {
      "name": "AnchorSwap",
      "tag": "anchor_swap",
      "project_info": "Next-gen DeFi app integrating Web3",
      "description": "Engineered a next-gen mobile DeFi app that seamlessly integrates Web3 technology to provide secure, decentralized access to Anchor Swap's full suite of features. Delivered high-impact tools instant token swaps, liquidity provisioning, yield farming, NFTs, and gamified finance modules like Lottery and Prediction Market-within one unified platform. Designed a clean, intuitive interface and ensured top-tier performance, scalability, and cryptographic security to create a frictionless and future-ready DeFi experience.",
      "thumbnail": "/assets/anchorswap/thumb_image.jpg",
      "screenshots": ["/assets/anchorswap/image_1.png", "/assets/anchorswap/image_2.png", "/assets/anchorswap/image_3.png", "/assets/anchorswap/image_4.png", "/assets/anchorswap/image_5.png", "/assets/anchorswap/image_6.png", "/assets/anchorswap/image_7.png", "/assets/anchorswap/image_8.png"],
      "intro_video": undefined,
      "feature_videos": ["/assets/anchorswap/anchor_swap_feature_demo.mp4", "/assets/anchorswap/lottery.mp4", "/assets/anchorswap/nft_marketplace.mp4", "/assets/anchorswap/swap_coin.mp4", "/assets/anchorswap/prediction.mp4", "/assets/anchorswap/auction.mp4"],
      "tech": ["Swift", "UIKit", "Web3", "Crypto Wallets", "DeFi", "Modular Architecture"]
    },
    {
      "name": "Maya",
      "tag": "maya",
      "project_info": "Digital health app",
      "description": "Led the iOS revamp of Maya, a leading digital health app offering on-demand access to expert medical advice through video/voice consultations, personalized Q&A, and wellness content. Rebuilt the app with a modern architecture and refined UI/UX to boost performance, streamline navigation, and enhance feature accessibility across real-time consultations, AI-driven search, and interactive health tools. Enhanced user engagement by developing and integrating health articles, period tracker, vaccine tracker, daily wellness tips, and pregnancy tracker features into a scalable iOS application.",
      "appStore": "https://apps.apple.com/us/app/maya-digital-health/id995058774",
      "thumbnail": "/assets/maya/thumb_image.jpg",
      "screenshots": ["/assets/maya/image_1.jpg", "/assets/maya/image_2.jpg", "/assets/maya/image_3.jpg", "/assets/maya/image_4.jpg", "/assets/maya/image_5.jpg", "/assets/maya/image_6.jpg", "/assets/maya/image_7.jpg", "/assets/maya/image_8.jpg", "/assets/maya/image_9.jpg", "/assets/maya/image_10.jpg", "/assets/maya/image_11.jpg", "/assets/maya/image_12.jpg"],
      "feature_videos": [],
      "tech": ["Swift", "UIKit", "Combine", "MVVM", "Clean Architecture"]
    }
  ],
  "education": {
    "degree": "Bachelor of Science in Computer Science & Engineering",
    "institution": "Independent University, Bangladesh",
    "year": "Autumn 2019",
  },
  "interests": ['Exploring new destinations through motorcycle touring', 'Mobile app UI/UX design trends'],
}
// --- UTILITY HOOKS & COMPONENTS ---

/**
 * Custom hook to manage dark mode state and persist it
 */
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

// --- 7. MODAL COMPONENT (NEW) ---

const MediaModal = ({ isOpen, media, onClose }) => {
  const modalRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Handle click outside modal content
  const handleBackdropClick = useCallback(
    (event) => {
      if (modalRef.current && modalRef.current === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative max-h-[80vh] w-auto max-w-[90vw] flex flex-col items-center">
        {/* Media Title */}
        <h4 className="text-white text-center text-lg font-semibold mb-2 truncate max-w-full">
          {media.title || 'Media Preview'}
        </h4>

        {/* Media Content */}
        <div className="bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-lg">
          {media.type === 'image' ? (
            <img
              src={media.path}
              alt={media.title}
              className="max-h-[75vh] max-w-[85vw] object-contain"
            />
          ) : (
            <video
              src={media.path}
              className="max-h-[75vh] max-w-[85vw] object-contain"
              controls
              autoPlay
              loop
              playsInline
              style={{ display: "block" }}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};





// --- 2. CORE UI COMPONENTS ---

/**
 * Renders a main section card (Glass Effect + Animation)
 */
const SectionCard = ({ icon, title, id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const Icon = icon;

  // Use a simple mount effect for visibility to ensure it renders reliably in iFrames
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Framer Motion Simulation: opacity and vertical translation
  const motionClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-6';

  return (
    <section
      id={id}
      ref={elementRef}
      // Glass Effect applied here: slightly transparent background + blur
      className={`
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 mb-10 transition-all duration-700 ease-out ${motionClasses}
      `}
    >
      <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center">
        <Icon className='w-7 h-7 mr-3' />
        {title}
      </h2>
      {children}
    </section>
  );
};


/**
 * Handles image/video placeholders using configurable icons.
 */
const MediaPlaceholder = ({ type, assetPath, isMain = false }) => {
  const [loadError, setLoadError] = useState(false);

  // If the path changes, reset the error state to attempt loading again
  useEffect(() => {
    setLoadError(false);
  }, [assetPath, type]);

  // Determine size classes
  // Removed explicit min-h for isMain to let aspect-video container control it
  const sizeClasses = isMain ? '' : 'min-h-[120px]';
  // Use a common class set for both media and placeholder containers
  const containerClasses = `rounded-lg h-full w-full ${sizeClasses}`;
  const mediaClasses = `${containerClasses} object-cover`;

  // 1. TRY TO RENDER MEDIA (if path exists and no load error occurred)
  if (assetPath && !loadError) {
    if (type === 'image') {
      return (
        <img
          src={assetPath}
          alt={`Preview asset: ${assetPath}`}
          className={mediaClasses}
          // If image fails to load, set error state to render placeholder
          onError={() => setLoadError(true)}
          loading="lazy"
        />
      );
    }

    if (type === 'video') {
      return (
        <video
          src={assetPath}
          className={mediaClasses}
          controls={!isMain} // Show controls only if not main/autoplay
          loop
          muted
          autoPlay={isMain} // Autoplay for main video, if applicable
          playsInline // Important for mobile devices
          onError={() => setLoadError(true)}
        >
          Your browser does not support the video tag.
        </video>
      );
    }
  }

  // 2. RENDER PLACEHOLDER (if path is missing, type is unknown, or load error occurred)
  const Icon = type === 'image' ? PLACEHOLDER_ICONS.image : PLACEHOLDER_ICONS.video;

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 p-4 border border-dashed border-gray-400 dark:border-gray-500 ${containerClasses}`}>
      <Icon size={isMain ? 40 : 28} className="text-gray-500 dark:text-gray-400 mb-2" />
      <p className={`font-medium text-gray-700 dark:text-gray-300 ${isMain ? 'text-lg' : 'text-sm'}`}>
        {type === 'image' ? 'Image/Thumbnail Placeholder' : 'Video Placeholder'}
      </p>
      <p className={`text-xs text-gray-500 dark:text-gray-400 break-all mt-1 italic ${isMain ? 'max-w-xs' : 'max-w-full'} overflow-hidden whitespace-nowrap overflow-ellipsis`}>
        {assetPath || 'No asset path provided'}
      </p>
    </div>
  );
}


// --- 3. CONTENT SECTIONS ---

const HeaderSection = ({ data }) => (
  <header className="text-center mt-4 pt-4 lg:pt-16 pb-10 px-4 mb-10">
    {/* Avatar */}
    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-inner ring-4 ring-indigo-300 dark:ring-indigo-700">
      {data.image ? (
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="bg-indigo-600 w-full h-full flex items-center justify-center text-white text-4xl font-extrabold tracking-widest">
          {data.name
            .split(' ')
            .map(n => n[0])
            .join('')}
        </div>
      )}
    </div>

    {/* Name */}
    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-1">
      {data.name}
    </h2>

    {/* Title */}
    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1">
      {data.title}
    </h3>

    {/* Location */}
    {data.location && (
      <p className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-4">
        <ICON_MAP.MapPin size={16} className="mr-1" />
        {data.location_url ? (
          <a
            href={data.location_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-500 dark:text-gray-400"
          >
            {data.location}
          </a>
        ) : (
          data.location
        )}
      </p>
    )}

    {/* Summary */}
    <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mt-4">
      <p className="text-lg leading-relaxed italic border-l-4 border-indigo-400 pl-4 py-1">
        {data.summary}
      </p>
    </div>

    {/* Contact Links */}
    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
      <a
        href={`mailto:${data.email}`}
        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition"
      >
        <ICON_MAP.Mail size={16} className="mr-1" /> {data.email}
      </a>
      <a
        href={`tel:${data.phone}`}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
      >
        <ICON_MAP.Phone size={16} className="mr-1" /> {data.phone}
      </a>
      <a
        href={data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition"
      >
        <ICON_MAP.Linkedin size={16} className="mr-1" /> LinkedIn Profile
      </a>
    </div>
  </header>
);




const SkillsSection = ({ skills }) => {
  // Use SKILL_CATEGORIES config
  const categories = useMemo(() => {
    return SKILL_CATEGORIES.map(category => ({
      ...category,
      items: (skills[category.dataKey]).sort(),
      Icon: ICON_MAP[category.iconKey],
    }));
  }, [skills]);

  // Find the config for this section
  const sectionConfig = SECTION_CONFIG.find(s => s.id === 'skills');
  const SectionIcon = ICON_MAP[sectionConfig?.iconKey];


  return (
    <SectionCard
      id="skills"
      title={sectionConfig?.title || 'Skills'}
      icon={SectionIcon}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="p-4 bg-gray-50/70 dark:bg-gray-700/70 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md backdrop-blur-sm">
            <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-3 border-b pb-2 border-indigo-200 dark:border-indigo-900/50 flex items-center">
              <category.Icon size={20} className='mr-2' /> {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-800 dark:text-indigo-100 transition-all hover:scale-[1.05] shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

const ExperienceSection = ({ experience }) => {
  // Find the config for this section
  const sectionConfig = SECTION_CONFIG.find(s => s.id === 'experience');
  const SectionIcon = ICON_MAP[sectionConfig?.iconKey];

  return (
    <SectionCard
      id="experience"
      title={sectionConfig?.title || 'Experience'}
      icon={SectionIcon}
    >
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
        {experience.map((job, index) => (
          <li key={index} className="mb-10 ml-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-100 dark:border-gray-600 transition-shadow hover:shadow-lg">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-800 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
              {index === 0 ? <ICON_MAP.Zap size={14} /> : <ICON_MAP.Anchor size={14} />}
            </span>

            {/* Company Name and Dates */}
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h3>
              <time className="text-sm font-normal text-gray-500 dark:text-gray-400">{job.dates}</time>
            </div>

            {/* Designation (Role) with Icon - FIXED Padding/Alignment */}
            <div className="flex items-center mb-2">
              <ICON_MAP.Briefcase size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {job.role}
              </h4>
              {index === 0 && (
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full ml-3 dark:bg-indigo-900 dark:text-indigo-300">
                  Current
                </span>
              )}
            </div>

            {/* Location */}
            <p className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400 flex items-center">
              <ICON_MAP.MapPin size={14} className="mr-1" /> {job.location}
            </p>

            <p className="text-gray-600 dark:text-gray-400 space-y-2 mt-3 text-sm" dangerouslySetInnerHTML={{ __html: job.details }} />

            {job.projects && job.projects.length > 0 && (
              <div className="mt-3">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase block mb-1">Related Projects:</span>
                <div className="flex flex-wrap gap-2">
                  {job.projects.map(tag => (
                    <a
                      key={tag}
                      href={`#project-${tag}`}
                      className="flex items-center text-xs font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition hover:underline"
                    >
                      <ICON_MAP.Smartphone size={14} className="mr-1" />
                      {PORTFOLIO_DATA.projects.find(p => p.tag === tag)?.name || tag}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </SectionCard>
  );
};

const ProjectCard = ({ project, onOpenMedia }) => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const allMedia = useMemo(() => {
    let media = [];
    // 1. Add Feature Videos
    if (project.feature_videos && project.feature_videos.length > 0) {
      media = media.concat(project.feature_videos.map(path => ({ type: 'video', path, title: project.name + " Feature Video" })));
    }
    // 2. Add Screenshots (Images)
    if (project.screenshots && project.screenshots.length > 0) {
      media = media.concat(project.screenshots.map((path, index) => ({ type: 'image', path, title: project.name + ` Screenshot ${index + 1}` })));
    }
    return media;
  }, [project]);

  // Determine which media to show in the main card area
  const mainMedia = useMemo(() => {
    const hasVideo = project.intro_video && project.intro_video.length > 0;
    const hasThumbnail = project.thumbnail && project.thumbnail.length > 0;

    if (hasVideo) {
      return { type: 'video', path: project.intro_video };
    }
    if (hasThumbnail) {
      return { type: 'image', path: project.thumbnail };
    }
    return { type: 'image', path: 'No media assets available' };
  }, [project.intro_video, project.thumbnail]);


  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollWidth > clientWidth) {
        const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(percent);
      } else {
        setScrollProgress(0); // No scrollbar needed
      }
    }
  }, [project]); // Added project as dependency to ensure correct initialization

  useEffect(() => {
    const currentRef = scrollRef.current;
    handleScroll();
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);


  return (
    // Glass effect on ProjectCard
    <div id={`project-${project.tag}`} className="bg-white/50 dark:bg-gray-700/50 rounded-xl shadow-inner overflow-hidden border border-gray-200 dark:border-gray-600 transform hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
      {/* Main Media Area (Video/Thumbnail Priority) */}
      <div className="aspect-video w-full bg-black">
        <MediaPlaceholder
          type={mainMedia.type}
          assetPath={mainMedia.path}
          isMain={true}
        />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.name}</h3>
        <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{project.project_info}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-200/70 text-gray-700 rounded-full dark:bg-gray-600/70 dark:text-gray-200 transition-all shadow-sm backdrop-blur-sm">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-4 border-t pt-4 border-gray-200 dark:border-gray-600">
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 font-bold rounded-xl text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02]
                         bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm ring-2 ring-blue-400/50 dark:ring-blue-600/50"
              style={{
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              <ICON_MAP.AppWindow size={16} className="mr-2" />
              View on the App Store
            </a>
          )}
          <span className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
            <PLACEHOLDER_ICONS.image size={16} className="mr-1" /> Total Assets: {allMedia.length}
          </span>
        </div>
      </div>

      {/* Media Carousel Section */}
      {allMedia.length > 0 && (
        <div className="bg-white/50 dark:bg-gray-800/50 p-4 border-t border-gray-200 dark:border-gray-600 backdrop-blur-sm">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
            <ICON_MAP.ChevronsRight size={18} className="mr-2 text-indigo-600" /> Project Media Gallery (Scroll Right)
          </h4>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-3 overflow-x-scroll pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {allMedia.map((mediaItem, i) => (
              <div key={i} className="flex-shrink-0 w-64 snap-center aspect-[9/16] overflow-hidden rounded-lg shadow-md border border-gray-300 dark:border-gray-600 cursor-pointer transition-transform hover:scale-[1.03]"
                onClick={() => onOpenMedia(mediaItem)} // CLICK HANDLER ADDED HERE
              >
                <MediaPlaceholder type={mediaItem.type} assetPath={mediaItem.path} />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-100 ease-out rounded-full"
              style={{ width: `${scrollProgress > 0 ? scrollProgress : 0}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = ({ projects, onOpenMedia }) => {
  // Find the config for this section
  const sectionConfig = SECTION_CONFIG.find(s => s.id === 'projects');
  const SectionIcon = ICON_MAP[sectionConfig?.iconKey];

  return (
    <SectionCard
      id="projects"
      title={sectionConfig?.title || 'Projects'}
      icon={SectionIcon}
    >
      <div className="grid grid-cols-1 gap-10">
        {projects.map(project => (
          <ProjectCard key={project.tag} project={project} onOpenMedia={onOpenMedia} />
        ))}
      </div>
    </SectionCard>
  );
};

const EducationSection = ({ education, interests }) => {
  // Find the config for this section
  const sectionConfig = SECTION_CONFIG.find(s => s.id === 'education');
  const SectionIcon = ICON_MAP[sectionConfig?.iconKey];

  return (
    <SectionCard
      id="education"
      title={sectionConfig?.title || 'Education'}
      icon={SectionIcon}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="p-4 bg-gray-50/70 dark:bg-gray-700/70 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md backdrop-blur-sm">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
            <ICON_MAP.GraduationCap size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" /> Education
          </h4>
          <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">{education.degree}</p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-1">{education.institution}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">{education.year}</p>
        </div>

        {/* Interests */}
        <div className="p-4 bg-gray-50/70 dark:bg-gray-700/70 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md backdrop-blur-sm">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
            <ICON_MAP.Feather size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" /> Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-200/70 text-gray-800 rounded-full dark:bg-gray-600/70 dark:text-gray-200 transition-all shadow-sm backdrop-blur-sm">
                <ICON_MAP.BookOpen size={16} className="mr-1 text-indigo-500 dark:text-indigo-400" /> {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

// --- 4. MAIN APPLICATION COMPONENT ---

const App = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState('summary');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  // NEW MODAL STATE
  const [modalState, setModalState] = useState({ isOpen: false, type: null, path: null, title: null });

  // Handlers for the Modal
  const openModal = useCallback((mediaItem) => {
    setModalState({
      isOpen: true,
      type: mediaItem.type,
      path: mediaItem.path,
      title: mediaItem.title || 'Media Preview'
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Filter sections based on the configuration
  const visibleSections = useMemo(() => SECTION_CONFIG.filter(s => s.isVisible), []);

  // Simple intersection observer to update active section for navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the element is intersecting (partially visible) and scrolling past, mark it active
          // Using a single threshold and large root margins to create distinct zones
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Root margins adjusted to trigger detection when section fills more of the viewport center
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    visibleSections.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  const scrollToSection = useCallback((id) => {
    // Offset the scroll to account for the sticky header (approx 64px based on h-16 + padding)
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false); // Close menu after selection on mobile
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <style>{`
        /* Hide scrollbar for gallery but allow scrolling */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
        /* Custom scrollbar for mobile menu, if needed */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #9CA3AF;
            border-radius: 4px;
        }
      `}</style>

      {/* FIXED THEME TOGGLE BUTTON (New Top-Right Placement) */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          title={isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
          className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-xl text-gray-700 dark:text-gray-300 hover:ring-4 ring-indigo-500/50 dark:ring-indigo-400/50 transition-all duration-300"
        >
          {isDarkMode ? <ICON_MAP.Sun size={20} /> : <ICON_MAP.Moon size={20} />}
        </button>
      </div>

      {/* MOBILE MENU TOGGLE BUTTON (Fixed bottom-right for easy access) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          title={isMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          className={`p-3 rounded-full shadow-2xl transition-all duration-300 transform 
                         ${isMenuOpen
              ? 'bg-indigo-600/90 text-white hover:bg-indigo-700/90 ring-4 ring-indigo-500/50'
              : 'bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 ring-2 ring-gray-300/50 dark:ring-gray-600/50'}
                         backdrop-blur-sm`}
        >
          {isMenuOpen ? <ICON_MAP.ChevronsRight size={20} /> : <ICON_MAP.Menu size={20} />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* 1. STICKY SIDEBAR NAVIGATION (Section Links) - MOVED TO TOP OF CONTAINER */}
        {visibleSections.length > 0 && (
          // The nav is sticky on desktop (lg:sticky lg:top-4) and acts as a fixed drawer on mobile
          <nav
            className={`
                    fixed inset-0 z-40 backdrop-blur-lg transform transition-transform duration-300 lg:static lg:transform-none lg:z-30
                    ${isMenuOpen ? 'translate-x-0 bg-white dark:bg-gray-800' : 'translate-x-full lg:translate-x-0'}
                    
                    // STICKY GLASS BAR STYLES RESTORED
                    lg:sticky lg:top-4 lg:w-full 
                    lg:bg-white/90 lg:dark:bg-gray-800/90 lg:shadow-xl lg:rounded-xl lg:p-3 lg:mb-10 lg:border lg:border-gray-200 lg:dark:border-gray-700/50
                `}
          >
            {/* Nav Links */}
            <div className="w-full h-full lg:h-auto overflow-y-auto custom-scrollbar pt-6 lg:pt-0">
              <ul className="flex flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-6 p-6 lg:p-0">
                {visibleSections.map(item => {
                  const isActive = activeSection === item.id;
                  const Icon = ICON_MAP[item.iconKey];
                  return (
                    <li key={item.id} className="w-full lg:w-auto">
                      <button
                        onClick={() => {
                          scrollToSection(item.id);
                          setActiveSection(item.id); // Also set active state immediately for feedback
                        }}
                        className={`
                                            flex items-center p-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap justify-start lg:justify-center text-lg lg:text-base
                                            ${isActive
                            ? 'bg-indigo-100/70 text-indigo-700 dark:bg-indigo-800/70 dark:text-indigo-100 shadow-inner'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-700/70'
                          } backdrop-blur-sm w-full
                                        `}
                      >
                        <Icon size={18} className="mr-3 lg:mr-2" />
                        <span>{item.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        )}

        {/* 2. HEADER/SUMMARY SECTION - Adjusted top padding to clear the sticky nav */}
        <HeaderSection data={PORTFOLIO_DATA.personal_info} />

        {/* 4. CONTENT SECTIONS */}
        <main>
          {visibleSections.map(section => {
            switch (section.id) {
              case 'skills':
                return <SkillsSection key="skills" skills={PORTFOLIO_DATA.technical_skills} />;
              case 'experience':
                return <ExperienceSection key="experience" experience={PORTFOLIO_DATA.professional_experience} />;
              case 'projects':
                return <ProjectsSection key="projects" projects={PORTFOLIO_DATA.projects} onOpenMedia={openModal} />;
              case 'education':
                return <EducationSection key="education" education={PORTFOLIO_DATA.education} interests={PORTFOLIO_DATA.interests} />;
              default:
                return null;
            }
          })}
        </main>

        {/* Footer */}
        <footer className="py-8 mt-12 text-center border-t border-indigo-200/50 dark:border-indigo-900/50 flex flex-col justify-center items-center gap-4">
          <p className="text-md font-semibold text-indigo-700 dark:text-indigo-400">
            Got a vision? Let's build it.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            This site demonstrates my commitment to **modern, efficient development** and **impeccable design**. 
            <br className="hidden sm:inline" />
            **Ready to create your next stunning application?**
          </p>
          {/* Subtle CTA to Contact */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal_info.email}`}
            className="inline-flex items-center px-5 py-2 mt-2 text-sm font-bold rounded-full text-white bg-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.03] ring-4 ring-indigo-300/50 dark:ring-indigo-700/50"
          >
            <ICON_MAP.Mail size={16} className="mr-2" />
            Start a Conversation
          </a>

          <p className="text-xs mt-4 text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal_info.name}. All rights reserved.
          </p>
        </footer>
      </div>

      {/* 5. MEDIA MODAL (Rendered outside the main content flow) */}
      <MediaModal
        isOpen={modalState.isOpen}
        media={modalState}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
