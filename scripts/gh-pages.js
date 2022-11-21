var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jtpox/portfolio.git', 
        user: {
            name: 'Jian Ting',
            email: 'me@jtpox.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)