Yet Another Weather App (Y.A.W.A)
====

### Demo app for Angular Testing Prestentaion at MidwestJS 2014

This is a fully working (although a bit contrived) example of an AngularJS front end app.

The applcation uses the Weather Underground API for the typeahead city search and for fetching
the weather of the selected city.

This app is for demonstration purposes and attempts to show examples of how test the many artifacts of 
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

###### Example Files
[ApiKeyValue.js](https://github.com/zanthrash/yawa/blob/master/app/scripts/services/ApiKeyValue.js)

[ApiKeyValue.spec.js](https://github.com/zanthrash/yawa/blob/master/test/spec/services/ApiKeyValue.spec.js)

#### Testing Constants
###### About
Constraints are similar to Values with the exception that they can be injected into a module config and CANNOT be wraped in a decorator.
Even though constraints imply immutability there is no mechinism to prevent them from being changed.

###### Testing Points
Pretty much the same as Values.

###### Example Files
[Constants.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fservices%2FConstants.js)

[Constants.spec.js](https://github.com/zanthrash/yawa/blob/master/test/spec/services/Constants.spec.js)

#### Testing Factories
###### About
Factories are just a creation pattern for creating a singleton service in AngularJS.
They are created by a function that returns an object.
Factories are used to encapsulated business logic and communicate with you backend services.
Because they are singletons they are often used to hold state that is fethced form the server.

###### Testing Points
Because Factories interact with backend services there is often a need to utilze the `angular.mock.$httpBackend`
service mock out all $http calls.

###### Example Files
[WeatherFetchingService.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fservices%2FWeatherFetchingService.js)

[WeatherFetchingService.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Fservices%2FWeatherFetchingService.spec.js)

#### Testing Providers
###### About
Providers are like Factories with the expeption that they can be configured at module bootstrap time in a `module.config()` call.

###### Testing Points
In testing providers you want to test them like Factories, executing your busiess logic. But you also want to test how they act with the default config and a bootstraped custom config. 

###### Example Files
[CitySearchService.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fservices%2FCitySearchService.js)

[CitySearchService.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Fservices%2FCitySearchService.spec.js)


#### Testing Controllers
###### About
Controllers are used to back your views with data and functionallity. The should be dead stupid and not contain any bussiness logic if it can be avoided; favoring delegation to Factories/Services/Providers instead.

###### Testing Points
If you encapsulate you business logic in the Service layer testing controllers should be very easy. You are bascially testing the interactions with the Services.  

Remember you just want to make sure the controller calls the service with the right parameters. This is where a good mocking libray comes in handy. You don't want to have to mock out `$httpBackend` calls when testing Controllers.

###### Example Files
[SearchController.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fcontrollers%2FSearchController.js)

[SearchController.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Fcontrollers%2FSearchController.spec.js)

#### Testing Filters
###### About
Filters are best used when you want to take an input and do sometype of transformation on it.  

e.g. change `new Date().getTime()` to `two minutes ago`

It is generally not a good idea to use them to wrap data in html tags(as I've seen too many times). Better to use a Directive for that.

###### Testing Points
Filter are simple functions that have an imput and an output, so testing them is pretty easy.  Just the `$filter()` function to create the filter funtion then pass your input in.

###### Example Files
[TimeFilter.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Ffilters%2FTimeFilter.js)

[TimeFilter.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Ffilters%2FTimeFilter.spec.js)


#### Testing Directives
###### About
Directives are all about encapsulation DOM creation, maniulation, and event handling. Because the are the Swiss Army Knife of AngularJS the is no single way to describe how to test them.

###### Testing Points
The trickiest part of testing a directive is getting it set up in your test.

The pattern usually goes like this:
* create a local `$scope` variable by injecting `$rootScope` and calling its `$new()` function.
* set you bindable data to `$scope`
* create you directive element by passing the directives html into `angulr.element(<my-directive></my-directive>)`
* compile your element by passing it into the `$compile(element)` this will return a function
* which you need to call with the `$scope` that you previously created. This will give you a JQuery or jQLite DOMObjet that you can inspect and trigger event on.

###### Example Files
[WeatherResultsDirective.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fdirectives%2FWeatherResultsDirective.js)

[WeatherResultsDirective.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Fdirectives%2FWeatherResultsDirective.spec.js)


#### Testing Interceptors
###### About
Interceptors intercept ALL http `requests`, `requestError`, `response`, `responseError`.  They are created similar to a factory and need to a have one or more of the above mentions functions.  Interceptors work in a chain of responsibiliy pattern where you one or more intercetpors to a list on $httpProvider.

###### Testing Points
Fairly simple to test.  Just inject the interceptor into your test and exercise the functions.

###### Example Files
[WeatherInterceptorService.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fservices%2FWeatherInterceptorService.js)

[WeatherInterceptorService.spec.js](https://github.com/zanthrash/yawa/blob/master/test%2Fspec%2Fservices%2FWeatherIntercepterService.spec.js)


#### Testing Decorators
###### About
Decorators let you alter the functionality of any Service except Constraints.  This can be very usefull if you need/want to alter any of the base AngularJS Services, third party Services, or even your own Services (can be usefull in testing ;) )

###### Testing Points
Decorator testing is prety strait forward.  

* Just bootstrap the module that has your decorator. 
* Inject the Service that is to be Decorated
* Exercise the now decorated service method.
* Verify the new decorated outcome.

###### Example Files
[LogDecorator.js](https://github.com/zanthrash/yawa/blob/master/app%2Fscripts%2Fdecorators%2FLogDecorator.js)

[LogDecorator.spec.js](https://github.com/zanthrash/yawa/blob/master/test/spec/decorators/LogDecorator.spec.js)
