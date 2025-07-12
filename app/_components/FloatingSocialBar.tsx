"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin, IoChevronDown, IoChevronUp } from "react-icons/io5";

const FloatingSocialBar: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Auto-show animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1500); // Delay to let page load

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/idocohendev/",
      icon: IoLogoLinkedin,
      color: "#0072AD",
      label: "LinkedIn"
    },
    {
      href: "https://www.github.com/mayonchip",
      icon: IoLogoGithub,
      color: "#333",
      label: "GitHub"
    },
    {
      href: "https://api.whatsapp.com/send/?phone=972545649413&text&type=phone_number&app_absent=0",
      icon: IoLogoWhatsapp,
      color: "#25D366",
      label: "WhatsApp"
    }
  ];

  return (
    <motion.div
      initial={{ y: -80, rotateX: -90, opacity: 0 }}
      animate={{ 
        y: hasAnimated ? 0 : -80, 
        rotateX: hasAnimated ? 0 : -90,
        opacity: hasAnimated ? 1 : 0 
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="fixed top-0 right-6 z-[100] origin-top"
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      {/* Leather-like folding container */}
      <div className="relative bg-dark border border-stone-700/50 shadow-2xl"
           style={{
             borderRadius: "0 0 12px 12px",
             boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
           }}>
        
        {/* Stitching detail */}
        <div className="absolute top-1 left-2 right-2 flex justify-between items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="w-[2px] h-[2px] bg-amber-600/40 rounded-full"
              style={{
                boxShadow: "0 0 1px rgba(245, 158, 11, 0.3)"
              }}
            />
          ))}
        </div>
        
        {/* Social Links Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hasAnimated ? 1 : 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4
          }}
          className="flex gap-1 p-2 pt-3"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : -10 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1),
                ease: "easeOut"
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="group relative block"
              >
                {/* Social Icon Button */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg border border-stone-400/20 cursor-pointer"
                  style={{ 
                    boxShadow: `0 2px 8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)` 
                  }}
                >
                  <social.icon 
                    size={16} 
                    style={{ color: social.color }}
                    className="transition-transform duration-300 pointer-events-none"
                  />
                </motion.div>

                {/* Minimal Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-stone-900/90 text-stone-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {social.label}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingSocialBar;