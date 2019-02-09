# Stock Charts

### Quickstart

```
# install Postgresql
# Create db
createdb stocks

# Run db script (See db-script file for [script])
psql stocks
[script]

# install back-end
cd stock-charts
dotnet restore

# install front-end
cd ClientApp
yarn

# start
cd ..
dotnet run
```

#### UI Tech

* [create-react-app](https://github.com/facebook/create-react-app)
* [@reach/router](https://github.com/reach/router)
* [easy-peasy](https://github.com/ctrlplusb/easy-peasy)
* [styled-components](https://github.com/styled-components/styled-components)
* [formik](https://github.com/jaredpalmer/formik)
* [yup](https://github.com/jquense/yup)
* [chart.js](https://github.com/chartjs/chart.js)