// Regional pricing configuration
export interface PricingConfig {
  currency: string;
  symbol: string;
  hostingPlans: {
    business: number;
    pro: number;
    enterprise: number;
  };
  domainServices: {
    international: number;
    countrySpecific: number;
    transfer: number;
  };
  technicalServices: {
    basicMigration: number;
    cmsMigration: number;
    emailMigration: number;
    securityHardening: number;
    seoSetup: number;
    hourlySupport: number;
  };
  ecommerceServices: {
    basic: number;
    standard: number;
    premium: number;
  };
}

// Pricing configurations for different regions
const PRICING_CONFIGS: Record<string, PricingConfig> = {
  ZA: {
    currency: 'ZAR',
    symbol: 'R',
    hostingPlans: {
      business: 2499,
      pro: 4999,
      enterprise: 9199
    },
    domainServices: {
      international: 199,
      countrySpecific: 249,
      transfer: 419
    },
    technicalServices: {
      basicMigration: 2999,
      cmsMigration: 4179,
      emailMigration: 1489,
      securityHardening: 2999,
      seoSetup: 3669,
      hourlySupport: 989
    },
    ecommerceServices: {
      basic: 18399,
      standard: 30149,
      premium: 48549
    }
  },
  DEFAULT: {
    currency: 'USD',
    symbol: '$',
    hostingPlans: {
      business: 149,
      pro: 299,
      enterprise: 549
    },
    domainServices: {
      international: 12,
      countrySpecific: 15,
      transfer: 25
    },
    technicalServices: {
      basicMigration: 179,
      cmsMigration: 249,
      emailMigration: 89,
      securityHardening: 179,
      seoSetup: 219,
      hourlySupport: 59
    },
    ecommerceServices: {
      basic: 1099,
      standard: 1799,
      premium: 2899
    }
  }
};

// Detect user's country based on timezone and other browser info
export const detectUserCountry = (): string => {
  try {
    // Try to get timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // South African timezones
    if (timezone === 'Africa/Johannesburg' || timezone === 'Africa/Cape_Town') {
      return 'ZA';
    }
    
    // Try to get locale
    const locale = navigator.language || navigator.languages?.[0];
    if (locale?.includes('za') || locale?.includes('ZA')) {
      return 'ZA';
    }
    
    return 'DEFAULT';
  } catch (error) {
    return 'DEFAULT';
  }
};

// Get pricing configuration for user's region
export const getPricingConfig = (): PricingConfig => {
  const country = detectUserCountry();
  return PRICING_CONFIGS[country] || PRICING_CONFIGS.DEFAULT;
};

// Format price with currency symbol
export const formatPrice = (amount: number, config: PricingConfig): string => {
  return `${config.symbol}${amount.toLocaleString()}`;
};

// Get formatted price for a specific service
export const getServicePrice = (service: keyof PricingConfig, subService?: string): string => {
  const config = getPricingConfig();
  
  if (subService && typeof config[service] === 'object') {
    const serviceConfig = config[service] as any;
    const amount = serviceConfig[subService];
    return formatPrice(amount, config);
  }
  
  return formatPrice(0, config);
};