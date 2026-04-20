import React, { useEffect, useState } from "react";
import GiiIcon from "../../assets/logos/GII-ICON.svg";

const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoaded = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("load", handleLoaded);
      return () => window.removeEventListener("load", handleLoaded);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <div style={{ position: "relative", width: 120, height: 120 }}>
        {/* Spinning ring */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            animation: "spin 1.4s linear infinite",
          }}
        >
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e5e5" strokeWidth="4" />
          <circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke="#6abf2e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90 250"
          />
        </svg>

        {/* Logo di tengah */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={GiiIcon} width={70} height={70} alt="GII" />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;