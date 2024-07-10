module.exports = {
    user: "top5sidehustles_karol",
    password: "1234",
    host: "top5sidehustles.bplaced.net",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/projekt", // Adjust this path accordingly
    include: ["*", "**/*"],
    deleteRemote: false, // Optional, if you want to remove files that are not in the localRoot
    forcePasv: true // Passive mode is needed for some servers
};
