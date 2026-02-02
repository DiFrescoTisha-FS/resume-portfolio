/**
 * API Type Definitions - mytCreative Application Starter Kit (ASK)
 * * LEARNING NOTE: Centralizing and defining base API response types
 * ensures application-wide consistency and type safety when fetching data.
 * All custom API services (like wordpress.service.ts) should use these base types.
 */

// BEST PRACTICE: Use a generic interface for the standard API response wrapper.
// This allows type-checking of the actual payload (T) while keeping the wrapper consistent.
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

// BEST PRACTICE: Define a standard structure for handling and parsing API errors.
export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}