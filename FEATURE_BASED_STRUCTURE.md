# Feature-Based File Structure Proposal

This document outlines a proposed feature-based file structure for the portfolio project to improve organization and scalability.

## Current Structure (Page-Based)
```
src/
├── components/          # Global shared components
├── context/            # Global context providers
├── pages/              # Page components
├── routes/             # Routing configuration
├── types/              # Type definitions
└── utils/              # Utility functions
```

## Proposed Feature-Based Structure

```
src/
├── app/                           # App-level configuration
│   ├── App.tsx
│   ├── main.tsx
│   └── providers/
│       └── index.tsx             # Combined providers
│
├── shared/                        # Shared/common code
│   ├── components/               # Truly reusable UI components
│   │   ├── ui/                   # Basic UI elements
│   │   │   └── Tooltip/
│   │   │       ├── Tooltip.tsx
│   │   │       └── Tooltip.stories.tsx
│   │   └── layout/               # App-level layout components
│   │       ├── Header/           # Bridge component (navigation + theming)
│   │       │   ├── Header.tsx
│   │       │   └── Header.stories.tsx
│   │       └── MainDisplayPane/
│   │           ├── MainDisplayPane.tsx
│   │           └── MainDisplayPane.stories.tsx
│   ├── hooks/                    # Custom hooks
│   ├── utils/                    # Utility functions
│   ├── types/                    # Global type definitions
│   └── constants/                # Application constants
│
├── features/                      # Feature modules
│   ├── navigation/               # Navigation feature
│   │   ├── components/
│   │   │   ├── SideNavigation/   # Independent component
│   │   │   │   ├── SideNavigation.tsx
│   │   │   │   └── SideNavigation.stories.tsx
│   │   │   ├── NavIconButton/    # Independent component
│   │   │   │   ├── NavIconButton.tsx
│   │   │   │   └── NavIconButton.stories.tsx
│   │   │   ├── HamburgerIcon/    # Independent component
│   │   │   │   ├── HamburgerIcon.tsx
│   │   │   │   └── HamburgerIcon.stories.tsx
│   │   │   └── tab-system/       # Tightly coupled components
│   │   │       ├── TabNavBar.tsx
│   │   │       ├── TabNavBar.stories.tsx
│   │   │       └── TabNavBarContext.tsx
│   │   ├── hooks/
│   │   │   └── useNavigation.ts
│   │   └── routes/
│   │       ├── AppRoutes.tsx
│   │       └── routes.tsx
│   │
│   ├── theming/                  # Theme management feature
│   │   ├── components/
│   │   │   └── theme-controls/   # Tightly coupled components
│   │   │       ├── ConfigurationButton.tsx
│   │   │       └── ThemeSelector.tsx
│   │   ├── context/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   └── useTheme.ts
│   │   └── types/
│   │       └── theme.types.ts
│   │
│   ├── portfolio-pages/          # Portfolio content pages feature
│   │   ├── components/
│   │   │   ├── Home/
│   │   │   │   └── Home.tsx
│   │   │   ├── About/
│   │   │   │   └── About.tsx
│   │   │   └── Experience/
│   │   │       └── Experience.tsx
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── code-editor/              # Code editor feature
│       ├── components/
│       │   ├── CodeEditor/
│       │   │   └── CodeEditor.tsx
│       │   └── VSCodeHighlight/
│       │       └── VSCodeHighlight.tsx
│       ├── hooks/
│       └── services/
│
└── assets/                       # Static assets
    ├── images/
    ├── icons/
    └── styles/
```

## Key Benefits of This Structure:

1. **Feature Isolation**: Each feature contains all its related components, hooks, services, and types
2. **Better Scalability**: Easy to add new features without affecting existing ones
3. **Clearer Dependencies**: Feature boundaries make it obvious what depends on what
4. **Easier Testing**: Test files can be co-located with their features
5. **Team Collaboration**: Multiple developers can work on different features simultaneously
6. **Code Splitting**: Easier to implement lazy loading per feature
7. **Tighter Coupling**: Related components are co-located (e.g., ConfigurationButton + ThemeSelector)

## Migration Considerations:

- **Truly Shared Components**: Only move genuinely reusable components to `shared/components`
- **Feature-Specific Components**: Keep tightly coupled components within their feature boundaries
- **Context Providers**: Theme and navigation contexts stay with their respective features
- **Bridge Components**: Header stays in shared/layout as it bridges navigation and theming features

## Component Analysis & Groupings:

### Coupling-Based Organization:
**Tightly Coupled (Share Folders):**
- `TabNavBar` + `TabNavBarContext` → `tab-system/` (tab management functionality)
- `ConfigurationButton` + `ThemeSelector` → `theme-controls/` (theme selection UI)

**Loosely Coupled (Separate Folders):**
- `SideNavigation` → Independent navigation component
- `NavIconButton` → Reusable navigation button
- `HamburgerIcon` → Simple toggle icon
- Portfolio page components → Related but independent content pages

## Current File Mapping:

### App Level:
- `src/App.tsx` → `src/app/App.tsx`
- `src/main.tsx` → `src/app/main.tsx`

### Shared Components (Truly Reusable):
- `src/components/Tooltip.tsx` → `src/shared/components/ui/Tooltip/Tooltip.tsx`
- `src/components/Header.tsx` → `src/shared/components/layout/Header/Header.tsx`
- `src/components/MainDisplayPane.tsx` → `src/shared/components/layout/MainDisplayPane/MainDisplayPane.tsx`

### Feature: Navigation (Coupling-Based Organization):
- `src/components/HamburgerIcon.tsx` → `src/features/navigation/components/HamburgerIcon/HamburgerIcon.tsx`
- `src/components/SideNavigation.tsx` → `src/features/navigation/components/SideNavigation/SideNavigation.tsx`
- `src/components/NavIconButton.tsx` → `src/features/navigation/components/NavIconButton/NavIconButton.tsx`
- `src/components/TabNavBar.tsx` → `src/features/navigation/components/tab-system/TabNavBar.tsx`
- `src/context/TabNavBarContext.tsx` → `src/features/navigation/components/tab-system/TabNavBarContext.tsx`
- `src/routes/` → `src/features/navigation/routes/`

### Feature: Theming (Coupling-Based Organization):
- `src/components/ConfigurationButton.tsx` → `src/features/theming/components/theme-controls/ConfigurationButton.tsx`
- `src/components/ThemeSelector.tsx` → `src/features/theming/components/theme-controls/ThemeSelector.tsx`
- `src/context/ThemeContext.tsx` → `src/features/theming/context/ThemeContext.tsx`

### Feature: Portfolio Pages (Combined)
- `src/pages/Home/Home.tsx` → `src/features/portfolio-pages/components/Home/Home.tsx`
- `src/pages/About/About.tsx` → `src/features/portfolio-pages/components/About/About.tsx`
- `src/pages/Experience/Experience.tsx` → `src/features/portfolio-pages/components/Experience/Experience.tsx`

### Feature: Code Editor
- `src/components/CodeEditor.tsx` → `src/features/code-editor/components/CodeEditor/CodeEditor.tsx`
- `src/components/VSCodeHighlight.tsx` → `src/features/code-editor/components/VSCodeHighlight/VSCodeHighlight.tsx`

### Shared Resources:
- `src/types/` → `src/shared/types/`
- `src/utils/` → `src/shared/utils/`

This structure emphasizes proper feature boundaries with coupling-based organization - tightly coupled components share folders while independent components maintain their own folders. This approach balances discoverability with logical grouping, following modern React application architecture patterns.