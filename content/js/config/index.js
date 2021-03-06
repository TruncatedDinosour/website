"use strict";

const boot = document.getElementById("boot");
const max_username_len = 100;
const site_name = "ari-web";
const kernel_version = "1.0.0";
const boot_message = {
    0: {
        type: "ok",
        text: `Booting '${site_name}'...`,
        sleep_time: 0,
    },
};
const do_sleep = true;
const locations = {
    0: {
        url: "/git",
        desc: "The source code of this website",
        aliases: ["src", "source", "git", "github"],
    },

    1: {
        url: "/",
        desc: "The home page",
        aliases: ["home", "root", "index"],
    },

    2: {
        url: "/page/reset",
        desc: "Reset your account",
        aliases: ["reset", "erase", "del", "delete"],
    },

    3: {
        url: "/page/minimal.txt",
        desc: "The minimal page",
        aliases: ["mini", "minimal", "txt", "min"],
    },

    4: {
        url: "/page/blog",
        desc: "Blog page",
        aliases: ["blog", "news", "blogs", "articles"],
    },

    5: {
        url: "/dotfiles",
        desc: "My dotfiles-cleaned github repository",
        aliases: ["rice", "dotfiles", "dots", "dwm"],
    },

    6: {
        url: "/page/novpn",
        desc: "A page about how you shouldn't use VPNs",
        aliases: ["vpn", "novpn"],
    },

    7: {
        url: "/mp",
        desc: "My music playlist",
        aliases: ["music", "playlist"],
    },

    8: {
        url: "/tdotfiles",
        desc: "My dotfiles-termux github repository",
        aliases: ["trice", "tdotfiles", "tdots", "termux"],
    },

    9: {
        url: "/page/ttytheme",
        desc: "TTY theme generator",
        aliases: ["tty", "ttytheme", "ttheme", "tty-theme"],
    },

    10: {
        url: "/user",
        desc: "Ari-web comments",
        aliases: ["comment", "user", "usr", "chat"],
    },

    11: {
        url: "/api",
        desc: "Ari-web api(s)",
        aliases: ["api", "API"],
    },

    12: {
        url: "/page/amiunique",
        desc: "'Am I unique?' test",
        aliases: ["uniqueness", "unqtest", "unique", "unqquiz"],
    },
};
const escape_HTML = (str) =>
    str.replace(
        /[&<>'"]/g,
        (tag) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
            }[tag] || tag)
    );
