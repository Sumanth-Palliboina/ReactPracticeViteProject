1. Create Project
"npm create vite@latest ." or "npm create vite@latest myapp"

2. bootstrap
"npm install react-bootstrap bootstrap"
In main.jsx, we have to import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

3. material ui ->Material UI is an open-source React component library that implements Google's Material Design
"npm install @mui/material @emotion/react @emotion/styled @mui/icons-material"


Semantic Versioning Basics
Format: MAJOR.MINOR.PATCH

MAJOR → Breaking changes

MINOR → New features, backward-compatible

PATCH → Bug fixes, backward-compatible

In npm’s package.json, the tilde ~ allows only patch updates within the same minor version, while the caret ^ allows both minor and patch updates within the same major version.
~1.0.0 ==>1.0.0 to 1.0.9 ==> not 1.1.0
^1.0.0 ==>1.0.0 to 1.9.9 ==> not 2.0.0


CASCADING STYLE SHEET: used to define styles for html elements
SCSS (Syntactically Awesome Stylesheet) -->same like CSS but nesting
SASS(Sassy CSS) -->with indentation and no semicolons and no curly braces

CSS-IN-JS : styled-components (npm install styled-components)

Routing:
npm install react-router-dom

NavLink is a special component in React Router that’s designed for navigation links which need to reflect their active state.
<NavLink 
  to="/products" 
  className={({ isActive }) => isActive ? "active-link" : ""}
  style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "blue" : "gray"
  })}
>
  Products
</NavLink>

<Outlet /> in React Router v6 is a placeholder component used for rendering child routes inside a parent route. 

*To move conatiner of elements to right, margin-left value as auto