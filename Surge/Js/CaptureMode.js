!(async () => {
    let module = "MitM All Hostnames",
        panel = { title: module, icon: "tray.and.arrow.down.fill" },
        capture,
        mitmall,
        color1,
        color2,
    if (typeof $argument != "undefined") {
        let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
        if (arg.module) module = panel.title = arg.module;
        if (arg.title) panel.title = arg.title;
        if (arg.icon) panel.icon = arg.icon;
        if (arg.color1) color1 = arg.color1;
        if (arg.color2) color2 = arg.color2;
    }
    if ($trigger == "button") {
        capture = (await httpAPI("/v1/features/capture")).enabled;
        mitmall = (await httpAPI("/v1/modules")).enabled.includes(module);
        if (capture == mitmall)
            await httpAPI("/v1/features/capture", "POST", { enabled: !capture });
        let moduleBody = {};
        moduleBody[module] = !mitmall;
        await httpAPI("/v1/modules", "POST", moduleBody);
        await sleep(100);
    }
    capture = (await httpAPI("/v1/features/capture")).enabled;
    mitmall = (await httpAPI("/v1/modules")).enabled.includes(module);
    }
    if (capture && mitmall) panel["icon-color"] = color2 ? color2 : "#ff0000";
    else if (capture || mitmall) panel["icon-color"] = color2 ? color2 : "#ff0000";
    else color1 ? (panel["icon-color"] = color1) : "#efc56f";
    panel.content =
        `HTTP Capture: ${capture ? "enabled" : "disabled"}\n` +
        `${module}: ${mitmall ? "enabled" : "disabled"}`
    $done(panel);
})();

function httpAPI(path = "", method = "GET", body = null) {
    return new Promise((resolve) => {
        $httpAPI(method, path, body, (result) => {
            resolve(result);
        });
    });
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
