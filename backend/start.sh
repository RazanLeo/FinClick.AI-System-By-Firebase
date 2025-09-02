#!/bin/sh

# Set strict error checking
set -e

echo "Starting backend setup..."

# Install Python packages that are not available in nixpkgs or need specific versions
# camelot-py requires a specific dependency chain which is easier to resolve with pip.
echo "Installing camelot-py with pip..."
pip install camelot-py[cv]

echo "Python package installation complete."

# Now, run the main application
echo "Starting Uvicorn server on 0.0.0.0:8000..."
uvicorn backend.simple_server:app --host 0.0.0.0 --port 8000
