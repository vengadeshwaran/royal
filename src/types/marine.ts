export type NavigationPage = 
  | 'home'
  | 'about'
  | 'products'
  | 'product-detail'
  | 'services'
  | 'dredging'
  | 'survey'
  | 'applications'
  | 'careers'
  | 'contact'
  | 'quote';

export type ProductCategory = 
  | 'all'
  | 'dredgers'
  | 'accessories'
  | 'marine-equipment'
  | 'brokerage';

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface DredgerProduct {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  dischargeDiameter?: string;
  maxDredgingDepth?: string;
  waterFlowCapacity?: string;
  solidProduction?: string;
  totalInstalledPower?: string;
  dischargeDistance?: string;
  keyFeatures: string[];
  applications: string[];
  technicalSpecs: TechnicalSpec[];
  standardEquipment: string[];
  optionalEquipment: string[];
}

export interface MarineService {
  id: string;
  title: string;
  category: 'dredging' | 'survey' | 'marine-support' | 'consultancy';
  summary: string;
  description: string;
  image: string;
  capabilities: string[];
  standards: string[];
  applications: string[];
  equipmentUsed: string[];
}

export interface SurveyCapability {
  id: string;
  title: string;
  type: string;
  description: string;
  equipment: string;
  deliverables: string[];
  ihoClass: string;
}

export interface MarineApplication {
  id: string;
  title: string;
  sector: string;
  description: string;
  typicalChallenges: string[];
  recommendedSolutions: string[];
  image: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface QuoteFormData {
  serviceCategory: string;
  specificEquipmentOrService: string;
  projectLocation: string;
  targetTimeline: string;
  dredgingDepth?: string;
  estimatedVolume?: string;
  soilType?: string;
  dischargeDistance?: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  country: string;
  projectDescription: string;
}
