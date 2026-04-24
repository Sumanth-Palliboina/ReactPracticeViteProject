1. Create Project
"npm create vite@latest ." or "npm create vite@latest myapp"

2. bootstrap
"npm install react-bootstrap bootstrap"
In main.jsx, we have to import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

Semantic Versioning Basics
Format: MAJOR.MINOR.PATCH

MAJOR → Breaking changes

MINOR → New features, backward-compatible

PATCH → Bug fixes, backward-compatible

In npm’s package.json, the tilde ~ allows only patch updates within the same minor version, while the caret ^ allows both minor and patch updates within the same major version.
~1.0.0 ==>1.0.0 to 1.0.9 ==> not 1.1.0
^1.0.0 ==>1.0.0 to 1.9.9 ==> not 2.0.0