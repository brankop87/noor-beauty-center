This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Bezbednost i održavanje

**Poslednje ažuriranje:** 2026-10-04

Bezbednosni prolaz (isti standard kao petkovicsolutions.com):
- **5 bezbednosnih HTTP headera** u `next.config.ts` — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Ne menjaju izgled ni rad; potvrđeno na running serveru.
- **`next` 16.2.0 → 16.3.8** — gasi **KRITIČNU** ranjivost u next-u + postcss + sharp. Minorni bump; build i TypeScript prolaze.
- **`npm audit fix`** (bez `--force`) — zakrpljeni build-alati.
- **Rezultat: ranjivosti 16 → 5.**

Preostalih 5 su **svesno ostavljene** — sve u lancu `eslint-config-next → @next/eslint-plugin-next → fast-glob → braces` (DEV-only lint alat, nedostupno posetiocu). Jedini „fix" je `--force` koji downgrade-uje `eslint-config-next` na v14 (pogrešno) — zato se ne dira.

**Površina napada je minimalna:** nema API ruta, nema forme, nema env tajni — čist statički marketing sajt + `proxy.ts` (geo SR/EN preusmeravanje). `.env*` je u `.gitignore`.

**Posle deploya:** proveriti živi domen na securityheaders.com (cilj A).

### Lokalni build (Windows — Node 24 CA bug)
Node 24 na ovoj mašini ruši HTTPS u build-u (fontovi). Zaobilaznica:
```bash
NODE_OPTIONS="--no-use-system-ca" npm run dev
NODE_OPTIONS="--no-use-system-ca" npm run build
```
