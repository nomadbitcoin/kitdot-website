# KitDot Website Frontend Architecture Document

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-01-14 | 1.0 | Initial frontend architecture document | Winston (Architect) |

## Template and Framework Selection

**Analysis:** This project uses a well-established frontend stack:

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19 with SWC plugin for fast builds
- **UI Component Library**: ShadCN/UI (based on Radix UI primitives)
- **Styling**: Tailwind CSS with CSS variables
- **State Management**: TanStack Query for server state
- **Router**: React Router DOM v6
- **Form Handling**: React Hook Form with Zod validation

This appears to be built on the **ShadCN/UI + Vite + React** starter template, which provides:
- Pre-configured TypeScript setup
- Comprehensive UI component library with Radix UI primitives
- Tailwind CSS with design tokens
- Modern dev tooling (Vite, ESLint, SWC)
- Path aliases configured (@/ for src/)

**Key Constraints from Starter Template:**
- Must follow ShadCN/UI component patterns and structure
- Tailwind CSS with CSS custom properties approach
- TypeScript-first development
- Component composition using Radix UI patterns
- Specific folder structure for UI components

**Rationale:** This starter choice provides excellent developer experience with:
- **Fast builds**: Vite + SWC for near-instant compilation
- **Design system ready**: ShadCN provides beautiful, accessible components
- **Type safety**: Full TypeScript coverage
- **Modern patterns**: Leverages latest React and web standards
- **Scalability**: Architecture supports growth from simple to complex applications

## Frontend Tech Stack

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|----------|-----------|
| Framework | React | 18.3.1 | Component-based UI library | Industry standard with excellent ecosystem, concurrent features, and strong TypeScript support |
| UI Library | ShadCN/UI + Radix UI | Latest | Accessible component primitives | Provides headless, accessible components with customizable styling while maintaining design consistency |
| State Management | TanStack Query | 5.83.0 | Server state management | Excellent caching, background updates, and optimistic UI patterns for API data |
| Routing | React Router DOM | 6.30.1 | Client-side routing | Most mature React routing solution with data loading patterns and nested routes |
| Build Tool | Vite | 5.4.19 | Development server and bundler | Extremely fast HMR, modern ESM-based builds, and excellent TypeScript support |
| Styling | Tailwind CSS | 3.4.17 | Utility-first CSS framework | Rapid development, consistent design tokens, and excellent component composition |
| Testing | Not configured | - | Unit/integration testing | Needs setup - recommend Vitest + Testing Library for consistency with Vite |
| Component Library | ShadCN/UI Components | Latest | Pre-built UI components | Copy-paste approach allows full customization while maintaining accessibility standards |
| Form Handling | React Hook Form | 7.61.1 | Form state management | Minimal re-renders, excellent validation, and great TypeScript support |
| Animation | Tailwind CSS + Framer Motion | 1.0.7 + TBD | UI animations | Tailwind for simple transitions, Framer Motion for complex animations |
| Dev Tools | ESLint + TypeScript | 9.32.0 + 5.8.3 | Code quality and type checking | Ensures code consistency and catches errors at compile time |

## Project Structure

```
kitdot-website/
├── public/                          # Static assets served directly
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/                  # Reusable components
│   │   ├── ui/                     # ShadCN/UI components (auto-generated)
│   │   │   ├── button.tsx          # Base button component
│   │   │   ├── card.tsx            # Card layouts
│   │   │   ├── dialog.tsx          # Modal dialogs
│   │   │   └── ...                 # Other UI primitives
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.tsx          # Site header
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   │   └── Layout.tsx          # Main layout wrapper
│   │   ├── features/               # Feature-specific components
│   │   │   ├── auth/               # Authentication components
│   │   │   ├── dashboard/          # Dashboard components
│   │   │   └── profile/            # User profile components
│   │   └── common/                 # Shared business components
│   │       ├── LoadingSpinner.tsx  # Loading states
│   │       ├── ErrorBoundary.tsx   # Error handling
│   │       └── ProtectedRoute.tsx  # Route protection
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection (existing)
│   │   ├── use-toast.ts            # Toast notifications (existing)
│   │   ├── use-api.ts              # API interaction hooks
│   │   ├── use-auth.ts             # Authentication hooks
│   │   └── use-local-storage.ts    # Local storage hooks
│   ├── lib/                        # Utility libraries and configs
│   │   ├── utils.ts                # Tailwind + clsx utilities (existing)
│   │   ├── api.ts                  # API client configuration
│   │   ├── auth.ts                 # Authentication utilities
│   │   ├── constants.ts            # App constants
│   │   └── validations.ts          # Zod schemas
│   ├── pages/                      # Route-level page components
│   │   ├── NotFound.tsx            # 404 page (existing)
│   │   ├── Home.tsx                # Landing page
│   │   ├── About.tsx               # About page
│   │   ├── Dashboard.tsx           # User dashboard
│   │   └── auth/                   # Authentication pages
│   │       ├── Login.tsx           # Login form
│   │       └── Register.tsx        # Registration form
│   ├── stores/                     # State management
│   │   ├── auth.ts                 # Authentication state
│   │   ├── user.ts                 # User profile state
│   │   └── app.ts                  # Global app state
│   ├── styles/                     # Global styles and themes
│   │   ├── globals.css             # Tailwind imports & global styles
│   │   └── themes.css              # CSS custom properties for themes
│   ├── types/                      # TypeScript type definitions
│   │   ├── api.ts                  # API response types
│   │   ├── auth.ts                 # Authentication types
│   │   └── global.ts               # Global type definitions
│   ├── App.tsx                     # Main app component (existing)
│   ├── main.tsx                    # App entry point (existing)
│   └── vite-env.d.ts              # Vite type definitions (existing)
├── .env                            # Environment variables (local)
├── .env.example                    # Environment variables template
├── components.json                 # ShadCN/UI configuration (existing)
├── eslint.config.js               # ESLint configuration (existing)
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts (existing)
├── postcss.config.js              # PostCSS configuration (existing)
├── tailwind.config.ts             # Tailwind configuration (existing)
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.app.json              # App-specific TS config (existing)
├── tsconfig.node.json             # Node-specific TS config (existing)
└── vite.config.ts                 # Vite configuration (existing)
```

## Component Standards

### Component Template

```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

// Component variants using class-variance-authority
const componentVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// TypeScript interface for component props
interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  /**
   * Primary content of the component
   */
  children?: React.ReactNode;
  /**
   * Optional description for the component behavior
   */
  description?: string;
  /**
   * Callback function for user interactions
   */
  onAction?: () => void;
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * ComponentName - Brief description of what this component does
 *
 * @param children - Main content
 * @param variant - Visual variant of the component
 * @param size - Size variant
 * @param className - Additional CSS classes
 * @param onAction - Click handler
 * @param isLoading - Shows loading state
 * @param disabled - Disables interaction
 */
export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({
    children,
    variant,
    size,
    className,
    onAction,
    isLoading = false,
    disabled = false,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        onClick={disabled || isLoading ? undefined : onAction}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">⏳</span>
        ) : (
          children
        )}
      </div>
    );
  }
);

ComponentName.displayName = "ComponentName";

export type { ComponentNameProps };
```

### Naming Conventions

**File Naming:**
- **Components**: PascalCase (`UserProfile.tsx`, `ProductCard.tsx`)
- **Pages**: PascalCase (`Dashboard.tsx`, `ContactUs.tsx`)
- **Hooks**: kebab-case with `use-` prefix (`use-auth.ts`, `use-local-storage.ts`)
- **Utilities**: camelCase (`api.ts`, `formatDate.ts`, `validators.ts`)
- **Types**: camelCase (`userTypes.ts`, `apiTypes.ts`)
- **Constants**: camelCase (`appConstants.ts`, `routes.ts`)

**Component Naming:**
- **Functional Components**: PascalCase (`const UserAvatar = () => {}`)
- **Component Files**: Match component name (`UserAvatar.tsx`)
- **Props Interfaces**: ComponentName + "Props" (`UserAvatarProps`)
- **Variant Types**: ComponentName + "Variant" (`ButtonVariant`)

**CSS Classes:**
- **Tailwind**: Use existing utility classes
- **Custom CSS**: kebab-case BEM methodology when needed
- **Component variants**: Use `class-variance-authority` for consistent styling

**State Management:**
- **State variables**: camelCase (`isLoading`, `userData`, `selectedItems`)
- **Event handlers**: "on" + PascalCase action (`onSubmit`, `onUserSelect`)
- **Custom hooks**: "use" + PascalCase (`useApiData`, `useAuthState`)

**API Integration:**
- **API functions**: camelCase verbs (`fetchUsers`, `createPost`, `updateProfile`)
- **Endpoints**: kebab-case (`/api/user-profile`, `/api/auth/login`)
- **Query keys**: Array format (`['users', userId]`, ['posts', { status: 'published' }]`)

**Directory Naming:**
- **All folders**: kebab-case (`user-profile`, `auth-forms`, `data-tables`)
- **Feature folders**: Match domain (`authentication/`, `user-management/`)

## State Management

### Store Structure

```
src/stores/
├── index.ts                    # Store exports and providers
├── auth.ts                     # Authentication state
├── user.ts                     # User profile and preferences
├── app.ts                      # Global app state (theme, sidebar, etc.)
├── api/                        # TanStack Query configurations
│   ├── queries.ts             # Query definitions and keys
│   ├── mutations.ts           # Mutation definitions
│   └── queryClient.ts         # Query client configuration
└── types.ts                   # Store-related TypeScript types
```

### State Management Template

```typescript
// src/stores/auth.ts - Client state example using Zustand
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  // State
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  // Actions
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,

      // Actions
      setAuth: (user, token) =>
        set({ user, token, isAuthenticated: true }),

      clearAuth: () =>
        set({ user: null, token: null, isAuthenticated: false }),

      updateUser: (updates) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...updates } });
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

// Selectors for optimized re-renders
export const useUser = () => useAuthStore(state => state.user);
export const useIsAuthenticated = () => useAuthStore(state => state.isAuthenticated);
export const useAuthActions = () => useAuthStore(state => ({
  setAuth: state.setAuth,
  clearAuth: state.clearAuth,
  updateUser: state.updateUser
}));
```

```typescript
// src/stores/api/queries.ts - TanStack Query for server state
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

// Query keys factory
export const queryKeys = {
  users: ['users'] as const,
  user: (id: string) => ['users', id] as const,
  posts: (filters?: Record<string, any>) => ['posts', filters] as const,
  post: (id: string) => ['posts', id] as const,
};

// User queries
export const useUsersQuery = (filters?: { role?: string; status?: string }) => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: () => api.users.getAll(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useUserQuery = (userId: string) => {
  return useQuery({
    queryKey: queryKeys.user(userId),
    queryFn: () => api.users.getById(userId),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// User mutations
export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.users.create,
    onSuccess: (newUser) => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: queryKeys.users });

      // Optimistically update cache
      queryClient.setQueryData(queryKeys.user(newUser.id), newUser);
    },
    onError: (error) => {
      console.error('Failed to create user:', error);
    }
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<User> }) =>
      api.users.update(id, updates),
    onMutate: async ({ id, updates }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.user(id) });

      // Snapshot previous value
      const previousUser = queryClient.getQueryData(queryKeys.user(id));

      // Optimistically update
      queryClient.setQueryData(queryKeys.user(id), (old: User) => ({
        ...old,
        ...updates
      }));

      return { previousUser };
    },
    onError: (err, { id }, context) => {
      // Rollback on error
      if (context?.previousUser) {
        queryClient.setQueryData(queryKeys.user(id), context.previousUser);
      }
    },
    onSettled: (data, error, { id }) => {
      // Always refetch after mutation
      queryClient.invalidateQueries({ queryKey: queryKeys.user(id) });
    }
  });
};
```

## API Integration

### Service Template

```typescript
// src/lib/api.ts - Base API client configuration
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuthStore } from '@/stores/auth';

// API Response wrapper type
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  errors?: Record<string, string[]>;
  meta?: {
    pagination?: {
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
    };
  };
}

// API Error type
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = import.meta.env.VITE_API_BASE_URL || '/api') {
    this.client = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - Add auth token
    this.client.interceptors.request.use(
      (config) => {
        const { token } = useAuthStore.getState();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - Handle errors globally
    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        // Return just the data for successful responses
        return response.data.data;
      },
      (error) => {
        const apiError: ApiError = {
          message: error.response?.data?.message || error.message || 'An error occurred',
          status: error.response?.status || 500,
          errors: error.response?.data?.errors,
        };

        // Handle authentication errors
        if (error.response?.status === 401) {
          useAuthStore.getState().clearAuth();
          window.location.href = '/login';
        }

        return Promise.reject(apiError);
      }
    );
  }

  // Generic HTTP methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config);
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.post(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.put(url, data, config);
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.patch(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.delete(url, config);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
```

### API Client Configuration

```typescript
// src/lib/api/services.ts - Domain-specific API services
import { apiClient } from '@/lib/api';

// Type definitions
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
  role?: 'admin' | 'user';
}

interface UpdateUserRequest {
  email?: string;
  name?: string;
  role?: 'admin' | 'user';
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

// Authentication API service
export const authApi = {
  login: (credentials: LoginRequest): Promise<LoginResponse> =>
    apiClient.post('/auth/login', credentials),

  logout: (): Promise<void> =>
    apiClient.post('/auth/logout'),

  refresh: (refreshToken: string): Promise<LoginResponse> =>
    apiClient.post('/auth/refresh', { refreshToken }),

  register: (userData: CreateUserRequest): Promise<User> =>
    apiClient.post('/auth/register', userData),

  forgotPassword: (email: string): Promise<void> =>
    apiClient.post('/auth/forgot-password', { email }),

  resetPassword: (token: string, password: string): Promise<void> =>
    apiClient.post('/auth/reset-password', { token, password }),
};

// Users API service
export const usersApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    role?: string;
    search?: string;
  }): Promise<{ users: User[]; meta: any }> =>
    apiClient.get('/users', { params }),

  getById: (id: string): Promise<User> =>
    apiClient.get(`/users/${id}`),

  create: (userData: CreateUserRequest): Promise<User> =>
    apiClient.post('/users', userData),

  update: (id: string, updates: UpdateUserRequest): Promise<User> =>
    apiClient.patch(`/users/${id}`, updates),

  delete: (id: string): Promise<void> =>
    apiClient.delete(`/users/${id}`),

  updateProfile: (updates: Partial<User>): Promise<User> =>
    apiClient.patch('/users/profile', updates),

  changePassword: (currentPassword: string, newPassword: string): Promise<void> =>
    apiClient.post('/users/change-password', { currentPassword, newPassword }),
};

// Export consolidated API object
export const api = {
  auth: authApi,
  users: usersApi,
};

// Export types
export type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  LoginRequest,
  LoginResponse,
  ApiError,
};
```

## Routing

### Route Configuration

```typescript
// src/lib/router.tsx - Main routing configuration
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// Layout components
import Layout from '@/components/layout/Layout';
import AuthLayout from '@/components/layout/AuthLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';

// Page components (lazy loaded)
import { lazy } from 'react';

// Public pages
const HomePage = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/About'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

// Auth pages
const LoginPage = lazy(() => import('@/pages/auth/Login'));
const RegisterPage = lazy(() => import('@/pages/auth/Register'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/ResetPassword'));

// Protected pages
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const ProfilePage = lazy(() => import('@/pages/Profile'));
const SettingsPage = lazy(() => import('@/pages/Settings'));

// Admin pages
const AdminDashboardPage = lazy(() => import('@/pages/admin/Dashboard'));
const AdminUsersPage = lazy(() => import('@/pages/admin/Users'));

// Route guards
import ProtectedRoute from '@/components/common/ProtectedRoute';
import AdminRoute from '@/components/common/AdminRoute';
import PublicOnlyRoute from '@/components/common/PublicOnlyRoute';

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Public routes
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },

      // Authentication routes (public only - redirect if authenticated)
      {
        path: 'auth',
        element: (
          <PublicOnlyRoute>
            <AuthLayout />
          </PublicOnlyRoute>
        ),
        children: [
          {
            path: 'login',
            element: (
              <Suspense fallback={<PageLoader />}>
                <LoginPage />
              </Suspense>
            ),
          },
          {
            path: 'register',
            element: (
              <Suspense fallback={<PageLoader />}>
                <RegisterPage />
              </Suspense>
            ),
          },
          {
            path: 'forgot-password',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ForgotPasswordPage />
              </Suspense>
            ),
          },
          {
            path: 'reset-password',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ResetPasswordPage />
              </Suspense>
            ),
          },
        ],
      },

      // Protected user routes
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <DashboardPage />
              </Suspense>
            ),
          },
          {
            path: 'profile',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ProfilePage />
              </Suspense>
            ),
          },
          {
            path: 'settings',
            element: (
              <Suspense fallback={<PageLoader />}>
                <SettingsPage />
              </Suspense>
            ),
          },
        ],
      },

      // Admin routes
      {
        path: 'admin',
        element: (
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <AdminDashboardPage />
              </Suspense>
            ),
          },
          {
            path: 'users',
            element: (
              <Suspense fallback={<PageLoader />}>
                <AdminUsersPage />
              </Suspense>
            ),
          },
        ],
      },

      // Redirects
      {
        path: 'login',
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: 'register',
        element: <Navigate to="/auth/register" replace />,
      },
    ],
  },

  // 404 catch-all
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
```

## Styling Guidelines

### Styling Approach

Based on the ShadCN/UI + Tailwind CSS setup, here's the comprehensive styling methodology:

**Primary Approach: Tailwind CSS Utility-First**
- Utility classes for rapid development and consistent spacing
- Component variants using `class-variance-authority` (CVA)
- CSS custom properties for theme-aware design tokens
- ShadCN/UI components as styled primitives

**Component Styling Hierarchy:**
1. **Base styles**: Tailwind utilities applied directly
2. **Component variants**: CVA for consistent component theming
3. **Custom CSS**: Only when Tailwind utilities are insufficient
4. **CSS modules**: For complex component-specific styles (rarely needed)

### Global Theme Variables

```css
/* src/styles/globals.css - Enhanced theme system */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors - Light theme */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;

    /* Spacing scale */
    --space-xs: 0.25rem;    /* 4px */
    --space-sm: 0.5rem;     /* 8px */
    --space-md: 1rem;       /* 16px */
    --space-lg: 1.5rem;     /* 24px */
    --space-xl: 2rem;       /* 32px */
    --space-2xl: 3rem;      /* 48px */
    --space-3xl: 4rem;      /* 64px */

    /* Typography scale */
    --text-xs: 0.75rem;     /* 12px */
    --text-sm: 0.875rem;    /* 14px */
    --text-base: 1rem;      /* 16px */
    --text-lg: 1.125rem;    /* 18px */
    --text-xl: 1.25rem;     /* 20px */
    --text-2xl: 1.5rem;     /* 24px */
    --text-3xl: 1.875rem;   /* 30px */
    --text-4xl: 2.25rem;    /* 36px */

    /* Line heights */
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;

    /* Border radius */
    --radius-sm: 0.125rem;  /* 2px */
    --radius: 0.5rem;       /* 8px */
    --radius-md: 0.375rem;  /* 6px */
    --radius-lg: 0.75rem;   /* 12px */
    --radius-xl: 1rem;      /* 16px */

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

    /* Animation durations */
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-slow: 350ms;

    /* Z-index scale */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
  }

  .dark {
    /* Colors - Dark theme */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* Improved focus styles */
  *:focus-visible {
    @apply outline-none ring-2 ring-ring ring-offset-2 ring-offset-background;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-muted;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-muted-foreground/30 rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground/50;
  }
}

@layer components {
  /* Custom utility classes */
  .animate-in {
    animation-duration: var(--duration-normal);
    animation-fill-mode: both;
  }

  .fade-in {
    animation-name: fadeIn;
  }

  .slide-in-from-top {
    animation-name: slideInFromTop;
  }

  .slide-in-from-bottom {
    animation-name: slideInFromBottom;
  }

  /* Typography utilities */
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent;
  }

  /* Layout utilities */
  .container-padding {
    @apply px-4 sm:px-6 lg:px-8;
  }

  .section-spacing {
    @apply py-12 sm:py-16 lg:py-20;
  }
}

@layer utilities {
  /* Animation keyframes */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

## Testing Requirements

### Component Test Template

```typescript
// src/components/__tests__/Button.test.tsx - Example component test
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Button } from '@/components/ui/button';

// Test utilities
const renderButton = (props = {}) => {
  return render(<Button {...props}>Test Button</Button>);
};

describe('Button Component', () => {
  it('renders with correct text', () => {
    renderButton();
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    renderButton({ variant: 'secondary' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-secondary');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    renderButton({ onClick: handleClick });

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables interaction when loading', () => {
    const handleClick = vi.fn();
    renderButton({ isLoading: true, onClick: handleClick });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Test</Button>);
    expect(ref).toHaveBeenCalled();
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      renderButton({ disabled: true });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('supports keyboard navigation', () => {
      const handleClick = vi.fn();
      renderButton({ onClick: handleClick });

      const button = screen.getByRole('button');
      button.focus();
      fireEvent.keyDown(button, { key: 'Enter' });

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
```

### Testing Best Practices

**1. Unit Tests: Test individual components in isolation**
- Focus on component behavior, not implementation details
- Test all interactive states (loading, error, success)
- Verify accessibility attributes and keyboard navigation
- Mock external dependencies and API calls

**2. Integration Tests: Test component interactions**
- Test form submission flows end-to-end
- Verify routing and navigation works correctly
- Test authentication and authorization flows
- Mock API responses with realistic data

**3. E2E Tests: Test critical user flows (using Cypress/Playwright)**
- User registration and login flows
- Main feature workflows (dashboard, profile management)
- Mobile responsiveness and touch interactions
- Cross-browser compatibility for critical paths

**4. Coverage Goals: Aim for 80% code coverage**
- Focus on business logic and user interactions
- Don't test implementation details or third-party libraries
- Prioritize testing critical paths over achieving 100% coverage

**5. Test Structure: Arrange-Act-Assert pattern**
- **Arrange**: Set up test data and mock dependencies
- **Act**: Trigger the behavior being tested
- **Assert**: Verify the expected outcome

**6. Mock External Dependencies: API calls, routing, state management**
- Use Vitest's `vi.mock()` for consistent mocking
- Mock at the module level, not function level
- Provide realistic mock data that matches actual API responses

## Environment Configuration

### Required Environment Variables

```bash
# .env.example - Template for environment variables
# Copy to .env.local and fill in actual values

# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Authentication
VITE_JWT_SECRET=your-jwt-secret-here
VITE_REFRESH_TOKEN_ENDPOINT=/auth/refresh

# Application Settings
VITE_APP_NAME=KitDot Website
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development

# Feature Flags
VITE_ENABLE_DEVTOOLS=true
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_REPORTING=false

# External Services
VITE_SENTRY_DSN=
VITE_GA_TRACKING_ID=
VITE_POSTHOG_KEY=

# File Upload
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,application/pdf

# Social Auth (if needed)
VITE_GOOGLE_CLIENT_ID=
VITE_GITHUB_CLIENT_ID=

# Development Tools
VITE_MOCK_API=false
VITE_API_DELAY=0
```

### Environment Configuration Management

```typescript
// src/lib/config.ts - Centralized configuration
interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
    refreshTokenEndpoint: string;
  };
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
  };
  features: {
    devtools: boolean;
    analytics: boolean;
    errorReporting: boolean;
    mockApi: boolean;
  };
  upload: {
    maxFileSize: number;
    allowedTypes: string[];
  };
  external: {
    sentryDsn?: string;
    gaTrackingId?: string;
    posthogKey?: string;
    googleClientId?: string;
    githubClientId?: string;
  };
  development: {
    apiDelay: number;
  };
}

// Validation helper
const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || '';
};

const getBooleanEnv = (key: string, defaultValue = false): boolean => {
  const value = import.meta.env[key];
  return value === 'true' || (value === undefined && defaultValue);
};

const getNumberEnv = (key: string, defaultValue: number): number => {
  const value = import.meta.env[key];
  return value ? parseInt(value, 10) : defaultValue;
};

// Export typed configuration
export const config: AppConfig = {
  api: {
    baseUrl: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
    timeout: getNumberEnv('VITE_API_TIMEOUT', 30000),
    refreshTokenEndpoint: getEnvVar('VITE_REFRESH_TOKEN_ENDPOINT', '/auth/refresh'),
  },
  app: {
    name: getEnvVar('VITE_APP_NAME', 'KitDot Website'),
    version: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    environment: (getEnvVar('VITE_APP_ENVIRONMENT', 'development') as AppConfig['app']['environment']),
  },
  features: {
    devtools: getBooleanEnv('VITE_ENABLE_DEVTOOLS', import.meta.env.DEV),
    analytics: getBooleanEnv('VITE_ENABLE_ANALYTICS', false),
    errorReporting: getBooleanEnv('VITE_ENABLE_ERROR_REPORTING', false),
    mockApi: getBooleanEnv('VITE_MOCK_API', import.meta.env.DEV),
  },
  upload: {
    maxFileSize: getNumberEnv('VITE_MAX_FILE_SIZE', 5242880), // 5MB
    allowedTypes: getEnvVar('VITE_ALLOWED_FILE_TYPES', 'image/jpeg,image/png,image/gif')
      .split(',')
      .map(type => type.trim())
      .filter(Boolean),
  },
  external: {
    sentryDsn: getEnvVar('VITE_SENTRY_DSN'),
    gaTrackingId: getEnvVar('VITE_GA_TRACKING_ID'),
    posthogKey: getEnvVar('VITE_POSTHOG_KEY'),
    googleClientId: getEnvVar('VITE_GOOGLE_CLIENT_ID'),
    githubClientId: getEnvVar('VITE_GITHUB_CLIENT_ID'),
  },
  development: {
    apiDelay: getNumberEnv('VITE_API_DELAY', 0),
  },
};

// Export environment helpers
export const isDevelopment = config.app.environment === 'development';
export const isProduction = config.app.environment === 'production';
export const isStaging = config.app.environment === 'staging';

// Runtime environment validation
export const validateConfig = () => {
  const errors: string[] = [];

  if (!config.api.baseUrl) {
    errors.push('VITE_API_BASE_URL is required');
  }

  if (config.features.analytics && !config.external.gaTrackingId) {
    errors.push('VITE_GA_TRACKING_ID is required when analytics is enabled');
  }

  if (config.features.errorReporting && !config.external.sentryDsn) {
    errors.push('VITE_SENTRY_DSN is required when error reporting is enabled');
  }

  if (errors.length > 0) {
    console.error('Configuration validation failed:', errors);
    if (isProduction) {
      throw new Error('Invalid configuration for production environment');
    }
  }

  return errors.length === 0;
};

// Initialize validation
validateConfig();
```

## Frontend Developer Standards

### Critical Coding Rules

**Essential rules that prevent common AI and developer mistakes:**

**TypeScript Standards:**
1. **Never use `any` type** - Always define proper interfaces or use `unknown`
2. **Export types alongside components** - Enable proper type checking across files
3. **Use strict mode** - Enable all TypeScript strict flags in tsconfig.json
4. **Interface over type for objects** - Use `interface` for extensible object shapes
5. **Const assertions for literal types** - Use `as const` for immutable data structures

**React Patterns:**
6. **Always use `forwardRef` for reusable components** - Enables proper ref passing
7. **Extract custom hooks for stateful logic** - Keep components focused on rendering
8. **Use `useCallback` for event handlers in props** - Prevent unnecessary re-renders
9. **Prefer composition over inheritance** - Build complex UI through component composition
10. **Handle loading and error states explicitly** - Never leave async operations without feedback

**Performance Rules:**
11. **Lazy load route components** - Use `React.lazy()` for code splitting
12. **Memoize expensive calculations** - Use `useMemo` for costly operations
13. **Avoid inline object/array creation** - Move static objects outside render
14. **Use proper dependency arrays** - Include all dependencies in useEffect/useCallback
15. **Optimize re-renders with selectors** - Use Zustand selectors for specific state slices

**API Integration:**
16. **Never call APIs directly in components** - Always use custom hooks or services
17. **Handle network errors gracefully** - Show user-friendly error messages
18. **Implement proper loading states** - Use skeleton loaders or spinners
19. **Cache API responses appropriately** - Leverage TanStack Query caching
20. **Validate API responses** - Use Zod schemas for runtime validation

**Styling Standards:**
21. **Use CSS custom properties for themes** - Enable runtime theme switching
22. **Follow mobile-first responsive design** - Start with mobile styles, scale up
23. **Prefer Tailwind utilities over custom CSS** - Use utility classes for consistency
24. **Use CVA for component variants** - Type-safe styling patterns
25. **Test dark mode compatibility** - Ensure all components work in both themes

**Security & Accessibility:**
26. **Sanitize user input** - Prevent XSS attacks with proper escaping
27. **Include proper ARIA attributes** - Ensure keyboard and screen reader accessibility
28. **Use semantic HTML elements** - Prefer `<button>` over `<div>` for clickable elements
29. **Test keyboard navigation** - All interactive elements must be keyboard accessible
30. **Implement proper focus management** - Focus should be logical and visible

### Quick Reference

**Essential Commands:**
```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run build:staging   # Build for staging
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking
npm run test            # Run tests
npm run test:coverage   # Test coverage report
npm run validate        # Run all quality checks

# Component Generation (if using CLI tools)
npx shadcn-ui@latest add button    # Add ShadCN component
```

**Key Import Patterns:**
```typescript
// Absolute imports (preferred)
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/stores/auth';
import { api } from '@/lib/api/services';

// React imports
import React, { useState, useEffect, useMemo } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';

// Router imports
import { useNavigate, useParams, Navigate } from 'react-router-dom';
```

**File Naming Conventions:**
```
// Components: PascalCase
UserProfile.tsx
ProductCard.tsx
AuthLayout.tsx

// Pages: PascalCase
Dashboard.tsx
Login.tsx
NotFound.tsx

// Hooks: kebab-case with use- prefix
use-auth.ts
use-api.ts
use-local-storage.ts

// Utilities: camelCase
formatDate.ts
validators.ts
constants.ts

// Types: camelCase with Types suffix
userTypes.ts
apiTypes.ts
globalTypes.ts
```

**Project-Specific Patterns:**

**Component Creation Pattern:**
```typescript
// 1. Create interface
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
}

// 2. Create variants with CVA
const variants = cva('base-styles', {
  variants: { variant: { default: 'styles', secondary: 'styles' } }
});

// 3. Implement with forwardRef
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant, children, className, ...props }, ref) => (
    <div ref={ref} className={cn(variants({ variant }), className)} {...props}>
      {children}
    </div>
  )
);

// 4. Set display name and export types
Component.displayName = 'Component';
export type { ComponentProps };
```

**API Hook Pattern:**
```typescript
// Custom hook for API operations
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.users.create,
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({ title: 'User created successfully' });
    },
    onError: (error) => {
      toast({ title: 'Failed to create user', variant: 'destructive' });
    }
  });
};
```

**Form Handling Pattern:**
```typescript
// React Hook Form with Zod validation
const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: { email: '', password: '' }
});
```

**State Management Pattern:**
```typescript
// Zustand store pattern
interface StoreState {
  data: DataType[];
  loading: boolean;
  setData: (data: DataType[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useDataStore = create<StoreState>((set) => ({
  data: [],
  loading: false,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
}));

// Use selectors to prevent re-renders
export const useData = () => useDataStore(state => state.data);
export const useLoading = () => useDataStore(state => state.loading);
```

---

*This document was generated by Winston, the Architect, on 2025-01-14 as part of the comprehensive frontend architecture planning for the KitDot Website project.*