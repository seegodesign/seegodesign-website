import type { GtagEvent, GtagEventParams } from '@/lib/analytics';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const apiSecret = process.env.GA_API_SECRET;

export const trackServerEvent = async (eventName: GtagEvent, params?: GtagEventParams) => {
  if (!measurementId || !apiSecret) {
    return;
  }

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: globalThis.crypto?.randomUUID?.() ?? `server-${Date.now()}`,
          events: [
            {
              name: eventName,
              params,
            },
          ],
        }),
      }
    );
  } catch (error) {
    console.error('Failed to send GA server event', error);
  }
};
