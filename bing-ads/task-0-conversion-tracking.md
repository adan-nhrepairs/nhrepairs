# TASK 0 — CONVERSION TRACKING SETUP
## NH Repairs | Microsoft Bing Ads | RV Repair Campaign

> **NON-NEGOTIABLE: Complete all steps in this document before launching any campaigns or spending any budget.**

---

## STEP 1 — Install the Microsoft UET (Universal Event Tracking) Tag

### What it does
The UET tag fires on every page of your website and lets Microsoft Ads track user behavior, conversions, and audiences. It must be installed site-wide.

### How to get your UET tag

1. Log into **Microsoft Advertising** at ads.microsoft.com
2. Navigate to **Tools → UET Tag**
3. Click **Create UET Tag**
4. Name it: `NH Repairs - nhrepairs.com`
5. Click **Save**
6. Microsoft will generate a JavaScript snippet that looks like this:

```html
<!-- Microsoft UET Tag -->
<script>
  (function(w,d,t,r,u){
    var f,n,i;
    w[u]=w[u]||[],f=function(){var o={ti:"YOUR_TAG_ID_HERE"};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},
    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
    var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onreadystatechange=null)},
    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
  })(window,document,"script","//bat.bing.com/bat.js","uetq");
</script>
<noscript>
  <img src="//bat.bing.com/action/0?ti=YOUR_TAG_ID_HERE&Ver=2" height="0" width="0" style="display:none; visibility:hidden;" />
</noscript>
```

### How to install it on nhrepairs.com

**Option A — Direct HTML (if you manage the site yourself):**
- Paste the UET tag snippet into the `<head>` section of every page, just before `</head>`
- Do this on every page: home, contact, services, about — all of them

**Option B — Google Tag Manager (recommended if GTM is already installed):**
1. Open **Google Tag Manager**
2. Click **Tags → New**
3. Tag Type: **Microsoft Advertising UET**
4. Enter your UET Tag ID
5. Trigger: **All Pages**
6. Save and **Publish**

### Verify the tag is firing
1. Install the **Microsoft Clarity Tag Helper** Chrome extension, or use the **UET Tag Helper** Chrome extension from the Microsoft Advertising store
2. Visit nhrepairs.com in Chrome
3. The extension should show a green checkmark and your Tag ID
4. In Microsoft Ads: go to **Tools → UET Tag → Tag Status** — status should show **Active** within 24 hours of installation

---

## STEP 2 — Set Up Call Extension with Call Tracking (Microsoft Forwarding Number)

### What it does
Microsoft Ads provides a unique forwarding phone number that displays in your ads. When someone calls that number, Microsoft records it as a conversion and routes the call to your real number.

### Setup steps

1. In Microsoft Ads, go to **Campaigns → Ads & Extensions → Extensions**
2. Click **+ Create Extension → Call Extension**
3. Fill in:
   - **Phone Number:** Your real shop number (the forwarding number will be assigned by Microsoft)
   - **Country/Region:** United States
   - Check **"Use a Microsoft Forwarding Number"** — this is critical for call tracking
   - **Call Reporting:** Enable
   - **Count Calls:** Select **"Calls of at least 60 seconds"** (filters out wrong numbers and robocalls)
4. Apply to: **All Campaigns** (then also at the individual campaign level for RV Repair campaign)
5. Click **Save**

### Microsoft Forwarding Number notes
- Microsoft will assign a local or toll-free number that forward to your real line
- Callers will see the forwarding number in the ad but your phone will ring normally
- You do NOT pay extra for call forwarding
- Call data appears in **Reports → Call Forwarding Detail Report**

---

## STEP 3 — Set Phone Calls as Primary Conversion Goal

### Create a "Phone Call" conversion goal

1. Go to **Tools → Conversion Goals**
2. Click **+ Create Conversion Goal**
3. Select goal type: **Phone Calls**
4. Sub-type: **Calls from ads** (this tracks calls via your Microsoft forwarding number)
5. Fill in:
   - **Goal Name:** `RV Repair - Inbound Call`
   - **Count:** Every (count every call, not just unique)
   - **Call Duration:** 60 seconds minimum (filters junk calls)
   - **Conversion Window:** 30 days
   - **Revenue:** Leave blank or set $0 (you're optimizing for volume, not revenue value)
6. **Goal Category:** Lead
7. Click **Save**

### Set as Primary Conversion
1. After saving, find the goal in your Conversion Goals list
2. Click the goal → **Edit**
3. Under **Include in Conversions**, set to **Yes**
4. This makes it the primary metric that drives your bidding algorithm

### Also create a secondary "Website Call" goal (for calls from your website, not the ad directly)
1. Create another Conversion Goal
2. Type: **Phone Calls → Calls to a phone number on your website**
3. This requires inserting a small JavaScript snippet on your site that replaces your phone number dynamically with a tracking number
4. Name it: `RV Repair - Website Call`
5. Set Include in Conversions: **Yes** (treat both as conversions)

---

## STEP 4 — Verify Calls Are Being Tracked Before Spending Budget

### Pre-launch verification checklist

| Check | How to Verify | Status |
|-------|--------------|--------|
| UET tag installed | UET Tag Helper Chrome extension shows green | ☐ |
| UET tag status | Microsoft Ads > Tools > UET Tag shows "Active" | ☐ |
| Conversion goal created | Tools > Conversion Goals shows goal listed | ☐ |
| Call extension live | Campaigns > Extensions shows call extension | ☐ |
| Forwarding number assigned | Extension shows Microsoft forwarding number | ☐ |
| Test call made | Call the forwarding number from a mobile phone | ☐ |
| Call appears in reports | Reports > Call Forwarding Detail Report shows call | ☐ |

### How to do a test call
1. Copy the Microsoft forwarding number from your Call Extension
2. Call it from a cell phone — let it ring through to your shop
3. Stay on for at least 60 seconds (your minimum call duration threshold)
4. Wait 2–3 hours
5. Go to **Reports → Call Forwarding Detail Report** — your test call should appear
6. Also check **Tools → Conversion Goals** — conversion count should increment

**Do not launch campaigns until the test call appears in reports.**

---

## STEP 5 — Connect Microsoft Ads to Google Analytics 4 (GA4)

### Why do this
GA4 will let you see Bing traffic alongside other channels, track session behavior from Bing visitors, and have cross-platform attribution even though calls (not clicks) are your primary conversion.

### Method 1 — Auto-tagging (simplest, recommended)

1. In Microsoft Ads, go to **Settings → Account Settings**
2. Find **Auto-Tagging**
3. Enable: **"Tag my destination URLs with a Microsoft Ads tag (msclkid)"**
4. Also enable: **"Allow Microsoft Ads to update my URLs to enable tracking"**
5. This adds `?msclkid=` parameters to your URLs automatically

In GA4:
1. Go to **Admin → Data Streams → nhrepairs.com stream**
2. Click **Configure Tag Settings → Show All**
3. Google Analytics will automatically recognize `msclkid` parameters and attribute sessions to **Paid Search / Microsoft Ads**

### Method 2 — Manual UTM Parameters (more control, required if auto-tagging conflicts with other tools)

Add these UTM parameters to your Final URL in all Microsoft Ads:

```
https://nhrepairs.com/?utm_source=bing&utm_medium=cpc&utm_campaign={CampaignName}&utm_content={AdGroupName}&utm_term={keyword}
```

In Microsoft Ads, use the Final URL suffix field (under campaign or account settings):
```
utm_source=bing&utm_medium=cpc&utm_campaign={CampaignName}&utm_adgroup={AdGroupName}&utm_term={keyword}
```

### Verify in GA4
1. After enabling, wait 24–48 hours after your first Bing click
2. In GA4: **Reports → Acquisition → Traffic Acquisition**
3. You should see **Paid Search** channel with Bing/Microsoft sessions
4. Or filter by source: `bing` or `microsoft`

### Import Conversions from GA4 into Microsoft Ads (optional but useful)
1. In Microsoft Ads: **Tools → Conversion Goals → Import from Google Analytics**
2. Connect your Google account
3. Import the GA4 goals that map to calls or contact events
4. This gives you a secondary verification layer for conversion data

---

## TASK 0 COMPLETION GATE

Before proceeding to Task 1 (campaign build), all of the following must be true:

- [ ] UET tag is **Active** in Microsoft Ads (not just "Unverified")
- [ ] Call Extension is live with a **Microsoft forwarding number** assigned
- [ ] Conversion goal `RV Repair - Inbound Call` is created and set as primary
- [ ] Test call made to forwarding number, stayed on 60+ seconds
- [ ] Test call appears in **Call Forwarding Detail Report**
- [ ] GA4 is receiving Bing traffic (verify after first live click, post-launch)

**Only proceed to campaign launch after this checklist is complete.**
