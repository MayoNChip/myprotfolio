# Refs Refactoring Plan

## Overview
This plan outlines the refactoring of the refs implementation in the Next.js portfolio application to improve type safety, performance, and maintainability.

## Current Implementation Analysis

### Problems Identified

1. **Unnecessary State Management**
   - Refs are stored in `useState` within GlobalContext
   - Refs don't need to trigger re-renders, making state storage inefficient
   - Can cause unnecessary re-renders across the application

2. **Type Safety Issues**
   - Homepage.tsx uses type assertions: `as React.RefObject<HTMLDivElement>`
   - Indicates TypeScript cannot properly infer types
   - Potential runtime errors if types don't match

3. **Fragile Array Indexing**
   - Using hardcoded indices: `refs[0]`, `refs[1]`, `refs[2]`, `refs[3]`
   - Adding/removing sections requires updating multiple files
   - Easy to introduce off-by-one errors

4. **Redundant Visibility Tracking**
   - Four separate `useInView` hooks with identical configuration
   - Each tracked individually in GlobalContext
   - Duplicated margin calculation (`transitionGap = "-400px"`)

5. **Mixed Responsibilities**
   - GlobalContext manages refs, visibility states, dark mode, and active section
   - Violates single responsibility principle
   - Makes testing and maintenance difficult

## Proposed Solution

### Architecture Changes

```
Current Architecture:
GlobalContext (refs, visibility, darkMode, activeSection)
    ├── Homepage (consumes refs)
    ├── Navbar (consumes refs via useNav)
    └── useNav (consumes refs and visibility)

Proposed Architecture:
GlobalContext (darkMode, activeSection)
    └── Homepage
        └── useSectionRefs (manages refs and visibility)
            └── SectionWrapper (encapsulates sections)
    └── Navbar
        └── useNav (uses useSectionRefs)
```

### New Components and Hooks

#### 1. `hooks/useSectionRefs.ts`

```typescript
interface SectionRef {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
  id: string;
  label: string;
}

interface UseSectionRefsReturn {
  sections: {
    hero: SectionRef;
    about: SectionRef;
    projects: SectionRef;
    contact: SectionRef;
  };
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function useSectionRefs(): UseSectionRefsReturn {
  // Implementation
}
```

**Features:**
- Named refs for better clarity
- Consolidated `useInView` logic with shared configuration
- Single source of truth for section management
- Type-safe section references

#### 2. `components/SectionWrapper.tsx`

```typescript
interface SectionWrapperProps {
  sectionId: string;
  sectionRef: RefObject<HTMLDivElement>;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ 
  sectionId, 
  sectionRef, 
  children, 
  className 
}: SectionWrapperProps) {
  // Implementation
}
```

**Features:**
- Encapsulates ref attachment logic
- Handles intersection observer setup
- Provides consistent section structure
- Optional styling through className

#### 3. Updated `context/GlobalContext.tsx`

```typescript
export type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};
```

**Changes:**
- Remove refs and setRefs
- Remove individual isInView states
- Simplify to only essential shared state

## Implementation Steps

### Phase 1: Create New Hooks and Components

1. **Create `hooks/useSectionRefs.ts`**
   ```typescript
   - Initialize named refs for each section
   - Set up useInView hooks with shared configuration
   - Implement scrollToSection method
   - Track active section based on visibility
   ```

2. **Create `components/SectionWrapper.tsx`**
   ```typescript
   - Accept section configuration as props
   - Attach ref to wrapper div
   - Apply consistent styling
   - Handle any section-specific logic
   ```

### Phase 2: Update Existing Components

3. **Update `context/GlobalContext.tsx`**
   ```typescript
   - Remove refs state and management
   - Remove individual isInView states
   - Keep darkMode and activeSection
   - Update type definitions
   ```

4. **Update `app/_components/Homepage.tsx`**
   ```typescript
   - Import useSectionRefs hook
   - Replace refs from context with hook values
   - Use SectionWrapper for each section
   - Remove type assertions
   ```

5. **Update `hooks/useNav.tsx`**
   ```typescript
   - Import useSectionRefs instead of using context refs
   - Use hook's scrollToSection method
   - Access visibility from hook instead of context
   ```

6. **Update `app/_components/Navbar.tsx`**
   ```typescript
   - Update to work with new useNav implementation
   - Use activeSection from context or hook
   ```

### Phase 3: Testing and Cleanup

7. **Test Navigation**
   - Verify scroll-to-section functionality
   - Check active section highlighting
   - Test navbar hide/show on scroll

8. **Remove Deprecated Code**
   - Clean up unused imports
   - Remove old ref-related code from GlobalContext
   - Update any other components using old implementation

## Example Implementation

### Before (Homepage.tsx)
```typescript
const { refs } = useContext(GlobalContext) as InitialContext;

<div ref={refs[0].ref as React.RefObject<HTMLDivElement>}>
  <Hero />
</div>
```

### After (Homepage.tsx)
```typescript
const { sections } = useSectionRefs();

<SectionWrapper 
  sectionId="hero" 
  sectionRef={sections.hero.ref}
>
  <Hero />
</SectionWrapper>
```

## Benefits

### Type Safety
- No type assertions needed
- TypeScript can properly infer all types
- Compile-time error detection

### Performance
- Refs no longer in state
- Fewer re-renders
- More efficient intersection observer usage

### Maintainability
- Clear separation of concerns
- Easy to add/remove sections
- Self-documenting code with named refs

### Developer Experience
- IntelliSense support for section names
- Clearer code intent
- Easier debugging

## Migration Checklist

- [ ] Create `hooks/useSectionRefs.ts`
- [ ] Create `components/SectionWrapper.tsx`
- [ ] Update `context/GlobalContext.tsx`
- [ ] Update `app/_components/Homepage.tsx`
- [ ] Update `hooks/useNav.tsx`
- [ ] Update `app/_components/Navbar.tsx`
- [ ] Test scroll navigation
- [ ] Test active section highlighting
- [ ] Test navbar visibility toggle
- [ ] Remove deprecated code
- [ ] Update TypeScript types
- [ ] Run linter and fix any issues

## Risk Assessment

### Low Risk
- Changes are mostly organizational
- No business logic changes
- Backward compatible approach possible

### Mitigation Strategies
- Implement incrementally
- Keep old implementation during transition
- Thorough testing at each step
- Can rollback if issues arise

## Timeline Estimate

- Phase 1: 1-2 hours (create new components)
- Phase 2: 2-3 hours (update existing components)
- Phase 3: 1 hour (testing and cleanup)

**Total: 4-6 hours**

## Success Criteria

1. All navigation functionality works as before
2. No TypeScript errors or warnings
3. No type assertions in component code
4. Improved performance metrics
5. Cleaner, more maintainable codebase