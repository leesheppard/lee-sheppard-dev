#!/bin/bash
set -e

echo "Setting up Ruby environment..."
bundle config set --local deployment 'true'
bundle config set --local without 'test'

echo "Installing Ruby dependencies..."
bundle install --jobs 4 --retry 3

echo "Installing Node dependencies..."
yarn install

echo "Building frontend assets..."
yarn build

echo "Building Bridgetown site..."
BRIDGETOWN_ENV=production bundle exec bridgetown build

echo "Build completed successfully!"