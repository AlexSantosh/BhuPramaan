import { useState } from "react";
import "./App.css";

const translations = {
  English: {
    dashboard: "Dashboard",
    upload: "Upload Documents",
    records: "Land Records",
    search: "Search",
    verification: "Verification",
    ai: "AI Assistant",
    gis: "GIS Map",
    reports: "Reports",
    audit: "Audit Logs",
    settings: "Settings",
    overview: "Land Record Intelligence Dashboard",
    welcome: "Welcome back",
    subtitle: "Digitize, verify and manage land records with AI-powered intelligence.",
    documents: "Total Documents",
    verified: "Verified Records",
    pending: "Pending Review",
    accuracy: "AI Accuracy",
    uploadTitle: "Upload Land Record",
    uploadText: "Drag & drop your document or browse from your computer",
    browse: "Browse Files",
    processing: "AI Processing",
    recent: "Recent Land Records",
    owner: "Owner",
    khasra: "Khasra No.",
    village: "Village",
    status: "Status",
    confidence: "Confidence",
    aiTitle: "BhuPramaan AI Assistant",
    aiText: "Ask questions about land records in your preferred language.",
    ask: "Ask AI Assistant",
    online: "All systems operational",
    viewAll: "View All",
    high: "High",
    medium: "Medium",
    pendingStatus: "Pending",
    verifiedStatus: "Verified",
  },

  Hindi: {
    dashboard: "डैशबोर्ड",
    upload: "दस्तावेज़ अपलोड",
    records: "भूमि रिकॉर्ड",
    search: "खोजें",
    verification: "सत्यापन",
    ai: "AI सहायक",
    gis: "GIS मानचित्र",
    reports: "रिपोर्ट",
    audit: "ऑडिट लॉग",
    settings: "सेटिंग्स",
    overview: "भूमि रिकॉर्ड इंटेलिजेंस डैशबोर्ड",
    welcome: "वापसी पर स्वागत है",
    subtitle: "AI की मदद से भूमि रिकॉर्ड को डिजिटल, सत्यापित और प्रबंधित करें।",
    documents: "कुल दस्तावेज़",
    verified: "सत्यापित रिकॉर्ड",
    pending: "समीक्षा लंबित",
    accuracy: "AI सटीकता",
    uploadTitle: "भूमि रिकॉर्ड अपलोड करें",
    uploadText: "दस्तावेज़ यहां डालें या कंप्यूटर से चुनें",
    browse: "फाइल चुनें",
    processing: "AI प्रोसेसिंग",
    recent: "हाल के भूमि रिकॉर्ड",
    owner: "मालिक",
    khasra: "खसरा नंबर",
    village: "गांव",
    status: "स्थिति",
    confidence: "विश्वास स्तर",
    aiTitle: "BhuPramaan AI सहायक",
    aiText: "अपनी पसंदीदा भाषा में भूमि रिकॉर्ड से संबंधित प्रश्न पूछें।",
    ask: "AI से पूछें",
    online: "सभी सिस्टम सामान्य रूप से काम कर रहे हैं",
    viewAll: "सभी देखें",
    high: "उच्च",
    medium: "मध्यम",
    pendingStatus: "लंबित",
    verifiedStatus: "सत्यापित",
  },

  Marathi: {
    dashboard: "डॅशबोर्ड",
    upload: "कागदपत्र अपलोड",
    records: "जमीन रेकॉर्ड",
    search: "शोध",
    verification: "पडताळणी",
    ai: "AI सहाय्यक",
    gis: "GIS नकाशा",
    reports: "अहवाल",
    audit: "ऑडिट लॉग",
    settings: "सेटिंग्ज",
    overview: "जमीन रेकॉर्ड इंटेलिजन्स डॅशबोर्ड",
    welcome: "पुन्हा स्वागत आहे",
    subtitle: "AI च्या मदतीने जमीन रेकॉर्ड डिजिटल आणि व्यवस्थापित करा.",
    documents: "एकूण कागदपत्रे",
    verified: "पडताळलेले रेकॉर्ड",
    pending: "पडताळणी बाकी",
    accuracy: "AI अचूकता",
    uploadTitle: "जमीन रेकॉर्ड अपलोड करा",
    uploadText: "कागदपत्र येथे टाका किंवा संगणकातून निवडा",
    browse: "फाइल निवडा",
    processing: "AI प्रक्रिया",
    recent: "अलीकडील जमीन रेकॉर्ड",
    owner: "मालक",
    khasra: "खसरा क्रमांक",
    village: "गाव",
    status: "स्थिती",
    confidence: "विश्वास पातळी",
    aiTitle: "BhuPramaan AI सहाय्यक",
    aiText: "आपल्या पसंतीच्या भाषेत जमीन रेकॉर्डबद्दल प्रश्न विचारा.",
    ask: "AI ला विचारा",
    online: "सर्व सिस्टम कार्यरत आहेत",
    viewAll: "सर्व पहा",
    high: "उच्च",
    medium: "मध्यम",
    pendingStatus: "प्रलंबित",
    verifiedStatus: "पडताळलेले",
  },

  Gujarati: {
    dashboard: "ડેશબોર્ડ",
    upload: "દસ્તાવેજ અપલોડ",
    records: "જમીન રેકોર્ડ",
    search: "શોધ",
    verification: "ચકાસણી",
    ai: "AI સહાયક",
    gis: "GIS નકશો",
    reports: "રિપોર્ટ્સ",
    audit: "ઓડિટ લોગ",
    settings: "સેટિંગ્સ",
    overview: "જમીન રેકોર્ડ ઇન્ટેલિજન્સ ડેશબોર્ડ",
    welcome: "ફરી સ્વાગત છે",
    subtitle: "AI દ્વારા જમીન રેકોર્ડને ડિજિટલ અને મેનેજ કરો.",
    documents: "કુલ દસ્તાવેજો",
    verified: "ચકાસેલા રેકોર્ડ",
    pending: "સમીક્ષા બાકી",
    accuracy: "AI ચોકસાઈ",
    uploadTitle: "જમીન રેકોર્ડ અપલોડ કરો",
    uploadText: "દસ્તાવેજ અહીં મૂકો અથવા કમ્પ્યુટરમાંથી પસંદ કરો",
    browse: "ફાઇલ પસંદ કરો",
    processing: "AI પ્રક્રિયા",
    recent: "તાજેતરના જમીન રેકોર્ડ",
    owner: "માલિક",
    khasra: "ખસરા નંબર",
    village: "ગામ",
    status: "સ્થિતિ",
    confidence: "વિશ્વાસ સ્તર",
    aiTitle: "BhuPramaan AI સહાયક",
    aiText: "તમારી પસંદગીની ભાષામાં જમીન રેકોર્ડ વિશે પ્રશ્ન પૂછો.",
    ask: "AI ને પૂછો",
    online: "બધી સિસ્ટમ કાર્યરત છે",
    viewAll: "બધું જુઓ",
    high: "ઉચ્ચ",
    medium: "મધ્યમ",
    pendingStatus: "બાકી",
    verifiedStatus: "ચકાસેલ",
  },
};

const records = [
  {
    owner: "Rajesh Kumar",
    khasra: "KH-2045/18",
    village: "Rampur",
    district: "Jaipur",
    status: "Verified",
    confidence: 96,
  },
  {
    owner: "Sunita Devi",
    khasra: "KH-7812/04",
    village: "Chomu",
    district: "Jaipur",
    status: "Verified",
    confidence: 94,
  },
  {
    owner: "Mohan Lal",
    khasra: "KH-4421/09",
    village: "Sanganer",
    district: "Jaipur",
    status: "Pending",
    confidence: 68,
  },
  {
    owner: "Priya Sharma",
    khasra: "KH-9320/11",
    village: "Amer",
    district: "Jaipur",
    status: "Verified",
    confidence: 91,
  },
  {
    owner: "Vijay Singh",
    khasra: "KH-1187/22",
    village: "Bagru",
    district: "Jaipur",
    status: "Pending",
    confidence: 73,
  },
];

function App() {
  const [language, setLanguage] = useState("English");
  const [activePage, setActivePage] = useState("Dashboard");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [toast, setToast] = useState("");

  const t = translations[language];

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file.name);
      showToast(`"${file.name}" selected successfully`);
    }
  };

  const sendQuestion = () => {
    if (!chatInput.trim()) return;

    showToast("AI is processing your question...");
    setChatInput("");
  };

  const filteredRecords = records.filter((record) =>
    `${record.owner} ${record.khasra} ${record.village} ${record.district}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const menuItems = [
    { name: "Dashboard", icon: "▦", label: t.dashboard },
    { name: "Upload Documents", icon: "↑", label: t.upload },
    { name: "Land Records", icon: "▤", label: t.records },
    { name: "Search", icon: "⌕", label: t.search },
    { name: "Verification", icon: "✓", label: t.verification },
    { name: "AI Assistant", icon: "✦", label: t.ai },
    { name: "GIS Map", icon: "⌖", label: t.gis },
    { name: "Reports", icon: "▥", label: t.reports },
    { name: "Audit Logs", icon: "◷", label: t.audit },
    { name: "Settings", icon: "⚙", label: t.settings },
  ];

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <span>भू</span>
          </div>

          <div>
            <h2>BhuPramaan</h2>
            <p>Land Record Intelligence</p>
          </div>
        </div>

        <div className="sidebar-section-title">MAIN MENU</div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>

              {item.name === "Verification" && (
                <span className="menu-badge">12</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>

            <div>
              <strong>Need Help?</strong>
              <p>Talk to our support team</p>
            </div>

            <button onClick={() => showToast("Support center opened")}>
              →
            </button>
          </div>

          <div className="sidebar-user">
            <div className="avatar">AK</div>

            <div className="user-info">
              <strong>Admin Kumar</strong>
              <span>Administrator</span>
            </div>

            <button onClick={() => setShowProfile(!showProfile)}>⋮</button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        {/* TOP HEADER */}
        <header className="topbar">
          <div className="mobile-brand">
            <div className="small-mark">भू</div>
            <strong>BhuPramaan</strong>
          </div>

          <div className="header-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search records, Khasra, owner..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <kbd>Ctrl K</kbd>
          </div>

          <div className="header-actions">
            {/* LANGUAGE */}
            <div className="language-box">
              <span>文</span>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {Object.keys(translations).map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* SYSTEM STATUS */}
            <div className="system-status">
              <span className="status-dot"></span>
              <span className="status-text">System Online</span>
            </div>

            {/* NOTIFICATION */}
            <button
              className="icon-button notification"
              onClick={() => {
                setNotifications(0);
                showToast("Notifications marked as read");
              }}
            >
              ♢
              {notifications > 0 && (
                <span className="notification-count">{notifications}</span>
              )}
            </button>

            {/* PROFILE */}
            <button
              className="profile-button"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="avatar">AK</div>

              <div className="profile-text">
                <strong>Admin Kumar</strong>
                <span>Administrator</span>
              </div>

              <span>⌄</span>
            </button>

            {showProfile && (
              <div className="profile-dropdown">
                <button onClick={() => showToast("Profile opened")}>
                  👤 My Profile
                </button>
                <button onClick={() => setActivePage("Settings")}>
                  ⚙ Settings
                </button>
                <button onClick={() => showToast("Logout feature ready")}>
                  ↪ Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* CONTENT */}
        <section className="page-content">
          {activePage === "Dashboard" ? (
            <>
              {/* PAGE HEADING */}
              <div className="page-heading">
                <div>
                  <div className="breadcrumb">
                    Home <span>/</span> Dashboard
                  </div>

                  <h1>{t.overview}</h1>

                  <p>
                    {t.welcome}, Admin Kumar. {t.subtitle}
                  </p>
                </div>

                <div className="heading-actions">
                  <button
                    className="outline-button"
                    onClick={() => showToast("Report export started")}
                  >
                    ↓ Export Report
                  </button>

                  <button
                    className="primary-button"
                    onClick={() => setActivePage("Upload Documents")}
                  >
                    + Upload Record
                  </button>
                </div>
              </div>

              {/* STATS */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-top">
                    <div className="stat-icon blue">▤</div>
                    <span className="growth positive">+12.5%</span>
                  </div>

                  <div className="stat-number">12,480</div>
                  <div className="stat-label">{t.documents}</div>

                  <div className="mini-progress">
                    <span style={{ width: "78%" }}></span>
                  </div>

                  <small>+1,420 this month</small>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <div className="stat-icon green">✓</div>
                    <span className="growth positive">+8.2%</span>
                  </div>

                  <div className="stat-number">9,842</div>
                  <div className="stat-label">{t.verified}</div>

                  <div className="mini-progress green-bar">
                    <span style={{ width: "86%" }}></span>
                  </div>

                  <small>79% of total records</small>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <div className="stat-icon orange">◷</div>
                    <span className="growth neutral">-4.3%</span>
                  </div>

                  <div className="stat-number">2,638</div>
                  <div className="stat-label">{t.pending}</div>

                  <div className="mini-progress orange-bar">
                    <span style={{ width: "42%" }}></span>
                  </div>

                  <small>428 reviewed today</small>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <div className="stat-icon purple">✦</div>
                    <span className="growth positive">+2.1%</span>
                  </div>

                  <div className="stat-number">94.7%</div>
                  <div className="stat-label">{t.accuracy}</div>

                  <div className="mini-progress purple-bar">
                    <span style={{ width: "95%" }}></span>
                  </div>

                  <small>Based on 10,284 verified fields</small>
                </div>
              </div>

              {/* MAIN GRID */}
              <div className="dashboard-grid">
                {/* UPLOAD */}
                <div className="panel upload-panel">
                  <div className="panel-header">
                    <div>
                      <h3>{t.uploadTitle}</h3>
                      <p>PDF, JPG, PNG up to 20MB</p>
                    </div>

                    <span className="panel-more">•••</span>
                  </div>

                  <label className="upload-area">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFile}
                    />

                    <div className="upload-cloud">↑</div>

                    <h4>{selectedFile || "Drop your land record here"}</h4>

                    <p>
                      {selectedFile
                        ? "File selected successfully"
                        : t.uploadText}
                    </p>

                    <span className="browse-button">{t.browse}</span>
                  </label>

                  {selectedFile && (
                    <div className="selected-file">
                      <span>📄</span>

                      <div>
                        <strong>{selectedFile}</strong>
                        <small>Ready for AI processing</small>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedFile(null);
                          showToast("File removed");
                        }}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>

                {/* AI ASSISTANT */}
                <div className="panel ai-panel">
                  <div className="ai-decoration one"></div>
                  <div className="ai-decoration two"></div>

                  <div className="ai-content">
                    <div className="ai-header">
                      <div className="ai-icon">✦</div>

                      <div>
                        <span className="ai-label">POWERED BY AI</span>
                        <h3>{t.aiTitle}</h3>
                      </div>
                    </div>

                    <p>{t.aiText}</p>

                    <div className="suggestion-list">
                      <button
                        onClick={() => setChatInput("Find land records by owner")}
                      >
                        <span>⌕</span>
                        Find records by owner
                      </button>

                      <button
                        onClick={() =>
                          setChatInput("What is the land area in my record?")
                        }
                      >
                        <span>▣</span>
                        Understand land details
                      </button>

                      <button
                        onClick={() =>
                          setChatInput("Explain my Khasra number")
                        }
                      >
                        <span>?</span>
                        Explain my document
                      </button>
                    </div>

                    <button
                      className="ai-button"
                      onClick={() => setShowChat(true)}
                    >
                      {t.ask}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* SECOND GRID */}
              <div className="dashboard-grid second-grid">
                {/* PROCESSING */}
                <div className="panel processing-panel">
                  <div className="panel-header">
                    <div>
                      <h3>{t.processing}</h3>
                      <p>Real-time document processing pipeline</p>
                    </div>

                    <button
                      className="view-link"
                      onClick={() => setActivePage("Reports")}
                    >
                      View Details →
                    </button>
                  </div>

                  <div className="processing-content">
                    <div className="pipeline">
                      <div className="pipeline-step completed">
                        <div className="pipeline-icon">✓</div>
                        <div>
                          <strong>Document Upload</strong>
                          <span>12,480 processed</span>
                        </div>
                      </div>

                      <div className="pipeline-line completed-line"></div>

                      <div className="pipeline-step completed">
                        <div className="pipeline-icon">✓</div>
                        <div>
                          <strong>OpenCV Processing</strong>
                          <span>98.2% success rate</span>
                        </div>
                      </div>

                      <div className="pipeline-line completed-line"></div>

                      <div className="pipeline-step active-step">
                        <div className="pipeline-icon">✦</div>
                        <div>
                          <strong>PaddleOCR + AI</strong>
                          <span>428 documents processing</span>
                        </div>
                      </div>

                      <div className="pipeline-line"></div>

                      <div className="pipeline-step">
                        <div className="pipeline-icon">✓</div>
                        <div>
                          <strong>Human Verification</strong>
                          <span>Awaiting reviewer</span>
                        </div>
                      </div>
                    </div>

                    <div className="processing-circle">
                      <div className="circle-inner">
                        <strong>86%</strong>
                        <span>Processed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GIS */}
                <div className="panel map-panel">
                  <div className="panel-header">
                    <div>
                      <h3>GIS Parcel Overview</h3>
                      <p>Jaipur District</p>
                    </div>

                    <button
                      className="view-link"
                      onClick={() => setActivePage("GIS Map")}
                    >
                      Open Map →
                    </button>
                  </div>

                  <div className="map-box">
                    <div className="map-grid-lines"></div>

                    <div className="map-road road-one"></div>
                    <div className="map-road road-two"></div>
                    <div className="map-road road-three"></div>

                    <div className="parcel parcel-one"></div>
                    <div className="parcel parcel-two"></div>
                    <div className="parcel parcel-three"></div>
                    <div className="parcel parcel-four"></div>
                    <div className="parcel parcel-five"></div>

                    <div className="map-marker marker-one">●</div>
                    <div className="map-marker marker-two">●</div>

                    <div className="map-overlay">
                      <span className="map-live-dot"></span>
                      Live GIS Layer
                    </div>
                  </div>
                </div>
              </div>

              {/* RECORD TABLE */}
              <div className="panel records-panel">
                <div className="panel-header">
                  <div>
                    <h3>{t.recent}</h3>
                    <p>Latest processed land records</p>
                  </div>

                  <button
                    className="view-link"
                    onClick={() => setActivePage("Land Records")}
                  >
                    {t.viewAll} →
                  </button>
                </div>

                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>{t.owner}</th>
                        <th>{t.khasra}</th>
                        <th>{t.village}</th>
                        <th>District</th>
                        <th>{t.status}</th>
                        <th>{t.confidence}</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredRecords.map((record, index) => (
                        <tr key={index}>
                          <td>
                            <div className="owner-cell">
                              <div className="owner-avatar">
                                {record.owner
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")
                                  .slice(0, 2)}
                              </div>

                              <strong>{record.owner}</strong>
                            </div>
                          </td>

                          <td>
                            <span className="khasra-number">
                              {record.khasra}
                            </span>
                          </td>

                          <td>{record.village}</td>
                          <td>{record.district}</td>

                          <td>
                            <span
                              className={`status-pill ${
                                record.status === "Verified"
                                  ? "verified"
                                  : "pending"
                              }`}
                            >
                              <span></span>
                              {record.status === "Verified"
                                ? t.verifiedStatus
                                : t.pendingStatus}
                            </span>
                          </td>

                          <td>
                            <div className="confidence-cell">
                              <div className="confidence-bar">
                                <span
                                  style={{
                                    width: `${record.confidence}%`,
                                  }}
                                ></span>
                              </div>

                              <strong>{record.confidence}%</strong>
                            </div>
                          </td>

                          <td>
                            <button
                              className="row-action"
                              onClick={() =>
                                showToast(
                                  `Opening record ${record.khasra}`
                                )
                              }
                            >
                              →
                            </button>
                          </td>
                        </tr>
                      ))}

                      {filteredRecords.length === 0 && (
                        <tr>
                          <td colSpan="7" className="no-records">
                            No records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="placeholder-page">
              <div className="placeholder-icon">
                {menuItems.find((item) => item.name === activePage)?.icon ||
                  "▦"}
              </div>

              <h1>{activePage}</h1>

              <p>
                This module is ready for integration with the FastAPI backend.
              </p>

              <div className="placeholder-features">
                <div>
                  <span>✓</span>
                  React interface ready
                </div>

                <div>
                  <span>✓</span>
                  REST API integration ready
                </div>

                <div>
                  <span>✓</span>
                  Role-based access ready
                </div>

                <div>
                  <span>✓</span>
                  AI integration ready
                </div>
              </div>

              <button
                className="primary-button"
                onClick={() => setActivePage("Dashboard")}
              >
                ← Back to Dashboard
              </button>
            </div>
          )}
        </section>
      </main>

      {/* AI CHAT MODAL */}
      {showChat && (
        <div className="chat-overlay" onClick={() => setShowChat(false)}>
          <div
            className="chat-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="chat-header">
              <div className="chat-title">
                <div className="chat-ai-icon">✦</div>

                <div>
                  <strong>BhuPramaan AI</strong>
                  <span>
                    <i></i> Online • Multilingual Assistant
                  </span>
                </div>
              </div>

              <button onClick={() => setShowChat(false)}>×</button>
            </div>

            <div className="chat-body">
              <div className="bot-message">
                <div className="message-avatar">✦</div>

                <div className="message-content">
                  <p>
                    Hello! I am BhuPramaan AI Assistant. You can ask me about
                    your land records, Khasra number, owner details, document
                    status or land area.
                  </p>

                  <small>AI Assistant</small>
                </div>
              </div>

              <div className="quick-questions">
                <button
                  onClick={() =>
                    setChatInput("What is the status of my land record?")
                  }
                >
                  Record status
                </button>

                <button
                  onClick={() =>
                    setChatInput("Where can I find my Khasra number?")
                  }
                >
                  Find Khasra
                </button>

                <button
                  onClick={() =>
                    setChatInput("Explain my land document")
                  }
                >
                  Explain document
                </button>
              </div>
            </div>

            <div className="chat-input-area">
              <input
                type="text"
                placeholder={
                  language === "Hindi"
                    ? "अपना प्रश्न लिखें..."
                    : "Ask about your land record..."
                }
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendQuestion();
                  }
                }}
              />

              <button className="voice-button" onClick={() => showToast("Voice input will be connected with the AI voice service")}>
                ♫
              </button>

              <button className="send-button" onClick={sendQuestion}>
                ↑
              </button>
            </div>

            <div className="chat-footer">
              AI responses are assistive. Official records require human
              verification.
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="toast">
          <span>✓</span>
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;