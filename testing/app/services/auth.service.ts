
export class AuthService {
  isAuthenticated(): boolean {
    //!! is converts null to boolean - Bang Bang theory
    return !!localStorage.getItem('token');
  }
}
