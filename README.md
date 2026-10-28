# Brain.exe
Next.js (App Router) + TypeScript + Tailwind. Deploy: push to GitHub, import in Vercel, set `NEXT_PUBLIC_SITE_URL=https://your-domain`.
Then enable **Web Analytics** and **Speed Insights** in the Vercel project dashboard, and verify the domain in Google Search Console (submit `/sitemap.xml`).

## Analytics definitions
- **Page view**: one page load (a refresh counts again).
- **Session/visit**: a group of views by one browser in a time window.
- **Unique visitor**: a privacy-friendly estimate from Vercel (no cookies); it is not a count of real people.
Custom events (`game_start`, `game_complete`, `daily_participation`, `share_click`, `replay`) need a Vercel plan that supports custom events; the page still works without them.

## Known limits
- Question data ships in the client bundle, so the daily answers are technically inspectable. Any real leaderboard must validate server-side.
- No public visitor counter or leaderboard is included; nothing is fabricated.
- Expand each SEO page with more unique content before launch.
