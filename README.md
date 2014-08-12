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
###### About
Constraints are similar to Values with the exception that they can be injected into a module config and CANNOT be wraped in a decorator.
Even though constraints imply immutability there is no mechinism to prevent them from being changed.

###### Testing Points
Pretty much the same as Values.

#### Testing Factories
###### About
Factories are just a creation pattern for creating a singleton service in AngularJS.
They are created by a function that returns an object.
Factories are used to encapsulated business logic and communicate with you backend services.
Because they are singletons they are often used to hold state that is fethced form the server.

###### Testing Points
Because Factories interact with backend services there is often a need to utilze the `angular.mock.$httpBackend`
service mock out all $http calls.

#### Testing Providers
###### About
Providers are like Factories with the expeption that they can be configured at module bootstrap time in a `modlue.config()` call.

###### Testing Points
In testing providers you want to test them like Factories, executing your busiess logic. But you also want to test how they act with the default config and a bootstraped custom config. 

#### Testing Controllers
###### About

###### Testing Points

#### Testing Filters
###### About

###### Testing Points

#### Testing Directives
###### About

###### Testing Points

#### Testing Interceptors
###### About

###### Testing Points

#### Testing Decorators
###### About

###### Testing Points


