#!/bin/bash

# Base instruction - always included
BASE_INSTRUCTION="Review and improve this blog entry. Check for grammar, clarity, and structure."

# Image description instruction - added when images are present
IMAGE_DESCRIPTION=" The directory contains images. Please suggest appropriate alt text and captions for each image in the .mdx files."

# Check if directory argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

DIR="$1"

# Check if directory exists
if [ ! -d "$DIR" ]; then
    echo "Error: Directory '$DIR' does not exist"
    exit 1
fi

# Build the prompt starting with base instruction
PROMPT="$BASE_INSTRUCTION"

# Check if directory contains image files
HAS_IMAGES=false
if find "$DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.svg" \) | grep -q .; then
    PROMPT="${PROMPT}${IMAGE_DESCRIPTION}"
    HAS_IMAGES=true
fi

# Add content file if it exists
if [ -f "$DIR/content" ]; then
    PROMPT="${PROMPT}

$(cat "$DIR/content")"
else
    echo "Error: 'content' file not found in directory '$DIR'"
    exit 1
fi

# Add image_descr file if images exist and file exists
if [ "$HAS_IMAGES" = true ] && [ -f "$DIR/image_descr" ]; then
    PROMPT="${PROMPT}

$(cat "$DIR/image_descr")"
fi

# Call Claude Code with complete prompt
claude "$PROMPT"
