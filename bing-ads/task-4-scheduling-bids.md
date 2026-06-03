# TASK 4 — AD SCHEDULING & BID ADJUSTMENTS
## NH Repairs | RV Repair — Phone Call Volume

---

## PART A — DAY-PARTING SCHEDULE

### Strategic logic for South Florida RV repair callers

RV owners who need repair generally fall into two categories:
1. **Traveling RVers** — discovered a problem while on the road, need help now, high urgency, likely to call immediately from a mobile search
2. **Local RV owners** — noticed something wrong with their parked unit, planning ahead, may call during business hours

Both groups are most likely to call during business hours when they know a shop is open. Late-night or early-morning searches happen, but call conversion rates drop significantly outside shop hours.

**NH Repairs hours assumption:** Monday–Friday 8am–5pm, Saturday 8am–2pm (adjust if different)

---

### Recommended Ad Schedule

| Day | Time Block | Bid Modifier | Reasoning |
|-----|-----------|-------------|-----------|
| Monday | 7:00 AM – 9:00 AM | +15% | Post-weekend RV owners calling first thing |
| Monday | 9:00 AM – 5:00 PM | +20% | Peak shop hours, high call intent |
| Monday | 5:00 PM – 7:00 PM | +5% | After-hours calls still convert, lower volume |
| Monday | 7:00 PM – 12:00 AM | -50% | Very low call conversion after hours |
| Monday | 12:00 AM – 7:00 AM | -100% (off) | Shop closed, waste of budget |
| Tuesday | 7:00 AM – 9:00 AM | +10% | |
| Tuesday | 9:00 AM – 5:00 PM | +20% | Core hours |
| Tuesday | 5:00 PM – 7:00 PM | +5% | |
| Tuesday | 7:00 PM – 12:00 AM | -50% | |
| Tuesday | 12:00 AM – 7:00 AM | -100% (off) | |
| Wednesday | 7:00 AM – 9:00 AM | +10% | |
| Wednesday | 9:00 AM – 5:00 PM | +20% | Core hours |
| Wednesday | 5:00 PM – 7:00 PM | +5% | |
| Wednesday | 7:00 PM – 12:00 AM | -50% | |
| Wednesday | 12:00 AM – 7:00 AM | -100% (off) | |
| Thursday | 7:00 AM – 9:00 AM | +10% | |
| Thursday | 9:00 AM – 5:00 PM | +20% | Core hours |
| Thursday | 5:00 PM – 7:00 PM | +5% | |
| Thursday | 7:00 PM – 12:00 AM | -50% | |
| Thursday | 12:00 AM – 7:00 AM | -100% (off) | |
| Friday | 7:00 AM – 9:00 AM | +15% | Pre-weekend urgency — RVers prepping for trips |
| Friday | 9:00 AM – 5:00 PM | +25% | Highest urgency day — people want repairs done before weekend |
| Friday | 5:00 PM – 7:00 PM | +10% | Last chance before weekend |
| Friday | 7:00 PM – 12:00 AM | -40% | |
| Friday | 12:00 AM – 7:00 AM | -100% (off) | |
| Saturday | 7:00 AM – 9:00 AM | +20% | High RV activity day — traveler emergency calls |
| Saturday | 9:00 AM – 2:00 PM | +25% | Peak RV travel day, high urgency callers |
| Saturday | 2:00 PM – 6:00 PM | -30% | Shop closing, lower conversion |
| Saturday | 6:00 PM – 12:00 AM | -60% | |
| Saturday | 12:00 AM – 7:00 AM | -100% (off) | |
| Sunday | 7:00 AM – 9:00 AM | +15% | RVers hitting the road, discovering problems |
| Sunday | 9:00 AM – 12:00 PM | +10% | Some calls still convert for Monday scheduling |
| Sunday | 12:00 PM – 12:00 AM | -70% | Sharp drop if shop is closed Sundays |
| Sunday | 12:00 AM – 7:00 AM | -100% (off) | |

> **If NH Repairs is closed on Sundays:** Set Sunday entirely to -100% (no ads). Budget wasted on calls you can't answer converts at near 0%.

> **If you have voicemail or an answering service that captures Sunday calls:** Keep Sunday 9AM–12PM at 0% (no modifier) and monitor conversion quality.

---

### How to set ad scheduling in Microsoft Ads

1. Go to **Campaigns → [RV Repair Campaign] → Settings**
2. Scroll to **Ad Scheduling**
3. Click **Edit Schedule**
4. Add each time block and modifier
5. Save

Or use **Microsoft Ads Editor:**
- Select campaign → Ad Schedule tab → Add custom schedule

---

## PART B — DEVICE BID ADJUSTMENTS

### Bing/Microsoft RV audience device profile

The Microsoft Ads user base skews older (35–65+) compared to Google. RV owners in this demographic are more likely to be using desktop or tablet devices, especially when planning or researching. However, **travelers with a broken motorhome will always search on mobile** — that's your highest-intent segment.

### Recommended Device Bid Modifiers

| Device | Bid Modifier | Reasoning |
|--------|-------------|-----------|
| Mobile (Smartphone) | +25% | Highest urgency segment — stranded travelers search on phone and call immediately. Your call-only ads show only on mobile. |
| Desktop | 0% (baseline) | Core Bing audience. Research and planning intent. Good for RSAs with call extensions. |
| Tablet | -15% | Lower call conversion rate. Older Bing users on tablets are browsing, less likely to call immediately. |

### How to set device bid adjustments

1. Go to **Campaigns → [RV Repair Campaign]**
2. Click **Device** tab in the left menu
3. Set bid modifiers for each device type
4. Save

> **Revisit after 30 days:** Pull a device performance report. If mobile is driving 50%+ of calls, increase mobile modifier to +35–40%. If desktop is converting well via call extension clicks, leave at 0%.

---

## PART C — GEOGRAPHIC BID ADJUSTMENTS (Within Broward + Miami-Dade)

### Logic

Not all zip codes and cities in Broward/Miami-Dade are equally valuable for RV repair leads. RV ownership and travel corridors in South Florida cluster in certain areas.

### High-value geographic targets (bid up)

| Area | Why | Suggested Modifier |
|------|-----|--------------------|
| Pompano Beach (your location) | Highest proximity to shop | +20% |
| Fort Lauderdale | Dense metro, major I-95 corridor | +15% |
| Deerfield Beach | Adjacent to shop, RV-friendly area | +15% |
| Boca Raton (northern border) | High disposable income, RV ownership | +10% |
| Hollywood | South Broward, I-95 travelers | +10% |
| Hallandale Beach | Proximity, active travel corridor | +10% |
| Coral Springs / Margate | Inland Broward, residential RV owners | +5% |
| Miami (Dade metro core) | High volume, longer drive to shop | 0% (baseline) |
| Aventura / North Miami Beach | I-95 corridor, capture northbound travelers | +5% |
| Homestead / Kendall | Far south Dade, lower likely conversion | -10% |

### How to set geographic bid adjustments

1. Go to **Campaigns → [RV Repair Campaign] → Location**
2. Your campaign targets Broward County + Miami-Dade County
3. To add city-level modifiers: Click **Add location** → Search for the city → Set bid modifier
4. Microsoft Ads allows targeting by city, DMA, or radius
5. **Radius targeting option (alternative):** Set a 30-mile radius around 2221 NW 22nd St, Pompano Beach FL with full bid, then add Miami-Dade separately with a -10% modifier to account for the longer drive

### Radius targeting setup (recommended alternative)

1. Remove county-level targeting
2. Click **Add location → Radius**
3. Enter: `2221 NW 22nd St, Pompano Beach, FL 33069`
4. Set radius: **35 miles**
5. This naturally covers all of Broward and most of Miami-Dade
6. Apply no modifier (100% = full bid) for the core 20-mile radius
7. Optional: Add a second 35-mile radius with -10% for the outer ring

---

## PART D — BIDDING STRATEGY TIMELINE

### Phase 1 — Days 1–30: Maximize Clicks
- **Goal:** Gather impression and click data, identify which keywords and ad groups drive traffic
- **Monitor:** Cost per click trends, search term quality, ad group volume distribution
- **Budget:** Full $1,000/month ($33.33/day)
- **Action at end of Phase 1:** If you have 30+ confirmed calls, move to Phase 2

### Phase 2 — Days 31–60: Target CPA
- **Trigger:** 30 confirmed calls from the campaign
- **Initial Target CPA:** Set at 150% of your observed CPL from Phase 1 (gives the algorithm room)
- **Example:** If Phase 1 CPL was $40/call, set Target CPA at $60 initially
- **Goal:** Let the algorithm optimize toward call conversions while you narrow it down
- **Adjust:** Drop Target CPA by $5 every 2 weeks if call volume holds

### Phase 3 — Days 61–90: Optimize & Decide
- **Review:** Search term reports, device reports, time-of-day reports
- **Pause:** Any keyword with 10+ clicks and 0 calls
- **Scale:** Any keyword delivering calls under $35 CPL — increase bids
- **Decision:** See 90-Day Test Framework (separate document)

---

## BUDGET PACING NOTES

Microsoft Ads defaults to **Standard delivery** (spreads budget throughout the day). Keep this setting — Accelerated delivery will blow through $33/day by noon and miss afternoon calls.

If you notice budget consistently exhausting before 3pm, consider:
1. Reducing bids on lowest-converting time blocks
2. Slightly tightening geographic targeting
3. Adding more negatives to reduce irrelevant clicks
