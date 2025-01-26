import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare const formatDate: (dateString: string) => string;
export declare const formatDateTime: (time: string) => string;
export declare const getDaySuffix: (day: number) => string;
export declare function formatTimeUpdate(epoch: string): string;
export declare const getWeatherForecast: (location: string) => Promise<any>;
export declare const backgrounds: (condition: string) => string;
