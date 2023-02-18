#!/bin/sh
tree -H "." -P "*.html" -I node_modules --prune > index.html