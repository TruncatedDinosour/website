"use strict";

var root = false;
var not_return = false;

add_boot_entry(boot_message);

async function main() {
    let is_logged_in =
        localStorage.getItem("username") && localStorage.getItem("password");

    let tmp_boot_entries = {
        0: {
            type: "error",
            text: "No user account found",
        },
        1: {
            type: "warning",
            text: "Creating account",
            sleep_time: 500,
        },
        3: {
            type: "ok",
            text: `Found user account: <b>${
                localStorage.getItem("username")
                    ? escape_HTML(localStorage.getItem("username"))
                    : ""
            }</b>`,
        },
        4: {
            type: "ok",
            text: "Loading HTML",
        },
        5: {
            type: "ok",
            text: "Loading a basic shell",
        },
        6: {
            type: "ok",
            text: `'${site_name}' has been booted! Type <b>help</b> for help.`,
        },
        7: {
            type: "error",
            text: 'A fatal error has occured, report it <a href="/git">here</a>',
            sleep_time: 0,
        },
        8: {
            type: "warning",
            text: '<a href="https://blog.ari-web.xyz/b/important--impersonation-of-me-on-the-internet/">Currently there has been a lot of impersonating happening! Be careful!</a>',
            sleep_time: 1000,
        },
    };

    await add_boot_entry({ 0: tmp_boot_entries[8] });

    if (!is_logged_in) {
        await add_boot_entry({
            0: tmp_boot_entries[0],
            1: tmp_boot_entries[1],
        });
        await sleep(500);
        await user_account_create().catch(async (e) => {
            window.localStorage.clear();
            let boot_error = {
                type: "error",
                text: e,
                sleep_time: 0,
            };

            await add_boot_entry({ 0: boot_error, 1: tmp_boot_entries[7] });
            not_return = true;
        });

        if (!not_return) window.location.reload();
    } else {
        if (
            window.localStorage.username.length > max_username_len ||
            !window.localStorage.username
        ) {
            window.localStorage.username = pprompt(
                `Invalid username found, change it (must be between 1 and ${max_username_len} characters)`
            );

            window.location.reload();
        }

        await add_boot_entry({
            0: tmp_boot_entries[3],
        });
        await add_boot_entry({
            0: tmp_boot_entries[4],
            1: tmp_boot_entries[5],
            2: tmp_boot_entries[6],
        });

        document.getElementById("shell").style.display = "block";
        document.getElementById("prompt").focus();
    }
}

document.addEventListener("DOMContentLoaded", main);
