// Google Analytics 4 utilities
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Check if analytics should be enabled
 */
export const isAnalyticsEnabled = (): boolean => {
  // Respect Do Not Track browser setting
  if (navigator.doNotTrack === '1') {
    return false;
  }

  // Check if gtag is loaded
  return typeof window.gtag === 'function';
};

/**
 * Track custom events to GA4
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
): void => {
  if (!isAnalyticsEnabled()) {
    console.log('Analytics disabled or not loaded');
    return;
  }

  try {
    window.gtag!('event', eventName, {
      ...parameters,
      send_to: 'GA_MEASUREMENT_ID', // Will be replaced with actual ID
    });

    console.log(`GA4 Event: ${eventName}`, parameters);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

/**
 * Track PDF download events
 */
export const trackDownload = (format: 'pdf' | 'docx' = 'pdf'): void => {
  trackEvent('resume_download', {
    event_category: 'engagement',
    event_label: format,
    value: 1,
  });
};

/**
 * Track theme toggle events
 */
export const trackThemeToggle = (theme: 'light' | 'dark'): void => {
  trackEvent('theme_toggle', {
    event_category: 'user_preference',
    event_label: theme,
    theme_selected: theme,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (linkType: string, url: string): void => {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: linkType,
    link_url: url,
    link_domain: new URL(url).hostname,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    percent_scrolled: percentage,
  });
};
