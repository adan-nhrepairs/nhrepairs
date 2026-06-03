# 90-DAY TEST FRAMEWORK
## NH Repairs | Microsoft Bing Ads | RV Repair — Phone Call Volume

---

## THE CORE QUESTION THIS TEST ANSWERS

> "Can Microsoft Bing Ads deliver inbound RV repair calls at a cost per lead that makes the channel economically viable for NH Repairs in South Florida?"

Every metric below exists to answer that question with a clear yes or no by Day 90.

---

## SUCCESS METRICS

### Primary Metric: Cost Per Call (CPL)

| Threshold | CPL Range | Interpretation |
|-----------|-----------|----------------|
| Excellent | < $30/call | Scale aggressively |
| Viable | $30 – $55/call | Continue and optimize |
| Marginal | $55 – $80/call | Pause and audit before spending more |
| Not viable | > $80/call | Pause, shift budget |

**Why these thresholds:**
- Average RV repair ticket at NH Repairs is likely $400–$1,500+
- If 30% of calls become jobs, a $55 CPL means ~$183 cost per booked job — acceptable for high-ticket repairs
- At $80 CPL with 30% conversion: ~$267 per job — borderline for $400 jobs, fine for $1,000+ jobs
- Track your actual close rate on inbound calls to sharpen these numbers

### Secondary Metric: Call Volume Rate

| Period | Minimum Calls | Recommended Calls | Scale Trigger |
|--------|--------------|------------------|---------------|
| Day 30 | 15 calls | 25+ calls | |
| Day 60 | 35 calls cumulative | 55+ calls cumulative | |
| Day 90 | 60 calls cumulative | 90+ calls cumulative | Scale if CPL < $55 |

> If you're below the minimum threshold at any checkpoint, the channel is underperforming and warrants investigation before continuing spend.

---

## DAY 30 CHECKPOINT

### Data you will have:
- Total spend: ~$1,000
- Total clicks generated
- Total confirmed calls (60+ seconds)
- Calls by ad group
- Calls by device (mobile vs desktop)
- Calls by day-of-week and time-of-day

### Day 30 questions to answer:

**1. Is call tracking working correctly?**
- Are calls appearing in Microsoft Ads reports AND in Call Forwarding Detail Report?
- Does call count match what your team is actually fielding?
- If tracking is off — fix it before drawing any conclusions

**2. Which ad groups are delivering calls?**
- Identify top 1–2 performing ad groups (lowest CPL, most calls)
- Identify bottom 1–2 performers (zero or 1 calls with significant spend)

**3. What is the observed CPL?**
- Formula: Total Spend ÷ Total Confirmed Calls = CPL
- If CPL is above $80 at Day 30 with 15+ calls, it's an early red flag — investigate search terms immediately

**Day 30 actions:**
- [ ] Pull Search Term Report — add new negatives for any irrelevant queries
- [ ] Pause any ad group with 0 calls and $100+ spend (reallocate budget)
- [ ] Pause any keyword with 15+ clicks and 0 calls
- [ ] Increase bids by 15% on ad groups with 3+ calls
- [ ] If you have 30+ calls: Switch bidding to Target CPA (see Phase 2 below)

---

## BIDDING STRATEGY SWITCH: MAXIMIZE CLICKS → TARGET CPA

### When to switch:
**Trigger:** 30 confirmed calls in the campaign

**How to calculate your initial Target CPA:**
1. Calculate your observed CPL from Phase 1 (Maximize Clicks)
2. Multiply by 1.5 — this is your starting Target CPA
3. Example: If Phase 1 CPL was $45/call → set Target CPA at $67.50 (round to $68)

**Why 1.5x?**
The Target CPA algorithm needs room to learn. Setting it too tight at the start causes under-delivery. Give it breathing room for 2 weeks, then tighten.

**How to switch in Microsoft Ads:**
1. Go to **Campaigns → [Campaign] → Settings**
2. Under **Bid Strategy**, change from **Maximize Clicks** to **Target CPA**
3. Enter your calculated Target CPA
4. Save

**Tightening schedule:**
| Week | Target CPA Action |
|------|------------------|
| Weeks 5–6 | Set initial Target CPA at 1.5x observed CPL |
| Weeks 7–8 | Reduce Target CPA by $5 if call volume holds |
| Weeks 9–10 | Reduce another $5 if call volume holds |
| Weeks 11–12 | Reduce to your target CPL if within range |

---

## DAY 60 CHECKPOINT

### Data you will have:
- 2 months of spend (~$2,000)
- Full picture of which keywords convert
- Device performance split
- Time-of-day conversion data
- Multiple weeks of Target CPA bidding (if switched at Day 30)

### Day 60 questions to answer:

**1. Is call volume on track?**
- Minimum: 35 cumulative calls
- If below 35: Budget may be insufficient, competition may be too high, or targeting too narrow

**2. Has CPL improved from Month 1 to Month 2?**
- Target CPA bidding should improve CPL by 10–25% vs. Maximize Clicks
- If CPL has not improved under Target CPA, investigate algorithm learning period

**3. What is the call quality?**
- How many calls are converting to actual repair jobs?
- What is the average ticket size of Bing-sourced jobs?
- Calculate: Revenue per Bing call = (jobs closed / calls received) × average ticket

**4. Which times and devices are converting?**
- Pull Time of Day and Device reports
- Adjust bid modifiers based on actual data (not just the assumptions from Task 4)

**Day 60 actions:**
- [ ] Pause all keywords with 20+ clicks and 0 calls
- [ ] Increase bids on keywords delivering 2+ calls at or below CPL target
- [ ] Add 20+ new negatives from 60 days of search term reports
- [ ] Adjust device modifiers based on actual call data
- [ ] Adjust day-parting based on actual call time-of-day data
- [ ] Consider adding a 7th ad group if a keyword theme is performing but under-resourced

---

## DAY 90 CHECKPOINT — THE GO/NO-GO DECISION

### The final numbers you need:

| Metric | Your Number | Benchmark |
|--------|------------|-----------|
| Total calls (90 days) | | Min 60 / Target 90 |
| Total spend | | ~$3,000 |
| Cost per call (CPL) | | Target < $55 |
| Call-to-job close rate | | Measure this |
| Revenue from Bing calls | | Calculate |
| Cost per booked job | | CPL ÷ close rate |
| ROI (Revenue / Spend) | | Target > 3:1 |

---

## DAY 90 DECISION FRAMEWORK

### Decision 1: SCALE BING

**Criteria to scale:**
- CPL is consistently below $45/call in Month 3
- Call volume is 30+ calls/month
- Call-to-job close rate is 25%+
- No major data quality issues

**What scaling looks like:**
- Increase budget to $1,500–$2,000/month
- Add long-tail keyword variations discovered in search term reports
- Test display remarketing to site visitors (exclude converts)
- Add Microsoft Audience Network campaigns (native ads)
- Consider adding a Location Extension and Structured Snippet extensions

---

### Decision 2: SHIFT BUDGET TO GOOGLE

**Criteria to shift:**
- Bing CPL is consistently above $70/call
- Call volume never exceeded 15/month despite optimization
- Search term reports show high irrelevancy rate

**What shifting looks like:**
- Pause Bing campaign (don't delete — you may return)
- Launch Google Search Ads with the same campaign structure (built from these files)
- Google typically has higher volume but higher CPCs in auto/repair verticals
- The Bing test gives you a conversion baseline to benchmark Google against

---

### Decision 3: RUN BOTH

**Criteria to run both:**
- Bing CPL is in the viable range ($30–$55)
- But call volume is lower than desired (15–25/month vs 30 target)
- You want more total call volume even if it costs more

**What running both looks like:**
- Keep Bing at $1,000/month
- Add Google at $1,000–$1,500/month
- Use different UTM parameters to isolate each platform's calls
- Compare CPL and call quality between platforms monthly
- After 60 days on both: allocate more budget to whichever delivers lower CPL with acceptable volume

---

### Decision 4: PAUSE EVERYTHING — AUDIT FIRST

**Criteria to pause:**
- Call tracking was never properly verified
- CPL is above $100 with no improvement trend
- Spending consistently maxes out but call volume is near zero
- Something fundamental is broken (tracking, ads, keywords)

**Audit checklist:**
- [ ] Verify call tracking in Call Forwarding Detail Report
- [ ] Pull Search Term Report — is traffic on target?
- [ ] Check Ad approval status — are all ads approved?
- [ ] Check conversion goal settings — is minimum duration too high?
- [ ] Check if Microsoft forwarding number is routing correctly
- [ ] Verify geographic targeting is Broward + Miami-Dade (not all US)

---

## REPORTING CADENCE

| Frequency | What to Review | Tool |
|-----------|---------------|------|
| Daily (first 30 days) | Spend pacing, impressions, clicks | Microsoft Ads dashboard |
| Weekly | Search term report, call volume | Reports tab |
| Bi-weekly | CPL by ad group, keyword performance | Custom reports |
| Monthly | Full performance review, bid adjustments | Compiled report |
| Day 30, 60, 90 | Checkpoint decisions per above | This document |

---

## CALL QUALITY TRACKING (MANUAL LOG)

Microsoft Ads tracks that a call happened and how long it lasted. It cannot tell you what the call was about or if it converted to a job. You need to track this manually.

**Simple call tracking log (keep in a Google Sheet):**

| Date | Time | Duration | Lead Type | Motorhome Class | Problem | Job Booked? | Ticket Size |
|------|------|----------|-----------|----------------|---------|-------------|-------------|
| | | | RV repair inquiry / wrong number / repeat customer | A / B / C | AC / Brake / etc. | Y / N | $ |

**Review this log at each 30-day checkpoint.** It will tell you:
- Call quality (are these real RV repair prospects?)
- Close rate on Bing-sourced calls
- Revenue attributable to Bing
- True ROI of the channel

---

## NORTH STAR METRICS SUMMARY

| Metric | Target | Red Flag |
|--------|--------|---------|
| Cost per call | < $55 | > $80 |
| Calls / month (steady state) | 30+ | < 15 |
| Call-to-job close rate | 25%+ | < 15% |
| Search term irrelevancy rate | < 10% | > 25% |
| Budget utilization | 85–100% | < 50% or consistently 100% by noon |
| Target CPA switch | Day 30 (after 30 calls) | Never had enough calls to switch |
