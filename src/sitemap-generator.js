require("@babel/register")({
    presets: ["@babel/preset-react"]
});

const router = require("./sitemap-routes").default;
console.log(router);
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://www.example.com")
            .save("./sitemap.xml")
    );
}

generateSitemap();
