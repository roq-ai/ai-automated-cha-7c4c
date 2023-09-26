interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Owner'],
  customerRoles: [],
  tenantRoles: ['System Owner', 'Administrator'],
  tenantName: 'Customer',
  applicationName: 'ai automated chat',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage customers', 'Manage queries', 'Manage topics'],
  getQuoteUrl: 'https://app.roq.ai/proposal/77aa5877-6697-4ee2-b5a2-9ddd807fed58',
};
