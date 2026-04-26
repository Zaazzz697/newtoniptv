const WA_NUMBER = "212782388073";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink(
  "Hi! I'm interested in UKStreamTV IPTV. Can you help me get started?"
);

export const WA_TRIAL = waLink(
  "Hi! I'm interested in the UKStreamTV 24-hour free trial. Can you help me?"
);

export function waPlan(name: string, price: number, period: string) {
  return waLink(
    `Hi! I'm interested in the UKStreamTV ${name} plan (£${price.toFixed(2)} / ${period}). Can you help me subscribe?`
  );
}
