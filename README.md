# Florida Truck Repairs — Website

Florida's statewide fleet maintenance and breakdown network. Built with Next.js 14, Tailwind CSS, and TypeScript.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no build config needed.
4. Set the production domain to `floridatruckrepairs.com` in Vercel's domain settings.

---

## Integrations (TODO)

### Phone Number
All phone numbers flow from `src/lib/constants.ts`:
```ts
export const PHONE_NUMBER = "(954) 000-0000";
export const PHONE_HREF = "tel:+19540000000";
```
**Find and replace** `(954) 000-0000` and `+19540000000` with the real number before launch.

### Google Analytics
Insert the GA tag in `src/app/layout.tsx` inside the `<head>`:
```tsx
{/* TODO: Insert GA tag here */}
```
Replace with your `<Script>` tag or use `@next/third-parties/google`.

### CallRail
Insert the CallRail script in `src/app/layout.tsx` inside the `<head>`:
```tsx
{/* TODO: Insert CallRail tracking script here */}
```
Replace with the CallRail JavaScript snippet from your CallRail dashboard.

### CRM / Email Handler (GHL Recommended)
Form handler lives in `src/components/LeadCaptureForm.tsx`:
```tsx
// TODO: Connect to CRM or email handler (GHL recommended)
console.log("Lead form submission:", formData);
```
Replace the `console.log` with a `fetch()` POST to your GHL webhook or API route.

Example:
```ts
await fetch("https://hooks.gohighlevel.com/hooks/catch/YOUR_HOOK_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### Company Address
Update in `src/lib/constants.ts`:
```ts
export const COMPANY_ADDRESS = "South Florida, FL"; // TODO: Replace with actual address
```

---

## Site Structure

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/fleet-maintenance` | Fleet Maintenance Contracts |
| `/breakdown-membership` | Statewide Breakdown Membership |
| `/services` | All Services |
| `/contact` | Contact |
| `/areas` | Service Areas index |
| `/areas/miami` | Miami |
| `/areas/fort-lauderdale` | Fort Lauderdale |
| `/areas/pompano-beach` | Pompano Beach |
| `/areas/tampa` | Tampa |
| `/areas/orlando` | Orlando |
| `/areas/jacksonville` | Jacksonville |
| `/areas/naples` | Naples |
| `/areas/fort-myers` | Fort Myers |
| `/areas/sarasota` | Sarasota |
| `/areas/west-palm-beach` | West Palm Beach |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Robots file |

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | Phone number, company info, markets list, services data |
| `src/lib/cityData.ts` | City page copy, headlines, services, Unsplash images |
| `src/components/LeadCaptureForm.tsx` | Shared lead form (CRM hook goes here) |
| `src/components/Navigation.tsx` | Site header/nav |
| `src/components/Footer.tsx` | Footer |
| `src/components/CityPageTemplate.tsx` | Shared template for all 10 city pages |
| `src/app/layout.tsx` | Root layout — GA and CallRail placeholders here |
