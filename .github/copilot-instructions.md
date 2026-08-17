# Copilot / AI agent instructions for Banking_App

These notes are focused, actionable, and specific to this repository so an AI coding agent can be immediately productive.

- Project type: Next.js 14 (App Router) + TypeScript. Server and client code are mixed via Next.js app directory. Many server-only functions use "use server" and Appwrite server SDKs.

- High-level architecture:
  - UI: `components/ui/*` contains presentational and small composite React components used across pages (e.g. `HeaderBox`, `RecentTransactions`, `RightSidebar`, `TotalBalanceBox`).
  - Pages: `app/(root)/*` contains the authenticated app pages. Pages are server components (async) and call server actions in `lib/actions` to fetch data.
  - Actions / Services: `lib/actions/*.ts` contains server-side business logic that talks to external services:
    - `user.actions.ts` — Appwrite user flows, `getLoggedInUser`, `getBanks`, `getBank`, `createBankAccount`, `exchangePublicToken`.
    - `bank.actions.ts` — Plaid-related account/transaction logic (`getAccounts`, `getAccount`, `getTransactions`, `getInstitution`).
    - `dwolla.actions.ts`, `transaction.actions.ts` — payments & transaction utilities.
  - SDK wiring: `lib/appwrite.ts` and `lib/plaid.ts` configure SDK clients used by actions.
  - Utilities: `lib/utils.ts` exposes `parseStringify` (used frequently to strip complex prototypes), formatters, and small helpers.

- Important project conventions and patterns (do not change without care):
  - Server functions often return JSON-serializable values via `parseStringify(...)`. Tests and components expect plain objects.
  - `getLoggedInUser()` (in `user.actions.ts`) returns `null` when no session exists. Pages must guard against null and redirect to `/sign-in` when appropriate.
  - Appwrite document helper functions return parsed documents; `getBanks` returns an array, `getBank` returns a single document or `null`.
  - All server-side network calls are in `lib/actions/*` and should be defensive about missing/undefined inputs (see recent fixes to `bank.actions.ts`).

- Key integration points:
  - Appwrite: database reads/writes live in `user.actions.ts` and other action files. Functions like `createAdminClient()` and `createSessionClient()` in `lib/appwrite.ts` are the entry points.
  - Plaid: used in `lib/plaid.ts` and called from `bank.actions.ts` for `accountsGet`, `transactionsSync`, and `institutionsGetById`.
  - Dwolla: used in `dwolla.actions.ts` (funding sources) and created/consumed in `user.actions.ts`.

- Common failure modes to guard for (examples found in repo):
  - Calling an action with a missing identifier (e.g., calling `getAccount({ appwriteItemId: undefined })`) — pages must null-check before calling. Fixed in `app/(root)/page.tsx`.
  - Unbounded loops when paginating third-party APIs — add iteration caps and validate response shapes (done in `lib/actions/bank.actions.ts#getTransactions`).
  - Network SDKs returning unexpected shapes — always check for `response?.data` and required subfields before using.

- Concrete examples and rules for editing code:
  - When editing a page in `app/(root)/*`, follow pattern: call `getLoggedInUser()` first, if null -> `redirect('/sign-in')` (imported from `next/navigation`).
  - When you need account data on a page, call `getAccounts({ userId: user.$id })`, treat result as `{ data: Account[], totalBanks, totalCurrentBalance }`. If `data` is empty, avoid calling `getAccount` and render an empty-state UI.
  - When adding or changing action functions, return `null` for not-found or invalid inputs rather than throwing; UI pages check for null and render accordingly.
  - Use `parseStringify(...)` for returns crossing server-client boundaries to avoid complex prototypes.

- Build / dev / debug commands (from `package.json`):
  - dev: `npm run dev` (starts Next.js dev server)
  - build: `npm run build`
  - start: `npm run start`
  - lint: `npm run lint`

- Where to look for similar patterns when making fixes:
  - `app/(root)/page.tsx` — shows server component usage + recent defensive guards.
  - `lib/actions/bank.actions.ts` — Plaid interactions and transaction pagination.
  - `lib/actions/user.actions.ts` — Appwrite database access patterns.
  - `lib/utils.ts` — `parseStringify` and formatting utilities used across the app.

- Quick checklist for any PR that touches server actions or pages:
  - Ensure early validation of IDs/inputs. Return `null` for missing resources.
  - Validate external API responses before mapping or accessing nested props.
  - Add a safe maximum iteration for pagination loops interacting with third-party APIs.
  - Run the Next.js dev server locally and verify the sign-in -> redirect -> homepage flow.

If any part of this is unclear or you'd like more detail (e.g., `lib/appwrite.ts` client setup, or examples of how Appwrite queries are structured), tell me which files you want added to this document and I will expand them.