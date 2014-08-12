Yet Another Weather App (Y.A.W.A)
====

### Demo app for Angular Testing Prestentaion at MidwestJS 2014

This is a fully working (although a bit contrived) example of an AngularJS front end app.

The applcation uses the Weather Underground API for the typeahead city search and for fetching
the weather of the selected city.

This app is for demonstration purposes and attemts to show examples of how test the many artifacts of 
the AgularJS framework using the [Jasmine](http://jasmine.github.io/) testing framework and the [Karma](http://karma-runner.github.io/0.12/index.html) test runner.



#### TOC
* [Setup](#setup)
* [Testing Values](#testing-values)
* [Testing Constants](#testing-constants)
* [Testing Factories](#testing-factories)
* [Testing Providers](#testing-providers)
* [Testing Controllers](#testing-controllers)
* [Testing Filters](#testing-filters)
* [Testing Directives](#testing-directives)
* [Testing Intercptors](#testing-interceptors)
* [Testing Decorators](#testing-decorators)



#### Setup 

1. Clone the repo.
2. Get a [Weather Underground API Key](http://www.wunderground.com/weather/api/)
3. Navigate to the directory you cloned the repo
4. At the command line run `npm install && bower install`
5. Afer all packages have donwloaded run `grunt serve`

#### Testing Values
###### About
Values in AngularJS are key-value pairs that can be injected into other AngularJS artifacts.  
Values can be useful for saving application level state.

###### Testing Points
Because Value are simple key-value store they are easy to test. There should probably be a test for:
* It can be properly injected
* It default state is properly set
* When the state is mutated and it is injected somewhere else the Value reflects the change.

#### Testing Constants

#### Testing Factories

#### Testing Providers

#### Testing Controllers

#### Testing Filters

#### Testing Directives

#### Testing Interceptors

#### Testing Decorators


