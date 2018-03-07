import {LoginComponent} from './auth.component';
import {AuthService} from "./auth.service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => { 
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeFalsy();
  });
});
