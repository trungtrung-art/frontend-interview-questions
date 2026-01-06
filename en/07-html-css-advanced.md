# Advanced HTML/CSS Interview Questions
## Accessibility, Layout, and Modern CSS

---

## TABLE OF CONTENTS
- [Part 1: Semantic HTML & Accessibility](#part-1-semantic-html--accessibility)
- [Part 2: CSS Layout (Flexbox & Grid)](#part-2-css-layout-flexbox--grid)
- [Part 3: CSS Architecture](#part-3-css-architecture)
- [Part 4: Modern CSS Features](#part-4-modern-css-features)
- [Part 5: Responsive Design](#part-5-responsive-design)
- [Detailed Answers](#detailed-answers)

---

# PART 1: SEMANTIC HTML & ACCESSIBILITY

## Question 1: Semantic HTML
**Which is the correct use of semantic HTML?**

```html
<!-- A -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- B -->
<header>
  <nav>...</nav>
</header>
```

- A) Both A and B are correct
- B) Only B is correct - semantic elements are better for accessibility and SEO
- C) Only A is correct - div is more flexible
- D) There is no difference

---

## Question 2: ARIA Roles
**When should you use ARIA attributes?**

- A) Always
- B) Only when semantic HTML cannot express the meaning
- C) To replace all semantic HTML
- D) Never necessary

---

## Question 3: Accessible Forms
**Which form is more accessible?**

```html
<!-- A -->
<input type="text" placeholder="Enter name">

<!-- B -->
<label for="name">Name</label>
<input type="text" id="name" aria-describedby="name-hint">
<span id="name-hint">Enter your full name</span>
```

- A) Form A
- B) Form B - has label and description for screen readers
- C) They are the same
- D) Neither is accessible

---

## Question 4: Heading Hierarchy
**Which heading structure is correct?**

```html
<!-- A -->
<h1>Page Title</h1>
<h3>Section</h3>
<h2>Subsection</h2>

<!-- B -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

- A) Structure A is correct
- B) Structure B is correct - headings must be sequential
- C) You can skip heading levels
- D) Heading order doesn't matter

---

## Question 5: Image Accessibility
**What is the appropriate alt text for a decorative image?**

- A) `alt="decorative image"`
- B) `alt=""`
- C) Omit the alt attribute
- D) `alt="image"`

---

## Question 6: Focus Management
**Which attribute makes a custom element focusable?**

- A) `focusable="true"`
- B) `tabindex="0"`
- C) `focus="true"`
- D) `accessible="true"`

---

## Question 7: Color Contrast
**What is the WCAG AA minimum contrast ratio for normal text?**

- A) 3:1
- B) 4.5:1
- C) 7:1
- D) 2:1

---

## Question 8: Skip Links
**What is a skip link used for?**

- A) Skipping image loading
- B) Allowing keyboard users to skip navigation to main content
- C) Skipping CSS animations
- D) Skipping advertisements

---

## Question 9: Live Regions
**Which ARIA attribute announces dynamic content changes?**

- A) `aria-dynamic="true"`
- B) `aria-live="polite"` or `aria-live="assertive"`
- C) `aria-announce="true"`
- D) `aria-update="auto"`

---

## Question 10: Button vs Link
**When should you use `<button>` vs `<a>`?**

- A) There is no difference
- B) Button for actions, Link for navigation
- C) Link for actions, Button for navigation
- D) Always use button

---

# PART 2: CSS LAYOUT (FLEXBOX & GRID)

## Question 11: Flexbox Alignment
**How do you center both horizontally and vertically with flexbox?**

```css
.container {
  display: flex;
  /* A */
  justify-content: center;
  align-items: center;

  /* B */
  justify-items: center;
  align-content: center;
}
```

- A) Option A
- B) Option B
- C) Both A and B are correct
- D) Neither option is correct

---

## Question 12: flex Property
**What does `flex: 1 0 auto` mean?**

- A) `flex-grow: 1`, `flex-shrink: 0`, `flex-basis: auto`
- B) `flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`
- C) `flex-grow: auto`, `flex-shrink: 1`, `flex-basis: 0`
- D) Error

---

## Question 13: Grid Template
**Which code creates a 3-column grid with a flexible middle column?**

```css
/* A */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}

/* B */
.grid {
  display: grid;
  grid-template-columns: 200px auto 200px;
}
```

- A) Only A is correct
- B) Only B is correct
- C) Both A and B are correct but have different behavior
- D) Both A and B are identical

---

## Question 14: Grid Area
**How do you define and use grid-area?**

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: ???; }
```

- A) `grid-area: "header";`
- B) `grid-area: header;`
- C) `grid-area: 1 / 1 / 2 / 3;`
- D) Both B and C are correct

---

## Question 15: Flexbox vs Grid
**When should you use Grid instead of Flexbox?**

- A) Always use Grid
- B) Grid for 2D layout, Flexbox for 1D layout
- C) Grid for navigation, Flexbox for page layout
- D) There is no difference

---

## Question 16: gap Property
**What does the `gap` property work with?**

- A) Grid only
- B) Flexbox only
- C) Both Grid and Flexbox
- D) Inline elements only

---

## Question 17: auto-fill vs auto-fit
**What is the difference between `auto-fill` and `auto-fit`?**

```css
/* A */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* B */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

- A) There is no difference
- B) `auto-fill` keeps empty tracks, `auto-fit` collapses empty tracks
- C) `auto-fit` keeps empty tracks, `auto-fill` collapses empty tracks
- D) `auto-fill` only works with fixed sizes

---

## Question 18: Order Property
**What does the Flexbox `order` property affect?**

- A) DOM order
- B) Visual order only
- C) Tab order
- D) B and C

---

## Question 19: align-self
**Which property does `align-self` override?**

- A) `justify-content`
- B) `align-items`
- C) `align-content`
- D) `justify-items`

---

## Question 20: Subgrid
**What does CSS Subgrid allow you to do?**

- A) Create nested grids with independent tracks
- B) Child grid inherits track sizes from parent grid
- C) Create circular grids
- D) Animate grid items

---

# PART 3: CSS ARCHITECTURE

## Question 21: CSS Specificity
**Order from highest to lowest specificity?**

```css
/* A */ #id { }
/* B */ .class { }
/* C */ element { }
/* D */ !important
```

- A) A > B > C > D
- B) D > A > B > C
- C) D > B > A > C
- D) A > D > B > C

---

## Question 22: BEM Naming
**Which BEM class name is correct?**

- A) `.card__header--large`
- B) `.card-header-large`
- C) `.card_header_large`
- D) `.cardHeaderLarge`

---

## Question 23: CSS-in-JS
**What are the advantages of CSS-in-JS?**

- A) Scoped styles, dynamic styling, co-location with components
- B) Smaller bundle size
- C) Faster runtime performance
- D) Better browser support

---

## Question 24: CSS Modules
**What problem do CSS Modules solve?**

- A) Performance
- B) Class name collisions (scoped locally by default)
- C) Browser compatibility
- D) Animation

---

## Question 25: Critical CSS
**What is Critical CSS?**

- A) CSS for error messages
- B) Inline CSS for above-the-fold content to improve FCP
- C) CSS for important elements
- D) Minified CSS

---

# PART 4: MODERN CSS FEATURES

## Question 26: CSS Variables
**How do you define and use CSS custom properties?**

```css
/* Define */
:root {
  ???
}

/* Use */
.element {
  color: ???;
}
```

- A) `$primary: blue;` and `color: $primary;`
- B) `--primary: blue;` and `color: var(--primary);`
- C) `@primary: blue;` and `color: @primary;`
- D) `primary: blue;` and `color: primary;`

---

## Question 27: CSS Container Queries
**What do container queries allow you to do?**

- A) Style based on viewport size
- B) Style based on container size
- C) Style based on content
- D) Style based on network

---

## Question 28: :has() Selector
**What does the `:has()` pseudo-class do?**

```css
.card:has(img) { }
```

- A) Select all cards
- B) Select cards that contain an img element (parent selector)
- C) Select img inside card
- D) Error - invalid selector

---

## Question 29: @layer
**What is CSS @layer used for?**

- A) Create z-index layers
- B) Control cascade order of styles
- C) Create animation layers
- D) Group media queries

---

## Question 30: clamp()
**What does the `clamp()` function do?**

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

- A) Randomly pick a value
- B) Return minimum, preferred, maximum - fluid value within range
- C) Calculate average
- D) Error

---

# PART 5: RESPONSIVE DESIGN

## Question 31: Mobile-first
**What does mobile-first approach mean?**

- A) Design for mobile only
- B) Base styles for mobile, use min-width media queries to enhance
- C) Use max-width media queries
- D) Hide content on mobile

---

## Question 32: Viewport Units
**What is the difference between `vh` and `dvh`?**

- A) There is no difference
- B) `dvh` accounts for dynamic viewport (mobile browser UI)
- C) `vh` accounts for dynamic viewport
- D) `dvh` is not supported

---

## Question 33: Responsive Images
**How do you provide responsive images?**

```html
<img
  srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
  sizes="(max-width: 600px) 300px, 600px"
  src="medium.jpg"
>
```

- A) Browser chooses best image based on viewport and pixel density
- B) Browser loads all images
- C) Only the `src` image is loaded
- D) Error

---

## Question 34: aspect-ratio
**What does the `aspect-ratio` property do?**

```css
.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

- A) Crop the image
- B) Maintain aspect ratio, height calculated from width
- C) Stretch to fill
- D) Error - invalid property

---

## Question 35: prefers-reduced-motion
**What is this media query used for?**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

- A) Reduce file size
- B) Respect user's motion preferences (accessibility)
- C) Improve performance
- D) Disable JavaScript

---

---

# DETAILED ANSWERS

## Part 1: Semantic HTML & Accessibility

### Question 1: Answer B

**Explanation:**
Semantic HTML benefits:
- **Accessibility:** Screen readers understand structure
- **SEO:** Search engines understand content hierarchy
- **Maintainability:** Code is self-documenting

```html
<!-- ❌ Non-semantic -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>

<!-- ✅ Semantic -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Common semantic elements -->
<main>       <!-- Main content -->
<article>    <!-- Self-contained content -->
<section>    <!-- Thematic grouping -->
<aside>      <!-- Tangentially related content -->
<figure>     <!-- Image with caption -->
<figcaption> <!-- Caption for figure -->
<time>       <!-- Date/time -->
<mark>       <!-- Highlighted text -->
```

**Reference:** [MDN - Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

---

### Question 2: Answer B

**Explanation:**
ARIA rules:
1. **First rule of ARIA:** Don't use ARIA if native HTML works
2. Use ARIA when no semantic equivalent exists
3. All interactive elements must have accessible names

```html
<!-- ❌ Unnecessary ARIA -->
<button role="button">Click me</button>

<!-- ✅ Native HTML sufficient -->
<button>Click me</button>

<!-- ✅ ARIA needed for custom widgets -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>
<div role="tabpanel" id="panel1">Content 1</div>
<div role="tabpanel" id="panel2" hidden>Content 2</div>

<!-- ✅ ARIA for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Screen reader announces changes here -->
</div>
```

**Reference:** [W3C - ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

### Question 3: Answer B

**Explanation:**
Accessible form requirements:
1. **Labels:** Every input needs an associated label
2. **Error messages:** Linked to inputs
3. **Instructions:** Describe expected format

```html
<!-- ❌ Inaccessible -->
<input type="text" placeholder="Enter name">
<!-- Problems: no label, placeholder disappears, not announced -->

<!-- ✅ Accessible -->
<div class="form-group">
  <label for="name">Full Name</label>
  <input
    type="text"
    id="name"
    name="name"
    aria-describedby="name-hint name-error"
    aria-invalid="false"
    required
  >
  <span id="name-hint" class="hint">Enter your first and last name</span>
  <span id="name-error" class="error" role="alert" hidden>
    Name is required
  </span>
</div>

<!-- Error state -->
<input
  type="email"
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
>
<span id="email-error" role="alert">Please enter a valid email address</span>
```

---

### Question 4: Answer B

**Explanation:**
Heading hierarchy rules:
- Only one `<h1>` per page
- Don't skip levels (h1 → h3)
- Headings create document outline

```html
<!-- ❌ Incorrect - skipped h2 -->
<h1>Page Title</h1>
<h3>Section</h3>  <!-- Should be h2 -->
<h2>Subsection</h2>  <!-- Should be h3 -->

<!-- ✅ Correct hierarchy -->
<h1>Page Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
      <h4>Detail 2.1.1</h4>
```

**Reference:** [WebAIM - Headings](https://webaim.org/techniques/semanticstructure/)

---

### Question 5: Answer B - `alt=""`

**Explanation:**
Alt text guidelines:
- **Informative images:** Describe content
- **Decorative images:** Empty alt (`alt=""`)
- **Functional images:** Describe action
- **Complex images:** Link to long description

```html
<!-- Informative -->
<img src="chart.png" alt="Sales increased 25% in Q4 2024">

<!-- Decorative - empty alt -->
<img src="decorative-border.png" alt="">

<!-- Functional (image as link) -->
<a href="/home">
  <img src="logo.png" alt="Company Name - Go to homepage">
</a>

<!-- Complex image -->
<figure>
  <img src="complex-chart.png" alt="Q4 sales by region" aria-describedby="chart-desc">
  <figcaption id="chart-desc">
    Detailed description of the chart...
  </figcaption>
</figure>

<!-- ❌ Don't do -->
<img src="photo.jpg" alt="image">  <!-- Meaningless -->
<img src="photo.jpg">  <!-- Missing alt -->
```

---

### Question 6: Answer B - `tabindex="0"`

**Explanation:**
tabindex values:
- `tabindex="0"`: Add to natural tab order
- `tabindex="-1"`: Programmatically focusable, not in tab order
- `tabindex="1+"`: Avoid - changes natural order

```html
<!-- Make custom element focusable -->
<div role="button" tabindex="0" onclick="handleClick()">
  Custom Button
</div>

<!-- Skip link (focusable but hidden until focused) -->
<a href="#main" class="skip-link">Skip to main content</a>
<style>
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  left: 0;
}
</style>

<!-- Programmatically focusable (for modals) -->
<div role="dialog" tabindex="-1" id="modal">
  Modal content
</div>
<script>
  document.getElementById('modal').focus();
</script>
```

---

### Question 7: Answer B - 4.5:1

**Explanation:**
WCAG contrast requirements:
- **AA Normal text:** 4.5:1
- **AA Large text (18pt+):** 3:1
- **AAA Normal text:** 7:1
- **AAA Large text:** 4.5:1

```css
/* ❌ Poor contrast */
.bad {
  color: #777;
  background: #fff;  /* Ratio: 4.48:1 - fails AA */
}

/* ✅ Good contrast */
.good {
  color: #595959;
  background: #fff;  /* Ratio: 7:1 - passes AAA */
}

/* Tools to check:
   - Chrome DevTools
   - WebAIM Contrast Checker
   - Lighthouse
*/
```

**Reference:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

### Question 8: Answer B

**Explanation:**
Skip links allow keyboard users to bypass repetitive content:

```html
<body>
  <!-- Skip link - first focusable element -->
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>

  <header>
    <nav>
      <!-- Long navigation menu -->
    </nav>
  </header>

  <main id="main-content" tabindex="-1">
    <!-- Main content -->
  </main>
</body>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background: #000;
  color: #fff;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

---

### Question 9: Answer B

**Explanation:**
ARIA live regions announce dynamic changes:

```html
<!-- Polite - waits for user to finish -->
<div aria-live="polite">
  Search results will appear here
</div>

<!-- Assertive - interrupts immediately -->
<div aria-live="assertive" role="alert">
  Error: Form submission failed
</div>

<!-- Atomic - announces entire region -->
<div aria-live="polite" aria-atomic="true">
  <span>Items in cart:</span>
  <span>5</span>  <!-- Announces "Items in cart: 5" -->
</div>

<!-- Status messages -->
<div role="status">
  Form saved successfully
</div>

<!-- Loading indicator -->
<div aria-busy="true" aria-live="polite">
  Loading...
</div>
```

---

### Question 10: Answer B

**Explanation:**
```html
<!-- Button - for actions -->
<button type="button" onclick="submitForm()">Submit</button>
<button type="button" onclick="openModal()">Open Settings</button>

<!-- Link - for navigation -->
<a href="/about">About Us</a>
<a href="/products">View Products</a>

<!-- ❌ Wrong usage -->
<a href="#" onclick="submitForm()">Submit</a>
<div onclick="goToPage()">Click here</div>

<!-- ✅ Button styled as link (if needed) -->
<button class="link-style" onclick="doAction()">
  Looks like link, acts like button
</button>
```

**Key differences:**
- Buttons: trigger actions, no URL change
- Links: navigate to new page/location
- Screen readers announce differently
- Keyboard: Enter for buttons, Enter/Space for links

---

## Part 2: CSS Layout

### Question 11: Answer A

**Explanation:**
```css
/* Flexbox centering */
.container {
  display: flex;
  justify-content: center;  /* Main axis (horizontal by default) */
  align-items: center;      /* Cross axis (vertical by default) */
}

/* Grid centering */
.container-grid {
  display: grid;
  place-items: center;  /* Shorthand for align-items + justify-items */
}

/* Note: justify-items doesn't exist in Flexbox */
```

**Alignment properties:**

| Property | Flexbox | Grid |
|----------|---------|------|
| justify-content | Main axis | Inline axis |
| align-items | Cross axis | Block axis |
| align-content | Multi-line cross axis | Block axis tracks |
| justify-items | ❌ Not available | Inline axis items |

---

### Question 12: Answer A

**Explanation:**
```css
/* flex: grow shrink basis */
flex: 1 0 auto;
/* flex-grow: 1   - Item can grow */
/* flex-shrink: 0 - Item won't shrink */
/* flex-basis: auto - Use content/width as base */

/* Common patterns */
flex: 1;        /* flex: 1 1 0% - Equal width flex items */
flex: auto;     /* flex: 1 1 auto - Grow/shrink based on content */
flex: none;     /* flex: 0 0 auto - Fixed size */
flex: 0 1 auto; /* Default - can shrink, won't grow */

/* Use case: Flexible center column */
.sidebar { flex: 0 0 200px; }  /* Fixed 200px */
.main { flex: 1 1 0; }         /* Takes remaining space */
```

---

### Question 13: Answer C

**Explanation:**
```css
/* Both create 3 columns with flexible middle */

/* A: 1fr - takes available space */
.grid-a {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}
/* Middle column fills remaining space,
   will never be smaller than content */

/* B: auto - based on content */
.grid-b {
  display: grid;
  grid-template-columns: 200px auto 200px;
}
/* Middle column sizes to content,
   may collapse if empty */

/* Difference shows with small containers:
   - 1fr: distributes space proportionally
   - auto: content-based, can be 0 */
```

---

### Question 14: Answer D - Both B and C are correct

**Explanation:**
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Using named area */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Using line numbers (row-start / col-start / row-end / col-end) */
.header { grid-area: 1 / 1 / 2 / 3; }

/* Note: Named areas don't use quotes in grid-area */
/* grid-area: "header"; ❌ Wrong */
/* grid-area: header;   ✅ Correct */
```

---

### Question 15: Answer B

**Explanation:**
```css
/* Flexbox: 1D layout (row OR column) */
.navbar {
  display: flex;
  justify-content: space-between;
}

/* Grid: 2D layout (rows AND columns) */
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Use Flexbox when:
   - Single row/column of items
   - Content determines size
   - Unknown number of items */

/* Use Grid when:
   - 2D layout needed
   - Precise placement required
   - Layout defines content placement */
```

---

### Question 16: Answer C

**Explanation:**
```css
/* gap works with both Grid and Flexbox */

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;              /* row-gap and column-gap */
  row-gap: 20px;          /* vertical gap */
  column-gap: 10px;       /* horizontal gap */
}

/* Flexbox */
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;              /* Works in modern browsers */
}

/* Before gap support in Flexbox */
.flex-old > * {
  margin: 10px;
}
.flex-old {
  margin: -10px;
}
```

---

### Question 17: Answer B

**Explanation:**
```css
/* auto-fill: Creates tracks even if empty */
.grid-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
/* With 3 items and 800px container:
   Creates 4 tracks, last one empty but exists */

/* auto-fit: Collapses empty tracks */
.grid-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
/* With 3 items and 800px container:
   Creates 3 tracks, items expand to fill space */

/* Visible difference: when few items in wide container
   auto-fill: items stay at minmax size
   auto-fit: items stretch to fill container */
```

---

### Question 18: Answer B - Visual order only

**Explanation:**
```css
/* order changes visual order, NOT DOM or tab order */
.item-1 { order: 3; }
.item-2 { order: 1; }
.item-3 { order: 2; }

/* Visual: item-2, item-3, item-1 */
/* Tab order: item-1, item-2, item-3 (unchanged) */

/* ⚠️ Accessibility issue:
   Screen readers and keyboard navigation follow DOM order
   Visual order mismatch causes confusion */

/* Better approach: Change HTML order if possible */
```

---

### Question 19: Answer B - `align-items`

**Explanation:**
```css
.container {
  display: flex;
  align-items: center;  /* All items centered on cross axis */
}

.special-item {
  align-self: flex-end;  /* Override for this item only */
}

/* Grid equivalent */
.grid {
  display: grid;
  align-items: center;
}

.grid-item {
  align-self: start;
  justify-self: end;  /* Grid also has justify-self */
}
```

---

### Question 20: Answer B

**Explanation:**
```css
/* Parent grid */
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Child grid inherits parent tracks */
.child {
  display: grid;
  grid-template-columns: subgrid;  /* Uses parent's column tracks */
  grid-column: span 2;
}

/* Use case: Card layouts where content aligns across cards */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;  /* Header, content, footer aligned across cards */
}
```

**Reference:** [MDN - Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)

---

## Part 3: CSS Architecture

### Question 21: Answer B

**Explanation:**
Specificity hierarchy (highest to lowest):
1. `!important` (avoid using)
2. Inline styles (`style=""`)
3. ID selectors (`#id`)
4. Class, attribute, pseudo-class (`.class`, `[attr]`, `:hover`)
5. Element, pseudo-element (`div`, `::before`)

```css
/* Specificity calculation: (ID, Class, Element) */

p { }                    /* (0,0,1) */
.class { }               /* (0,1,0) */
#id { }                  /* (1,0,0) */
p.class { }              /* (0,1,1) */
#id .class p { }         /* (1,1,1) */

/* !important overrides everything */
p { color: red !important; }  /* Wins over #id */

/* Specificity battles */
.button { color: blue; }        /* (0,1,0) */
div.button { color: red; }      /* (0,1,1) - Wins */
#submit { color: green; }       /* (1,0,0) - Wins over both */
```

---

### Question 22: Answer A

**Explanation:**
BEM (Block Element Modifier):
```css
/* Block */
.card { }

/* Element (part of block) */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier (variation) */
.card--featured { }
.card__header--large { }

/* Full example */
.card { }
.card--featured { }
.card__header { }
.card__header--large { }
.card__title { }
.card__body { }
.card__button { }
.card__button--primary { }
```

```html
<article class="card card--featured">
  <header class="card__header card__header--large">
    <h2 class="card__title">Title</h2>
  </header>
  <div class="card__body">Content</div>
  <button class="card__button card__button--primary">Action</button>
</article>
```

---

### Question 23: Answer A

**Explanation:**
CSS-in-JS benefits:
- **Scoped styles:** No global conflicts
- **Dynamic styling:** Based on props/state
- **Co-location:** Styles with component
- **Dead code elimination:** Unused styles removed

```jsx
// styled-components example
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  padding: 10px 20px;
  border: 2px solid blue;

  &:hover {
    opacity: 0.8;
  }
`;

// Usage
<Button primary>Primary</Button>
<Button>Secondary</Button>
```

**Trade-offs:**
- Runtime cost
- Larger bundle
- Learning curve

---

### Question 24: Answer B

**Explanation:**
CSS Modules scope class names locally:

```css
/* Button.module.css */
.button {
  padding: 10px;
}

.primary {
  background: blue;
}
```

```jsx
import styles from './Button.module.css';

function Button({ primary }) {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''}`}>
      Click me
    </button>
  );
}

// Output: <button class="Button_button__x7f2s Button_primary__k9d3j">
```

---

### Question 25: Answer B

**Explanation:**
Critical CSS improves FCP:

```html
<head>
  <!-- Critical CSS inlined -->
  <style>
    /* Above-the-fold styles */
    header { background: #fff; }
    .hero { min-height: 100vh; }
  </style>

  <!-- Non-critical CSS loaded async -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

**Tools:**
- Critical (npm package)
- Critters (webpack plugin)
- PurgeCSS

---

## Part 4: Modern CSS Features

### Question 26: Answer B

**Explanation:**
```css
/* Define custom properties */
:root {
  --primary-color: #007bff;
  --spacing-unit: 8px;
  --font-size-base: 16px;
}

/* Use custom properties */
.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
  font-size: var(--font-size-base);
}

/* With fallback */
.element {
  color: var(--undefined-var, black);
}

/* Scoped variables */
.dark-theme {
  --primary-color: #4dabf7;
}

/* Dynamic with JavaScript */
document.documentElement.style.setProperty('--primary-color', 'red');
```

---

### Question 27: Answer B

**Explanation:**
```css
/* Define container */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Query container size */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

@container card (max-width: 399px) {
  .card {
    display: block;
  }
}

/* Compare to media queries */
@media (min-width: 400px) { } /* Viewport based */
@container (min-width: 400px) { } /* Container based */
```

**Reference:** [MDN - Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

---

### Question 28: Answer B

**Explanation:**
`:has()` is the "parent selector":

```css
/* Select card that contains an image */
.card:has(img) {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* Select card without image */
.card:not(:has(img)) {
  display: block;
}

/* Select label when input is invalid */
label:has(+ input:invalid) {
  color: red;
}

/* Select form with at least one invalid input */
form:has(input:invalid) {
  border: 2px solid red;
}

/* Select parent of focused element */
.container:has(:focus) {
  outline: 2px solid blue;
}
```

---

### Question 29: Answer B

**Explanation:**
`@layer` controls cascade order:

```css
/* Define layer order */
@layer reset, base, components, utilities;

/* Styles in later layers win */
@layer reset {
  * { margin: 0; padding: 0; }
}

@layer base {
  p { color: black; }
}

@layer components {
  .text { color: blue; }
}

@layer utilities {
  .text-red { color: red !important; }
}

/* Unlayered styles have highest priority */
p { color: green; }  /* Wins over all layers */
```

---

### Question 30: Answer B

**Explanation:**
```css
/* clamp(minimum, preferred, maximum) */
.title {
  font-size: clamp(1rem, 2.5vw, 2rem);
  /* Minimum: 1rem (16px) */
  /* Preferred: 2.5vw (scales with viewport) */
  /* Maximum: 2rem (32px) */
}

/* Fluid spacing */
.container {
  padding: clamp(1rem, 5vw, 3rem);
}

/* Alternative to media queries */
.card {
  width: clamp(300px, 50%, 600px);
}

/* Other math functions */
.element {
  width: min(100%, 600px);
  height: max(200px, 50vh);
  margin: calc(10px + 2vw);
}
```

---

## Part 5: Responsive Design

### Question 31: Answer B

**Explanation:**
```css
/* Mobile-first approach */

/* Base styles for mobile */
.container {
  padding: 10px;
  font-size: 14px;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Desktop-first (not recommended) */
.container {
  max-width: 1200px;
}

@media (max-width: 1023px) {
  .container {
    max-width: 768px;
  }
}

@media (max-width: 767px) {
  .container {
    max-width: 100%;
  }
}
```

---

### Question 32: Answer B

**Explanation:**
```css
/* vh - Static viewport height */
.hero {
  height: 100vh;
  /* Problem: Doesn't account for mobile browser UI */
  /* URL bar, bottom navigation can cover content */
}

/* dvh - Dynamic viewport height */
.hero {
  height: 100dvh;
  /* Adjusts when mobile browser UI appears/disappears */
}

/* Other viewport units */
.element {
  height: 100svh;  /* Small viewport (UI visible) */
  height: 100lvh;  /* Large viewport (UI hidden) */
  height: 100dvh;  /* Dynamic (current state) */
}

/* Fallback for older browsers */
.hero {
  height: 100vh;
  height: 100dvh;
}
```

---

### Question 33: Answer A

**Explanation:**
```html
<img
  srcset="
    small.jpg 300w,
    medium.jpg 600w,
    large.jpg 1200w
  "
  sizes="
    (max-width: 600px) 300px,
    (max-width: 1200px) 600px,
    1200px
  "
  src="medium.jpg"
  alt="Responsive image"
>

<!-- Browser selection process:
1. Parse sizes to determine display width
2. Calculate required resolution (display width × DPR)
3. Choose smallest image that meets requirement -->

<!-- Art direction with picture element -->
<picture>
  <source
    media="(min-width: 800px)"
    srcset="wide.jpg"
  >
  <source
    media="(min-width: 400px)"
    srcset="medium.jpg"
  >
  <img src="narrow.jpg" alt="Art directed image">
</picture>
```

---

### Question 34: Answer B

**Explanation:**
```css
/* Maintain aspect ratio */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  /* Height automatically calculated */
}

/* Square */
.avatar {
  aspect-ratio: 1;  /* Same as 1 / 1 */
  width: 100px;
  /* Height will be 100px */
}

/* With object-fit for images */
.thumbnail {
  aspect-ratio: 4 / 3;
  width: 200px;
  object-fit: cover;  /* Crop to fit */
}

/* Old method with padding hack */
.video-container-old {
  position: relative;
  padding-bottom: 56.25%;  /* 9/16 = 0.5625 */
  height: 0;
}
.video-container-old iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

---

### Question 35: Answer B

**Explanation:**
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Progressive enhancement approach */
.element {
  /* No animation by default */
}

@media (prefers-reduced-motion: no-preference) {
  .element {
    animation: fade-in 0.5s ease;
  }
}

/* Other preference queries */
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

@media (prefers-contrast: high) {
  /* High contrast styles */
}
```

---

## REFERENCES

1. [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
2. [web.dev - Learn CSS](https://web.dev/learn/css/)
3. [CSS Tricks](https://css-tricks.com/)
4. [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
5. [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
6. [WebAIM - Web Accessibility](https://webaim.org/)
7. [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
