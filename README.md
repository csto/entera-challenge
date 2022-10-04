# Hello

This is a rails and react app.  See "Getting Started" below for instructions on how to run the app.

A couple notes about the app:
* After searching, you can click on a marker to view the colleges name.
* The performance of the College Scorecard API is quite slow.  I opted to send requests to it to show you that I know how to work with API's, but considering the size of the dataset, it would make sense to just download it and serve it locally to get better performance. Alternatively, the responses could be cached.
* In an ideal world, I would have added linters to ensure style consistency, but I opted not to to save time.

# Getting Started

Install the dependencies:
```
bundle
yarn
```

Start the rails server with the required credentials:
```
GOOGLE_MAPS_API_KEY=XXXX COLLEGE_SCORECARD_API_KEY=XXXX rails s
```

Start the esbuild server:
```
yarn build --watch
```

Run the Ruby tests:
```
rspec
```

Run the JS tests:
```
yarn test
```
