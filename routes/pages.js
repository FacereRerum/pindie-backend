const pagesRouter = require("express").Router();

pagesRouter.get("/admin/**", sendDashboard);