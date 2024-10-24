import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "https://global-admin-weld.vercel.app/api";

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string, params?: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: any): void {
    console.error("API request failed:", error);
    // You can add more error handling logic here, such as showing notifications
  }
}

const apiService = new ApiService();
export default apiService;
