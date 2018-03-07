
import {StartComponent} from './start.component';
describe('Component: Start', () => {

  let component: StartComponent;

  beforeEach(() => {   
    component = new StartComponent("Murthy");
  });

  afterEach(() => { 
      component = null;
  });

  it('Component should return Welcome with name', () => {    
    expect(component.name).toEqual('Welcome Murthy');
  });
});
