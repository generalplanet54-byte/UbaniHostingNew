import { useState, useEffect } from 'react';
import { PricingConfig, getPricingConfig } from '../utils/pricing';

export const usePricing = () => {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPricing = () => {
      try {
        const config = getPricingConfig();
        setPricing(config);
      } catch (error) {
        console.error('Error loading pricing config:', error);
        // Fallback to default pricing
        setPricing(getPricingConfig());
      } finally {
        setIsLoading(false);
      }
    };

    loadPricing();
  }, []);

  const formatPrice = (amount: number): string => {
    if (!pricing) return '$0';
    return `${pricing.symbol}${amount.toLocaleString()}`;
  };

  return {
    pricing,
    isLoading,
    formatPrice,
    currency: pricing?.currency || 'USD',
    symbol: pricing?.symbol || '$'
  };
};