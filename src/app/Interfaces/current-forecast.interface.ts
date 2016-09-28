export interface ICurrentForecast {
    city: string;
    description: string;
    icon: string;
    temperature: number;
    high: number;
    low: number;
    ready: boolean;
}