module.exports = {                        
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:wght@500'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Roboto Mono", monospace'
    }
  },                     
  webpackConfig: {                           
    module: { 
      rules: [                               
        {                                    
          test: /\.jsx?$/,                                 
          exclude: /node_modules/,                                 
          loader: "babel-loader"                              
        },
        {
          test:/\.(s*)css$/,
          use:['style-loader','css-loader', 'sass-loader']
        }
      ]                           
    }                         
  },                      
};