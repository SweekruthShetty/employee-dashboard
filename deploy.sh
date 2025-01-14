#!/bin/bash
# Exit on any error
set -e

# Build the project
ng build --configuration=production

# Navigate to the dist directory
cd dist/employee-dashboard

# If you're deploying to a custom domain, uncomment and modify the next line
# echo 'www.example.com' > CNAME

# Initialize a git repository
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch of your GitHub repository
# Replace <USERNAME> and <REPOSITORY> with your GitHub username and repo name
git push -f https://github.com/sweekruth/employee-dashboard.git master:gh-pages

cd -
