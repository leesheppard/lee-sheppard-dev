#!/bin/bash
set -e

echo "Installing dependencies..."
bundle install
yarn install

echo "Building frontend assets..."
yarn build

echo "Building Bridgetown site..."
BRIDGETOWN_ENV=production bundle exec bridgetown build

echo "Build completed successfully!"