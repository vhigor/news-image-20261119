[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/vhigor/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/vhigor/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The Daily Globe — 19 November 2026

One dense image summing up the world news of Thursday 19 November 2026,
drawn as a newspaper front page — **50 sourced stories**, a **UTC timeline**
of the day, and a visible **date check**:

- **Trump, Xi and Putin meet in Shenzhen** — first-ever three-way summit;
  a four-point joint declaration and a pledge that "a nuclear war cannot
  be won and must never be fought".
- **ICJ: Myanmar committed genocide** — 9–6 ruling on the 2017 Rohingya
  crackdown; ~10,000 killed.
- **Kerch Bridge hit a third time** — Neptune missiles damage the rail
  span; trains halt.
- **Houthi missile damages PIF Tower** — windows blown out across several
  floors of Riyadh's 80-storey wealth-fund HQ.
- **Anthropic's record $81.3bn IPO** — priced at $83; Nasdaq debut opens
  at $111.50, closes $97.17.
- **GTA VI goes on sale after 13 years** — Rockstar's epic launches on
  PS5 and Xbox Series X|S.

Plus 44 more, across war, diplomacy, U.S. politics, tech and markets,
health, sport and culture — every story numbered and sourced on the page.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the finished front page to
`/output/entry.png`, deterministically, and verifies the copy by size, sha256
and PNG signature.

## Sources

Reuters, AP, AFP, NYT, WSJ, BBC, Bloomberg, CNBC, Yonhap, Euronews, ABC,
Politico, Axios, The Hill, IAEA, IMF, NASA, WHO, UN, ICJ, IMD — all stories
dated 19 November 2026, researched 20 November 2026.

## Verification

Every headline on the page was checked against the day's reporting on
20 November 2026 before it went in:

- The lead stories were checked against Reuters, AP and primary reporting:
  the Shenzhen trilateral (first-ever three-way summit, four-point joint
  declaration), the ICJ genocide ruling (9–6, ~10,000 killed), the third
  Kerch Bridge strike in four days (Neptune missiles, rail halted), the
  Houthi strike on Riyadh's PIF Tower (80 storeys, windows out, no
  injuries), and the Anthropic IPO ($81.3bn at $83; open $111.50, close
  $97.17).
- A $2tn Anthropic valuation claim was dropped: the prospectus shows
  $1.47tn at the $111.50 open, not $2tn.
- Items first reported on 17–18 November were dropped as stale for
  19 November: the Alaska Senate call, the measles elimination ruling,
  the Waymo freeway halt, and the Qeshm / Kuwait / Bahrain strikes (all
  covered in the 18 November edition of this paper).
- The Alcaraz–Medvedev match was played 18 November; the 19 November
  news is the hamstring MRI, and the item says so.
- The "Iran exploring chemical weapons" claim was dropped: no public
  evidence supports it.

## Stories dropped (from the 65 in the research brief)

- Qeshm / Kuwait / Bahrain strikes — 17–18 November, not the 19th.
- Alaska Senate call, measles status, Waymo halt — 17–18 November.
- "Iran exploring chemical weapons" — disputed, unverified.
- Pew projection, Alzheimer's studies, solar flare, cheese award —
  not the day's news.

Referral code: `p26b6feq`
