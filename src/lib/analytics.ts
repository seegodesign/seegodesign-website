import type { PaidToolKey } from '@/lib/paidToolConfig';
import {
  ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
  APP_DECISION_TOOL_PRODUCT_PRICE,
  ONE_DAY_WEBSITE_DEPOSIT_PRICE,
  WEBSITE_FIX_PRIORITY_PRODUCT_PRICE,
} from '@/library/constants';

export type GtagEvent =
  | 'page_view'
  | 'click'
  | 'conversion'
  | 'form_submit'
  | 'purchase'
  | 'sign_up'
  | 'login'
  | 'begin_checkout'
  | 'add_to_cart'
  | 'view_item'
  | 'view_item_list'
  | 'generate_lead';

export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
  items?: GtagItem[];
  [key: string]: unknown;
}

export type GtagItem = {
  item_id?: string;
  item_name?: string;
  price?: number;
  quantity?: number;
  [key: string]: unknown;
};

const TOOL_PRODUCT_NAMES: Record<PaidToolKey, string> = {
  'website-fix-priorities': 'Website Fix Priorities Tool',
  'accessibility-fix-priorities': 'Accessibility Fix Priorities Tool',
  'app-decision-tool': 'App Decision Tool',
};

const TOOL_PRODUCT_PRICES: Record<PaidToolKey, number> = {
  'website-fix-priorities': WEBSITE_FIX_PRIORITY_PRODUCT_PRICE,
  'accessibility-fix-priorities': ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
  'app-decision-tool': APP_DECISION_TOOL_PRODUCT_PRICE,
};

export const getToolProductMetadata = (tool: PaidToolKey) => {
  return {
    item_id: tool,
    item_name: TOOL_PRODUCT_NAMES[tool],
    price: TOOL_PRODUCT_PRICES[tool],
    category: 'digital-tool',
  };
};

export const getVIPDayProductMetadata = () => {
  return {
    item_id: 'vip-day-deposit',
    item_name: 'VIP Day Deposit',
    price: ONE_DAY_WEBSITE_DEPOSIT_PRICE,
    category: 'vip-day',
  };
};

/**
 * Returns the configured Google Analytics measurement ID, if any.
 */
export const getGAMeasurementId = (): string | undefined => {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
};

/**
 * Determines if Google Analytics is enabled for the client.
 */
export const isGAEnabled = (): boolean => {
  return Boolean(getGAMeasurementId());
};

/**
 * Initializes Google Analytics for the provided measurement ID.
 */
export const initGA = (
  measurementId: string,
  config?: Record<string, unknown>,
) => {
  if (typeof window === 'undefined' || !measurementId) {
    return;
  }

  try {
    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    if (typeof window.gtag !== 'function') {
      return;
    }
    window.gtag('js', new Date());
    if (config) {
      window.gtag('config', measurementId, config);
    } else {
      window.gtag('config', measurementId);
    }
  } catch (error) {
    console.error('Failed to initialize GA', error);
  }
};

/**
 * Sends a custom event to Google Analytics when available.
 */
export const trackEvent = (eventName: GtagEvent, params?: GtagEventParams) => {
  if (!isGAEnabled() || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  try {
    window.gtag('event', eventName, params);
  } catch (error) {
    console.error('Failed to send GA event', error);
  }
};

/**
 * Tracks a page view for the provided URL.
 */
export const trackPageView = (url: string) => {
  trackEvent('page_view', { page_path: url });
};

/**
 * Tracks a purchase conversion event in Google Analytics.
 */
export const trackConversion = (params: {
  transaction_id: string;
  value: number;
  currency?: string;
  items?: GtagItem[];
}) => {
  trackEvent('purchase', params);
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown> | GtagEventParams,
    ) => void;
  }
}
