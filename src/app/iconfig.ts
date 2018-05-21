export interface IConfig {
  apiUrl: ApiUrl;
}

export interface ApiUrl {
  teamList: string;
  teamDetail: string;
  session: string;
  login: string;
  logout: string;
  register: string;
}
