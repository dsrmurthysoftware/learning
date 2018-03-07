export class AuthService {
  isAuthenticated(): boolean {
    //!! is converts string to boolean - Bang Bang theory
    return !!localStorage.getItem('token');
  }
}
