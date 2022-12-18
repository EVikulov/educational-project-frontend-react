require("@babel/register")({
    presets: ["@babel/preset-react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("http://localhost:8080")
            .save("./sitemap.xml")
    );
}

generateSitemap();
