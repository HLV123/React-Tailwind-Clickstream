// Clickstream Logger - Ghi log tất cả tương tác người dùng
const ClickstreamLogger = {
  apiEndpoint: '/api/log-event',
  sessionId: null,
  isInitialized: false,

  // Khởi tạo logger
  init() {
    if (this.isInitialized) return;
    
    this.sessionId = this.generateSessionId();
    this.isInitialized = true;
    
    // Log page load
    this.logEvent('page_load', {
      url: window.location.href,
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || 'direct'
    });

    // Log page exit
    window.addEventListener('beforeunload', () => {
      this.logPageExit();
    });

    // Log scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.logScroll(window.scrollY);
      }, 500);
    });

    console.log('🔵 ClickstreamLogger initialized:', this.sessionId);
  },

  // Tạo session ID unique
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  // Gửi log event đến server
  async logEvent(eventType, eventData = {}) {
    const logEntry = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      eventType: eventType,
      ...eventData
    };

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logEntry)
      });
      
      if (!response.ok) {
        console.warn('Failed to log event:', eventType);
      }
    } catch (error) {
      // Fallback: log to console if server unavailable
      console.log('📝 Event (offline):', logEntry);
    }
  },

  // Log click event
  logClick(elementType, elementText, elementId = null) {
    this.logEvent('click', {
      eventName: 'element_click',
      elementType,
      elementText: elementText?.slice(0, 50),
      elementId,
      position: { 
        x: window.event?.clientX || 0, 
        y: window.event?.clientY || 0 
      }
    });
  },

  // Log scroll event
  logScroll(scrollPosition) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxScroll > 0 ? Math.round((scrollPosition / maxScroll) * 100) : 0;
    
    this.logEvent('scroll', {
      eventName: 'page_scroll',
      scrollY: scrollPosition,
      scrollPercentage: Math.min(percentage, 100)
    });
  },

  // Log hover event
  logHover(elementType, elementText) {
    this.logEvent('hover', {
      eventName: 'element_hover',
      elementType,
      elementText: elementText?.slice(0, 50)
    });
  },

  // Log section view (khi scroll đến section)
  logSectionView(sectionId, sectionName) {
    this.logEvent('section_view', {
      eventName: 'section_viewed',
      sectionId,
      sectionName
    });
  },

  // Log form interaction
  logFormInteraction(formId, fieldName, action) {
    this.logEvent('form', {
      eventName: 'form_interaction',
      formId,
      fieldName,
      action
    });
  },

  // Log page exit
  logPageExit() {
    const timeSpent = Date.now() - parseInt(this.sessionId.split('_')[1]);
    this.logEvent('page_exit', {
      eventName: 'page_exit',
      timeSpentMs: timeSpent,
      timeSpentSeconds: Math.round(timeSpent / 1000)
    });
  }
};

export default ClickstreamLogger;
