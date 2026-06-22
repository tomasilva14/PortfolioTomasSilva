MongoDB seed for PortfolioPRO

Setup

- Copy `.env.example` to `.env` and set `MONGODB_URI` (or use MongoDB Atlas).
- Install dependencies and run the seed:

```bash
cd api
npm install
npm run seed
```

Notes

- The script creates collections: `projects`, `skillblocks`, `journeysteps`, `contactsettings` and populates them with the site content present in `frontend/lib/i18n.ts`.
- Update `seed.js` if you want to change the initial data.
