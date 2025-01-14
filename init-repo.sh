#!/bin/bash

# Initialize git repository
git init

# Add all files
git add .

# Commit initial files
git commit -m "Initial commit of Employee Dashboard"

# Create a new repository on GitHub (you'll need to do this manually first)
# Replace with your GitHub username and repository name
git remote add origin https://github.com/sweekruth/employee-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
