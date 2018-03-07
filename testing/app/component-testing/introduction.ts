/*
Jasmine is a javascript testing framework that supports a software development
 practice called Behaviour Driven Development, or BDD.

 It’s a specific flavour of Test Driven Development (TDD).

 Two ways to test angular:
   1. Vanilla Jasmine testing
   2. Angular Test Bed  - ATB
*/

//Vanilla Jasmine testing
function helloWorld() {
  return 'Hello world!';
}

//Jasmine test
describe('Hello world', () => { 
  it('says hello', () => { 
    expect(helloWorld()) 
        .toEqual('Hello world!'); 
  });
});


/*

The describe(string, function): defines Test Suite, a collection of individual Test Specs.

The it(string, function):  defines an individual Test Spec, this contains one or more Test Expectations.

The expect(actual) expression is what we call an Expectation.Expected behavior from app.

The matcher(expected) expression is Matcher. It does a boolean comparison with the 
expected value passed in vs. the actual value passed to the expect function, 
if they are false the spec fails.

Jasmine comes with a few pre-built matchers:
--------------------------------------------------
expect(array).toContain(member);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);


Setup and teardown
-----------------------
Creating and cleaning up activites are need for testin called setup and teardown (for cleaning up)
 
Jasmine functions:
--------------------
beforeAll
This function is called once, before all the specs in describe test suite are run.

afterAll
This function is called once after all the specs in a test suite are finished.

beforeEach
This function is called before each test specification, it function, has been run.

afterEach
This function is called after each test specification has been run.

describe('Hello world', () => {
  let expected = "";

  beforeEach(() => {
    expected = "Hello World";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    expect(helloWorld())
        .toEqual(expected);
  });
});


Running Jasmine tests:
-------------------------
To manually run Jasmine tests we would create a HTML file and include the 
required jasmine javascript and css files :

<link rel="stylesheet" href="jasmine.css">
<script src="jasmine.js"></script>
<script src="jasmine-html.js"></script>
<script src="boot.js"></script>

We then load in the parts of our application code that we want to test, for example if our hello worldfunction was in main.js:

<link rel="stylesheet" href="jasmine.css">
<script src="jasmine.js"></script>
<script src="jasmine-html.js"></script>
<script src="boot.js"></script>

<script src="main.js"></script>
<script src="test.js"></script>

To run the tests we simply open up the HTML file in a browser.


Karma
------- 
Karma is a tool which lets us spawn browsers and run jasmine tests inside of them all
 from the command line. The results of the tests are also displayed on the command line.

Karma can also watch your development files for changes and re-run the tests automatically.

Karma lets us run jasmine tests as part of a development tool chain which requires tests
to be runnable and results inspectable via the command line.

>ng generate pipe  Test

observe test.pipe.ts and test.pipe.spec.ts  files.
import { TestPipe } from './Test.pipe';

describe('Pipe: Test', () => {
  it('create an instance', () => {
    let pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });
});


*/