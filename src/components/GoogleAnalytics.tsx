"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getGAMeasurementId, initGA, isGAEnabled, trackPageView } from '@/lib/analytics';

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString() ?? '';
  const measurementId = getGAMeasurementId();

  useEffect(() => {
    if (measurementId) {
      initGA(measurementId);
    }
  }, [measurementId]);

  useEffect(() => {
    if (!isGAEnabled()) {
      return;
    }

    let search = '';

    try {
      if (searchString) {
        search = `?${searchString}`;
      }
    } catch (error) {
      console.error('Failed to read search params for GA', error);
    }

    trackPageView(`${pathname}${search}`);
  }, [pathname, searchString]);

  return null;
};
