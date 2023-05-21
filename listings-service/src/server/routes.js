import { Listing } from "#root/db/models";

const setupRoutes = app => { // app.get should have the async keyword fot the await keyword to work
    app.get("/listings", async (req, res, next) => {
        const listings = await Listing.findAll();
        return res.json(listings);
        //return res.json({ message: "REAL MADRID Campeón por siempre" });
    });
};

export default setupRoutes;